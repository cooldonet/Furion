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
using System.Reflection;

namespace Furion.HttpRemote;

/// <summary>
///     HTTP 声明式 <see cref="HeaderAttribute" /> 特性提取器
/// </summary>
internal sealed class HeaderDeclarativeExtractor : IHttpDeclarativeExtractor
{
    /// <inheritdoc />
    public void Extract(HttpRequestBuilder httpRequestBuilder, HttpDeclarativeExtractorContext context)
    {
        /* 情况一：当特性作用于方法或接口时 */

        // 获取 HeaderAttribute 特性集合
        var headerAttributes = context.GetMethodDefinedCustomAttributes<HeaderAttribute>(true, false)?.ToArray();

        // 空检查
        if (headerAttributes is { Length: > 0 })
        {
            // 遍历所有 [Header] 特性并添加到 HttpRequestBuilder 中
            foreach (var headerAttribute in headerAttributes)
            {
                // 获取标头
                var headerName = headerAttribute.Name;

                // 空检查
                ArgumentException.ThrowIfNullOrEmpty(headerName);

                // 设置请求标头
                if (headerAttribute.HasSetValue)
                {
                    httpRequestBuilder.WithHeader(headerName, headerAttribute.Value, headerAttribute.Escape,
                        replace: headerAttribute.Replace);
                }
                // 移除请求标头
                else
                {
                    httpRequestBuilder.RemoveHeaders(headerName);
                }
            }
        }

        /* 情况二：当特性作用于参数时 */

        // 查找所有贴有 [Header] 特性的参数集合
        var headerParameters = context.UnFrozenParameters.Where(u => u.Key.IsDefined(typeof(HeaderAttribute), true))
            .ToArray();

        // 空检查
        if (headerParameters.Length == 0)
        {
            return;
        }

        // 遍历所有贴有 [Header] 特性的参数
        foreach (var (parameter, value) in headerParameters)
        {
            // 获取 HeaderAttribute 特性集合
            var parameterHeaderAttributes = parameter.GetCustomAttributes<HeaderAttribute>(true);

            // 获取参数名
            var parameterName = AliasAsUtility.GetParameterName(parameter, out var aliasAsDefined);

            // 遍历所有 [Header] 特性并添加到 HttpRequestBuilder 中
            foreach (var headerAttribute in parameterHeaderAttributes)
            {
                // 检查参数是否贴了 [AliasAs] 特性
                if (!aliasAsDefined)
                {
                    parameterName = string.IsNullOrWhiteSpace(headerAttribute.AliasAs)
                        ? string.IsNullOrWhiteSpace(headerAttribute.Name) ? parameterName : headerAttribute.Name.Trim()
                        : headerAttribute.AliasAs.Trim();
                }

                // 检查类型是否是基本类型或枚举类型或由它们组成的数组或集合类型
                if (parameter.ParameterType.IsBaseTypeOrEnumOrCollection())
                {
                    httpRequestBuilder.WithHeader(parameterName, value ?? headerAttribute.Value,
                        headerAttribute.Escape, replace: headerAttribute.Replace);

                    continue;
                }

                // 空检查
                if (value is not null)
                {
                    httpRequestBuilder.WithHeaders(value, headerAttribute.Escape, replace: headerAttribute.Replace);
                }
            }
        }
    }
}