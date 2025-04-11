import {User} from '../models/userModel.js'


export const signupController = async (req,res) => {
    const {name,email,password,address,city,state,country,zipcode,phone} = req.body
    const user = await User.create({
      name,
      email,
      password,
      address,
      city,
      state,
      country,
      zipcode,
      phone,
    });
    if(!user) console.log(user)
    res.status(201).send({success:true,message:"user created successfully",user})
}