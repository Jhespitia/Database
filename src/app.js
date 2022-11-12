const express = require('express');
const initModels = require('./models/initModels')

//Import Dotevn
require('dotenv').config();

//Import DataBase
const db = require('./utils/database');

const app = express();

const PORT = process.env.PORT || 7000;

//Authenticate DataBase
db.authenticate()
  .then(() => console.log('***!DataBase Authenticated!***'))
  .catch((err) => console.error(err));

//Synced DataBase
db.sync({ force: true })
  .then(() => console.log('***!DataBase Synced!***'))
  .catch((err) => console.error(err));

initModels();

app.get('/', (req, res) => {
  res.status(200).json('<-!All Good!->');
})
app.listen(6000, () => console.log('<-!Server Running on PORT' + ' ' + PORT + '!->'));