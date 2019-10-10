'use strict';

import koaRouter from 'koa-router';
import jwt from '../middlewares/jwt';
import user from '../controllers/user';
import category from '../controllers/category';
import comment from '../controllers/comment';
import order from '../controllers/order';
import goods from '../controllers/goods';
import like from '../controllers/like';
import activities from '../controllers/activities';

const router = koaRouter({
    prefix: '/api/v1'
});

// API

/**
 * 商品列表: /goods?page=1&per_page=10
 * {GET}
 */
router.get('/goods', goods.list);

/**
 * 商品详情: /article/:id
 * {GET}
 */
router.get('/goods/:id', goods.detail);

/**
 * 发布商品: /article/new
 * {POST}
 */
router.post('/goods/new', jwt, goods.create);

/**
 * 修改商品: /article/:id
 * {PUT}
 */
router.put('/goods/:id', jwt, goods.update);


/**
 * 订单列表: /order?page=1&per_page=10
 * {GET}
 */
router.get('/order', order.list);


/**
 * 创建订单: /order/new
 * {POST}
 */
router.post('/order/new', jwt, order.create);

/**
 * 商品类目: /goods/category
 * {PUT}
 */
router.get('/category', category.list);

/**
 * 创建商品类目: /category/new
 * {POST}
 */
router.post('/category/new', jwt, category.create);

/**
 * 商品评论列表: /article/100043/comment?page=1&per_page=10
 * {GET}
 */
router.get('/goods/:id/comment', comment.list);

/**
 * 创建商品评论
 * {POST}
 */
router.post('/goods/:id/comment/new', jwt, comment.create);

/**
 * 喜欢商品
 * {PUT}
 */
router.put('/goods/:id/starred', jwt, like.create);

/**
 * 取消喜欢商品
 * {DELETE}
 */
router.delete('/goods/:id/starred', jwt, like.delete);

/**
 * 登录: /user/login
 * {POST}
 */
router.post('/user/login', user.login);

/**
 * 注册逻辑: /user/register
 * {POST}
 */
router.post('/user/register', user.register);


/**
 * 当前登录用户信息: /user
 * {GET}
 */
router.get('/user/:id', user.getUserInfo);

/**
 * 修改用户信息: /user
 */
router.put('/user', jwt, user.updateAuthenticatedUser);

// /**
//  * 用户创建商品列表: /user/:id/article?page=1&per_page=10
//  * {GET}
//  */
// router.get('/user/:id/goods', user.article);

/**
 * 用户的商品列表: /user/:id/starred?page=1&per_page=10
 * {GET}
 */
router.get('/user/:id/starred', user.starred);

/**
 * 新增活动: /activities/new
 * {POST}
 */
router.post('/activities/new', jwt, activities.create);
/**
 * 修改活动: /activities/update
 * {POST}
 */
router.post('/activities/update', jwt, activities.update);
/**
 * 活动列表: /activities/list
 * {GET}
 */
router.get('/activities/list', activities.list);
/**
 * 删除活动: /activities/delete
 * {GET}
 */
router.post('/activities/delete', jwt, activities.delete);

export default router;
