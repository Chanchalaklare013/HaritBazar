import { response } from "express";
import { Product } from "../models/product.model.js";

class ProductServices{

    async createBulk(data) {
        try{
            let status = await Product.insertMany(data);
            if(status){
                console.log(status);
                return "Products created succesfully"
            }else{
                return "some error ocurred while inserting the products"
            }

        } catch(err){
            console.log(err);
        }
    }
}
