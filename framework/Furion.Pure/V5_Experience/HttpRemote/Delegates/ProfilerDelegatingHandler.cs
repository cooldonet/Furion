﻿// ------------------------------------------------------------------------
// 版权信息
// 版权归百小僧及百签科技（广东）有限公司所有。
// 所有权利保留。
// 官方网站：https://baiqian.com
//
// 许可证信息
// Furion 项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。
// 许可证的完整文本可以在源代码树根目录中的 LICENSE-APACHE 和 LICENSE-MIT 文件中找到。
// 官方网站：https://furion.net
//
// 使用条款
// 使用本代码应遵守相关法律法规和许可证的要求。
//
// 免责声明
// 对于因使用本代码而产生的任何直接、间接、偶然、特殊或后果性损害，我们不承担任何责任。
//
// 其他重要信息
// Furion 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。
// 有关 Furion 项目的其他详细信息，请参阅位于源代码树根目录中的 COPYRIGHT 和 DISCLAIMER 文件。
//
// 更多信息
// 请访问 https://gitee.com/dotnetchina/Furion 获取更多关于 Furion 项目的许可证和版权信息。
// ------------------------------------------------------------------------

using Furion.HttpRemote.Extensions;
using Furion.Utilities;
using Microsoft.Extensions.Http.Logging;
using Microsoft.Extensions.Logging;
using System.Diagnostics;
using System.Net;

namespace Furion.HttpRemote;

/// <summary>
///     HTTP 远程请求分析工具处理委托
/// </summary>
/// <remarks>参考文献：https://learn.microsoft.com/zh-cn/aspnet/core/fundamentals/http-requests?view=aspnetcore-8.0#outgoing-request-middleware</remarks>
/// <param name="logger">
///     <see cref="Logger{T}" />
/// </param>
public sealed class ProfilerDelegatingHandler(ILogger<Logging> logger) : DelegatingHandler
{
    /// <summary>
    ///     是否启用请求分析工具
    /// </summary>
    /// <param name="httpRequestMessage">
    ///     <see cref="HttpRequestMessage" />
    /// </param>
    /// <returns>
    ///     <see cref="bool" />
    /// </returns>
    internal static bool IsEnabled(HttpRequestMessage httpRequestMessage) =>
        !(httpRequestMessage.Options.TryGetValue(new HttpRequestOptionsKey<string>(Constants.DISABLED_PROFILER_KEY),
            out var value) && value == "TRUE");

    /// <inheritdoc />
    protected override HttpResponseMessage Send(HttpRequestMessage httpRequestMessage,
        CancellationToken cancellationToken)
    {
        // 检查是否启用请求分析工具
        if (!IsEnabled(httpRequestMessage))
        {
            return base.Send(httpRequestMessage, cancellationToken);
        }

        // 记录请求标头
        LogRequestHeaders(logger, httpRequestMessage);

        // 初始化 Stopwatch 实例并开启计时操作
        var stopwatch = Stopwatch.StartNew();

        // 发送 HTTP 远程请求
        var httpResponseMessage = base.Send(httpRequestMessage, cancellationToken);

        // 获取请求耗时
        var requestDuration = stopwatch.ElapsedMilliseconds;

        // 停止计时
        stopwatch.Stop();

        // 记录常规和响应标头
        LogResponseHeadersAndSummary(logger, httpResponseMessage, requestDuration);

        // 打印 CookieContainer 内容
        LogCookieContainer(logger, httpRequestMessage, ExtractSocketsHttpHandler());

        return httpResponseMessage;
    }

