﻿// 框架名称：Fur
// 框架作者：百小僧
// 框架版本：1.0.0
// 开源协议：MIT
// 项目地址：https://gitee.com/monksoul/Fur

using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Fur.DatabaseAccessor
{
    /// <summary>
    /// 可删除仓储接口
    /// </summary>
    /// <typeparam name="TEntity">实体类型</typeparam>
    /// <typeparam name="TDbContextLocator">数据库实体定位器</typeparam>
    public partial interface IDeletableRepository<TEntity, TDbContextLocator>
        where TEntity : class, IEntityBase, new()
        where TDbContextLocator : class, IDbContextLocator, new()
    {
        /// <summary>
        /// 删除一条记录
        /// </summary>
        /// <param name="entity">实体</param>
        /// <returns>代理中的实体</returns>
        EntityEntry<TEntity> Delete(TEntity entity);

        /// <summary>
        /// 删除多条记录
        /// </summary>
        /// <param name="entities">多个实体</param>
        void Delete(params TEntity[] entities);

        /// <summary>
        /// 删除多条记录
        /// </summary>
        /// <param name="entities">多个实体</param>
        void Delete(IEnumerable<TEntity> entities);

        /// <summary>
        /// 删除一条记录
        /// </summary>
        /// <param name="entity">实体</param>
        /// <returns>代理中的实体</returns>
        Task<EntityEntry<TEntity>> DeleteAsync(TEntity entity);

        /// <summary>
        /// 删除多条记录
        /// </summary>
        /// <param name="entities">多个实体</param>
        /// <returns>Task</returns>
        Task DeleteAsync(params TEntity[] entities);

        /// <summary>
        /// 删除多条记录
        /// </summary>
        /// <param name="entities">多个实体</param>
        /// <returns>Task</returns>
        Task DeleteAsync(IEnumerable<TEntity> entities);

        /// <summary>
        /// 删除一条记录并立即提交
        /// </summary>
        /// <param name="entity">实体</param>
        /// <returns>代理中的实体</returns>
        EntityEntry<TEntity> DeleteNow(TEntity entity);

        /// <summary>
        /// 删除一条记录并立即提交
        /// </summary>
        /// <param name="entity">实体</param>
        /// <param name="acceptAllChangesOnSuccess">接受所有更改</param>
        /// <returns></returns>
        EntityEntry<TEntity> DeleteNow(TEntity entity, bool acceptAllChangesOnSuccess);

        /// <summary>
        /// 删除多条记录并立即提交
        /// </summary>
        /// <param name="entities">多个实体</param>
        void DeleteNow(params TEntity[] entities);

        /// <summary>
        /// 删除多条记录并立即提交
        /// </summary>
        /// <param name="entities">多个实体</param>
        /// <param name="acceptAllChangesOnSuccess">接受所有更改</param>
        void DeleteNow(TEntity[] entities, bool acceptAllChangesOnSuccess);

        /// <summary>
        /// 删除多条记录并立即提交
        /// </summary>
        /// <param name="entities">多个实体</param>
        void DeleteNow(IEnumerable<TEntity> entities);

        /// <summary>
        /// 删除多条记录并立即提交
        /// </summary>
        /// <param name="entities">多个实体</param>
        /// <param name="acceptAllChangesOnSuccess">接受所有更改</param>
        void DeleteNow(IEnumerable<TEntity> entities, bool acceptAllChangesOnSuccess);

        /// <summary>
        /// 删除一条记录并立即提交
        /// </summary>
        /// <param name="entity">实体</param>
        /// <param name="cancellationToken">取消异步令牌</param>
        /// <returns>代理中的实体</returns>
        Task<EntityEntry<TEntity>> DeleteNowAsync(TEntity entity, CancellationToken cancellationToken = default);

        /// <summary>
        /// 删除一条记录并立即提交
        /// </summary>
        /// <param name="entity">实体</param>
        /// <param name="acceptAllChangesOnSuccess">接受所有更改</param>
        /// <param name="cancellationToken">取消异步令牌</param>
        /// <returns>代理中的实体</returns>
        Task<EntityEntry<TEntity>> DeleteNowAsync(TEntity entity, bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default);

        /// <summary>
        /// 删除多条记录并立即提交
        /// </summary>
        /// <param name="entities">多个实体</param>
        /// <returns>Task</returns>
        Task DeleteNowAsync(params TEntity[] entities);

        /// <summary>
        /// 删除多条记录并立即提交
        /// </summary>
        /// <param name="entities">多个实体</param>
        /// <param name="cancellationToken">取消异步令牌</param>
        /// <returns>Task</returns>
        Task DeleteNowAsync(TEntity[] entities, CancellationToken cancellationToken = default);

        /// <summary>
        /// 删除多条记录并立即提交
        /// </summary>
        /// <param name="entities">多个实体</param>
        /// <param name="acceptAllChangesOnSuccess">接受所有更改</param>
        /// <param name="cancellationToken">取消异步令牌</param>
        /// <returns>Task</returns>
        Task DeleteNowAsync(TEntity[] entities, bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default);

        /// <summary>
        /// 删除多条记录并立即提交
        /// </summary>
        /// <param name="entities">多个实体</param>
        /// <param name="cancellationToken">取消异步令牌</param>
        /// <returns>Task</returns>
        Task DeleteNowAsync(IEnumerable<TEntity> entities, CancellationToken cancellationToken = default);

        /// <summary>
        /// 删除多条记录并立即提交
        /// </summary>
        /// <param name="entities">多个实体</param>
        /// <param name="acceptAllChangesOnSuccess">接受所有更改</param>
        /// <param name="cancellationToken">取消异步令牌</param>
        /// <returns>Task</returns>
        Task DeleteNowAsync(IEnumerable<TEntity> entities, bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default);

        /// <summary>
        /// 根据主键删除一条记录
        /// </summary>
        /// <param name="key">主键</param>
        void Delete(object key);

        /// <summary>
        /// 根据主键删除一条记录
        /// </summary>
        /// <param name="key">主键</param>
        /// <param name="cancellationToken">异步取消令牌</param>
        /// <returns>Task</returns>
        Task DeleteAsync(object key, CancellationToken cancellationToken = default);

        /// <summary>
        /// 根据主键删除一条记录并立即提交
        /// </summary>
        /// <param name="key">主键</param>
        void DeleteNow(object key);

        /// <summary>
        /// 根据主键删除一条记录并立即提交
        /// </summary>
        /// <param name="key">主键</param>
        /// <param name="acceptAllChangesOnSuccess">接受所有更改</param>
        void DeleteNow(object key, bool acceptAllChangesOnSuccess);

        /// <summary>
        /// 根据主键删除一条记录并立即提交
        /// </summary>
        /// <param name="key">主键</param>
        /// <param name="cancellationToken">异步取消令牌</param>
        /// <returns></returns>
        Task DeleteNowAsync(object key, CancellationToken cancellationToken = default);

        /// <summary>
        /// 根据主键删除一条记录并立即提交
        /// </summary>
        /// <param name="key">主键</param>
        /// <param name="acceptAllChangesOnSuccess">接受所有更改</param>
        /// <param name="cancellationToken">异步取消令牌</param>
        /// <returns></returns>
        Task DeleteNowAsync(object key, bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default);

        /// <summary>
        /// 根据主键删除一条记录
        /// </summary>
        /// <param name="key">主键</param>
        void DeleteSafely(object key);

        /// <summary>
        /// 根据主键删除一条记录
        /// </summary>
        /// <param name="key">主键</param>
        /// <param name="cancellationToken">异步取消令牌</param>
        /// <returns>Task</returns>
        Task DeleteSafelyAsync(object key, CancellationToken cancellationToken = default);

        /// <summary>
        /// 根据主键删除一条记录并立即提交
        /// </summary>
        /// <param name="key">主键</param>
        void DeleteSafelyNow(object key);

        /// <summary>
        /// 根据主键删除一条记录并立即提交
        /// </summary>
        /// <param name="key">主键</param>
        /// <param name="acceptAllChangesOnSuccess">接受所有更改</param>
        void DeleteSafelyNow(object key, bool acceptAllChangesOnSuccess);

        /// <summary>
        /// 根据主键删除一条记录并立即提交
        /// </summary>
        /// <param name="key">主键</param>
        /// <param name="cancellationToken">异步取消令牌</param>
        /// <returns></returns>
        Task DeleteSafelyNowAsync(object key, CancellationToken cancellationToken = default);

        /// <summary>
        /// 根据主键删除一条记录并立即提交
        /// </summary>
        /// <param name="key">主键</param>
        /// <param name="acceptAllChangesOnSuccess">接受所有更改</param>
        /// <param name="cancellationToken">异步取消令牌</param>
        /// <returns></returns>
        Task DeleteSafelyNowAsync(object key, bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default);
    }
}