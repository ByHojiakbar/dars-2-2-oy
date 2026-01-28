const { Router } = require("express");
const productRouter = require("./product.routes");

const mainRouter = Router()

mainRouter.use("/products", productRouter)
module.exports = mainRouter