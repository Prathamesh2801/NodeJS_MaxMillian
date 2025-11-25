// models/product.js
import fs from "fs";
import path from "path";
import rootDir from "../utils/path.js";

const p = path.join(rootDir, "data", "cart.json");

export function addProductToCart(id, productPrice) {
  fs.readFile(p, (err, fileContent) => {
    let cart = { products: [], totalPrice: 0 };
    if (!err && fileContent.toString().trim().length > 0) {
      cart = JSON.parse(fileContent);
    }
    const existingProductIndex = cart.products.findIndex(
      (prod) => prod.id === id
    );
    const existingProduct = cart.products[existingProductIndex];
    let updatedProduct;
    if (existingProduct) {
      updatedProduct = { ...existingProduct };  
      updatedProduct.qty = updatedProduct.qty + 1;
      cart.products = [...cart.products];
      cart.products[existingProduct] = updatedProduct;
    } else {
      updatedProduct = { id: id, qty: 1 };
      cart.products = [...cart.products, updatedProduct];
    }
    cart.totalPrice = cart.totalPrice + +productPrice;

    fs.writeFile(p, JSON.stringify(cart), (err) => {
      if (err) console.log("Write error:", err);
    });
  });
}
