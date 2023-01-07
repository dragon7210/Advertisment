import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { postSave, postGet, postGetById, searchPost, postUpdate, postDelete } from "../controllers/Posts.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/auth/register", Register);
router.post("/auth/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.post("/post", verifyToken, postSave);
router.put("/post", verifyToken, postUpdate);
router.delete("/post/:id", verifyToken, postDelete);
router.get("/post", verifyToken, postGet);
router.get("/post/:id", verifyToken, postGetById);
router.get("/search", verifyToken, searchPost)

export default router;
