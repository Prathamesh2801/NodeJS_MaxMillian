import express from "express";
import path from "path";
import rootDir from "../utils/path.js";

const router = express.Router();

router.get("/users", (req, res) => {
  console.log(path.join(rootDir, "views", "users.html"))
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

router.post("/users", (req, res) => {  
  const { body } = req;
  console.log("Data : ", body);
  res.redirect("/");
});

export default router;
