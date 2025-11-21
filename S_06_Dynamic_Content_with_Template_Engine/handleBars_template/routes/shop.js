import express from 'express'
import path from 'path'
import rootDir from '../utils/path.js'
import {products} from './admin.js'

const router =  express.Router()

router.get("/", (req, res, next) => { // these path is exact
  console.log("Products Data : ",products)
  res.render('shop',{prods:products,pageTitle:'Shop',path:'/',hasProducts:products.length > 0,activeShop:true,productCSS:true})
});

export default router