    /// <inheritdoc />
    protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage httpRequestMessage,
        CancellationToken cancellationToken)
    {
        // 检查是否启用请求分析工具
        if (!IsEnabled(httpRequestMessage))
        {
            return await base.SendAsync(httpRequestMessage, cancellationToken);
        }

        // 记录请求标头
        LogRequestHeaders(logger, httpRequestMessage);

        // 初始化 Stopwatch 实例并开启计时操作
        var stopwatch = Stopwatch.StartNew();

        // 发送 HTTP 远程请求
        var httpResponseMessage = await base.SendAsync(httpRequestMessage, cancellationToken);

        // 获取请求耗时
        var requestDuration = stopwatch.ElapsedMilliseconds;

        // 停止计时
        stopwatch.Stop();

        // 记录常规和响应标头
        LogResponseHeadersAndSummary(logger, httpResponseMessage, requestDuration);

        // 打印 CookieContainer 内容
        LogCookieContainer(logger, httpRequestMessage, ExtractSocketsHttpHandler());

        return httpResponseMessage;
    }

    /// <summary>
    ///     记录请求标头
    /// </summary>
    /// <param name="logger">
    ///     <see cref="ILogger" />
    /// </param>
    /// <param name="request">
    ///     <see cref="HttpRequestMessage" />
    /// </param>
    internal static void LogRequestHeaders(ILogger logger, HttpRequestMessage request) =>
        Log(logger, request.ProfilerHeaders());

    /// <summary>
    ///     记录常规和响应标头
    /// </summary>
    /// <param name="logger">
    ///     <see cref="ILogger" />
    /// </param>
    /// <param name="httpResponseMessage">
    ///     <see cref="HttpResponseMessage" />
    /// </param>
    /// <param name="requestDuration">请求耗时（毫秒）</param>
    internal static void LogResponseHeadersAndSummary(ILogger logger, HttpResponseMessage httpResponseMessage,
        long requestDuration) =>
        Log(logger, httpResponseMessage.ProfilerGeneralAndHeaders(generalCustomKeyValues:
            [new KeyValuePair<string, IEnumerable<string>>("Request Duration (ms)", [$"{requestDuration:N2}"])]));

    /// <summary>
    ///     打印 <see cref="CookieContainer" /> 内容
    /// </summary>
    /// <param name="logger">
    ///     <see cref="ILogger" />
    /// </param>
    /// <param name="request">
    ///     <see cref="HttpRequestMessage" />
    /// </param>
    /// <param name="socketsHttpHandler">
    ///     <see cref="SocketsHttpHandler" />
    /// </param>
    internal static void LogCookieContainer(ILogger logger, HttpRequestMessage request,
        SocketsHttpHandler? socketsHttpHandler)
    {
        // 空检查
        if (socketsHttpHandler is null || request.RequestUri is null)
        {
            return;
        }

        // 获取 Cookie 集合
        var cookies = socketsHttpHandler.CookieContainer.GetCookies(request.RequestUri);

        // 空检查
        if (cookies is { Count: 0 })
        {
            return;
        }

        // 打印日志
        Log(logger, StringUtility.FormatKeyValuesSummary(
            cookies.ToDictionary(u => u.Name, u => Enumerable.Empty<string>().Concat([u.Value])),
            "Cookie Container"));
    }

    /// <summary>
    ///     打印日志
    /// </summary>
    /// <param name="logger">
    ///     <see cref="ILogger" />
    /// </param>
    /// <param name="message">日志消息</param>
    internal static void Log(ILogger logger, string? message)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(logger);

        // 空检查
        if (string.IsNullOrWhiteSpace(message))
        {
            return;
        }

        // 打印日志
        logger.LogInformation("{message}", message);
    }

    /// <summary>
    ///     提取 <see cref="SocketsHttpHandler" /> 实例
    /// </summary>
    /// <returns>
    ///     <see cref="SocketsHttpHandler" />
    /// </returns>
    internal SocketsHttpHandler? ExtractSocketsHttpHandler() =>
        InnerHandler switch
        {
            LoggingHttpMessageHandler loggingHttpMessageHandler =>
                loggingHttpMessageHandler.InnerHandler as SocketsHttpHandler,
            LoggingScopeHttpMessageHandler loggingScopeHttpMessageHandler =>
                loggingScopeHttpMessageHandler.InnerHandler as SocketsHttpHandler,
            SocketsHttpHandler innerSocketsHttpHandler => innerSocketsHttpHandler,
            _ => null
        };
}