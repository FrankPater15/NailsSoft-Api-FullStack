require('dotenv').config();
const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const proveedoresRoutes = require('./routes/proveedores.js');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// URL de conexión a MongoDB Atlas
const mongoURI = process.env.MONGODB_URI;

// Conectar a la base de datos
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Conectado a MongoDB Atlas'))
.catch((err) => console.log('Error de conexión:', err));

// Rutas
app.use('/api/proveedores', proveedoresRoutes);

// Escuchar en un puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
