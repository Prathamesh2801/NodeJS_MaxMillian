import express from 'express'
import path from 'path'
import rootDir from '../utils/path.js'

const router = express.Router()

router.get('/',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','index.html'))
})

export default router