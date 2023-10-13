import express from "express";
import { createPost } from "../Controllers/Post.js";

const router = express.Router();

router.post("/", createPost);

export default router;
