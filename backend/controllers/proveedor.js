// controllers/proveedor.js
const Proveedor = require('../models/proveedor.js');

// Crear un proveedor
exports.crearProveedor = async (req, res) => {
  const nuevoProveedor = new Proveedor(req.body);
  try {
    const proveedorGuardado = await nuevoProveedor.save();
    res.json(proveedorGuardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los proveedores
exports.obtenerProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.find();
    res.json(proveedores);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un proveedor
exports.actualizarProveedor = async (req, res) => {
  try {
    const proveedorActualizado = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(proveedorActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un proveedor
exports.eliminarProveedor = async (req, res) => {
  try {
    await Proveedor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Proveedor eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
