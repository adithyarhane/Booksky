import express from "express";
import {
  createOrderFromCart,
  getOrderById,
  getOrders,
} from "../controllers/orderController.js";
import userAuth from "../middleware/userAuth.js";

const orderRouter = express.Router();

orderRouter.route("/data").get(userAuth, getOrders);
orderRouter.route("/:orderId").get(userAuth, getOrderById);

orderRouter
  .route("/create-order-from-cart")
  .post(userAuth, createOrderFromCart);

export default orderRouter;
