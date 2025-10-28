

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config({ path: '../.env' }); 

// Connect to database
connectDB();

const app = express();

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// A simple route for testing the API
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});


const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running  on port ${PORT}`)
);