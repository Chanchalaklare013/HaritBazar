import jwt from "jsonwebtoken";

  export const auth = async (request,response,next)=>{
    try{
      let authHeader = request.headers("Authorization")
      let token = authHeader && authHeader.split(" ")[1];
      jwt.verify(token,"haritbazar");
      next();
    }
    catch(err){
      return response.status(401).json({error: "Bad request | Unauthorized user"});
    }
};

export default auth;