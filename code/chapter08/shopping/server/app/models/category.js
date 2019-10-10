'use strict';

import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

export default sequelize.define('t_category', {
    id: {
        type: Sequelize.INTEGER,
        field: "id",
        primaryKey: true
    },
    name : {
        type: Sequelize.STRING,
        field: "name",
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