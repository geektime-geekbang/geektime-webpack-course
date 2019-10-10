import {
    shareToJuejin, shareToZhihu, shareToKm
} from '../services/share';

// 分享平台
const ZHIHU = 'zhihu'
const JUEJIN = 'juejin'
const KM = 'km'

class ShareController {
    /**
     * 更新分享，将文章分享到还未分享的平台上
     */
    static async update (ctx, next) {
        const {
            // 分享到哪些平台，参数 platforms，值为 zhihu,juejin,km 的各种组合
            platforms = [],
            loginMethod = 0
        } = ctx.request.body
        
        const articleId = ctx.params.id

        const tasks = platforms.map(platform => {
            const task = platform === JUEJIN ? shareToJuejin({ articleId, loginMethod }) :
            platform === ZHIHU  ? shareToZhihu({ articleId, loginMethod })  :
                         platform === KM     ? shareToKm({ articleId, loginMethod })
                                             : Promise.resolve()
            // 保证每个 Promise 都能够有决议
            return task.then(data => ({
                status: 'success',
                data
            }), error => ({
                status: 'failed',
                error
            }))
        })

        const shareResults = await Promise.all(tasks)
        await next()
    }
}

export default {
    update: ShareController.update
}