'use strict';

import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';
import User from './user';

const Order = sequelize.define('t_orders', {
    id: {
        type: Sequelize.INTEGER,
        field: "id",
        primaryKey: true
    },
    uid: {
        type: Sequelize.INTEGER,
        field: "uid"
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

Order.belongsTo(User, {foreignKey: 'uid'});

export default Order;