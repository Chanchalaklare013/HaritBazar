import express, { Router } from "express";
import {getReviews,addToReviews,updateReviews,removeReviews} from "../controller/reviews.controller.js";
const router =express.Router();
router.get("/api/get/reviews/:productId",getReviews)
router.post("/api/add/reviews/:productId",addToReviews);
router.put("/api/put/reviews/:reviewId",updateReviews);
router.delete("/api/delete/reviews/:reviewId",removeReviews);
export default router;