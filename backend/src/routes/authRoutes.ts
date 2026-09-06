import {Router} from "express";
import { authCallback, getMe } from "../controller/authController";
import { protectRoute } from "../middleware/auth";

const route = Router();

route.get("/me", protectRoute, getMe);
route.post("/callback", protectRoute, authCallback);

export default route;