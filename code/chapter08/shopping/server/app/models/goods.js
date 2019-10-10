'use strict';

import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';
import User from './user';
import Category from './category';
import Like from './like';

const Goods = sequelize.define('t_goods', {
    id: {
        type: Sequelize.INTEGER,
        field: "id",
        primaryKey: true
    },
    title : {
        type: Sequelize.STRING,
        field: "title",
        allowNull: false
    },
    description : {
        type: Sequelize.STRING,
        field: "description",
        allowNull: false
    },
    content : {
        type: Sequelize.STRING,
        field: "content",
        allowNull: false
    },
    thumbnail : {
        type: Sequelize.STRING,
        field: "thumbnail",
        allowNull: false
    },
    cid: {
        type: Sequelize.INTEGER,
        field: "cid"
    },
    uid: {
        type: Sequelize.INTEGER,
        field: "uid"
    },
    likeCount: {
        type: Sequelize.INTEGER,
        field: "like_count"
    },
    commentCount: {
        type: Sequelize.INTEGER,
        field: "comment_count"
    },
    visitCount: {
        type: Sequelize.INTEGER,
        field: "visit_count"
    },
    createDate: {
        type: Sequelize.DATE,
        field: "create_date"
    },
    updateDate: {
        type: Sequelize.DATE,
        field: "update_date"
    },
}, { createdAt: 'create_date', updatedAt: 'update_date' });

Goods.belongsTo(Category, {foreignKey: 'cid'});
Goods.belongsTo(User, {foreignKey: 'uid'});

Goods.belongsToMany(User, {
    through: Like,
    foreignKey: 'aid'
});

User.belongsToMany(Goods, {
    through: Like,
    foreignKey: 'uid'
});

export default Goods;