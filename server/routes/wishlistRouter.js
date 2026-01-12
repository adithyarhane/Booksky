import express from "express";
import {
  addToWishlist,
  getWishlistData,
  removeFromWishlist,
} from "../controllers/wishlistController.js";
import userAuth from "../middleware/userAuth.js";

const wishlistRouter = express.Router();

wishlistRouter.route("/data").get(userAuth, getWishlistData);
wishlistRouter.route("/add").post(userAuth, addToWishlist);
wishlistRouter.route("/remove/:bookId").delete(userAuth, removeFromWishlist);

export default wishlistRouter;
