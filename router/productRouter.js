import express from 'express';
const router = express.Router();
import {
    getAllProduct,
    getProductById,
    createNewProduct,
    updateProduct,
    deleteProduct
} from '../controller/productControllers.js';

router.route('/products').get(getAllProduct)
router.route('/product').get(getProductById)
router.route('/new/product').post(createNewProduct)
router.route('/updateProduct').post(updateProduct)
router.route('/deleteProduct').delete(deleteProduct)
export default router;