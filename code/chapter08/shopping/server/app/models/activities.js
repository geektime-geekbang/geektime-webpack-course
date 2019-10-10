'use strict';

import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Activities = sequelize.define('t_activities', {
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
    content : {
        type: Sequelize.STRING,
        field: "content",
        allowNull: false
    },
    headUrl : {
        type: Sequelize.STRING,
        field: "head_url",
        allowNull: false
    },
    bannerUrl : {
        type: Sequelize.STRING,
        field: "banner_url",
        allowNull: false
    },
    jumpUrl : {
        type: Sequelize.STRING,
        field: "jump_url",
        allowNull: false
    },
    isNow: {
        type: Sequelize.INTEGER,
        field: "is_now"
    },
    showBanner: {
        type: Sequelize.INTEGER,
        field: "show_banner"
    },
    time: {
        type: Sequelize.DATE,
        field: "time"
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
export default Activities;