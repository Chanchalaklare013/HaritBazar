import express from 'express';
import {addProduct, deleteProduct, getAllProduct, getAllProductOfVendor, updateProduct} from "../controller/product.controller.js";
import { get } from 'mongoose';
const router = express.Router();

router.get("/getAllProduct",getAllProduct);
router.post("/addProduct",addProduct);
router.delete("/deleteProduct/:productId", deleteProduct);

router.put("/updateProduct/:productId", updateProduct)
router.get("/getAllProductOfVendor/:vendorId", getAllProductOfVendor);

export default router;