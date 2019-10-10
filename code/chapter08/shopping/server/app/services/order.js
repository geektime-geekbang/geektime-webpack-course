import Order from '../models/order';
import User from '../models/user';

class OrderService {
    
    /**
     * 添加一个订单
     * @param {*} title 
     * @param {*} cid 
     */
    static async create(uid, gids) {
        return new Promise((resolve, reject) => {
            Order
                .create({
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
     * 订单列表
     * @param {*} page 
     * @param {*} pageSize 
     */
    static async list(page, pageSize) {
        return new Promise((resolve, reject) => {
            Order
                .findAll({
                    offset: (page - 1 ) * pageSize,
                    limit: pageSize,
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
    create: OrderService.create,
    list: OrderService.list
}
