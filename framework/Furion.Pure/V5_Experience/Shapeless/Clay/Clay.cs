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
using System.Diagnostics.CodeAnalysis;
using System.Dynamic;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace Furion.Shapeless;

/// <summary>
///     流变对象
/// </summary>
public partial class Clay : DynamicObject, IEnumerable<KeyValuePair<object, object?>>, IFormattable
{
    /// <summary>
    ///     <inheritdoc cref="Clay" />
    /// </summary>
    /// <param name="jsonNode">
    ///     <see cref="JsonNode" />
    /// </param>
    /// <param name="options">
    ///     <see cref="ClayOptions" />
    /// </param>
    /// <exception cref="NotSupportedException"></exception>
    internal Clay(JsonNode? jsonNode, ClayOptions? options = null)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(jsonNode, "obj");

        // 初始化 ClayOptions
        Options = options ?? ClayOptions.Default;

        // 创建 JsonNode 选项
        var (jsonNodeOptions, jsonDocumentOptions) = CreateJsonNodeOptions(Options);

        // 处理非对象和非数组类型的 JSON 节点
        var jsonCanvas = jsonNode.GetValueKind() is JsonValueKind.Object or JsonValueKind.Array
            ? jsonNode
            : JsonNode.Parse($"{{\"{Options.ScalarValueKey}\":{jsonNode.ToJsonString()}}}", jsonNodeOptions,
                jsonDocumentOptions)!;

        JsonCanvas = jsonCanvas;

