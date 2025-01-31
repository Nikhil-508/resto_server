import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './Config/db.js'
import menuRoutes from './Routes/menuRoutes.js'
import menuItemRoutes from './Routes/menuItemRoutes.js'

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: ["https://resto-client.vercel.app", "https://resto-server.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

// Handle preflight requests for all routes
app.options("*", (req, res) => {
    res.status(200).send(); // Respond with status 200 for OPTIONS requests
});

  
app.use(express.json());



app.use("/api/menus", menuRoutes);
app.use("/api/menuItems", menuItemRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
