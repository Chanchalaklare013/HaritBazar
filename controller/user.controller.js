import UserService from "../services/user.service.js";

// ========= SIGN-IN (USER) ====================
export const signInUser = async (request, response, next) => {
  try {
    // const errors = validationResult(request);
    // if (!errors.isEmpty())  return response.status(401).json({ error: "Bad request" });

    let inUSer = await UserService.signIn(request,response);
    if (inUSer) {
      response.send("User loged-in successfully..");
    }
    else {
      response.send("Something went wrong.")
    }

  } catch (err) {
    console.log(err);
  }
}

// ========= SIGN-UP (USER) ====================
export const signUpUser = async (request, response, next) => {
  try {
    let status = await UserService.signUp(request,response);
    if (status) {
      response.send("User register success.");
    } else {
      response.send("Something went wrong.")
    }
  }
  catch (err) {
    console.log(err);
  }
}


export const updateUser = async(request, response)=>{
  let status = await UserService.updateUser(request,response)
  status ? console.log("done") : console.log("error");
}

export const getUserById = ()=>{}
export const showUsers = ()=>{}