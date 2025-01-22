import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoute.js';
import vehicleRoutes from "./routes/vehicleRoute.js";


dotenv.config(); // Load environment variables

const app = express(); // Initialize app
connectDB(); // Connect to the database

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

const port = process.env.PORT || 4000;

// Vehicle routes
app.use("/api/vehicles", vehicleRoutes);

// User routes
app.use('/api/v1/user', userRoutes);

// Root endpoint
app.get('/', (req, res) => {
    console.log("hello world, connected!!!");
    res.send("Hello World, connected!!");
});

// Start the server
app.listen(port, (error) => {
    if (error) {
        console.log(error, "error in starting server");
        process.exit(1); // Exit process on error
    }
    console.log(`server starting at http://localhost:${port}`);
});
