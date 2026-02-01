import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import Razorpay from "razorpay";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import bookRouter from "./routes/bookRouter.js";
import wishlistRouter from "./routes/wishlistRouter.js";
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRouter.js";
import reviewRouter from "./routes/reviewRouter.js";
import paymentRouter from "./routes/paymentRouter.js";

const app = express();
connectDB();

const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "https://deerbooks.onrender.com",
  "http://localhost:5173",
];

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

// RAZORPAY INSTANCE
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

// root API Endpoints
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/book", bookRouter);
app.use("/api/v1/wishlist", wishlistRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/payment", paymentRouter);

// Start server from here
app.listen(PORT, () =>
  console.log(`Server running on port: ${PORT} -------------->`),
);
