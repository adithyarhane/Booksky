import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRouter.js";

const app = express();
connectDB();

const PORT = process.env.PORT || 3000;

const allowedOrigins = ["http://localhost:5173"];

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

// test route
app.get("/", (req, res) => {
  res.send("just fine!");
});

// root API Endpoints
app.use("/api/v1/auth", authRouter);

// Start server from here
app.listen(PORT, () =>
  console.log(`Server running on port: ${PORT} -------------->`)
);
