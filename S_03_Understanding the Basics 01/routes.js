const fs = require("fs");

// export const requestHandler = (req, res) => {
const requestHandler = (req, res) => {
  const { url, method } = req;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter a Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message' /><button type='submit'>Send </button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  // Understand and teach the stream and Buffer in the example of Train and station as it's Buffer to make it more sense.
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      // fs.writeFileSync("message.txt", message);
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  // Above are the callback functions which will not exactly execute at the same time instead at it will take the note schedule

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Node Web App</title></head>");
  res.write("<body><h1>Hello from my Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
};

// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text",
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded text";

exports.handler = requestHandler;
exports.someText = "Some hard coded text";
