'use strict';

import OrderService from '../services/order';
import OrderGoodService from '../services/order_goods';
import UserService from '../services/user';

class OrderController {

    static async create(ctx, next) {
        const req = ctx.request;
        const { body } = req;
        const gids = body.gids;

        const token = req.header['authorization'].substring(7);
        const userData = UserService.getUserDataFromToken(token);
        const uid = userData.id;

        let ret;
        try {
            const orderResult = await OrderService.create(uid);
            ret = ctx.ok(orderResult);
            const orderId = orderResult[null];
            await gids.forEach((gid) => {
                OrderGoodService.create(orderId, parseInt(gid));
            });
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

        let ret;

        try {
            ret = ctx.ok(await OrderService.list(page, pageSize));
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
    create: OrderController.create,
    list: OrderController.list
};