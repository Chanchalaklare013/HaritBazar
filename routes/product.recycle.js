import express from "express";
import recycleController from "../controller/pro.recycle.controller.js";
const route = express.Router();
//User Routes
route.post("/addRecycle",recycleController.createRecycle);
route.get("getAllRecycle/:id",recycleController.getAllRecycle);
route.delete('/:id', recycleController.removeRecycle);

// Admin routes
route.get('/getAllRecycle', recycleController.getRecycle);
route.put('/:id', recycleController.updateRecycle);


export default route;

