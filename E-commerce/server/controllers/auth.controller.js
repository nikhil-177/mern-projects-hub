import { User } from '../models/userModel.js';
import { generateToken } from '../utils/jwtHelper.js';

export const signupController = async (req, res) => {
  try {
    const { name, email, password, address, city, state, country, zipcode, phone } = req.body;

    // create user
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

    // generate token
    const token = generateToken(user.id, user.email);

    res
      .cookie('token', token)
      .status(201)
      .send({ success: true, message: 'user created successfully', user, token });
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

    // generate token
    const token = generateToken(user.id, user.email);

    res
      .cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      })
      .status(201)
      .json({ message: `Welcome back, ${user.name}`, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
