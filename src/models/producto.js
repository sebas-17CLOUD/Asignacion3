const mongoose = require('mongoose');

const tfiSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: [true, 'El nombre es obligatorio'], 
    trim: true 
  },
  descripcion: { 
    type: String, 
    required: [true, 'La descripción es obligatoria'], 
    trim: true 
  },
  categoria: { 
    type: String, 
    required: [true, 'La categoría es obligatoria'], 
    trim: true 
  },
  precio: { 
    type: Number, 
    required: [true, 'El precio es obligatorio'], 
    min: [0, 'El precio no puede ser negativo'] 
  },
  cantidad: { 
    type: Number, 
    required: [true, 'La cantidad es obligatoria'], 
    min: [0, 'La cantidad no puede ser negativa'] 
  },
  estado: { 
    type: String, 
    default: 'Activo', 
    trim: true 
  }
}, {
  versionKey: false,
  timestamps: true 
});

const TFI = mongoose.model('TFI', tfiSchema);

module.exports = TFI;