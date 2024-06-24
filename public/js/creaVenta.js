value = document.getElementById("number");
/* comando selecciona elementos del DOM y los asignan a variables para poder manipularlos más adelante.
 */

parseValue = 0; /* mantiene el valor actual del contador. */

disminuye = () => {
  /* verifica si el valor actual es mayor o igual a 1, 
    asegura que el contador no disminuya por debajo de 0 */
if (parseValue >= 1) {
    parseValue = parseValue - 1; /* Si la condición es verdadera, se decrementa el valor de parseValue en 1 */
    value.innerHTML = parseValue; /* Esto actualiza visualmente el número mostrado en la página web. */
}
};

limpiar = () => {
  value.innerHTML = 0; /* resetea el valor a su estado inicial 0 */
};

incrementa = () => {
  parseValue = parseValue + 1;
  value.innerHTML = parseValue;
};

/* comandos que seleccionan elementos del DOM y los asignan a variables para poder manipularlos.
 */
const crear = document.querySelector("#crear");
const cerrar = document.querySelector("#cerrar");
const ventanaOK = document.querySelector("#ventanaOK");

crear.addEventListener("click", () => {
  alert("Venta creada exitosamente");
});

cerrar.addEventListener("click", () => {
  ventanaOK.close();
});


