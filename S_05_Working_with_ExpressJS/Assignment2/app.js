import express from 'express'
import rootDir from './utils/path.js'
import bodyParser from 'body-parser'
import landingPage from './routes/index.js'
import usersPage from './routes/users.js'
import path from 'path'
const PORT = 3000

const app = express()

// Server Stati Files 
app.use(express.static(path.join(rootDir,'public')))

// Conversion To get the username 
app.use(bodyParser.urlencoded({extended:false}))

// Optional Part for data structure to get API 
app.use(bodyParser.json())


app.use(landingPage)
app.use(usersPage)


app.listen(PORT,()=>{
    console.log(`Server Listening on port : http://localhost:${PORT}`)
})


