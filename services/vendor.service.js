import { request } from "express";
import { Vendor } from "../models/vendor.model.js";

 export class VendorService {

   static async newVendor(data) {
        try {
            const newVendor = await Vendor.create(data);
            if(newVendor){
              return true;
            }
            else{
                return false;
            }
            //return newVendor;
        } catch (error) {
             new Error('Error creating vendor: ' + error.message);
            // return response.status(500).json({error:"Internal Server error"})
        }
    }


  static  async viewVendors() {
        try {
            
           const vendor= await Vendor.find();
           if( vendor){
            return vendor;
           }
           else{
            return false;
           }
        } catch (error) {
            throw new Error('Error creating vendor: ' + error.message);
        }
    }


 static  async updateVendor(data,vendorId) {
      try{
        const isUpdate = await Vendor.updateOne({_id: vendorId}, data)
        if(isUpdate){
            return true;
        }else{
            return false;
        }
      }
      catch(err){
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error" });
      }
   }

   static async deleteVendor( vendorId) {
     try {
       
       const result = await User.deleteOne({ _id: vendorId });
       if (result) {
         return true;
       } else {
         return false;
       }
     } catch (err) {
       console.log(err);
       return response.status(500).json({ error: "Internal Server Error" });
     }
   }
   

   
}
export default VendorService;