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
    response.send("User reggistered successfully.");
  }else {
    response.send("Something went wrong.")
  }
}
catch(err){
  console.log(err);
}
}

export const showUsers = async (request, response, next)=>{
  try{  
    let status = await UserService.showUsers(request.body);
    if(status){
      response.send("USer viewed successfully");
    }
    else{
      response.send("Something went wrong.");
    }

  }catch(err){
    console.log(err);
  }
}

export const updateUsers = async (request, response, next)=>{
  try{  
    let status = await UserService.updateUser(request.body);
    if(status){
      response.send("User updated successfully");
    }
    else{
      response.send("Something went wrong.");
    }

  }catch(err){
    console.log(err);
  }
}
export const getUsersById = async (request, response, next)=>{
  try{  
    let status = await UserService.getUserById(request.body)
    if(status){
      response.send("USer viewed successfully");
    }
    else{
      response.send("Something went wrong.");
    }

  }catch(err){
    console.log(err);
  }
}

export const deletedUser = async (request, response, next)=>{
  try{  
    let status = await UserService.deleteUser(request.body);
    if(status){
      response.send("USer viewed successfully");
    }
    else{
      response.send("Something went wrong.");
    }

  }catch(err){
    console.log(err);
  }
}

