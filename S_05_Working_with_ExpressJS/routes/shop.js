import express from 'express'

const router =  express.Router()

router.get("/", (req, res, next) => { // these path is exact
  res.send("<h1>Hello from Express</h1>");
});

export default router