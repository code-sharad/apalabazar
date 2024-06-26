import express from "express";
import { deleteUser, getUser, updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../middelwares/verifyUser.js";


const router = express.Router();

router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/:id', verifyToken, getUser)

export default router;
 