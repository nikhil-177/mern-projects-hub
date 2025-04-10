import 'dotenv/config'
import express from 'express';
import { db } from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3000

//database 
db()

app.get('/',(req,res) => {
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`Listening to PORT : ${PORT}`)
})