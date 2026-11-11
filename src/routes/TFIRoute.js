const express = require('express');
const router = express.Router();

const { 
  getProducto, 
  saveProducto, 
  deleteProducto, 
  updateProducto, 
  getProductoById 
} = require('../controller/productosController');

router.get('/', getProducto);
router.get('/:id', getProductoById);
router.post('/', saveProducto);
router.delete('/:id', deleteProducto);
router.put('/:id', updateProducto); 

module.exports = router;