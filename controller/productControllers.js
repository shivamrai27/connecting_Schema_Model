import { products } from '../db.js'
import Product from '../model/productSchema.js';
export const getAllProduct = function (req, res) {
    res.json(products)
}
export const getProductById = function (req, res, next) {
    res.json('Product by id')
}
export const createNewProduct = async function (req, res, next) {
    const newProduct = req.body;
    const r = await Product.create(newProduct);
    res.json(r);
}

export const updateProduct = function (req, res) {
    res.json("product is updated")
}

export const deleteProduct = function (req, res) {
    res.json("product is deleted")
}

