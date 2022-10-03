import express from "express";
import dotenv from "dotenv";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import database from "./config/Database.js";

const app = express();
 
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);
 
app.listen(5000, ()=> console.log('Server Up and Running...'));