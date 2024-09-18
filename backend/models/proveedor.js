// models/Proveedor.js
const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  contacto: { type: String, required: true },
  numeroContacto: { type: String, required: true },
  provee: { type: String, required: true }
});

const Proveedor = mongoose.model('Proveedor', proveedorSchema);
module.exports = Proveedor;
