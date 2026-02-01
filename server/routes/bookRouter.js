import express from "express";
import {
  addBook,
  getBestsellers,
  getBook,
  getBooks,
  getBooksForEveryone,
  getNewReleases,
  getRelatedBooks,
  softDelete,
  updateBook,
} from "../controllers/bookController.js";
import userAuth from "../middleware/userAuth.js";

const bookRouter = express.Router();

bookRouter.route("/").post(getBooks);
bookRouter.route("/bestsellers").post(getBestsellers);
bookRouter.route("/new-releases").post(getNewReleases);
bookRouter.route("/books-for-everyone").post(getBooksForEveryone);
bookRouter.route("/:slug").get(getBook);
bookRouter.route("/add").post(userAuth, addBook);
bookRouter.route("/update/:id").patch(userAuth, updateBook);
bookRouter.route("/soft-delete/:id").delete(userAuth, softDelete);
bookRouter.route("/:slug/related").get(getRelatedBooks);

export default bookRouter;
