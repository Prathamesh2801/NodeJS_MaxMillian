import express from "express";
import path from "path";
import rootDir from "../utils/path.js";

const router = express.Router();

//  /admin/add-product => GET
router.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

//  /admin/add-product => POST
router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

// module.exports = router  These is a CommonJS export So in order to import you have to use const with require
export default router;
