import bodyParser from "body-parser";
import express from "express";
import path from "path";
import rootDir from "./utils/path.js";
const PORT = 5000;
const app = express();

const users = [];

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(rootDir, "public")));

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add User" });
});
app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "All Users", users: users });
});
app.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect("/users");
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
