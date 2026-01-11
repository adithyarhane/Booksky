import express from "express";
import {
  addBook,
  getBook,
  getBooks,
  getRelatedBooks,
  softDelete,
  updateBook,
} from "../controllers/bookController.js";
import userAuth from "../middleware/userAuth.js";

const bookRouter = express.Router();

bookRouter.route("/").get(getBooks);
bookRouter.route("/:slug").get(getBook);
bookRouter.route("/add").post(userAuth, addBook);
bookRouter.route("/update/:id").patch(userAuth, updateBook);
bookRouter.route("/soft-delete/:id").delete(userAuth, softDelete);
bookRouter.route("/:slug/related").get(getRelatedBooks);

export default bookRouter;
