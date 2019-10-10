import Activities from '../models/activities';
class ActivitiesService {
    
    /**
     * 添加一个活动
     */
    static async create(title, content, headUrl, bannerUrl, jumpUrl, time, isNow, showBanner) {
        return new Promise((resolve, reject) => {
            Activities
                .create({
                  title, content, headUrl, bannerUrl, jumpUrl, time, isNow, showBanner
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
     * 更新一个活动
     */
    static async update(id, title, content, headUrl, jumpUrl, bannerUrl, time, isNow, showBanner) {
        return new Promise((resolve, reject) => {
            Activities
                .update({
                  title, content, headUrl, bannerUrl, jumpUrl, time, isNow, showBanner
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
     * 删除一个活动
     */
    static async delete(id) {
      console.log(id)
        return new Promise((resolve, reject) => {
            Activities
                .destroy({
                    where: {
                        id: id
                    }
                })
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                  console.log(err)
                    reject(err);
                });
        });
    }

    /**
     * 获取活动列表
     */
    static async list() {
        return new Promise((resolve, reject) => {
            Activities
                .findAll({order: [['time', 'DESC']]})
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
    create: ActivitiesService.create,
    update: ActivitiesService.update,
    delete: ActivitiesService.delete,
    list: ActivitiesService.list
}
