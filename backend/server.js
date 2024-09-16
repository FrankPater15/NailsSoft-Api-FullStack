const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const proveedoresRoutes = require('./routes/proveedores.js');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a la base de datos
mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('DB conectada'))
.catch((err) => console.log(err));

// Rutas
app.use('/api/proveedores', proveedoresRoutes);

// Escuchar en un puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
