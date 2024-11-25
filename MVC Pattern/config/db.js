// config/db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,  // Ensure proper connection handling
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);  // Exit process with failure code
  }
}

module.exports = connectDB;
