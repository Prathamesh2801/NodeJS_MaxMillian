// models/product.js
import fs from "fs";
import path from "path";
import rootDir from "../utils/path.js";

const p = path.join(rootDir, "data", "products.json");

export function createProduct(title, imageUrl, description, price) {
  fs.readFile(p, (err, fileContent) => {
    let products = [];

    if (!err && fileContent.toString().trim().length > 0) {
      products = JSON.parse(fileContent);
    }
    const id = Math.random().toString();

    const newProduct = { id, title, imageUrl, description, price };
    products.push(newProduct);

    fs.writeFile(p, JSON.stringify(products), (err) => {
      if (err) console.log("Write error:", err);
    });
  });
}

export function getAllProducts() {
  try {
    const fileContent = fs.readFileSync(p).toString().trim();
    if (fileContent.length === 0) return [];
    return JSON.parse(fileContent);
  } catch (err) {
    return [];
  }
}

export function findByIdProduct(id) {
  try {
    const fileContent = fs.readFileSync(p).toString().trim();
    if (fileContent.length === 0) return null;

    const products = JSON.parse(fileContent);
    const product = products.find((prod) => prod.id === id);
    return product || null;
  } catch (err) {
    console.log("Error reading products file:", err);
    return null;
  }
}
