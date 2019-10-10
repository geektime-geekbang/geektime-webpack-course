import OrderGood from '../models/order_goods';

class OrderGoodService {
    
    /**
     * 添加一个订单
     * @param {*} title 
     * @param {*} cid 
     */
    static async create(oid, gid) {
        return new Promise((resolve, reject) => {
            OrderGood
                .create({
                    oid: oid,
                    gid: gid,
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
}

export default {
    create: OrderGoodService.create,
}
