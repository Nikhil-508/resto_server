import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './Config/db.js'

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

import menuRoutes from './Routes/menuRoutes.js'
import menuItemRoutes from './Routes/menuItemRoutes.js'

app.use("/api/menus", menuRoutes);
app.use("/api/menuItems", menuItemRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
