const Proveedor = require('../models/Proveedor');

// Obtener todos los proveedores
exports.getAllProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.json(proveedores);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener un proveedor por ID
exports.getProveedorById = async (req, res) => {
    try {
        const proveedor = await Proveedor.findById(req.params.id);
        if (proveedor) {
            res.json(proveedor);
        } else {
            res.status(404).json({ message: 'Proveedor no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear un nuevo proveedor
exports.createProveedor = async (req, res) => {
    const proveedor = new Proveedor({
        nombre: req.body.nombre,
        contacto: req.body.contacto,
        numeroContacto: req.body.numeroContacto,
        provee: req.body.provee
    });

    try {
        const newProveedor = await proveedor.save();
        res.status(201).json(newProveedor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Actualizar un proveedor por ID
exports.updateProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedor.findById(req.params.id);
        if (proveedor) {
            proveedor.nombre = req.body.nombre || proveedor.nombre;
            proveedor.contacto = req.body.contacto || proveedor.contacto;
            proveedor.numeroContacto = req.body.numeroContacto || proveedor.numeroContacto;
            proveedor.provee = req.body.provee || proveedor.provee;

            const updatedProveedor = await proveedor.save();
            res.json(updatedProveedor);
        } else {
            res.status(404).json({ message: 'Proveedor no encontrado' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un proveedor por ID
exports.deleteProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedor.findById(req.params.id);
        if (proveedor) {
            await proveedor.remove();
            res.json({ message: 'Proveedor eliminado' });
        } else {
            res.status(404).json({ message: 'Proveedor no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
