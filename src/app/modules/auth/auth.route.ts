import express from "express";
import { hashPassword } from "../../middlewares/passwordHash";
import { AuthController } from "./auth.controller";

const router = express.Router();

router.post('/signup', hashPassword, AuthController.signUp)
router.post('/signin', AuthController.signin)

export const AuthRoutes = router;