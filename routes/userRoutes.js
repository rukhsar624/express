import express from "express";
const router =express.Router();
import UserController from "../controllers/usersController.js";



// Public Routes
router.post('/register' ,UserController.userRegistration)

// Protected Routes


export default router