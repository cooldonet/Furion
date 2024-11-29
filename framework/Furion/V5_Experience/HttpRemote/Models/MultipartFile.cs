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

using System.Text;

namespace Furion.HttpRemote;

/// <summary>
///     多部分表单文件
/// </summary>
/// <remarks>使用 <c>MultipartFile.CreateFrom[Source]</c> 静态方法创建。</remarks>
public sealed class MultipartFile
{
    /// <summary>
    ///     <inheritdoc cref="MultipartFile" />
    /// </summary>
    internal MultipartFile()
    {
    }

    /// <summary>
    ///     表单名称
    /// </summary>
    public string? Name { get; private set; }

    /// <summary>
    ///     文件的名称
    /// </summary>
    public string? FileName { get; private set; }

    /// <summary>
    ///     内容类型
    /// </summary>
    public string? ContentType { get; private set; }

    /// <summary>
    ///     内容编码
    /// </summary>
    public Encoding? ContentEncoding { get; private set; }

    /// <summary>
    ///     文件来源
    /// </summary>
    public object? Source { get; private set; }

    /// <summary>
    ///     <see cref="FileSourceType" />
    /// </summary>
    internal FileSourceType FileSourceType { get; private set; }

    /// <summary>
    ///     从字节数组中添加文件
    /// </summary>
    /// <param name="byteArray">字节数组</param>
    /// <param name="name">表单名称</param>
    /// <param name="fileName">文件的名称</param>
    /// <param name="contentType">内容类型</param>
    /// <param name="contentEncoding">内容编码</param>
    /// <returns>
    ///     <see cref="MultipartFile" />
    /// </returns>
    public static MultipartFile CreateFromByteArray(byte[] byteArray, string name = "file", string? fileName = null,
        string? contentType = null, Encoding? contentEncoding = null) =>
        new()
        {
            Name = name,
            FileName = fileName,
            ContentType = contentType,
            ContentEncoding = contentEncoding,
            Source = byteArray,
            FileSourceType = FileSourceType.ByteArray
        };

    /// <summary>
    ///     从 <see cref="Stream" /> 中添加文件
    /// </summary>
    /// <param name="stream">
    ///     <see cref="Stream" />
    /// </param>
    /// <param name="name">表单名称</param>
    /// <param name="fileName">文件的名称</param>
    /// <param name="contentType">内容类型</param>
    /// <param name="contentEncoding">内容编码</param>
    /// <returns>
    ///     <see cref="MultipartFile" />
    /// </returns>
    public static MultipartFile CreateFromStream(Stream stream, string name = "file", string? fileName = null,
        string? contentType = null, Encoding? contentEncoding = null) =>
        new()
        {
            Name = name,
            FileName = fileName,
            ContentType = contentType,
            ContentEncoding = contentEncoding,
            Source = stream,
            FileSourceType = FileSourceType.Stream
        };

    /// <summary>
    ///     从本地路径中添加文件
    /// </summary>
    /// <param name="filePath">文件路径</param>
    /// <param name="name">表单名称</param>
    /// <param name="fileName">文件的名称</param>
    /// <param name="contentType">内容类型</param>
    /// <param name="contentEncoding">内容编码</param>
    /// <returns>
    ///     <see cref="MultipartFile" />
    /// </returns>
    public static MultipartFile CreateFromPath(string filePath, string name = "file", string? fileName = null,
        string? contentType = null, Encoding? contentEncoding = null) =>
        new()
        {
            Name = name,
            FileName = fileName,
            ContentType = contentType,
            ContentEncoding = contentEncoding,
            Source = filePath,
            FileSourceType = FileSourceType.Path
        };

    /// <summary>
    ///     从 Base64 字符串中添加文件
    /// </summary>
    /// <remarks>文件大小限制在 <c>100MB</c> 以内。</remarks>
    /// <param name="base64String">Base64 字符串</param>
    /// <param name="name">表单名称</param>
    /// <param name="fileName">文件的名称</param>
    /// <param name="contentType">内容类型</param>
    /// <param name="contentEncoding">内容编码</param>
    /// <returns>
    ///     <see cref="MultipartFile" />
    /// </returns>
    public static MultipartFile CreateFromBase64String(string base64String, string name = "file",
        string? fileName = null, string? contentType = null, Encoding? contentEncoding = null) =>
        new()
        {
            Name = name,
            FileName = fileName,
            ContentType = contentType,
            ContentEncoding = contentEncoding,
            Source = base64String,
            FileSourceType = FileSourceType.Base64String
        };

    /// <summary>
    ///     从互联网 URL 中添加文件
    /// </summary>
    /// <remarks>文件大小限制在 <c>100MB</c> 以内。</remarks>
    /// <param name="url">互联网 URL 地址</param>
    /// <param name="name">表单名称</param>
    /// <param name="fileName">文件的名称</param>
    /// <param name="contentType">内容类型</param>
    /// <param name="contentEncoding">内容编码</param>
    /// <returns>
    ///     <see cref="MultipartFile" />
    /// </returns>
    public static MultipartFile CreateFromRemote(string url, string name = "file", string? fileName = null,
        string? contentType = null, Encoding? contentEncoding = null) =>
        new()
        {
            Name = name,
            FileName = fileName,
            ContentType = contentType,
            ContentEncoding = contentEncoding,
            Source = url,
            FileSourceType = FileSourceType.Remote
        };
}