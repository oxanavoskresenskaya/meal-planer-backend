const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require ('./MealRouts');
const cors = require ('cors');

require('dotenv').config();
mongoose.set('strictQuery', false);

const PORT = 7000 || process.env.port;
app.use (express.json());
app.use (cors());

mongoose
.connect ((process.env.MONGODB_LINK))
.then (()=>console.log('we were connect to mongo'))
.catch((err) => console.log(err))

app.use (router)
app.listen (PORT, () => {
    console.log (`I am listening on PORT ${PORT}`)
})