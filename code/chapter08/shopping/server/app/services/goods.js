import Goods from '../models/goods';
import Category from '../models/category';
import User from '../models/user';
import Like from '../models/like';

class GoodsService {
    
    /**
     * 添加一篇文章
     * @param {*} title 
     * @param {*} content 
     * @param {*} thumbnail 
     * @param {*} cid 
     */
    static async create(title, content, thumbnail, cid, uid) {
        return new Promise((resolve, reject) => {
            Goods
                .create({
                    title: title,
                    description: content.substring(0, 400),
                    content: content,
                    thumbnail: thumbnail,
                    cid: cid,
                    uid: uid,
                    isWeekly: 0,
                    gmtCreate: new Date()
                })
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    /**
     * 更新一篇文章
     * @param {*} id 
     * @param {*} title 
     * @param {*} content 
     * @param {*} thumbnail 
     * @param {*} isWeekly 
     */
    static async update(id, title, content, thumbnail, cid) {
        return new Promise((resolve, reject) => {
            Goods
                .update({
                    title: title,
                    description: content.substring(0, 400),
                    content: content,
                    thumbnail: thumbnail,
                    cid: cid,
                    gmtUpdate: new Date()
                }, {
                    where: {
                        id: id
                    }
                })
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    /**
     * 更新一篇文章
     * @param {*} id 
     * @param {*} top 
     */
    static async setTop(id, top) {
        return new Promise((resolve, reject) => {
            Goods
                .update({
                    top: top,
                    gmtUpdate: new Date()
                }, {
                    where: {
                        id: id
                    }
                })
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    /**
     * 更新一篇文章
     * @param {*} id 
     * @param {*} top 
     */
    static async setWeekly(id, isWeekly) {
        return new Promise((resolve, reject) => {
            Goods
                .update({
                    isWeekly: isWeekly,
                    gmtUpdate: new Date()
                }, {
                    where: {
                        id: id
                    }
                })
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    static async updateVisitCount(id, visitCount) {
        console.log(visitCount)
        return new Promise((resolve, reject) => {
            Goods
                .update({
                    visitCount: visitCount + 1
                }, {
                    where: {
                        id: id
                    }
                })
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    /**
     * 查询某一篇文章的详细内容
     * @param {*} id 
     */
    static async detail(id) {
        return new Promise((resolve, reject) => {
            Goods
                .findOne({
                    where: {
                        id: id
                    },
                    include: [
                        {
                            model: Category,
                            attributes: ['id', 'name']
                        },
                        {
                            model: User,
                            attributes: ['username', 'avatar']
                        }
                    ]
                })
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    /**
     * 文章列表
     * @param {*} page 
     * @param {*} pageSize 
     */
    static async list(page, pageSize) {
        return new Promise((resolve, reject) => {
            Goods
                .findAll({
                    offset: (page - 1 ) * pageSize,
                    limit: pageSize,
                    order: [
                        ['createDate', 'DESC']
                    ],
                    include: [
                        {
                            model: Category,
                            attributes: ['id', 'name']
                        },
                        {
                            model: User,
                            attributes: ['username', 'avatar']
                        }
                    ]
                })
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    /**
     * 周刊列表
     * @param {*} page 
     * @param {*} pageSize 
     */
    static async listWeekly(page, pageSize) {
        return new Promise((resolve, reject) => {
            Goods
                .findAll({
                    where: {
                        isWeekly: 1
                    },
                    offset: (page - 1 ) * pageSize,
                    limit: pageSize,
                    order: [
                        ['createDate', 'DESC']
                    ],
                    include: [
                        {
                            model: Category,
                            attributes: ['id', 'name']
                        },
                        {
                            model: User,
                            attributes: ['username', 'avatar']
                        }
                    ]
                })
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    /**
     * 文章列表
     * @param {*} page 
     * @param {*} pageSize 
     */
    static async getUserArticle(page, pageSize, userId) {
        return new Promise((resolve, reject) => {
            Goods
                .findAll({
                    where: {
                        uid: userId
                    },
                    offset: (page - 1 ) * pageSize,
                    limit: pageSize,
                    order: [
                        ['createDate', 'DESC']
                    ],
                    include: [
                        {
                            model: Category,
                            attributes: ['id', 'name']
                        },
                        {
                            model: User,
                            attributes: ['username', 'avatar']
                        }
                    ]
                })
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}

export default {
    create: GoodsService.create,
    update: GoodsService.update,
    detail: GoodsService.detail,
    list: GoodsService.list,
    listWeekly: GoodsService.listWeekly,
    updateVisitCount: GoodsService.updateVisitCount,
    getUserArticle: GoodsService.getUserArticle,
    setTop: GoodsService.setTop,
    setWeekly: GoodsService.setWeekly
}
