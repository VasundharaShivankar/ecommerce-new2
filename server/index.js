import express from "express";

import mongoose, { connect } from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;


import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

app.use(cors());
app.use(express.json());

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
  };
  connectDB();

app.get("/health", (req, res) => {
    res.json({
      success: true,
      message: "Server is Running",
      data: null,
    });
  });


  app.post('/login', async (req, res) => {
    console.log("Login request received");
    console.log("Request body:", req.body);
    
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));