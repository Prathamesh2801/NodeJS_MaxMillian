import express from "express";
import bodyParser from "body-parser";
import {router as adminRoutes} from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import path from 'path'
import rootDir from "./utils/path.js";
const PORT = 5000;

const app = express();

app.set('view engine','pug')
app.set('views','views')
// Use a third-party library to encoded the stream with Buffer and store in body
app.use(bodyParser.urlencoded({ extended: true })); // extended:true supports nested data structure

// Optional format to use for passing  API Data
// app.use(bodyParser.json())

// Using Express  Middleware to parse form data (x-www-form-urlencoded)
// app.use(bodyParser.urlencoded({ extended: false }));

//  Middleware to parse JSON data (optional, for APIs)
// app.use(bodyParser.json());


// Filtering with Group paths
app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use(express.static(path.join(rootDir,'public')))

app.use((req,res,next)=>{
  // res.statusCode(404)
  res.status(404).render('404')
})


app.listen(PORT, () => {
  console.log(`Server Listening on http://localhost:${PORT}`);
});
