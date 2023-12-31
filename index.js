'use strict'
require('dotenv').config();
const { start } = require('./src/server');
const { db } = require('./src/models');
const PORT = process.env.PORT || 3005;


db.sync().then(() => {
    start(PORT);
}).catch(err => console.log(err))