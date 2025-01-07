import { signInUser, signupUser, showUsers, updateUsers, getUsersById} from "../controller/user.controller.js";
import express from "express";

const router = express.Router();

router.post("/sign-in",signInUser);
router.post("/sign-up",signupUser);
router.get("/user-view",showUsers);
router.post("/user-update/:id",updateUsers);
router.get("/get-user-by-id/:id",getUsersById);

export default router;