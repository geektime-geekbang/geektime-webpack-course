'use strict';

import CommentService from '../services/comment';
import UserService from '../services/user';

class CommentController {

    static async create(ctx, next) {
        const req = ctx.request;

        const aid = parseInt(ctx.params.id);
        const content = req.body['content'];
        const token = req.header['authorization'].substring(7);
        const userData = UserService.getUserDataFromToken(token);
        const uid = userData.id;

        let ret;
        try {
            ret = ctx.ok(await CommentService.create(aid, uid, content));
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
    static async list(ctx, next) {
        const page = parseInt(ctx.query['page']);
        const pageSize = parseInt(ctx.query['per_page']);
        const aid = parseInt(ctx.params.id);

        let ret;

        try {
            ret = ctx.ok(await CommentService.list(page, pageSize, aid));
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
    create: CommentController.create,
    list: CommentController.list
};