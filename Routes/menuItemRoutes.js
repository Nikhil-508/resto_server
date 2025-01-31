import express from "express";
import { getMenuItems, createMenuItem } from "../Controllers/menuItemController.js";

const router = express.Router();

router.get("/:category", getMenuItems);
router.post("/", createMenuItem);

export default router; 
