import express from "express";
import {addToCart,getCartItem,deleteCart} from '../controller/cart.controller.js';
const router =express.Router();
router.post("/api/add/cart",addToCart);
router.get("/api/get/cart",getCartItem);
// router.put("/api/update/cart/:id",updateCart);
router.delete("/api/delete/cart/:id",deleteCart)
export default router;