const express = require('express');
const app = express();

// Datos de ejemplo de lista de tareas
const tasks = [
  {
    id: '123456',
    isCompleted: false,
    description: 'Walk the dog',
  },
  // Agrega más tareas según sea necesario
];

// Ruta para obtener la lista de tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Inicia el servidor en el puerto 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
