import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
// import cors from 'cors';
import { notFoundError } from './middlewares/error.js';


import platRoute from './router/plat.js'

import retaurantRoute from './router/restaurent.js'
import menuRoute from './router/menu.js'



const app = express()
const hostanme = "127.0.0.1"
const port = 3000

// app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }))
//DB
mongoose.set('debug', true)
mongoose.Promise = global.Promise;
mongoose
    .connect('mongodb://127.0.0.1:27017/Exams')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => {
        console.log(err);
    })



app.use('/plat', platRoute)

app.use('/restaurent', retaurantRoute)
app.use('/menu', menuRoute)

app.use(notFoundError)


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});