const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// load env vars
dotenv.config({ path: "./config/config.env" });

// connect to the mongodb database
connectDB();

// Route files
const auth = require("./routes/auth");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));



app.use(cors());

app.use("/api/auth", auth);
app.use("/api/items", require("./routes/items"));
app.use("/api/payment", require("./routes/payment"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server is running on port ", PORT));
