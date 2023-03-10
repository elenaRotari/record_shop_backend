import express from "express";
import {
  getAll,
  getOne,
  loginOne,
  logOutOne,
  postOne,
} from "../controllers/userController.js";
import auth from "../middleware/auth.js";
import checkPWD from "../middleware/checkPWD.js";
import hashPWD from "../middleware/hashPWD.js";

//set userRoutes
const userRouter = express.Router();
// set toutes in root
userRouter.route("/").get(getAll);
userRouter.route("/one").get(auth, getOne);
userRouter.route("/register").post(hashPWD, postOne);
userRouter.route("/login").post(checkPWD, loginOne);
userRouter.route("/logout").post(auth, logOutOne);

export default userRouter;
