import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
<<<<<<< HEAD
import { postSave, postGet, postGetById, searchPost } from "../controllers/Post.js";
=======
import { postSave, postGet, postGetById } from "../controllers/Posts.js";
>>>>>>> 31d862c62e97d603b74fb527d97fd1feea878d1d
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/auth/register", Register);
router.post("/auth/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
<<<<<<< HEAD
router.post("/post",verifyToken, postSave);
router.get("/post",verifyToken, postGet);
router.get("/post/:id",verifyToken, postGetById);
router.get("/search", verifyToken, searchPost )
=======
router.post("/post", verifyToken, postSave);
router.get("/post", verifyToken, postGet);
router.get("/post/:id", verifyToken, postGetById);
>>>>>>> 31d862c62e97d603b74fb527d97fd1feea878d1d

export default router;
