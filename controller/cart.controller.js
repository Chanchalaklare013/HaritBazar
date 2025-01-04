import { request, response } from "express";
import { cartServices } from "../services/cart.services.js";
export const addToCart =async(request,response)=>
{
    try
    {
          const {user_id ,product_id,quantity}=request.body;
         const result=await cartServices.addToCart(user_id,product_id,quantity)
         return response.status(200).json(result);
    }
    catch(error)
    {
    //   console.log(error);
      return response.status(400).json({message:"errror"});
    }
};

export const getCartItem =async(request,response)=>
{
    try{
         const {user_id}=request.params;
         const result=await cartServices.getCart(user_id);
         return response.status(200).json({message:"get to cart", data:result});
    }
    catch(err)
    {
        return response.status(500).json({err:"error"})
    }
}

export const deleteCart =async(request,response)=>
{
    try
    {
     const {user_id,product_id}=request.params;
     const result=await cartServices.deleteCart(user_id,product_id);
     return response.status(200).json(result);
    }
    catch(err)
    {
        return response.status(500).json({err:"error"})
    }
}

export const updateCart =async(request,response)=>
{
    try{
        const {user_id,product_id,quantity}=request.body;
        const result=await cartServices.updateCart(user_id,product_id,quantity);
        return response.status(200).json(result);
    }
    catch(err)
    {
        return response.status(500).json({err:"error"})
    }
}