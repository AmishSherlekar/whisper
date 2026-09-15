import {Router} from "express";
import { protectRoute } from "../middleware/auth";
import { getUsers } from "../controller/userController";

const route = Router();

route.get("/",protectRoute, getUsers);

export default route;