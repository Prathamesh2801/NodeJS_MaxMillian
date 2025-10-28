import express from "express";
const PORT = 5000;

const app = express();

app.use("/users", (req, res, next) => {
  res.send("<h1>Number of Users. </h1>");
});
app.use("/", (req, res, next) => {
    res.send("<h1>Dummy Data</h1>");
});


app.listen(PORT, () => {
  console.log(`Server Listening on port http://localhost:${PORT}`);
});
