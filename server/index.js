import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import PostRouter from "./Routes/Post.js";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/posts", PostRouter);

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
