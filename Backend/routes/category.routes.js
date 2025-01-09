import { createBulk, createCategory, deleteCategory, getAllCategories, getAllCategoryByVendor, getAllProductsByCategoryId, updateCategory } from "../controller/category.controller.js";
import express from 'express'; 
const router = express.Router();

router.post('/create-category', createCategory);
router.delete('/:categoryId', deleteCategory)
router.put('/:categoryId', updateCategory);
router.get('/get-all', getAllCategories );
router.get('/all-product/:categoryId', getAllProductsByCategoryId);
router.get('/all-categories/:vendorId', getAllCategoryByVendor);
import { createBulk } from "../controller/category.controller.js";
import express from 'express';
import { authenticateToken } from "../middleware/isAuthenticate.js";

router.post('/create-bulk', authenticateToken, createBulk);


export default router;