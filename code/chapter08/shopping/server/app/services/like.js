import Like from '../models/like';

class LikeService {
    
    /**
     * 喜欢文章
     */
    static async create(aid, uid) {
        return new Promise((resolve, reject) => {
            Like
                .create({
                    aid: aid,
                    uid: uid,
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
     * 查询是否存在喜欢记录
     * @param {*}} aid 
     * @param {*} uid 
     */
    static async detail(aid, uid) {
        return new Promise((resolve, reject) => {
            Like
                .findOne({
                    where: {
                        aid: aid,
                        uid: uid
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
     * 取消喜欢文章
     */
    static async delete(aid, uid) {
        return new Promise((resolve, reject) => {
            Like
                .destroy({
                    where: {
                        aid: aid,
                        uid: uid
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
}

export default {
    create: LikeService.create,
    detail: LikeService.detail,
    delete: LikeService.delete,
}
