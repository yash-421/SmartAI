import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { generateChatCompletion, sendChatsToUser, deleteChats } from "../controllers/chat-controllers.js";

import rateLimit from "express-rate-limit";

const chatLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 3, // Limit each user to 3 requests per minute
  message: "Too many requests. Please try again later.",
});

//Middlewares
const chatRoutes = Router();
chatRoutes.post(
  "/new",
  validate(chatCompletionValidator),
  verifyToken,
  chatLimiter,
  generateChatCompletion
);

chatRoutes.get(
  "/all-chats",
  verifyToken,
  sendChatsToUser
);

chatRoutes.delete(
  "/delete",
  verifyToken,
  deleteChats
);

export default chatRoutes;
