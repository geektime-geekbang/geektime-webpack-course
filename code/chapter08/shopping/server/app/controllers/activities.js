'use strict';

import ActivitiesService from '../services/activities';

class ActivitiesController {

    static async create(ctx, next) {
        const req = ctx.request;
        const { title, content, headUrl, bannerUrl, jumpUrl, time, isNow, showBanner } = req.body;

        let ret;
        try {
            ret = ctx.ok(await ActivitiesService.create(title, content, headUrl, bannerUrl, jumpUrl, time, isNow, showBanner));
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
        const { id, title, content, headUrl, bannerUrl, jumpUrl, time, isNow, showBanner } = req.body;

        let ret;
        try {
            ret = ctx.ok(await ActivitiesService.update(id, title, content, headUrl, bannerUrl, jumpUrl, time, isNow, showBanner));
        } catch (ex) {
            ret = ex;
        }
        ctx.body = ret;
        await next;
    }

    static async delete(ctx, next) {
        const req = ctx.request;
        const id = parseInt(req.body.id);
        let ret;
        try {
            ret = ctx.ok(await ActivitiesService.delete(id));
        } catch (ex) {
            ret = ex;
        }
        ctx.body = ret;
        await next;
    }

    static async list(ctx, next) {
        let ret;
        try {
            ret = ctx.ok(await ActivitiesService.list());
        } catch (ex) {
            console.log(ex);
            ret = ex;
        }
        ctx.body = ret;
        await next;
    }
}

export default {
    create: ActivitiesController.create,
    update: ActivitiesController.update,
    delete: ActivitiesController.delete,
    list: ActivitiesController.list,
};
