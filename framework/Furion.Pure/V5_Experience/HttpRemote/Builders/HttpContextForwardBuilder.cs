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

using Furion.AspNetCore.Extensions;
using Furion.Extensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.WebUtilities;
using System.Net.Http.Headers;
using System.Net.Mime;

namespace Furion.HttpRemote;

/// <summary>
///     <see cref="HttpContext" /> 转发构建器
/// </summary>
public sealed class HttpContextForwardBuilder
{
    /// <summary>
    ///     <inheritdoc cref="HttpContextForwardBuilder" />
    /// </summary>
    /// <param name="httpMethod">请求方式</param>
    /// <param name="requestUri">请求地址</param>
    /// <param name="httpContext">
    ///     <see cref="HttpContext" />
    /// </param>
    internal HttpContextForwardBuilder(HttpMethod httpMethod, Uri? requestUri, HttpContext? httpContext)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(httpMethod);
        ArgumentNullException.ThrowIfNull(httpContext);

        Method = httpMethod;
        RequestUri = requestUri;

        HttpContext = httpContext;
    }

    /// <summary>
    ///     请求地址
    /// </summary>
    public Uri? RequestUri { get; }

    /// <summary>
    ///     请求方式
    /// </summary>
    public HttpMethod Method { get; }

    /// <inheritdoc cref="Microsoft.AspNetCore.Http.HttpContext" />
    public HttpContext HttpContext { get; }

    /// <summary>
    ///     构建 <see cref="HttpRequestBuilder" /> 实例
    /// </summary>
    /// <param name="configure">自定义配置委托</param>
    /// <returns>
    ///     <see cref="HttpRequestBuilder" />
    /// </returns>
    internal HttpRequestBuilder Build(Action<HttpRequestBuilder>? configure = null)
    {
        // 初始化 HttpRequestBuilder 实例
        var httpRequestBuilder = HttpRequestBuilder.Create(Method, RequestUri, configure).DisableCache();

        // 复制查询参数和路由参数
        CopyQueryAndRouteValues(httpRequestBuilder);

        // 复制请求标头
        CopyHeaders(httpRequestBuilder);

        // 复制请求内容
        CopyBodyAsync(httpRequestBuilder).Wait(HttpContext.RequestAborted);

        return httpRequestBuilder;
    }

    /// <summary>
    ///     构建 <see cref="HttpRequestBuilder" /> 实例
    /// </summary>
    /// <param name="configure">自定义配置委托</param>
    /// <returns>
    ///     <see cref="HttpRequestBuilder" />
    /// </returns>
    internal async Task<HttpRequestBuilder> BuildAsync(Action<HttpRequestBuilder>? configure = null)
    {
        // 初始化 HttpRequestBuilder 实例
        var httpRequestBuilder = HttpRequestBuilder.Create(Method, RequestUri, configure).DisableCache();

        // 复制查询参数和路由参数
        CopyQueryAndRouteValues(httpRequestBuilder);

        // 复制请求标头
        CopyHeaders(httpRequestBuilder);

        // 复制请求内容
        await CopyBodyAsync(httpRequestBuilder);

        return httpRequestBuilder;
    }

    /// <summary>
    ///     复制查询参数和路由参数
    /// </summary>
    /// <param name="httpRequestBuilder">
    ///     <see cref="HttpRequestBuilder" />
    /// </param>
    internal void CopyQueryAndRouteValues(HttpRequestBuilder httpRequestBuilder)
    {
        // 获取查询参数集合
        var queryValues = HttpContext.Request.Query.ToArray();

        // 空检查
        if (queryValues.Length > 0)
        {
            // 将查询参数添加到查询参数集合中
            httpRequestBuilder.WithQueryParameters(queryValues);

            // 将查询参数添加到路径参数集合中
            httpRequestBuilder.WithPathParameters(queryValues);
        }

        // 获取路由参数集合
        var routeValues = HttpContext.Request.RouteValues;

        // 空检查
        if (routeValues.Count > 0)
        {
            // 将路由参数添加到路径参数集合中
            httpRequestBuilder.WithPathParameters(routeValues);
        }
    }

    /// <summary>
    ///     复制请求标头
    /// </summary>
    /// <param name="httpRequestBuilder">
    ///     <see cref="HttpRequestBuilder" />
    /// </param>
    internal void CopyHeaders(HttpRequestBuilder httpRequestBuilder)
    {
        // 获取 HttpRequest 实例
        var httpRequest = HttpContext.Request;

        // 添加原始请求地址标头
        httpRequestBuilder.WithHeader(Constants.X_ORIGINAL_URL_HEADER, httpRequest.GetFullRequestUrl());

        // 复制原始请求标头
        httpRequestBuilder.WithHeaders(httpRequest.Headers);
    }

    /// <summary>
    ///     复制请求内容
    /// </summary>
    /// <param name="httpRequestBuilder">
    ///     <see cref="HttpRequestBuilder" />
    /// </param>
    internal async Task CopyBodyAsync(HttpRequestBuilder httpRequestBuilder)
    {
        // 获取 HttpRequest 实例
        var httpRequest = HttpContext.Request;

        // 检查是否包含请求内容
        if (httpRequest.ContentLength is null or 0)
        {
            return;
        }

        // 获取原始内容类型
        var rawContentType = httpRequest.ContentType;

        // 空检查
        ArgumentException.ThrowIfNullOrEmpty(rawContentType);

        // 解析原始内容类型
        var mediaTypeHeaderValue = MediaTypeHeaderValue.Parse(rawContentType);

        // 获取内容类型
        var contentType = mediaTypeHeaderValue.MediaType;

        // 空检查
        ArgumentNullException.ThrowIfNull(contentType);

        // 读取 HttpContext 请求体流
        var bodyStream = await ReadBodyAsync(httpRequestBuilder);

        // 检查请求内容类型是否为 multipart/form-data
        if (!contentType.IsIn([MediaTypeNames.Multipart.FormData], StringComparer.OrdinalIgnoreCase))
        {
            // 复制非多部分内容表单内容
            CopyNonMultipartFormData(bodyStream, contentType, httpRequestBuilder);
        }
        else
        {
            // 复制多部分内容表单内容
            await CopyMultipartFormDataAsync(bodyStream, rawContentType, httpRequestBuilder,
                HttpContext.RequestAborted);
        }

        // 将请求体流的位置重置回起始位置
        httpRequest.Body.Position = 0;
    }

    /// <summary>
    ///     复制非多部分内容表单内容
    /// </summary>
    /// <param name="bodyStream">
    ///     <see cref="Stream" />
    /// </param>
    /// <param name="contentType">内容类型</param>
    /// <param name="httpRequestBuilder">
    ///     <see cref="HttpRequestBuilder" />
    /// </param>
    internal static void CopyNonMultipartFormData(Stream bodyStream, string contentType,
        HttpRequestBuilder httpRequestBuilder)
    {
        // 初始化 StreamContent 实例
        var streamContent = new StreamContent(bodyStream);

        // 设置原始请求内容
        httpRequestBuilder.SetRawContent(streamContent, contentType);
    }

    /// <summary>
    ///     复制多部分内容表单内容
    /// </summary>
    /// <param name="bodyStream">
    ///     <see cref="Stream" />
    /// </param>
    /// <param name="rawContentType">原始内容类型</param>
    /// <param name="httpRequestBuilder">
    ///     <see cref="HttpRequestBuilder" />
    /// </param>
    /// <param name="cancellationToken">
    ///     <see cref="CancellationToken" />
    /// </param>
    internal static async Task CopyMultipartFormDataAsync(Stream bodyStream, string rawContentType,
        HttpRequestBuilder httpRequestBuilder, CancellationToken cancellationToken)
    {
        // 获取多部分内容表单的边界；注意：这里可能出现前后双引号问题
        var boundary = rawContentType.Split('=')[1].TrimStart('"').TrimEnd('"');

        // 初始化 HttpMultipartFormDataBuilder 实例
        var httpMultipartFormDataBuilder =
            new HttpMultipartFormDataBuilder(httpRequestBuilder) { Boundary = boundary };

        // 初始化 MultipartReader 实例
        var multipartReader = new MultipartReader(boundary, bodyStream);

        // 读取下一个 MultipartSection
        var multipartSection = await multipartReader.ReadNextSectionAsync(cancellationToken);

        while (multipartSection is not null)
        {
            // 检查当前节是否为文件节
            if (multipartSection.AsFileSection() is { } fileMultipartSection)
            {
                // 复制多部分内容表单文件节内容
                CopyFileMultipartSection(fileMultipartSection, httpMultipartFormDataBuilder, httpRequestBuilder);
            }
            else
            {
                // 复制多部分内容表单文本节内容
                await CopyTextMultipartSectionAsync(multipartSection, httpMultipartFormDataBuilder, cancellationToken);
            }

            // 继续读取下一个 MultipartSection
            multipartSection = await multipartReader.ReadNextSectionAsync(cancellationToken);
        }

        // 设置多部分内容表单
        httpRequestBuilder.SetMultipartContent(httpMultipartFormDataBuilder);
    }

    /// <summary>
    ///     复制多部分内容表单文本节内容
    /// </summary>
    /// <param name="multipartSection">
    ///     <see cref="MultipartSection" />
    /// </param>
    /// <param name="httpMultipartFormDataBuilder">
    ///     <see cref="HttpMultipartFormDataBuilder" />
    /// </param>
    /// <param name="cancellationToken">
    ///     <see cref="CancellationToken" />
    /// </param>
    internal static async Task CopyTextMultipartSectionAsync(MultipartSection multipartSection,
        HttpMultipartFormDataBuilder httpMultipartFormDataBuilder, CancellationToken cancellationToken)
    {
        // 获取 ContentDispositionHeaderValue 实例
        var contentDispositionHeaderValue = multipartSection.GetContentDispositionHeader();

        // 获取表单名称
        var name = contentDispositionHeaderValue?.Name.Value;

        // 空检查
        ArgumentException.ThrowIfNullOrWhiteSpace(name);

        // 读取文本
        var text = await multipartSection.ReadAsStringAsync(cancellationToken);

        // 添加文本
        httpMultipartFormDataBuilder.AddText(text, name);
    }

    /// <summary>
    ///     复制多部分内容表单文件节内容
    /// </summary>
    /// <param name="fileMultipartSection">
    ///     <see cref="FileMultipartSection" />
    /// </param>
    /// <param name="httpMultipartFormDataBuilder">
    ///     <see cref="HttpMultipartFormDataBuilder" />
    /// </param>
    /// <param name="httpRequestBuilder">
    ///     <see cref="HttpRequestBuilder" />
    /// </param>
    internal static void CopyFileMultipartSection(FileMultipartSection fileMultipartSection,
        HttpMultipartFormDataBuilder httpMultipartFormDataBuilder, HttpRequestBuilder httpRequestBuilder)
    {
        // 获取文件流（实际为 Microsoft.AspNetCore.WebUtilities.MultipartReaderStream 类型）
        var fileStream = fileMultipartSection.FileStream;

        // 空检查
        ArgumentNullException.ThrowIfNull(fileStream);

        // 添加文件流
        httpMultipartFormDataBuilder.AddStream(fileStream, fileMultipartSection.Name, fileMultipartSection.FileName);

        // 添加文件流到请求结束时需要释放的集合中
        httpRequestBuilder.AddDisposable(fileStream);
    }

    /// <summary>
    ///     读取 <see cref="HttpContext" /> 请求体流
    /// </summary>
    /// <param name="httpRequestBuilder">
    ///     <see cref="HttpRequestBuilder" />
    /// </param>
    /// <returns>
    ///     <see cref="Stream" />
    /// </returns>
    /// <exception cref="InvalidOperationException"></exception>
    internal async Task<Stream> ReadBodyAsync(HttpRequestBuilder httpRequestBuilder)
    {
        try
        {
            // 获取 HttpRequest 实例
            var httpRequest = HttpContext.Request;

            // 将请求体流的位置重置回起始位置
            httpRequest.Body.Position = 0;

            // 初始化 MemoryStream 实例
            var memoryStream = new MemoryStream();

            // 将请求体流复制到内存流
            await httpRequest.Body.CopyToAsync(memoryStream, HttpContext.RequestAborted);

            // 将内存流的位置重置到起始位置
            memoryStream.Position = 0;

            // 添加内存流到请求结束时需要释放的集合中
            httpRequestBuilder.AddDisposable(memoryStream);

            return memoryStream;
        }
        // 捕获不支持 Body 流重复读异常
        catch (NotSupportedException e)
        {
            throw new InvalidOperationException(
                "Please ensure that the `app.UseEnableBuffering()` middleware is registered.", e);
        }
    }
}