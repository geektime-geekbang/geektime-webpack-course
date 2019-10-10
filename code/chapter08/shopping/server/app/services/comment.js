import Comment from '../models/comment';
import User from '../models/user';

class CommentService {
    
    /**
     * 添加一条评论
     * @param {*} title 
     * @param {*} content 
     * @param {*} thumbnail 
     * @param {*} cid 
     */
    static async create(aid, uid, content) {
        return new Promise((resolve, reject) => {
            Comment
                .create({
                    aid: aid,
                    uid: uid,
                    content: content,
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
     * 文章列表
     * @param {*} page 
     * @param {*} pageSize 
     */
    static async list(page, pageSize, aid) {
        return new Promise((resolve, reject) => {
            Comment
                .findAll({
                    offset: (page - 1 ) * pageSize,
                    limit: pageSize,
                    where: {
                        aid: aid
                    },
                    order: [
                        ['createDate', 'DESC']
                    ],
                    include: [
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
    create: CommentService.create,
    list: CommentService.list
}
