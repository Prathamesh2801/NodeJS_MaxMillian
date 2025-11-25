import express from "express";
import { getAddproducts, postAddProduct, getProducts } from "../controllers/admin.js";

const router = express.Router();

//  /admin/add-product => GET
router.get("/add-product", getAddproducts);

router.get("/products", getProducts);

//  /admin/add-product => POST
router.post("/add-product", postAddProduct);

// module.exports = router  These is a CommonJS export So in order to import you have to use const with require
export default router;
// export const adminData =  {router , products};  Now you have to access with dot notation like adminData.router , etc.
