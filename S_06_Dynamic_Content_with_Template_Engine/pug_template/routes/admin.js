import express from "express";
import path from "path";
import rootDir from "../utils/path.js";
import { title } from "process";

const router = express.Router();

const products = [];
//  /admin/add-product => GET
router.get("/add-product", (req, res) => {
  res.render('add-product',{pageTitle:'Add Product',path:'/admin/add-product'});
});

//  /admin/add-product => POST
router.post("/add-product", (req, res) => {
  products.push({title:req.body.title})
  res.redirect("/");
});

// module.exports = router  These is a CommonJS export So in order to import you have to use const with require
export {router , products};
// export const adminData =  {router , products};  Now you have to access with dot notation like adminData.router , etc. 
