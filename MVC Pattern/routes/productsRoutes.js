// routes/productsRoutes.js
const express = require('express');
const router = express.Router();
const { getProducts,createProduct ,updateProduct ,deleteProduct } = require('../controllers/ProductController');

// Route to get all products
router.get('/products', getProducts);

router.post('/products', createProduct );

router.get('/products/:id',updateProduct);

router.delete('/products/:id',deleteProduct);

module.exports = router;
