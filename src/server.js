require("dotenv").config()
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const mainRouter = require("./routes/main.routes");
app.use(express.json());
app.use(morgan("dev"))
app.use("/api", mainRouter)

mongoose.connect(process.env.MONGO_DB_URL)
.then(() => console.log("connected to db"))
.catch(() =>  console.log('Connection Failed')
)

let PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))