import express from "express";
import { signup } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.route("/signup").post(signup);

export default authRouter;
