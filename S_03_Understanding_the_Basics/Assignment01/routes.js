export const handleRoute = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>my first page from node js</title></head>");
    res.write(`
    <body>
      <form action="/create-user" method="POST">
        <input type="text" name="username">
        <button type="submit">Create user</button>
      </form>
    </body>
  `);
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.write(`<ul>
        <li>user 1</li>
        <li>user 2</li>
        <li>user 3</li>
        <li>user 4</li>
        </ul>`);
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
     res.end();

    });
  }
};