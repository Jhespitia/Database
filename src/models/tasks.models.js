const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Tasks = db.define('tasks', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
  },

  is_complete: {
    type: DataTypes.BOOLEAN,
  },

  //------------------------------------------------
  //To create the relation bettewn USERS and TASKS into the MODEL

  // userId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     key: 'id',
  //     model: 'users'
  //   },
  //   field: 'users_id',
  // },
  //------------------------------------------------
});

module.exports = Tasks;