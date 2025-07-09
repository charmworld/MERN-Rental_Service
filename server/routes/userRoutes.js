
import express from "express";
import { getCars, getUserdata, loginUser, registerUser } from "../controllers/userController.js";
import { protect } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/data', protect, getUserdata)
userRouter.get('/cars', getCars)

export default userRouter;