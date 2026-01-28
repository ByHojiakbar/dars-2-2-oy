const { globalError, ClientError } = require("shokhijakhon-error-handler")
const Product = require("../../models/user.module")

module.exports = {
    async CREATE_PRODUCT(req, res) {
       try {

    const product = await Product.create(req.body)
    res.status(201).json(product)
        
        
       } catch (err) {
        return globalError(err, res)
       }
    },
    async GET_PRODUCTS(req, res) {
        try {
         const products = await Product.find({})
         res.status(200).json(products)
        } catch (err) {
            return globalError(err , res)
            
        }
    },
    async GET_PRODUCT (req, res) {
        try {
            let {id} = req.params
            let product = await Product.findById(id);
            res.status(200).json(product)
            
        } catch (err) {
             return globalError(err, res)
            
        }
    },
    async UPDATE_PRODUCT (req, res) {
        try {

           let {id} = req.params;
           let product = await Product.findByIdAndUpdate(id, req.body)
           if(!product) throw new ClientError("Product not found", 404);
           const updatedProduct = await Product.findById(id)
           res.status(200).json( {message: "Product Succesfully updated"},updatedProduct)
        } catch (err) {

            return globalError(err, res)
        }
    },
    async DELETE_PRODUCT (req , res) {
        try {
            let {id} = req.params;
            let product = await Product.findByIdAndDelete(id);
            if(!product) throw new ClientError("Product not found", 404)
            
            res.status(200).json({message: "Product Succesfully Deleted", status: 200})
        } catch (err) {

            return globalError(err, res)
        }
    }
}