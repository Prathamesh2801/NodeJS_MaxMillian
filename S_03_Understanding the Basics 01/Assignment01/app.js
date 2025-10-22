import http from 'node:http'
import { handleRoute } from './routes.js'
const PORT = 5000
const server = http.createServer(handleRoute)

server.listen(PORT,()=>{
  console.log(`Server Listening on http://localhost:${PORT}`)
})
