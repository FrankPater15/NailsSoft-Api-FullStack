import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [mensaje, setMensaje] = useState('');

  // Haciendo la petición al servidor Express cuando el componente se monta
  useEffect(() => {
    axios.get('/api/hello')
      .then(response => {
        setMensaje(response.data.mensaje);
      })
      .catch(error => {
        console.error('Error al obtener el mensaje del backend', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{mensaje ? mensaje : 'Cargando...'}</h1>
      </header>
    </div>
  );
}

export default App;
