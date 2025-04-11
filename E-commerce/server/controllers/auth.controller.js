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
    res.status(500).json({ message: error.message });
  }
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    // find User
    const user = await User.findOne({ email });
    if (user === null) res.status(404).json({ message: 'Invalid email or password' });
    // match password
    const matchPassword = await user.comparePassword(password);
    if (!matchPassword) res.status(404).json({ message: 'Invalid email or password' });
    res.status(201).json({ message: `Welcome back, ${user.name}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
