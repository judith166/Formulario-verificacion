//Hemos detectado que el boton de enviar el FORM realiza la accion del SUBMIT
//Tenemos que parar esa accion para que no refresque la pagina. Y esa accion la realiza el form, asi que cogemos el elemento form mediante el DOM.
let form = document.getElementsByTagName("form")[0];
let inputName = document.getElementById("nombre");
let inputEmail = document.getElementById("email");
let inputTelf = document.getElementById("telf");
let errorMSG = document.getElementsByClassName("error_msg");
let mensaje = document.getElementsByTagName("textarea")[0];

// regexp
let regexpEMAIL = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let regexpTELF = /^09[0-9]{7}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault(); //parar el envio del formulario
  //validacion: primero reseteamos los estilos de error sw los campos y borramos los mensajes de error para luego comprobar...
  resetEstilosMensajesError();

  //validacion del campo del nombre

  if (inputName.value.length === 0) {
    //si esta vacio
    inputName.classList.add("errorInput");
    errorMSG[0].textContent = "Rellena este campo";
  }

  //email

  if (inputEmail.value.length === 0) {
    inputEmail.classList.add("errorInput");
    errorMSG[1].textContent = "Rellena este campo";
  } else if (!regexpEMAIL.test(inputEmail.value)) {
    inputEmail.classList.add("errorInput");
    errorMSG[1].textContent = "Añade un email correcto";
  }

  //telf
  if (inputTelf.value.length === 0) {
    inputTelf.classList.add("errorInput");
    errorMSG[2].textContent = "Rellena este campo";
  } else if (!regexpTELF.test(inputTelf.value)) {
    inputTelf.classList.add("errorInput");
    errorMSG[2].textContent = "Añade un telefono correcto";
  }

  //mensaje
  if (mensaje.value.length === 0) {
    //si esta vacio
    mensaje.classList.add("errorInput");
    errorMSG[3].textContent = "Rellena este campo";
  } else {
    // let palabras = mensaje.value.split(/\s+/);
    if (mensaje.value.length < 5) {
        mensaje.classList.add("errorInput");
        errorMSG[3].textContent = "Añade minimo 5 palabras";
    }
  }
});

function resetEstilosMensajesError() {
  let inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("errorInput");
    errorMSG[i].textContent = "";
  }
  mensaje.classList.remove("errorInput");
  errorMSG[3].textContent = "";
}

inputName.addEventListener("keyup", () => {
  if (inputName.value.length === 0) {
    // Si está vacío
    inputName.classList.add("errorInput");
    errorMSG[0].textContent = "Rellena este campo";
  } else {
    inputName.classList.remove("errorInput");
    errorMSG[0].textContent = "";
  }
});

inputEmail.addEventListener("keyup", () => {
  if (inputEmail.value.length === 0) {
    inputEmail.classList.add("errorInput");
    errorMSG[1].textContent = "Rellena este campo";
  } else {
    inputEmail.classList.remove("errorInput");
    errorMSG[1].textContent = "";
  }
});

inputTelf.addEventListener("keyup", () => {
  if (inputTelf.value.length === 0) {
    inputTelf.classList.add("errorInput");
    errorMSG[2].textContent = "Rellena este campo";
  } else {
    inputTelf.classList.remove("errorInput");
    errorMSG[2].textContent = "";
  }
});

// mensaje.addEventListener("keyup", () => {
//   if (mensaje.value.length === 0) {
//     mensaje.classList.add("errorInput");
//     errorMSG[3].textContent = "Rellena este campo";
//   } else {
//     // let palabras = mensaje.value.split(/\s+/);
//     if (palabras.length < 5) {
//       mensaje.classList.add("errorInput");
//       errorMSG[3].textContent = "Añade al menos 5 palabras";
//     } else {
//       mensaje.classList.remove("errorInput");
//       errorMSG[3].textContent = "";
//     }
//   }
// });
