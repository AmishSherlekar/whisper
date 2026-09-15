import {Router} from "express";
import { protectRoute } from "../middleware/auth";
import { getMessage } from "../controller/messageController";

const route = Router();

route.get("/chat/:chatId",protectRoute,getMessage)

export default route;