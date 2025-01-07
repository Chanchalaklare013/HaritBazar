import { request, response } from "express";
import VendorService from '../services/vendor.service.js';

export const createVendor = async (request, response, next) => {
    try {
        let status = await VendorService.newVendor(request.body);
        console.log("Controller: "+ status);
       if(status){
        response.send("Vendor created successfully.");
       }
       else{
        response.send("Something went wrong.");
       }
    }
    catch (err) {
        console.log(err);
    }
}

export const viewVendor = async (request, response, next) => {
    try {
        let status = await VendorService.viewVendor(request.body);
       if(status){
        response.send("Vendor view successfully.");
       }
       else{
        response.send("Something wen wrong.");
       }
    }
    catch (err) {
        console.log(err);
    }
}

export const updateVendor = async (request, response, next) => {
    try {
        let status = await VendorService.updateVendor(request.body);
       if(status){
        response.send("Vendor updated successfully.");
       }
       else{
        response.send("Something wen wrong.");
       }
    }
    catch (err) {
        console.log(err);
    }
}