'use strict';

import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';
import User from './user';

const Comment = sequelize.define('t_comment', {
    id: {
        type: Sequelize.INTEGER,
        field: "id",
        primaryKey: true
    },
    aid: {
        type: Sequelize.INTEGER,
        field: "aid"
    },
    uid: {
        type: Sequelize.INTEGER,
        field: "uid"
    },
    content: {
        type: Sequelize.STRING,
        field: "content",
        allowNull: false
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

Comment.belongsTo(User, {foreignKey: 'uid'});

export default Comment;