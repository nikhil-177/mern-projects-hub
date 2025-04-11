import { User } from '../models/userModel.js';

export const signupController = async (req, res) => {
  try {
    const { name, email, password, address, city, state, country, zipcode, phone } = req.body;
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

    res.status(201).send({ success: true, message: 'user created successfully', user });
  } catch (error) {
    res.status(500).json({message:error.message})
  }
};
