'use strict';

import jsonwebtoken from 'jsonwebtoken';
import User from '../models/user';

// 分为三种权限，普通用户，管理员和超级管理员。超级管理员有删除权限
class UserService {
    
    /**
     * 创建一个用户
     * @param {*} title 
     * @param {*} content 
     * @param {*} thumbnail 
     * @param {*} isWeekly 
     */
    static async create(username, password, email, avatar) {
        return new Promise((resolve, reject) => {
            User
                .create({
                    username: username,
                    password: password,
                    email: email,
                    avatar: avatar,
                    type: 2,
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
     * 更新用户信息
     * @param {*} id 
     * @param {*} obj
     */
    static async update(id, obj) {
        console.log(obj)
        return new Promise((resolve, reject) => {
            User
                .update(obj, {
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
    static async getOne(username) {
        return new Promise((resolve, reject) => {
            User
                .findOne({
                    where: {
                        username: username
                    }
                })
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    console.error(err);
                    reject(err);
                });
        });
    }

    /**
     * 根据Id查询用户信息
     * @param {*} id 
     */
    static async getById(userId) {
        return new Promise((resolve, reject) => {
            User
                .findOne({
                    where: {
                        id: userId
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
     * 从Token中获取用户数据
     * @param {*} token 
     */
    static getUserDataFromToken(token) {
        const userData = jsonwebtoken.decode(token);

        return userData.data;
    }
}

export default {
    create: UserService.create,
    update: UserService.update,
    getOne: UserService.getOne,
    getById: UserService.getById,
    getUserDataFromToken: UserService.getUserDataFromToken
}
