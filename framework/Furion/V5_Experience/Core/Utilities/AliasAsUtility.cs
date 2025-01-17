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

using System.Reflection;

namespace Furion.Utilities;

/// <summary>
///     提供别名获取实用方法
/// </summary>
public static class AliasAsUtility
{
    /// <summary>
    ///     获取属性名
    /// </summary>
    /// <param name="property">
    ///     <see cref="PropertyInfo" />
    /// </param>
    /// <param name="isDefined">是否定义特性</param>
    /// <returns>
    ///     <see cref="string" />
    /// </returns>
    public static string GetPropertyName(PropertyInfo property, out bool isDefined)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(property);

        // 获取属性名
        var name = property.Name;

        // 检查属性是否贴有 [AliasAs] 特性
        if (!property.IsDefined(typeof(AliasAsAttribute)))
        {
            isDefined = false;
            return name;
        }

        // 获取 AliasAsAttribute 实例的 AliasAs 属性值
        var aliasAs = property.GetCustomAttribute<AliasAsAttribute>()!.AliasAs;

        // 空检查
        if (!string.IsNullOrWhiteSpace(aliasAs))
        {
            name = aliasAs.Trim();
        }

        isDefined = true;
        return name;
    }

    /// <summary>
    ///     获取参数名
    /// </summary>
    /// <param name="parameter">
    ///     <see cref="ParameterInfo" />
    /// </param>
    /// <param name="isDefined">是否定义特性</param>
    /// <returns>
    ///     <see cref="string" />
    /// </returns>
    public static string GetParameterName(ParameterInfo parameter, out bool isDefined)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(parameter);

        // 获取参数名
        var name = parameter.Name!;

        // 检查参数是否贴有 [AliasAs] 特性
        if (!parameter.IsDefined(typeof(AliasAsAttribute)))
        {
            isDefined = false;
            return name;
        }

        // 获取 AliasAsAttribute 实例的 AliasAs 属性值
        var aliasAs = parameter.GetCustomAttribute<AliasAsAttribute>()!.AliasAs;

        // 空检查
        if (!string.IsNullOrWhiteSpace(aliasAs))
        {
            name = aliasAs.Trim();
        }

        isDefined = true;
        return name;
    }
}