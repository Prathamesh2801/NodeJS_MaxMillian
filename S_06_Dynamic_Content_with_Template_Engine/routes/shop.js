import express from 'express'
import path from 'path'
import rootDir from '../utils/path.js'
import {products} from './admin.js'

const router =  express.Router()

router.get("/", (req, res, next) => { // these path is exact
  console.log("Products Data : ",products)
  res.render('shop',{prods:products,docTitle:'Shop'})
});

export default router