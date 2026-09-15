import type { NextFunction, Response } from "express";
import type { AuthRequest } from "../middleware/auth";
import { Message } from "../model/Message";
import { Chat } from "../model/Chat";

export async function getMessage(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  try {
    const userId = req.userId;
    const { chatId } = req.params;

    const chat = await Chat.findById({
      _id: chatId,
      participants: userId,
    });
    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }
    const message = await Message.find({ chat: chatId })
      .populate("sender", "name email avatar")
      .sort({ createdAt: 1 });
    res.json(message);
  } catch (error) {
    next(error);
  }
}
