import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Proveedores = () => {
  const [proveedores, setProveedores] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    contacto: '',
    numeroContacto: '',
    provee: '',
  });

  // Obtener todos los proveedores
  useEffect(() => {
    axios.get('http://localhost:5000/api/proveedores')
      .then((response) => setProveedores(response.data))
      .catch((error) => console.log(error));
  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Crear proveedor
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/proveedores', formData)
      .then((response) => {
        setProveedores([...proveedores, response.data]);
        setFormData({
          nombre: '',
          contacto: '',
          numeroContacto: '',
          provee: '',
        });
      })
      .catch((error) => console.log(error));
  };

  // Eliminar proveedor
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/proveedores/${id}`)
      .then(() => setProveedores(proveedores.filter(prov => prov._id !== id)))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Gestión de Proveedores</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre del proveedor"
          required
        />
        <input
          type="text"
          name="contacto"
          value={formData.contacto}
          onChange={handleChange}
          placeholder="Contacto"
          required
        />
        <input
          type="text"
          name="numeroContacto"
          value={formData.numeroContacto}
          onChange={handleChange}
          placeholder="Número de contacto"
          required
        />
        <input
          type="text"
          name="provee"
          value={formData.provee}
          onChange={handleChange}
          placeholder="Provee"
          required
        />
        <button type="submit">Agregar Proveedor</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Contacto</th>
            <th>Número de Contacto</th>
            <th>Provee</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((prov) => (
            <tr key={prov._id}>
              <td>{prov.nombre}</td>
              <td>{prov.contacto}</td>
              <td>{prov.numeroContacto}</td>
              <td>{prov.provee}</td>
              <td>
                <button onClick={() => handleDelete(prov._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Proveedores;
