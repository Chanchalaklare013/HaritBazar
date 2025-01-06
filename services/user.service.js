import { User } from "../models/users.model.js";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

export class UserService {
  static async signIn(request, response, next) {
    try {
      const { email, password } = request.body;
      const user = await User.findOne({ email });

      if (user) {
        const status = bcrypt.compareSync(password, user.password);
        return status
          // ? response.status(200).json({ message: "Sign in success..", user })
          // : response.status(401).json({ error: "Bad request | invalid password" });
      }
      //  else {
      //   return response.status(401).json({ error: "Bad request | invalid email id" });
      // }
      return false;
    } catch (err) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async signUp(request, response, next) {
    try {
      const saltKey = bcrypt.genSaltSync(10);
      const encryptedPassword = bcrypt.hashSync(request.body.password, saltKey);
      request.body.password = encryptedPassword;
      
      const user = await User.create(request.body);
      console.log(user);
      return user ?  true :  false ;
      // response.status(201).json({ message: "Sign up success", user });
    } catch (err) {
      console.log(err);
      // return response.status(500).json({ error: "Internal Server Error" });
      return false
    }
  }

  static async showUsers(request, response, next) {
    try {
      const users = await User.find(request.body);
      return response.status(200).json({ message: "User view successfully", users });
    } catch (err) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async updateUser(request, response, next) {
    try {
      const id = request.params.id;
      const updateData = request.body;
      await User.updateMany(updateData, { where: { id } });
      return response.status(200).json({ message: "User updated successfully" });
    } catch (err) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getUserById(request, response, next) {
    try {
      const id = request.params.id;
      const result = await User.findOne({ id });
      if (result) {
        return response.status(200).json({ message: result });
      } else {
        return response.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }


  static async deleteUser(request, response, next) {
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

export default UserService;