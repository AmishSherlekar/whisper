import type { NextFunction, Response } from "express";
import type { AuthRequest } from "../middleware/auth";

export async function getChats(req: AuthRequest, res: Response, next: NextFunction) {

}
export async function getOrCreateChat(req: AuthRequest, res: Response, next: NextFunction) {
    
}
