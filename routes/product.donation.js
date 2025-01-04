import express from "express";
import {donationController} from "../controller/pro.donation.controller.js";
const route = express.Router();
//User Routes
route.post("/addDonation",donationController.createDonation);
route.get("getAllDonation/:id",donationController.getAllDonations);
route.delete('/:id', donationController.removeDonation);

// Admin routes
route.get('/getAllDonation', donationController.getAllDonations);
route.put('/:id', donationController.updateDonation);

export default route ;