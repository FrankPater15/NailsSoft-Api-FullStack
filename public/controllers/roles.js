// Simulación de datos iniciales (puedes reemplazarlos con datos reales de tu base de datos)
let roles = [
  { id: 10, nombrerol: 'Administrador', estado: 'Activo' },
  { id: 20, nombrerol: 'Empleado', estado: 'Inactivo' },
];

// Variable para rastrear el rol que se está editando
let editIndex = null;

// Función para renderizar la tabla
function renderTable() {
  const tbody = document.querySelector('#rolesTable tbody');
  tbody.innerHTML = '';
  roles.forEach((item, index) => {
    const row = `
      <tr>
        <td>${item.id}</td>
        <td>${item.nombrerol}</td>
        <td>${item.estado}</td>
        <td class="actions-btn">
          <button class="btn btn-warning btn-sm edit-btn" data-index="${index}"><i class="fa fa-pencil"></i></button>
          <button class="btn btn-danger btn-sm delete-btn" data-index="${index}"><i class="fa fa-trash"></i></button>
          <button class="btn btn-info btn-sm status-btn" data-index="${index}"><i class="fa fa-toggle-on"></i></button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });

  // Agregar los eventos de clic para los botones de editar, eliminar y cambiar estado
  document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      editRole(index);
    });
  });

  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      deleteRole(index);
    });
  });

  document.querySelectorAll('.status-btn').forEach(button => {
    button.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      toggleStatus(index);
    });
  });
}

// Función para capturar el formulario y agregar o editar un rol
document.getElementById('permissionsForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  const roleName = document.getElementById('roleName').value;
  const roleStatus = document.getElementById('roleStatus').value;

  if (editIndex !== null) {
    // Editar rol existente
    roles[editIndex].nombrerol = roleName;
    roles[editIndex].estado = roleStatus;
    editIndex = null; // Reiniciar el índice de edición
  } else {
    // Crear un nuevo rol
    const newId = roles.length + 1; // Generar nuevo ID
    const newRol = {
      id: newId,
      nombrerol: roleName,
      estado: roleStatus,
    };

    // Agregar el nuevo rol al array de roles
    roles.push(newRol);
  }

  // Volver a renderizar la tabla
  renderTable();

  // Cierra el modal después de agregar o editar
  modal.style.display = "none";

  // Limpiar el formulario
  document.getElementById('permissionsForm').reset();
});

// Función para manejar la edición de un rol
function editRole(index) {
  editIndex = index;
  document.getElementById('roleName').value = roles[index].nombrerol;
  document.getElementById('roleStatus').value = roles[index].estado;
  
  modal.style.display = "block";
}

// Función para eliminar un rol
function deleteRole(index) {
  if (confirm("¿Estás seguro de que deseas eliminar este rol?")) {
    roles.splice(index, 1); // Eliminar el rol del array
    renderTable(); // Volver a renderizar la tabla
  }
}

// Función para cambiar el estado de un rol
function toggleStatus(index) {
  roles[index].estado = roles[index].estado === 'Activo' ? 'Inactivo' : 'Activo';
  renderTable(); // Volver a renderizar la tabla
}

// Inicialización de la tabla con datos simulados
renderTable();

// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("openModalBtn");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abre el modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, cierra el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
