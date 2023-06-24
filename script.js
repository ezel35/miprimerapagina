function showAlert() {
  alert('¡Hola! Esta es una alerta desde JavaScript!');
}

// Obtén el elemento del formulario con el id "myForm" y asígnalo a la variable form.
const form = document.getElementById('myForm');
// Agrega un evento de tipo "submit" al formulario.
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

// Obtiene el elemento del botón con el id "mostrarPaises" del documento HTML y asígnalo a la variable mostrarPaisesBtn.

const mostrarPaisesBtn = document.getElementById('mostrarPaises');

// Cambia el estilo del elemento con el id "pais" para que sea visible.

mostrarPaisesBtn.addEventListener('click', function() {
  const paisSelect = document.getElementById('pais');
  paisSelect.style.display = 'block';
});

// Valida si el email cumple con el formato deseado utilizando una expresión regular.

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  return regex.test(email);
}

// La función validateForm() se encarga de obtener los valores ingresados en los campos del formulario.

function validateForm() {
  const nombreInput = document.getElementById('nombre');
  const nombre = nombreInput.value;

  const apellidoInput = document.getElementById('apellido');
  const apellido = apellidoInput.value;

  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  const passwordInput = document.getElementById('password');
  const password = passwordInput.value;

  const mensajeInput = document.getElementById('mensaje');
  const mensaje = mensajeInput.value;

  const paisInput = document.getElementById('pais');
  const pais = paisInput.value;

  // Si el correo electrónico ingresado no es válido, muestra una alerta pidiendo al usuario que ingrese un correo electrónico válido.
  
  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
   alert(
      'Formulario enviado correctamente:\n\nNombre: ' +
        nombre +
        '\nApellido: ' +
        apellido +
        '\nCorreo Electrónico: ' +
        email +
        '\nContraseña: ' +
        password +
        '\nMensaje: ' +
        mensaje +
        '\nPaís: ' +
        pais
    );
  }
}

// Botón de menú responsive
document.querySelector(".botons-menu-toggle")
  .addEventListener("click", function() {
         document.querySelector(".nav-links").
                    classList.toggle("nav-links-responsive")})

