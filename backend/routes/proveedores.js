const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedor');

// Obtener todos los proveedores
router.get('/', proveedorController.getAllProveedores);

// Obtener un proveedor por ID
router.get('/:id', proveedorController.getProveedorById);

// Crear un nuevo proveedor
router.post('/', proveedorController.createProveedor);

// Actualizar un proveedor por ID
router.put('/:id', proveedorController.updateProveedor);

// Eliminar un proveedor por ID
router.delete('/:id', proveedorController.deleteProveedor);

module.exports = router;
