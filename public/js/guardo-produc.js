const guardar = document.querySelector ("#guardar");
const cerrar = document .querySelector ("#cerrar");
const ventanaOK = document .querySelector ("#ventanaOK");

guardar.addEventListener("click", () => {
    alert("El producto fue creado con exito");
  });
  
  cerrar.addEventListener("click", () => {
    ventanaOK.close();
  });