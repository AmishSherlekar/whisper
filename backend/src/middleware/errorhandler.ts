import type { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log("Error:", err.message);

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  const isDevelopment = process.env.NODE_ENV === "development";
  res.status(statusCode).json({
    message: isDevelopment
      ? err.message || "Internal Server Error"
      : "Internal Server Error",
    ...(isDevelopment && { stack: err.stack }),
  });
};
