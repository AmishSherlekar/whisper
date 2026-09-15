import {Router} from "express";
import { protectRoute } from "../middleware/auth";
import { getChats, getOrCreateChat } from "../controller/chatController";

const route = Router();

route.use(protectRoute);

route.get("/",getChats);
route.post("/with/:participantId", getOrCreateChat);


export default route;