'use strict';

import CategoryService from '../services/category';
import UserService from '../services/user';

class CategoryController {

    static async create(ctx, next) {
        const req = ctx.request;

        const name = req.body['name'];
        const token = req.header['authorization'].substring(7);
        const userData = UserService.getUserDataFromToken(token);
        const type = userData.type;

        if (type !== 0 && type !== 1) {
            ctx.body = ctx.forbidden();
        } else {
            let ret;
            try {
                ret = ctx.ok(await CategoryService.create(name));
            } catch (ex) {
                ret = ctx.ok({
                    errCode: ex.original && ex.original.errno || -10000,
                    errMsg: ex.original && ex.original.code || "unknown error!"
                });
            }
    
            ctx.body = ret;
        }
        
        await next;
    }

    /**
     * 文章类别查询
     * @param {*} ctx 
     * @param {*} next 
     */
    static async list(ctx, next) {
        
        let ret;

        try {
            ret = ctx.ok(await CategoryService.list());
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
    create: CategoryController.create,
    list: CategoryController.list
};