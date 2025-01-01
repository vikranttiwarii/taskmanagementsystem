const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use(require('./routes/user'))
app.use(require('./routes/login'));
app.use(require('./routes/task'));

mongoose.connect(process.env.DB_URL, {
}).then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.log(err)
});

app.listen(process.env.PORT,()=>{
    console.log(`server is working port ${process.env.PORT}`)
})