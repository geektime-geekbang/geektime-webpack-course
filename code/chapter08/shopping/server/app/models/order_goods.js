'use strict';

import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const OrderGood = sequelize.define('t_order_good', {
    id: {
        type: Sequelize.INTEGER,
        field: "id",
        primaryKey: true
    },
    oid: {
        type: Sequelize.INTEGER,
        field: "oid"
    },
    gid: {
        type: Sequelize.INTEGER,
        field: "gid"
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

export default OrderGood;