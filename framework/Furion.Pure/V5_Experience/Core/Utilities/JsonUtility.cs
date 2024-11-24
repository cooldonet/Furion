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

using System.Diagnostics.CodeAnalysis;
using System.Text.Json;

namespace Furion.Utilities;

/// <summary>
///     提供 JSON 实用方法
/// </summary>
public static class JsonUtility
{
    /// <summary>
    ///     解析 JSON 字符串
    /// </summary>
    /// <param name="jsonString">JSON 字符串</param>
    /// <returns>
    ///     <see cref="JsonDocument" />
    /// </returns>
    /// <exception cref="JsonException"></exception>
    public static JsonDocument Parse(string jsonString)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(jsonString);

        return JsonDocument.Parse(jsonString);
    }

    /// <summary>
    ///     尝试解析 JSON 字符串
    /// </summary>
    /// <param name="jsonString">JSON 字符串</param>
    /// <param name="jsonDocument">
    ///     <see cref="JsonDocument" />
    /// </param>
    /// <returns>
    ///     <see cref="bool" />
    /// </returns>
    public static bool TryParse(string jsonString, [NotNullWhen(true)] out JsonDocument? jsonDocument)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(jsonString);

        try
        {
            jsonDocument = Parse(jsonString);
            return true;
        }
        catch (JsonException)
        {
            jsonDocument = null;
            return false;
        }
    }

    /// <summary>
    ///     检查 <see cref="JsonDocument" /> 的 <c>ValueKind</c> 属性值是否是 <c>Object</c>、<c>Array</c> 或 <c>Null</c>
    /// </summary>
    /// <param name="jsonDocument">
    ///     <see cref="JsonDocument" />
    /// </param>
    /// <returns>
    ///     <see cref="bool" />
    /// </returns>
    public static bool IsObjectOrArrayOrNull(JsonDocument jsonDocument)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(jsonDocument);

        var root = jsonDocument.RootElement;
        return root.ValueKind is JsonValueKind.Object or JsonValueKind.Array or JsonValueKind.Null;
    }
}