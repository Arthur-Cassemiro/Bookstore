const PORT = process.env.PORT ?? 5555
import 'dotenv/config'
import express, { response } from "express";
import mongoose from 'mongoose';
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();
app.use(express.json());

app.use(cors());

app.get(`/`, (req,res)=>{
    console.log(req)
    return res.status(234).send('Hi!')
});

app.use('/books', booksRoute)

mongoose.connect(process.env.mongoDBURL).then(()=>{
    console.log('App is connected to the database');
    app.listen(PORT, () =>{
        console.log(`App runnig in listen in port: ${PORT}`)
    })
    
}).catch((error)=>{
    console.log(error);
})