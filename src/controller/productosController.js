const Producto = require('../models/producto'); 

const getProducto = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ 
      error: 'Error al obtener los productos', 
      detalle: error.message 
    });
  }
};

const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findById(id);
    
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    
    res.status(200).json(producto);
  } catch (error) {
    res.status(400).json({ 
      error: 'Identificador inválido o error en la consulta', 
      detalle: error.message 
    });
  }
};

const saveProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (error) {
    res.status(400).json({ 
      error: 'Error al registrar el producto', 
      detalle: error.message 
    });
  }
};

const updateProducto = async (req, res) => {
  try {
    const { id } = req.params; 
    const productoActualizado = await Producto.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!productoActualizado) {
      return res.status(404).json({ error: 'Producto no encontrado para actualizar' });
    }

    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(400).json({ 
      error: 'Error al actualizar el producto', 
      detalle: error.message 
    });
  }
};

const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const productoEliminado = await Producto.findByIdAndDelete(id);

    if (!productoEliminado) {
      return res.status(404).json({ error: 'Producto no encontrado para eliminar' });
    }

    res.status(200).json({ 
      mensaje: 'Producto eliminado correctamente', 
      producto: productoEliminado 
    });
  } catch (error) {
    res.status(400).json({ 
      error: 'Error al eliminar el producto', 
      detalle: error.message 
    });
  }
};

module.exports = {
  getProducto,
  getProductoById,
  saveProducto,
  updateProducto,
  deleteProducto
};