import 'dotenv/config'
import express from 'express';
import { db } from './config/db.js';
import { userRoutes } from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000

//database 
db()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res) => {
    res.send('hello world')
})


// userRoutes
app.use('/api/user',userRoutes)




app.listen(PORT, () => {
    console.log(`Listening to PORT : ${PORT}`)
})