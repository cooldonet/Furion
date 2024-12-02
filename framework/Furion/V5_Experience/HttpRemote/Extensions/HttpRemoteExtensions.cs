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

using Furion.Extensions;
using Furion.Utilities;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using System.Net.Http.Headers;

namespace Furion.HttpRemote.Extensions;

/// <summary>
///     HTTP 远程服务拓展类
/// </summary>
public static class HttpRemoteExtensions
{
    /// <summary>
    ///     添加 HTTP 远程请求分析工具处理委托
    /// </summary>
    /// <param name="builder">
    ///     <see cref="IHttpClientBuilder" />
    /// </param>
    /// <param name="disableConfigure">自定义禁用配置委托</param>
    /// <returns>
    ///     <see cref="IHttpClientBuilder" />
    /// </returns>
    public static IHttpClientBuilder AddProfilerDelegatingHandler(this IHttpClientBuilder builder,
        Func<bool>? disableConfigure = null)
    {
        // 获取 IServiceCollection 实例
        var services = builder.Services;

        // 注册请求分析工具服务
        services.TryAddTransient<ProfilerDelegatingHandler>();

        // 检查自定义禁用配置委托
        return disableConfigure?.Invoke() == true
            ? builder
            : builder.AddHttpMessageHandler<ProfilerDelegatingHandler>();
    }

    /// <summary>
    ///     为 <see cref="HttpClient" /> 启用性能优化
    /// </summary>
    /// <param name="httpClient">
    ///     <see cref="HttpClient" />
    /// </param>
    public static void PerformanceOptimization(this HttpClient httpClient)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(httpClient);

        // 设置 Accept 头，表示可以接受任何类型的内容
        httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("*/*"));

        // 添加 Accept-Encoding 头，支持 gzip、deflate 以及 Brotli 压缩算法
        // 这样服务器可以根据情况选择最合适的压缩方式发送响应，从而减少传输的数据量
        httpClient.DefaultRequestHeaders.AcceptEncoding.Add(new StringWithQualityHeaderValue("gzip"));
        httpClient.DefaultRequestHeaders.AcceptEncoding.Add(new StringWithQualityHeaderValue("deflate"));
        httpClient.DefaultRequestHeaders.AcceptEncoding.Add(new StringWithQualityHeaderValue("br"));

        // 设置 Connection 头为 keep-alive，允许重用 TCP 连接，避免每次请求都重新建立连接带来的开销
        httpClient.DefaultRequestHeaders.ConnectionClose = false;
    }

    /// <summary>
    ///     分析 <see cref="HttpRequestMessage" /> 标头
    /// </summary>
    /// <param name="httpRequestMessage">
    ///     <see cref="HttpRequestMessage" />
    /// </param>
    /// <param name="summary">摘要</param>
    /// <returns>
    ///     <see cref="string" />
    /// </returns>
    public static string? ProfilerHeaders(this HttpRequestMessage httpRequestMessage,
        string? summary = "Request Headers") =>
        StringUtility.FormatKeyValuesSummary(
            httpRequestMessage.Headers.ConcatIgnoreNull(httpRequestMessage.Content?.Headers), summary);

    /// <summary>
    ///     分析 <see cref="HttpResponseMessage" /> 标头
    /// </summary>
    /// <param name="httpResponseMessage">
    ///     <see cref="HttpResponseMessage" />
    /// </param>
    /// <param name="summary">摘要</param>
    /// <returns>
    ///     <see cref="string" />
    /// </returns>
    public static string? ProfilerHeaders(this HttpResponseMessage httpResponseMessage,
        string? summary = "Response Headers") =>
        StringUtility.FormatKeyValuesSummary(
            httpResponseMessage.Headers.ConcatIgnoreNull(httpResponseMessage.Content.Headers),
            summary);

    /// <summary>
    ///     分析常规和 <see cref="HttpResponseMessage" /> 标头
    /// </summary>
    /// <param name="httpResponseMessage">
    ///     <see cref="HttpResponseMessage" />
    /// </param>
    /// <param name="responseSummary">响应标头摘要</param>
    /// <param name="generalSummary">常规摘要</param>
    /// <param name="generalCustomKeyValues">自定义常规摘要键值集合</param>
    /// <returns>
    ///     <see cref="string" />
    /// </returns>
    public static string ProfilerGeneralAndHeaders(this HttpResponseMessage httpResponseMessage,
        string? responseSummary = "Response Headers", string? generalSummary = "General",
        IEnumerable<KeyValuePair<string, IEnumerable<string>>>? generalCustomKeyValues = null)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(httpResponseMessage);

        // 获取 HttpRequestMessage 实例
        var httpRequestMessage = httpResponseMessage.RequestMessage;

        // 空检查
        ArgumentNullException.ThrowIfNull(httpRequestMessage);

        // 获取 HttpContent 实例
        var httpContent = httpRequestMessage.Content;

        // 格式化 HTTP 声明式条目
        IEnumerable<KeyValuePair<string, IEnumerable<string>>>? declarativeKeyValues =
            httpRequestMessage.Options.TryGetValue(new HttpRequestOptionsKey<string>(Constants.DECLARATIVE_METHOD_KEY),
                out var methodSignature)
                ? [new KeyValuePair<string, IEnumerable<string>>("Declarative", [methodSignature])]
                : null;

        // 格式化常规条目
        var generalEntry = StringUtility.FormatKeyValuesSummary(new[]
        {
            new KeyValuePair<string, IEnumerable<string>>("Request URL",
                [httpRequestMessage.RequestUri?.OriginalString!]),
            new KeyValuePair<string, IEnumerable<string>>("HTTP Method", [httpRequestMessage.Method.ToString()]),
            new KeyValuePair<string, IEnumerable<string>>("Status Code",
                [$"{(int)httpResponseMessage.StatusCode} {httpResponseMessage.StatusCode}"]),
            new KeyValuePair<string, IEnumerable<string>>("HTTP Content",
                [$"{httpContent?.GetType().Name}"])
        }.ConcatIgnoreNull(declarativeKeyValues).ConcatIgnoreNull(generalCustomKeyValues), generalSummary);

        // 格式化响应条目
        var responseEntry = httpResponseMessage.ProfilerHeaders(responseSummary);

        return $"{generalEntry}\r\n{responseEntry}";
    }

    /// <summary>
    ///     分析 <see cref="HttpContent" /> 内容
    /// </summary>
    /// <param name="httpContent">
    ///     <see cref="HttpContent" />
    /// </param>
    /// <param name="summary">摘要</param>
    /// <returns>
    ///     <see cref="string" />
    /// </returns>
    public static async Task<string?> ProfilerAsync(this HttpContent? httpContent, string? summary = "Request Body")
    {
        // 空检查
        if (httpContent is null)
        {
            return null;
        }

        return StringUtility.FormatKeyValuesSummary(
            [new KeyValuePair<string, IEnumerable<string>>(string.Empty, [await httpContent.ReadAsStringAsync()])],
            $"{summary} ({httpContent.GetType().Name})");
    }
}