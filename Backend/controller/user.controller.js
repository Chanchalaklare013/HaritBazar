import { request, response } from "express";
import UserService from "../services/user.services.js";
export const signInUser = async (request, response, next) => {
  try {
    const result = await UserService.signIn(request.body);  
    const user = request.user; 
    console.log(user);

    if (result.success) {

      response.status(200).json({
        message: 'User logged-in successfully.',
        token: result.token,
      });
    } else {

      response.status(401).json({ error: result.message });
    }
  } catch (err) {
    console.log(err);
    response.status(500).json({ error: 'Internal Server Error' });
  }
};

export const signUpUser = async (request, response, next) => {
  try {
    const result = await UserService.signUp(request.body);  
    if (result.success) {

      response.status(200).json({
        message: 'User registered successfully.',
        token: result.token,
      });
    } else {

      response.status(400).json({ error: result.message });
    }
  } catch (err) {
    console.log(err);
    response.status(500).json({ error: 'Controller Internal Server Error' });
  }
};


 export const  showUsers = async (request, response, next) => {
    
 }
 export const  updateUser = async (request, response, next) => {

 }
 export const  getUserById = async (request, response, next) => {

 }