        IsObject = JsonCanvas is JsonObject;
        IsArray = JsonCanvas is JsonArray;
    }

    /// <summary>
    ///     <inheritdoc cref="ClayOptions" />
    /// </summary>
    internal ClayOptions Options { get; private set; }

    /// <summary>
    ///     JSON 格式的画布
    /// </summary>
    /// <remarks>用于作为 <see cref="Clay" /> 的核心数据容器。</remarks>
    internal JsonNode JsonCanvas { get; private set; }

    /// <summary>
    ///     单一对象自定义委托字典
    /// </summary>
    internal IDictionary<string, Delegate?> ObjectMethods { get; } = new Dictionary<string, Delegate?>();

    /// <inheritdoc />
    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();

    /// <summary>
    ///     根据键或索引获取值
    /// </summary>
    /// <param name="keyOrIndex">键或索引</param>
    /// <returns>
    ///     <see cref="object" />
    /// </returns>
    internal object? GetValue(object keyOrIndex)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(keyOrIndex);

        return TryGetDelegate(keyOrIndex, out var @delegate)
            ? @delegate
            : DeserializeNode(FindNode(keyOrIndex), Options);
    }

    /// <summary>
    ///     根据键或索引设置值
    /// </summary>
    /// <param name="keyOrIndex">键或索引</param>
    /// <param name="value">值</param>
    /// <param name="arrayInsert">是否作为在指定位置插入</param>
    /// <returns>
    ///     <see cref="bool" />
    /// </returns>
    internal bool SetValue(object keyOrIndex, object? value, bool arrayInsert = false)
    {
        // 确保当前实例不在只读模式下
        EnsureNotReadOnlyBeforeModify();

        // 空检查
        ArgumentNullException.ThrowIfNull(keyOrIndex);

        // 触发值变更之前事件
        OnValueChanging(keyOrIndex);

        // 根据键或索引设置值并获取结果
        var result = IsObject
            ? SetNodeInObject(keyOrIndex, value, out var finalIndex)
            : SetNodeInArray(keyOrIndex, value, out finalIndex, arrayInsert);

        // 触发值变更之后事件
        if (result)
        {
            OnValueChanged(finalIndex);
        }

        return result;
    }

    /// <summary>
    ///     根据键或索引移除值
    /// </summary>
    /// <param name="keyOrIndex">键或索引</param>
    /// <returns>
    ///     <see cref="bool" />
    /// </returns>
    internal bool RemoveValue(object keyOrIndex)
    {
        // 确保当前实例不在只读模式下
        EnsureNotReadOnlyBeforeModify();

        // 空检查
        ArgumentNullException.ThrowIfNull(keyOrIndex);

        // 触发键或索引移除之前事件
        OnIndexRemoving(keyOrIndex);

        // 根据键或索引移除值并获取结果
        var result = IsObject
            ? RemoveNodeFromObject(keyOrIndex, out var finalIndex)
            : RemoveNodeFromArray(keyOrIndex, out finalIndex);

        // 触发键或索引移除之后事件
        if (result)
        {
            OnIndexRemoved(finalIndex);
        }

        return result;
    }

    /// <summary>
    ///     根据键或索引查找 <see cref="JsonNode" /> 节点
    /// </summary>
    /// <param name="keyOrIndex">键或索引</param>
    /// <returns>
    ///     <see cref="JsonNode" />
    /// </returns>
    internal JsonNode? FindNode(object keyOrIndex)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(keyOrIndex);

        return IsObject ? GetNodeFromObject(keyOrIndex) : GetNodeFromArray(keyOrIndex);
    }

    /// <summary>
    ///     根据键获取 <see cref="JsonNode" /> 节点
    /// </summary>
    /// <param name="key">键</param>
    /// <returns>
    ///     <see cref="JsonNode" />
    /// </returns>
    /// <exception cref="KeyNotFoundException"></exception>
    internal JsonNode? GetNodeFromObject(object key)
    {
        // 将键转换为字符串类型
        var stringKey = key.ToString()!;

        // 处理嵌套带空传播字符 ? 的索引键
        var memberName = ProcessNestedNullPropagationIndexKey(stringKey);

        // 将 JsonCanvas 转换为 JsonObject 实例
        var jsonObject = JsonCanvas.AsObject();

        // 根据键获取 JSON 节点
        if (jsonObject.TryGetPropertyValue(memberName, out var jsonNode))
        {
            return jsonNode;
        }

        // 检查是否允许访问不存在的属性
        if (!Options.AllowMissingProperty)
        {
            throw new KeyNotFoundException($"The property `{memberName}` was not found in the Clay.");
        }

        // 检查是否需要处理嵌套带空传播字符 ? 的索引键
        if (memberName == stringKey || !Options.AutoCreateNestedObjects)
        {
            return null;
        }

        SetValue(memberName, new Clay(Options));
        return FindNode(memberName);
    }

    /// <summary>
    ///     根据索引获取 <see cref="JsonNode" /> 节点
    /// </summary>
    /// <param name="index">索引</param>
    /// <returns>
    ///     <see cref="JsonNode" />
    /// </returns>
    /// <exception cref="ArgumentOutOfRangeException"></exception>
    internal JsonNode? GetNodeFromArray(object index)
    {
        // 检查数组索引合法性
        EnsureLegalArrayIndex(index, out var intIndex);

        // 将 JsonCanvas 转换为 JsonArray 实例
        var jsonArray = JsonCanvas.AsArray();

        // 获取 JsonArray 长度
        var count = jsonArray.Count;

        // 检查索引小于数组长度
        if (intIndex < count)
        {
            return jsonArray[intIndex];
        }

        // 检查是否允许访问越界的数组索引
        if (!Options.AllowIndexOutOfRange)
        {
            ThrowIfOutOfRange(intIndex, count);
        }

        // 检查是否自动创建嵌套的数组实例
        if (Options is not { AutoCreateNestedArrays: true, AutoExpandArrayWithNulls: true })
        {
            return null;
        }

        SetValue(intIndex, new Clay(ClayType.Array, Options));
        return FindNode(intIndex);
    }

    /// <summary>
    ///     根据键设置 <see cref="JsonNode" /> 节点
    /// </summary>
    /// <param name="key">键</param>
    /// <param name="value">属性值</param>
    /// <param name="finalKey">最终设置键</param>
    /// <returns>
    ///     <see cref="bool" />
    /// </returns>
    internal bool SetNodeInObject(object key, object? value, out object finalKey)
    {
        // 将键转换为字符串类型
        var stringKey = key.ToString()!;

        // 处理嵌套带空传播字符 ? 的索引键
        var memberName = ProcessNestedNullPropagationIndexKey(stringKey);

        // 将 JsonCanvas 转换为 JsonObject 实例
        var jsonObject = JsonCanvas.AsObject();

        // 处理值是一个 Delegate 委托类型
        if (value is Delegate @delegate)
        {
            // 移除可能存在的同名属性
            jsonObject.Remove(memberName);
            ObjectMethods[memberName] = @delegate;
        }
        else
        {
            // 移除可能存在的同名委托属性
            ObjectMethods.Remove(memberName);
            jsonObject[memberName] = SerializeToNode(value, Options);
        }

        finalKey = memberName;
        return true;
    }

    /// <summary>
    ///     根据索引设置 <see cref="JsonNode" /> 节点
    /// </summary>
    /// <param name="index">索引</param>
    /// <param name="value">元素值</param>
    /// <param name="finalIndex">最终设置索引</param>
    /// <param name="arrayInsert">是否作为在指定位置插入</param>
    /// <returns>
    ///     <see cref="bool" />
    /// </returns>
    internal bool SetNodeInArray(object index, object? value, out object finalIndex, bool arrayInsert = false)
    {
        // 检查数组索引合法性
        EnsureLegalArrayIndex(index, out var intIndex);

        // 将 JsonCanvas 转换为 JsonArray 实例
        var jsonArray = JsonCanvas.AsArray();

        // 获取 JsonArray 长度
        var count = jsonArray.Count;

        // 检查索引小于数组长度
        if (intIndex < count)
        {
            // 将值序列化成 JsonNode 实例
            var jsonNodeValue = SerializeToNode(value, Options);

            // 替换指定位置的值
            if (!arrayInsert)
            {
                jsonArray[intIndex] = jsonNodeValue;
            }
            // 在指定位置插入
            else
            {
                jsonArray.Insert(intIndex, jsonNodeValue);
            }
        }
        // 检查索引是否等于长度，如果是则追加
        else if (intIndex == count)
        {
            jsonArray.Add(SerializeToNode(value, Options));
        }
        // 检查是否允许访问越界的数组，如果是则采用补位方式
        else if (Options.AllowIndexOutOfRange)
        {
            // 检查是否需要进行补位操作
            if (!Options.AutoExpandArrayWithNulls)
            {
                finalIndex = null!;
                return false;
            }

            // 补位操作
            while (jsonArray.Count < intIndex)
            {
                jsonArray.Add(null);
            }

            jsonArray.Add(SerializeToNode(value, Options));
        }
        else
        {
            ThrowIfOutOfRange(intIndex, count);
        }

        finalIndex = intIndex;
        return true;
    }

    /// <summary>
    ///     根据键删除 <see cref="JsonNode" /> 节点
    /// </summary>
    /// <param name="key">键</param>
    /// <param name="finalKey">最终移除键</param>
    /// <returns>
    ///     <see cref="bool" />
    /// </returns>
    internal bool RemoveNodeFromObject(object key, out object finalKey)
    {
        // 将键转换为字符串类型
        var stringKey = key.ToString()!;

        // 处理嵌套带空传播字符 ? 的索引键
        var memberName = ProcessNestedNullPropagationIndexKey(stringKey);

        // 将 JsonCanvas 转换为 JsonObject 实例
        var jsonObject = JsonCanvas.AsObject();

        // 移除键
        if (ObjectMethods.Remove(memberName) || jsonObject.Remove(memberName))
        {
            finalKey = memberName;
            return true;
        }

        // 检查是否允许访问不存在的属性
        if (!Options.AllowMissingProperty)
        {
            throw new KeyNotFoundException($"The property `{memberName}` was not found in the Clay.");
        }

        finalKey = null!;
        return false;
    }

    /// <summary>
    ///     根据索引删除 <see cref="JsonNode" /> 节点
    /// </summary>
    /// <param name="index">索引</param>
    /// <param name="finalIndex">最终移除索引</param>
    /// <returns>
    ///     <see cref="bool" />
    /// </returns>
    internal bool RemoveNodeFromArray(object index, out object finalIndex)
    {
        // 检查数组索引合法性
        EnsureLegalArrayIndex(index, out var intIndex);

        // 将 JsonCanvas 转换为 JsonArray 实例
        var jsonArray = JsonCanvas.AsArray();

        // 获取 JsonArray 长度
        var count = jsonArray.Count;

        // 检查索引小于数组长度
        if (intIndex < count)
        {
            jsonArray.RemoveAt(intIndex);
            finalIndex = intIndex;
            return true;
        }

        // 检查是否允许访问越界的数组索引
        if (!Options.AllowIndexOutOfRange)
        {
            ThrowIfOutOfRange(intIndex, count);
        }

        finalIndex = null!;
        return false;
    }

    /// <summary>
    ///     尝试根据键获取委托
    /// </summary>
    /// <param name="key">键</param>
    /// <param name="delegate">
    ///     <see cref="Delegate" />
    /// </param>
    /// <returns>
    ///     <see cref="bool" />
    /// </returns>
    internal bool TryGetDelegate(object key, out Delegate? @delegate)
    {
        // 检查是否是单一对象
        if (!IsObject)
        {
            @delegate = null;
            return false;
        }

        // 处理嵌套带空传播字符 ? 的索引键
        var memberName = ProcessNestedNullPropagationIndexKey(key.ToString()!);

        return ObjectMethods.TryGetValue(memberName, out @delegate);
    }

    /// <summary>
    ///     将对象序列化成 <see cref="JsonNode" /> 实例
    /// </summary>
    /// <param name="obj">
    ///     <see cref="object" />
    /// </param>
    /// <param name="options">
    ///     <see cref="ClayOptions" />
    /// </param>
    /// <returns>
    ///     <see cref="JsonNode" />
    /// </returns>
    internal static JsonNode? SerializeToNode(object? obj, ClayOptions? options = null) =>
        obj switch
        {
            null => null,
            JsonNode jsonNode => jsonNode.DeepClone(),
            // 该操作不会复制自定义委托方法
            Clay clay => clay.DeepClone(options).JsonCanvas,
            _ => JsonSerializer.SerializeToNode(obj, options?.JsonSerializerOptions)
        };

    /// <summary>
    ///     将 <see cref="JsonNode" /> 转换为对象实例
    /// </summary>
    /// <param name="jsonNode">
    ///     <see cref="JsonNode" />
    /// </param>
    /// <param name="options">
    ///     <see cref="ClayOptions" />
    /// </param>
    /// <returns>
    ///     <see cref="object" />
    /// </returns>
    internal static object? DeserializeNode(JsonNode? jsonNode, ClayOptions? options = null) =>
        jsonNode?.GetValueKind() switch
        {
            JsonValueKind.String when options?.AutoConvertToDateTime == true &&
                                      DateTime.TryParse(jsonNode.GetValue<string>(), out var dateTime) => dateTime,
            JsonValueKind.String => jsonNode.GetValue<string>(),
            JsonValueKind.Number => jsonNode.GetNumericValue(),
            JsonValueKind.True or JsonValueKind.False => jsonNode.GetValue<bool>(),
            // TODO: 避免每次获取会触发 new 操作，建议未来版本进行缓存优化
            JsonValueKind.Object or JsonValueKind.Array => new Clay(jsonNode, options),
            _ => null
        };

    /// <summary>
    ///     重建 <see cref="Clay" /> 实例
    /// </summary>
    /// <param name="options">
    ///     <see cref="ClayOptions" />
    /// </param>
    /// <returns>
    ///     <see cref="Clay" />
    /// </returns>
    internal Clay Rebuilt(ClayOptions? options = null)
    {
        // 初始化 ClayOptions 实例
        var clayOptions = options ?? ClayOptions.Default;

        // 如果新旧选项对于属性名称大小写不敏感的设置相同，则无需重建 JsonCanvas；否则重建。
        if (clayOptions.PropertyNameCaseInsensitive != Options.PropertyNameCaseInsensitive)
        {
            // 创建 JsonNode 选项
            var (jsonNodeOptions, jsonDocumentOptions) = CreateJsonNodeOptions(clayOptions);

            JsonCanvas = JsonNode.Parse(JsonCanvas.ToJsonString(), jsonNodeOptions, jsonDocumentOptions)!;
        }

        Options = clayOptions;

        return this;
    }

    /// <summary>
    ///     处理嵌套带空传播字符 <c>?</c> 的索引键
    /// </summary>
    /// <param name="indexKey">索引键</param>
    /// <returns>
    ///     <see cref="string" />
    /// </returns>
    internal string ProcessNestedNullPropagationIndexKey(string indexKey) =>
        !Options.AutoCreateNestedObjects ? indexKey : indexKey.TrimEnd('?');

    /// <summary>
    ///     枚举 <see cref="JsonCanvas" /> 作为对象时的键值对
    /// </summary>
    /// <returns>
    ///     <see cref="IEnumerable{T}" />
    /// </returns>
    internal IEnumerable<KeyValuePair<string, dynamic?>> EnumerateObject()
    {
        // 检查是否是集合（数组）实例调用
        ThrowIfMethodCalledOnArrayCollection(nameof(EnumerateObject));

        // 获取循环访问 JsonObject 的枚举数
        using var enumerator = JsonCanvas.AsObject().GetEnumerator();

        // 遍历 JsonObject 每个键值对
        while (enumerator.MoveNext())
        {
            // 获取当前的键值对
            var current = enumerator.Current;

            yield return new KeyValuePair<string, dynamic?>(current.Key, DeserializeNode(current.Value, Options));
        }
    }

    /// <summary>
    ///     枚举 <see cref="JsonCanvas" /> 作为数组时的元素
    /// </summary>
    /// <returns>
    ///     <see cref="IEnumerable{T}" />
    /// </returns>
    internal IEnumerable<KeyValuePair<int, dynamic?>> EnumerateArray()
    {
        // 检查是否是单一对象实例调用
        ThrowIfMethodCalledOnSingleObject(nameof(EnumerateArray));

        // 获取循环访问 JsonArray 的枚举数
        using var enumerator = JsonCanvas.AsArray().GetEnumerator();

        // 定义索引变量用于记录数组中元素的位置
        var index = 0;

        // 遍历 JsonArray 每个元素
        while (enumerator.MoveNext())
        {
            // 获取当前的元素
            var current = enumerator.Current;

            yield return new KeyValuePair<int, dynamic?>(index++, DeserializeNode(current, Options));
        }
    }

    /// <summary>
    ///     创建 <see cref="JsonNode" /> 选项
    /// </summary>
    /// <param name="options">
    ///     <see cref="ClayOptions" />
    /// </param>
    /// <returns>
    ///     <see cref="Tuple{T1,T2}" />
    /// </returns>
    internal static Tuple<JsonNodeOptions, JsonDocumentOptions> CreateJsonNodeOptions(ClayOptions options)
    {
        // 空检查
        ArgumentNullException.ThrowIfNull(options);

        // 初始化 JsonNodeOptions 实例
        var jsonNodeOptions =
            new JsonNodeOptions { PropertyNameCaseInsensitive = options.PropertyNameCaseInsensitive };

        // 初始化 JsonDocumentOptions 实例
        var jsonDocumentOptions = new JsonDocumentOptions
        {
            AllowTrailingCommas = options.JsonSerializerOptions.AllowTrailingCommas,
            CommentHandling = options.JsonSerializerOptions.ReadCommentHandling,
            MaxDepth = options.JsonSerializerOptions.MaxDepth
        };

        return Tuple.Create(jsonNodeOptions, jsonDocumentOptions);
    }

    /// <summary>
    ///     尝试将 <see cref="JsonNode" /> 中的键值对字典转换为 <see cref="JsonObject" />
    /// </summary>
    /// <param name="jsonNode">
    ///     <see cref="JsonNode" />
    /// </param>
    /// <param name="jsonNodeOptions">
    ///     <see cref="JsonNodeOptions" />
    /// </param>
    /// <param name="jsonDocumentOptions">
    ///     <see cref="JsonDocumentOptions" />
    /// </param>
    /// <param name="jsonObject">
    ///     <see cref="JsonObject" />
    /// </param>
    /// <returns>
    ///     <see cref="bool" />
    /// </returns>
    internal static bool TryConvertJsonArrayToDictionaryObject(JsonNode? jsonNode, JsonNodeOptions jsonNodeOptions,
        JsonDocumentOptions jsonDocumentOptions, [NotNullWhen(true)] out JsonObject? jsonObject)
    {
        // 如果不是数组或者为空，则无法转换
        if (jsonNode?.GetValueKind() is not JsonValueKind.Array || jsonNode.AsArray().Count == 0)
        {
            jsonObject = null;
            return false;
        }

        // 将 JsonCanvas 转换为 JsonArray 实例
        var jsonArray = jsonNode.AsArray();

        // 初始化 JsonObject 实例
        jsonObject = new JsonObject(jsonNodeOptions);

        // 初始化 JsonNodeOptions 实例（忽略大小写）
        var caseInsensitiveJsonNodeOptions = new JsonNodeOptions { PropertyNameCaseInsensitive = true };

        // 遍历集合的每一项
        foreach (var item in jsonArray)
        {
            // 如果当前项不是一个有效的对象或不包含两个属性，则不能转换
            if (item?.GetValueKind() is not JsonValueKind.Object || item.AsObject().Count != 2)
            {
                jsonObject = null;
                return false;
            }

            // 使用大小写不敏感的选项克隆当前项
            var itemObject = JsonNode.Parse(item.ToJsonString(), caseInsensitiveJsonNodeOptions, jsonDocumentOptions)
                ?.AsObject()!;

            // 检查当前项是否包含有效的 key 和 value 属性
            if (!itemObject.TryGetPropertyValue("key", out var keyNode) ||
                keyNode?.GetValueKind() is not JsonValueKind.String ||
                !itemObject.TryGetPropertyValue("value", out var valueNode))
            {
                jsonObject = null;
                return false;
            }

            // 将键值对添加 JsonObject 实例中
            jsonObject[keyNode.GetValue<string>()] = valueNode?.DeepClone();
        }

        return true;
    }

    /// <summary>
    ///     抛出越界的数组索引异常
    /// </summary>
    /// <param name="index">索引</param>
    /// <param name="count">数组长度</param>
    /// <exception cref="ArgumentOutOfRangeException"></exception>
    [DoesNotReturn]
    internal static void ThrowIfOutOfRange(int index, int count)
    {
        // 构建数组越界的错误细节
        var errorDetails = count switch
        {
            0 => "The array is empty, so no indices are valid.",
            1 => "The array contains a single element at index 0.",
            _ => $"The allowed index range for the array is 0 to {count - 1}."
        };

        throw new ArgumentOutOfRangeException(nameof(index), $"Index `{index}` is out of range. {errorDetails}");
    }

    /// <summary>
    ///     检查数组索引合法性
    /// </summary>
    /// <param name="index"><see cref="object" /> 类型索引</param>
    /// <param name="intIndex">整数索引</param>
    /// <exception cref="InvalidOperationException"></exception>
    /// <exception cref="ArgumentOutOfRangeException"></exception>
    internal static void EnsureLegalArrayIndex(object index, out int intIndex)
    {
        // 将索引转换为字符串类型
        var stringIndex = index.ToString();

        // 尝试将字符串索引转换为整数索引
        if (!int.TryParse(stringIndex, out intIndex))
        {
            throw new InvalidOperationException(
                $"The property `{stringIndex}` was not found in the Clay or is not a valid array index.");
        }

        // 检查索引是否小于 0
        if (intIndex < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(index),
                "Negative indices are not allowed. Index must be greater than or equal to 0.");
        }
    }

    /// <summary>
    ///     确保当前实例不在只读模式下。如果实例是只读的，则抛出异常
    /// </summary>
    /// <exception cref="InvalidOperationException"></exception>
    internal void EnsureNotReadOnlyBeforeModify()
    {
        // 检查是否是只读模式
        if (Options.ReadOnly)
        {
            throw new InvalidOperationException(
                "Operation cannot be performed because the Clay is in read-only mode.");
        }
    }

    /// <summary>
    ///     如果当前实例是单一对象且尝试调用不支持的操作，则抛出异常
    /// </summary>
    /// <param name="method">方法名</param>
    /// <exception cref="NotSupportedException"></exception>
    internal void ThrowIfMethodCalledOnSingleObject(string method)
    {
        // 检查是否是单一对象
        if (IsObject)
        {
            throw new NotSupportedException(
                $"`{method}` method can only be used for array or collection operations.");
        }
    }

    /// <summary>
    ///     如果当前实例是集合（数组）且尝试调用不支持的操作，则抛出异常
    /// </summary>
    /// <param name="method">方法名</param>
    /// <exception cref="NotSupportedException"></exception>
    internal void ThrowIfMethodCalledOnArrayCollection(string method)
    {
        // 检查是否是集合（数组）
        if (IsArray)
        {
            throw new NotSupportedException(
                $"`{method}` method can only be used for single object operations.");
        }
    }

    /// <summary>
    ///     检查类型是否是 <see cref="Clay" /> 类型
    /// </summary>
    /// <param name="type">
    ///     <see cref="Type" />
    /// </param>
    /// <returns>
    ///     <see cref="bool" />
    /// </returns>
    internal static bool IsClay(Type type) => type == typeof(Clay) || typeof(Clay).IsAssignableFrom(type);
}