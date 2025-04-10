import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router()

router.post('/',async (req,res) => {
    const {name,email,password,address,city,state,country,zipcode,phone} = req.body
    if(!name || !email || !password || !address || !city || !state || !country || !zipcode || !phone){
        res.status(400).json({message:"All fields required"})
    }
    console.log(req.body);
})


export const userRoutes = router
