import { addProductToCart } from "../models/cart.js";
import { findByIdProduct, getAllProducts } from "../models/product.js";

export const getProducts = (req, res, next) => {
  const products = getAllProducts();
  res.render("shop/product-list", {
    prods: products,
    pageTitle: "All Products",
    path: "/products",
  });
};

export const getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  const selectedProduct = findByIdProduct(prodId);
  res.render("shop/product-detail", {
    product: selectedProduct,
    pageTitle: selectedProduct.title,
    path: "/products",
  });
};

export const getIndex = (req, res, next) => {
  const products = getAllProducts();
  res.render("shop/index", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
  });
};

export const getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};
export const postCart = (req, res, next) => {
  const prodId = req.body.productId;
  const selectedProduct = findByIdProduct(prodId);
  const productPrice = selectedProduct.price;
  const response = addProductToCart(prodId,productPrice)
  console.log(response)
  res.redirect("/cart");
};

export const getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

export const getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
