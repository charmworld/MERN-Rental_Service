import mongoose from 'mongoose';

mongoose.connection.on('connected', () => console.log('Database Connected'));
mongoose.connection.on('error', (err) => console.error('DB Connection Error:', err));
mongoose.connection.on('disconnected', () => console.log('Database Disconnected'));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      
    });
  } catch (error) {
    console.error('DB connection error:', error.message);
    throw error;
  }
};

export default connectDB;
