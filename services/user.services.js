import { User } from '../models/users.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export class UserService {
  static async signIn(requestBody) {
    try {
      const { email, password } = requestBody;
      const user = await User.findOne({ email });

      if (user) {
        const status = bcrypt.compareSync(password, user.password);

        if (status) {
          const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
          );

          return { success: true, token };  
        } else {
          return { success: false, message: 'Invalid password' };  
        }
      } else {
        return { success: false, message: 'Invalid email id' };  
      }
    } catch (err) {
      console.log(err);
      return { success: false, message: 'Internal Server Error' };
    }
  }

  static async signUp(requestBody) {
    try {

      const saltKey = bcrypt.genSaltSync(10);
      const encryptedPassword = bcrypt.hashSync(requestBody.password, saltKey);
      requestBody.password = encryptedPassword;

      const user = await User.create(requestBody);

      if (user) {
        const token = jwt.sign(
          { id: user._id, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
        );

        return { success: true, token };  
      } else {
        return { success: false, message: 'Unable to create user' };  
      }
    } catch (err) {
      console.log(err);
      return { success: false, message: 'Services Internal Server Error' };
    }
  }
}

export default UserService;
