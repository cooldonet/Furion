﻿// 版权归百小僧及百签科技（广东）有限公司所有。
// 
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证。

namespace Furion.HttpRemote;

/// <summary>
///     <inheritdoc cref="IHttpRemoteService" />
/// </summary>
internal sealed partial class HttpRemoteService
{
    /// <inheritdoc />
    public HttpResponseMessage Get(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => Get(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpResponseMessage Get(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send(HttpRequestBuilder.Create(HttpMethod.Get, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> GetAsync(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => GetAsync(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> GetAsync(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync(HttpRequestBuilder.Create(HttpMethod.Get, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public TResult? GetAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        GetAs<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public TResult? GetAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAs<TResult>(HttpRequestBuilder.Create(HttpMethod.Get, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> GetAsAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        GetAsAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> GetAsAsync<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Get, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Get<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        Get<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Get<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send<TResult>(HttpRequestBuilder.Create(HttpMethod.Get, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> GetAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        GetAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> GetAsync<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Get, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public HttpResponseMessage Put(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => Put(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpResponseMessage Put(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send(HttpRequestBuilder.Create(HttpMethod.Put, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> PutAsync(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => PutAsync(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> PutAsync(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync(HttpRequestBuilder.Create(HttpMethod.Put, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public TResult? PutAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        PutAs<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public TResult? PutAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAs<TResult>(HttpRequestBuilder.Create(HttpMethod.Put, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> PutAsAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        PutAsAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> PutAsAsync<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Put, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Put<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        Put<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Put<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send<TResult>(HttpRequestBuilder.Create(HttpMethod.Put, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> PutAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        PutAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> PutAsync<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Put, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public HttpResponseMessage Post(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => Post(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpResponseMessage Post(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send(HttpRequestBuilder.Create(HttpMethod.Post, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> PostAsync(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => PostAsync(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> PostAsync(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync(HttpRequestBuilder.Create(HttpMethod.Post, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public TResult? PostAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        PostAs<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public TResult? PostAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAs<TResult>(HttpRequestBuilder.Create(HttpMethod.Post, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> PostAsAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        PostAsAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> PostAsAsync<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Post, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Post<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        Post<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Post<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send<TResult>(HttpRequestBuilder.Create(HttpMethod.Post, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> PostAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        PostAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> PostAsync<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Post, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public HttpResponseMessage Delete(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => Delete(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpResponseMessage Delete(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send(HttpRequestBuilder.Create(HttpMethod.Delete, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> DeleteAsync(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => DeleteAsync(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> DeleteAsync(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync(HttpRequestBuilder.Create(HttpMethod.Delete, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public TResult? DeleteAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        DeleteAs<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public TResult? DeleteAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAs<TResult>(HttpRequestBuilder.Create(HttpMethod.Delete, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> DeleteAsAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        DeleteAsAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> DeleteAsAsync<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Delete, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Delete<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        Delete<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Delete<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send<TResult>(HttpRequestBuilder.Create(HttpMethod.Delete, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> DeleteAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        DeleteAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> DeleteAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Delete, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public HttpResponseMessage Head(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => Head(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpResponseMessage Head(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send(HttpRequestBuilder.Create(HttpMethod.Head, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> HeadAsync(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => HeadAsync(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> HeadAsync(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync(HttpRequestBuilder.Create(HttpMethod.Head, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public TResult? HeadAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        HeadAs<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public TResult? HeadAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAs<TResult>(HttpRequestBuilder.Create(HttpMethod.Head, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> HeadAsAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        HeadAsAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> HeadAsAsync<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Head, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Head<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        Head<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Head<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send<TResult>(HttpRequestBuilder.Create(HttpMethod.Head, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> HeadAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        HeadAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> HeadAsync<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Head, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public HttpResponseMessage Options(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => Options(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpResponseMessage Options(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send(HttpRequestBuilder.Create(HttpMethod.Options, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> OptionsAsync(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => OptionsAsync(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> OptionsAsync(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync(HttpRequestBuilder.Create(HttpMethod.Options, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public TResult? OptionsAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        OptionsAs<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public TResult? OptionsAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAs<TResult>(HttpRequestBuilder.Create(HttpMethod.Options, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> OptionsAsAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        OptionsAsAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> OptionsAsAsync<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Options, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Options<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        Options<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Options<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send<TResult>(HttpRequestBuilder.Create(HttpMethod.Options, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> OptionsAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        OptionsAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> OptionsAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Options, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public HttpResponseMessage Trace(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => Trace(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpResponseMessage Trace(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send(HttpRequestBuilder.Create(HttpMethod.Trace, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> TraceAsync(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => TraceAsync(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> TraceAsync(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync(HttpRequestBuilder.Create(HttpMethod.Trace, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public TResult? TraceAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        TraceAs<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public TResult? TraceAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAs<TResult>(HttpRequestBuilder.Create(HttpMethod.Trace, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> TraceAsAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        TraceAsAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> TraceAsAsync<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Trace, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Trace<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        Trace<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Trace<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send<TResult>(HttpRequestBuilder.Create(HttpMethod.Trace, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> TraceAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        TraceAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> TraceAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Trace, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public HttpResponseMessage Patch(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => Patch(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpResponseMessage Patch(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send(HttpRequestBuilder.Create(HttpMethod.Patch, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> PatchAsync(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) => PatchAsync(requestUri, configure,
        HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpResponseMessage> PatchAsync(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync(HttpRequestBuilder.Create(HttpMethod.Patch, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public TResult? PatchAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        PatchAs<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public TResult? PatchAs<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAs<TResult>(HttpRequestBuilder.Create(HttpMethod.Patch, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> PatchAsAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        PatchAsAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<TResult?> PatchAsAsync<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Patch, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Patch<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure = null,
        CancellationToken cancellationToken = default) =>
        Patch<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public HttpRemoteResult<TResult> Patch<TResult>(string? requestUri, Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        Send<TResult>(HttpRequestBuilder.Create(HttpMethod.Patch, requestUri, configure), completionOption,
            cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> PatchAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure = null, CancellationToken cancellationToken = default) =>
        PatchAsync<TResult>(requestUri, configure, HttpCompletionOption.ResponseContentRead, cancellationToken);

    /// <inheritdoc />
    public Task<HttpRemoteResult<TResult>> PatchAsync<TResult>(string? requestUri,
        Action<HttpRequestBuilder>? configure,
        HttpCompletionOption completionOption,
        CancellationToken cancellationToken = default) =>
        SendAsync<TResult>(HttpRequestBuilder.Create(HttpMethod.Patch, requestUri, configure), completionOption,
            cancellationToken);
}