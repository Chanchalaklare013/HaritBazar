import { request, response } from "express";
import UserService from "../services/user.service.js";

export const signInUser = async (request, response, next)=>{
  try{
    let inUSer= await UserService.signIn(request.body);
       if(inUSer){
        response.send("User loged-in successfully..");
       }
       else{
        response.send("Something went wrong.")
       }


  }catch(err){
       console.log(err);
  }
}


export const signupUser = async (request, response, next)=>{
  try{
  let status = await UserService.signUp(request.body);
  if(status){
    response.send("User reggister success.");
  }else {
    response.send("Something went wrong.")
  }
}
catch(err){
  console.log(err);
}
}


