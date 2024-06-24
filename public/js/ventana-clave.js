const botonok = document.querySelector ("#botonok");
const cerrar = document .querySelector ("#cerrar");
const ventanaOK = document .querySelector ("#ventanaOK");

botonok.addEventListener("click", () => {
    alert("El cambio de contraseña se realizo satisfactoriamente");
  });
  
  cerrar.addEventListener("click", () => {
    ventanaOK.close();
  });