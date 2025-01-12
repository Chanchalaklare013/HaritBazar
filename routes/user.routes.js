import { signInUser, signUpUser, showUsers, updateUser, getUserById} from "../controller/user.controller.js";
import express from "express";

const router = express.Router();

router.post("/sign-in",signInUser);
router.post("/sign-up",signUpUser);
router.get("/user-view",showUsers);
router.post("/user-update/:id",updateUser);
router.get("/get-user-by-id/:id",getUserById);

export default router;