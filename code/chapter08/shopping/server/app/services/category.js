import Category from '../models/category';

class CategoryService {
    
    /**
     * 创建一个分类
     * @param {*} name 
     */
    static async create(name) {
        return new Promise((resolve, reject) => {
            Category
                .create({
                    name: name,
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
     * 更新一个分类
     * @param {*} id 
     * @param {*} name
     */
    static async update(id, name) {
        return new Promise((resolve, reject) => {
            Category
                .update({
                    name: name,
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
     * 类目列表
     */
    static async list() {
        return new Promise((resolve, reject) => {
            Category
                .findAll({
                    order: [
                        ['createDate', 'DESC']
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
    create: CategoryService.create,
    update: CategoryService.update,
    list: CategoryService.list
}
