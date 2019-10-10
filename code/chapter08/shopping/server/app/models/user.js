'use strict';

import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

export default sequelize.define('t_users', {
    id: {
        type: Sequelize.INTEGER,
        field: "id",
        primaryKey: true
    },
    username : {
        type: Sequelize.STRING,
        field: "username",
        allowNull: false
    },
    password : {
        type: Sequelize.STRING,
        field: "password",
        allowNull: false
    },
    email : {
        type: Sequelize.STRING,
        field: "email",
        allowNull: false
    },
    avatar : {
        type: Sequelize.STRING,
        field: "avatar",
        allowNull: false
    },
    name : {
        type: Sequelize.STRING,
        field: "name"
    },
    homePage: {
        type: Sequelize.STRING,
        field: "home_page"
    },
    briefIntroduction: {
        type: Sequelize.STRING,
        field: "brief_introduction"
    },
    type: {
        type: Sequelize.INTEGER,
        field: "type"
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