import express from "express";

const router = express.Router();

router.get("/add-product", (req, res) => {
  res.send(
    "<form action='/add-product' method='POST'> <input type='text' name='title' /> <button type='submit'>Add Product</button> </form>"
  );
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

// module.exports = router  These is a CommonJS export So in order to import you have to use const with require
export default router;
