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
using System.ComponentModel.DataAnnotations;
using System.Dynamic;
using System.Reflection;
using System.Text.Json;
using Binder = Microsoft.CSharp.RuntimeBinder.Binder;

namespace Furion.Shapeless;

/// <summary>
///     流变对象
/// </summary>
public partial class Clay
{
    /// <summary>
    ///     获取 <see cref="InvokeMemberBinder" /> 类型的 <c>TypeArguments</c> 属性访问器
    /// </summary>
    /// <remarks>实际上获取的是内部类型 <c>CSharpInvokeMemberBinder</c> 的 <c>TypeArguments</c> 属性访问器。</remarks>
    internal static readonly Lazy<Func<object, object?>> _getCSharpInvokeMemberBinderTypeArguments = new(() =>
    {
        // 获取内部的 CSharpInvokeMemberBinder 类型
        var csharpInvokeMemberBinderType =
            typeof(Binder).Assembly.GetType("Microsoft.CSharp.RuntimeBinder.CSharpInvokeMemberBinder")!;

        // 获取 TypeArguments 属性对象
        var typeArgumentsProperty =
            csharpInvokeMemberBinderType.GetProperty("TypeArguments", BindingFlags.Public | BindingFlags.Instance)!;

        // 创建 TypeArguments 属性访问器
        return csharpInvokeMemberBinderType.CreatePropertyGetter(typeArgumentsProperty);
    });

    /// <inheritdoc />
    public override bool TryGetMember(GetMemberBinder binder, out object? result)
    {
        result = GetValue(binder.Name);
        return true;
    }

    /// <inheritdoc />
    public override bool TrySetMember(SetMemberBinder binder, object? value)
    {
        SetValue(binder.Name, value);
        return true;
    }

    /// <inheritdoc />
    public override bool TryGetIndex(GetIndexBinder binder, object[] indexes, out object? result)
    {
        result = GetValue(indexes[0]);
        return true;
    }

    /// <inheritdoc />
    public override bool TrySetIndex(SetIndexBinder binder, object[] indexes, object? value)
    {
        SetValue(indexes[0], value);
        return true;
    }

    /// <inheritdoc />
    public override bool TryInvoke(InvokeBinder binder, object?[]? args, out object? result)
    {
        // 处理没有提供参数情况
        if (args.IsNullOrEmpty())
        {
            result = ToJsonString();
            return true;
        }

        // 处理非单个参数情况
        if (args.Length != 1)
        {
            return base.TryInvoke(binder, args, out result);
        }

        // 处理单个参数情况
        switch (args[0])
        {
            // 处理 clay(ClayOptions) 情况
            case ClayOptions clayOptions:
                result = Rebuilt(clayOptions);
                return true;
            // 处理 clay(Type) 情况
            case Type resultType:
                result = As(resultType);
                return true;
            // 处理 clay(JsonSerializerOptions) 情况
            case JsonSerializerOptions jsonSerializerOptions:
                result = ToJsonString(jsonSerializerOptions);
                return true;
            // 处理 clay(string) 情况
            case string propertyName:
                result = GetValue(propertyName);
                return true;
            // 处理 clay(char) 情况
            case char charKey:
                result = GetValue(charKey);
                return true;
            // 处理 clay(int) 情况
            case int index:
                result = GetValue(index);
                return true;
            default:
                return base.TryInvoke(binder, args, out result);
        }
    }

    /// <inheritdoc />
    public override bool TryInvokeMember(InvokeMemberBinder binder, object?[]? args, out object? result)
    {
        // 获取成员名称
        var memberName = binder.Name;

        // 检查该成员是否是一个委托
        if (ObjectMethods.TryGetValue(memberName, out var @delegate))
        {
            result = @delegate?.DynamicInvoke(args);
            return true;
        }

        // 获取调用方法的泛型参数数组
        var typeArguments = _getCSharpInvokeMemberBinderTypeArguments.Value.Invoke(binder) as Type[];

        switch (typeArguments)
        {
            // 处理空泛型参数情况
            case { Length: 0 }:
                switch (args)
                {
                    // 处理 clay.Prop() 情况
                    case { Length: 0 }:
                        result = Contains(memberName);
                        return true;
                    // 处理 clay.Prop(Type) 情况
                    case [Type resultType]:
                        result = Helpers.DeserializeNode(FindNode(memberName), resultType,
                            Options.JsonSerializerOptions);
                        return true;
                    // 处理 clay.Prop(Type, JsonSerializerOptions) 情况
                    case [Type resultType, JsonSerializerOptions jsonSerializerOptions]:
                        result = Helpers.DeserializeNode(FindNode(memberName), resultType, jsonSerializerOptions);
                        return true;
                    // 处理 clay.Prop(Type, null) 情况
                    case [Type resultType, null]:
                        result = Helpers.DeserializeNode(FindNode(memberName), resultType);
                        return true;
                }

                break;
            // 处理单个泛型参数情况
            case { Length: 1 }:
                switch (args)
                {
                    // 处理 clay.Prop<T>() 情况
                    case { Length: 0 }:
                        result = Helpers.DeserializeNode(FindNode(memberName), typeArguments[0],
                            Options.JsonSerializerOptions);
                        return true;
                    // 处理 clay.Prop<T>(JsonSerializerOptions) 情况
                    case [JsonSerializerOptions jsonSerializerOptions]:
                        result = Helpers.DeserializeNode(FindNode(memberName), typeArguments[0], jsonSerializerOptions);
                        return true;
                    // 处理 clay.Prop<T>(null) 情况
                    case [null]:
                        result = Helpers.DeserializeNode(FindNode(memberName), typeArguments[0]);
                        return true;
                }

                break;
        }

        return base.TryInvokeMember(binder, args, out result);
    }

    /// <inheritdoc />
    public override bool TryConvert(ConvertBinder binder, out object? result)
    {
        // 转换为目标类型
        result = As(binder.Type, Options.JsonSerializerOptions);

        // 检查是否启用转换后执行数据校验
        if (result is not null && Options.ValidateAfterConversion)
        {
            Validator.ValidateObject(result, new ValidationContext(result), true);
        }

        return true;
    }
}