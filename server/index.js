const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {connectDB} = require("./connection");
const routes = require("./routes")
require("dotenv").config();

connectDB();
app.use(express.json());
app.use(cors({ origin: "https://eco-chef-food-recipe-550373ydt-ojas13-git.vercel.app", credentials: true }));
app.use(cookieParser());

app.use("/api", routes);

app.listen(port, '0.0.0.0',() => console.log(`Server running on port ${port}`));
