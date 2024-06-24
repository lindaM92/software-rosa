const registrar = document.querySelector("#registrar");
const cerrar = document.querySelector("#cerrar");
const ventanaOK = document.querySelector("#ventanaOK");

registrar.addEventListener("click", () => {
  alert("Su registro se realizo con éxito, por favor ingrese al aplicativo.");
});

cerrar.addEventListener("click", () => {
  ventanaOK.close();
});

