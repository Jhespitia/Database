const db = require('../utils/database');

//Import Models
const Users = require('../models/users.models');
const Tasks = require('../models/tasks.models');
const Address = require('../models/addresses.models');
const Categories = require('../models/categories.models');

//->This is to fullfill the DataBase!!
const users = [
  {
    username: 'Jhon Espitia',
    email: 'Jhon@mail.com',
    password: '9999',
  },
  {
    username: 'Luisa Machado',
    email: 'Luuu@mail.com',
    password: '8888',
  },
  {
    username: 'Erika Garcia',
    email: 'Eri@mail.com',
    password: '6666',
  },
];

const addresses = [
  {
    user_id: 1,
    street: 'Avendida Centenario',
    number: 45,
  },
  {
    user_id: 2,
    street: 'Calle de las Rosas',
    number: 23,
  },
  {
    user_id: 3,
    street: 'Villa Maria',
    number: 104,
  },
];

const tasks = [
  {
    user_id: 1,
    title: 'Make the Dinner',
    description: 'how to do the dinner',
    iscomplete: false,
  },
  {
    user_id: 2,
    title: 'Go Store',
    description: 'Need to buy the ingredients',
    iscomplete: false,
  },
  {
    user_id: 3,
    title: 'Clean Clothes',
    description: 'Take the clothes to the washing machine',
    iscomplete: false,
  },
];

const categories = [
  { user_id: 1, name: 'personal' },
  { user_id: 2, name: 'home', },
  { user_id: 3, name: 'sport', },
  { user_id: 4, name: 'work', },
  { user_id: 5, name: 'health', },

];

//Synced DataBase
db.sync({ force: true }) //true - delete all and create new info
  .then(() => {
    console.log('Updating Information')
  })
  .then(() => {
    //put the info into table
    console.log('*-> Creating Users <-*')
    users.forEach((user) => Users.create(user));
  })

  .then(() => {
    //put the info into table
    console.log('*-> Creating Addresses <-*')
    addresses.forEach((address) => Address.create(address));
  })

  .then(() => {
    //put the info into table
    console.log('*-> Creating Tasks <-*')
    tasks.forEach((task) => Tasks.create(task));
  })

  .then(() => {
    //put the info into table
    console.log('*-> Creating Categories <-*')
    categories.forEach((category) => Categories.create(category));
  });