import mongoose from 'mongoose';

export const connectdb = async () => {
    try {
       const db = await mongoose.connect(process.env.MONGODB_URI_LOCAL);
       if(db) console.log('Database connected')
    } catch (error) {
        console.log(error)
    }
};
