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


  static  async viewVendors(data) {
        try {
            const viewVendor = new Vendor(data);
            await viewVendor.findMany();
           if( viewVendor){
            return true;
           }
           else{
            return false;
           }
        } catch (error) {
            throw new Error('Error creating vendor: ' + error.message);
        }
    }


 static  async updateVendor(data) {
      try{
        const id = request.params.id;
        const update = request.body;
        await Vendor.updateMany(update, {where: {id}})
        return response.status(200).json({ message: "Vendor updated successfully" });
      }
      catch(err){
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error" });
      }
   }

   static async deleteVendor(request, response, next) {
     try {
       const id = request.params.id;
       const result = await User.deleteOne({ _id: id });
       if (result.deletedCount > 0) {
         return response.status(200).json({ message: "User deleted successfully" });
       } else {
         return response.status(404).json({ message: "User not found" });
       }
     } catch (err) {
       console.log(err);
       return response.status(500).json({ error: "Internal Server Error" });
     }
   }
   

   
}
export default VendorService;