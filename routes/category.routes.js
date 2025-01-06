import { createBulk } from "../controller/category.controller.js";
import express from 'express';
import { authenticateToken } from "../middleware/isAuthenticate.js";
const router = express.Router();

router.post('/create-bulk', authenticateToken, createBulk);


export default router;