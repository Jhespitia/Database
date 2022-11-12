const Users = require('./users.models');
const Tasks = require('./tasks.models');
const Address = require('./addresses.models');
const Categories = require('./categories.models');

const initModels = () => {

  //To create the relation between MODELS

  //->ONE TO ONE
  //USERS has one ADDRESS
  Users.hasOne(Address, { as: 'home', foreignKey: 'user_id' });
  //Address belongs to USER
  Address.belongsTo(Users, { as: 'user', foreignKey: 'user_id' });

  //->ONE TO MANY
  //USERS has many TASKS
  Users.hasMany(Tasks, { as: 'task', foreignKey: 'user_id' });
  //TASKS belongs to USER
  Tasks.belongsTo(Users, { as: 'user', foreignKey: 'user_id' });

  //->MANY TO MANY
  Tasks.belongsToMany(Categories, { through: 'task_categories', foreignKey: 'task_id' });

  Categories.belongsToMany(Tasks, { through: 'task_categories', foreignKey: 'category_id' })



};

module.exports = initModels;