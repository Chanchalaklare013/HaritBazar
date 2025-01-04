import { createBulk, createCategory, deleteCategory, getAllCategories, getAllCategoryByVendor, getAllProductsByCategoryId, updateCategory } from "../controller/category.controller.js";
import express from 'express'; 
const router = express.Router();

router.post('/create-bulk', createBulk);
router.post('/create-category', createCategory);
router.delete('/:categoryId', deleteCategory)
router.put('/:categoryId', updateCategory);
router.get('/get-all', getAllCategories );
router.get('/all-product/:categoryId', getAllProductsByCategoryId);
router.get('/all-categories/:vendorId', getAllCategoryByVendor);
export default router;