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
        let vendor = await VendorService.viewVendors(request.body);
       if(vendor){
        console.log(vendor);
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
         const vendorId = request.params.id;
        let status = await VendorService.updateVendor(request.body, vendorId);
       if(status){
        console.log(status);
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

export  const deleteVendor = async (request,response, next) =>{
    const vendorId = request.params.id;
    let status = await VendorService.deleteVendor(request.body, vendorId);
     if(status){
       response.send("vendor deleted successfully")
    }
    else{
        response.send("Something went wrong.")
    }

}