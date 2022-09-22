import mongoose from "mongoose";
import express from 'express';
import {signUp, loginUser, getAllUser, getUser, UpdateUserProfile, deleteUser} from '../controllers/user.js';
import { verifyToken } from "../middleware/authentication.js";
const router = express.Router();

router.get('/',verifyToken,getAllUser);
router.get('/:id', getUser);
router.post('/login',loginUser);
router.post('/signup',signUp)
router.patch('/update/:id',UpdateUserProfile);
router.delete('/delete/:id', deleteUser);

export default router;

