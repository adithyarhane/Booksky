import express from "express";
import userAuth from "../middleware/userAuth.js";
import {
  addReview,
  deleteOwnReview,
  getReviewsByBook,
} from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.route("/add-review/:bookId").post(userAuth, addReview);
reviewRouter.route("/get-reviews/:bookId").get(getReviewsByBook);
reviewRouter
  .route("/delete-review/:reviewId")
  .delete(userAuth, deleteOwnReview);

export default reviewRouter;
