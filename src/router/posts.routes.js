const { Router } = require("express");
const productController = require("../controller/product.controller");

const productRouter = Router()
productRouter.post("/create", productController.CREATE_PRODUCT)
productRouter.get("/", productController.GET_PRODUCTS)
productRouter.get("/:id", productController.GET_PRODUCT)
productRouter.put("/:id", productController.UPDATE_PRODUCT)
productRouter.delete("/:id", productController.DELETE_PRODUCT)
module.exports = productRouter