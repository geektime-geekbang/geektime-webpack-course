'use strict';

import LikeService from '../services/like';
import UserService from '../services/user';

class LikeController {

    static async create(ctx, next) {
        const req = ctx.request;

        const aid = parseInt(ctx.params.id);
        const token = req.header['authorization'].substring(7);
        const userData = UserService.getUserDataFromToken(token);
        const uid = userData.id;

        let ret;
        try {
            ret = ctx.ok(await LikeService.create(aid, uid));
        } catch (ex) {
            ret = ctx.ok({
                errCode: ex.original && ex.original.errno || -10000,
                errMsg: ex.original && ex.original.code || "unknown error!"
            });
        }

        ctx.body = ret;

        await next;
    }

    static async delete(ctx, next) {
        const req = ctx.request;

        const aid = parseInt(ctx.params.id);
        const token = req.header['authorization'].substring(7);
        const userData = UserService.getUserDataFromToken(token);
        const uid = userData.id;
        
        let ret;
        try {
            ret = ctx.ok(await LikeService.delete(aid, uid));
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
    create: LikeController.create,
    delete: LikeController.delete
};