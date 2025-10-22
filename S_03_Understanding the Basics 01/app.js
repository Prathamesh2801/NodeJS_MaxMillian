const http = require("http"); // Look Global Module
const routes = require("./routes");
console.log(routes.someText)
const server = http.createServer(routes.handler);
//   console.log(req.url,req.method,req.headers);
// process.exit();  HARD STOP // Once it gets the request it stops the Event Loop

//   const {url,method} = req;

server.listen(5000);
