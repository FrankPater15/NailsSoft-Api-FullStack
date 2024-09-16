// routes/proveedores.js
const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedor.js');

// Crear proveedor
router.post('/', proveedorController.crearProveedor);

// Obtener todos los proveedores
router.get('/', proveedorController.obtenerProveedores);

// Actualizar proveedor
router.put('/:id', proveedorController.actualizarProveedor);

// Eliminar proveedor
router.delete('/:id', proveedorController.eliminarProveedor);

module.exports = router;
