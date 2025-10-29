import express from 'express'
import path from 'path'
import rootDir from '../utils/path.js'

const router =  express.Router()

router.get("/", (req, res, next) => { // these path is exact
  res.sendFile(path.join(rootDir,'views','shop.html'))
});

export default router