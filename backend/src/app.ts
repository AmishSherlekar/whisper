import express from "express";
import { clerkMiddleware } from '@clerk/express'
import authRoute from "./routes/authRoutes";
import chatRoute from "./routes/chatRoutes";
import messageRoute from "./routes/messageRoutes";
import userRoute from "./routes/userRoutes";
import { errorHandler } from "./middleware/errorhandler";

const app = express();

app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.json({status: "ok", message: "Server is running"});
})

app.use("/api/auth",authRoute);
app.use("/api/chat",chatRoute);
app.use("/api/message",messageRoute);
app.use("/api/user",userRoute);

app.use(errorHandler);

export default app;
