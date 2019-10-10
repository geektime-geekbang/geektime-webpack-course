'use strict';

import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Like = sequelize.define('t_like', {
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
    createDate: {
        type: Sequelize.DATE,
        field: "create_date"
    },
    updateDate: {
        type: Sequelize.DATE,
        field: "update_date"
    },
}, { createdAt: 'create_date', updatedAt: 'update_date' });

export default Like;