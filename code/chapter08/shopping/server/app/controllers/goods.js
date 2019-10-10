'use strict';

import GoodsService from '../services/goods';
import UserService from '../services/user';
import LikeService from '../services/like';

class GoodsController {

    static async create(ctx, next) {
        const req = ctx.request;

        const title = req.body['title'];
        const content = req.body['content'];
        const thumbnail = req.body['thumbnail'];
        const cid = req.body['cid'];
        const token = req.header['authorization'].substring(7);
        const userData = UserService.getUserDataFromToken(token);
        const uid = userData.id;

        let ret;
        try {
            ret = ctx.ok(await GoodsService.create(title, content, thumbnail, cid, uid));
        } catch (ex) {
            ret = ctx.ok({
                errCode: ex.original && ex.original.errno || -10000,
                errMsg: ex.original && ex.original.code || "unknown error!"
            });
        }

        ctx.body = ret;

        await next;
    }

    static async update(ctx, next) {
        const req = ctx.request;
        const id = parseInt(ctx.params.id);
        const title = req.body['title'];
        const content = req.body['content'];
        const thumbnail = req.body['thumbnail'];
        const cid = req.body['cid'];
        
        const token = req.header['authorization'].substring(7);
        const userData = UserService.getUserDataFromToken(token);
        const uid = userData.id;
        const type = userData.type;


        let articleData = await GoodsService.detail(id);
        articleData = articleData.toJSON();

        if (type === 0 || type === 1 || articleData.uid === uid) {
            let ret;
            try {
                ret = ctx.ok(await GoodsService.update(id, title, content, thumbnail, cid));
            } catch (ex) {
                ret = ex;
            }

            ctx.body = ret;
        } else {
            ctx.body = ctx.forbidden();
        }

        await next;
    }

    static async top(ctx, next) {
        const req = ctx.request;
        const id = parseInt(ctx.params.id);
        const top = req.body['top'];

        const token = req.header['authorization'].substring(7);
        const userData = UserService.getUserDataFromToken(token);
        const type = userData.type;

        if (type === 0 || type === 1) {
            let ret;
            try {
                ret = ctx.ok(await GoodsService.setTop(id, top));
            } catch (ex) {
                ret = ex;
            }

            ctx.body = ret;
        } else {
            ctx.body = ctx.forbidden();
        }

        await next;
    }

    static async setWeekly(ctx, next) {
        const req = ctx.request;
        const id = parseInt(ctx.params.id);
        const isWeekly = req.body['is_weekly'];

        const token = req.header['authorization'].substring(7);
        const userData = UserService.getUserDataFromToken(token);
        const type = userData.type;

        if (type === 0 || type === 1) {
            let ret;
            try {
                ret = ctx.ok(await GoodsService.setWeekly(id, isWeekly));
            } catch (ex) {
                ret = ex;
            }

            ctx.body = ret;
        } else {
            ctx.body = ctx.forbidden();
        }

        await next;
    }

    static async detail(ctx, next) {
        const req = ctx.request;

        const id = parseInt(ctx.params.id);
        const token = req.header['authorization'] && req.header['authorization'].substring(7);

        let canEdit = 0;
        let hasStarred = 0;
        let ret;
        let articleData = await GoodsService.detail(id);
        try {
            articleData = articleData.toJSON();
            if (token) {
                const userData = UserService.getUserDataFromToken(token);
                const uid = userData.id;
                const type = userData.type;
                let starData = await LikeService.detail(id, uid);
                starData = starData && starData.toJSON();
                if (type === 0 || type === 1 || articleData.uid === uid) {
                    canEdit = 1;
                }

                if (starData && starData.id) {
                    hasStarred = 1;
                }
            }
            articleData.canEdit = canEdit;
            articleData.hasStarred = hasStarred;

            ret = ctx.ok(articleData);
            
        } catch (ex) {
            ret = ctx.ok({
                errCode: ex.original && ex.original.errno || -10000,
                errMsg: ex.original && ex.original.code || "unknown error!"
            });
        }

        ctx.body = ret;

        next().then(async () => {
            await GoodsService.updateVisitCount(id, articleData.visitCount);
        });
    }

    /**
     * 文章列表查询
     * @param {*} ctx 
     * @param {*} next 
     */
    static async list(ctx, next) {
        const page = parseInt(ctx.query['page']);
        const pageSize = parseInt(ctx.query['per_page']);
        
        let ret;

        try {
            ret = ctx.ok(await GoodsService.list(page, pageSize));
        } catch (ex) {
            ret = ctx.ok({
                errCode: ex.original && ex.original.errno || -10000,
                errMsg: ex.original && ex.original.code || "unknown error!"
            });
        }
        ctx.body = ret;

        await next;
    }    

        /**
     * 文章列表查询
     * @param {*} ctx 
     * @param {*} next 
     */
    static async listWeekly(ctx, next) {
        const page = parseInt(ctx.query['page']);
        const pageSize = parseInt(ctx.query['per_page']);
        
        let ret;

        try {
            ret = ctx.ok(await GoodsService.listWeekly(page, pageSize));
        } catch (ex) {
            ret = ctx.ok({
                errCode: ex.original && ex.original.errno || -10000,
                errMsg: ex.original && ex.original.code || "unknown error!"
            });
        }

        ctx.body = ret;

        await next;
    }    
}

export default {
    create: GoodsController.create,
    update: GoodsController.update,
    detail: GoodsController.detail,
    list: GoodsController.list,
    listWeekly: GoodsController.listWeekly,
    top: GoodsController.top,
    setWeekly: GoodsController.setWeekly
};
