
document.addEventListener("DOMContentLoaded", function () {
    const startDay = document.getElementById("start-day");
    const startMonth = document.getElementById("start-month");
    const startYear = document.getElementById("start-year");
    const endDay = document.getElementById("end-day");
    const endMonth = document.getElementById("end-month");
    const endYear = document.getElementById("end-year");
    const resultContainer = document.getElementById("result-container");

    // Llena los selectores de día, mes y año
    fillOptions(startDay, 1, 31);
    fillOptions(endDay, 1, 31);
    fillOptions(startMonth, 1, 12);
    fillOptions(endMonth, 1, 12);
    fillOptions(startYear, 2000, 2030);
    fillOptions(endYear, 2000, 2030);

    // Agrega un listener para detectar cambios en la selección
    [startDay, startMonth, startYear, endDay, endMonth, endYear].forEach(select => {
        select.addEventListener("change", updateSelectedDate);
    });

    // Muestra la fecha seleccionada inicialmente
    updateSelectedDate();
});

function fillOptions(select, start, end) {
    for (let i = start; i <= end; i++) {
        const option = document.createElement("option");
        option.text = i;
        option.value = i;
        select.add(option);
    }
}

function updateSelectedDate() {
    const startDay = document.getElementById("start-day").value;
    const startMonth = document.getElementById("start-month").value;
    const startYear = document.getElementById("start-year").value;
    const endDay = document.getElementById("end-day").value;
    const endMonth = document.getElementById("end-month").value;
    const endYear = document.getElementById("end-year").value;

    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `Fecha de inicio: ${startDay}/${startMonth}/${startYear} - Fecha de fin: ${endDay}/${endMonth}/${endYear}`;
}

const botonok = document.querySelector ("#botonok");
const cerrar = document .querySelector ("#cerrar");
const ventanaOK = document .querySelector ("#ventanaOK");

botonok.addEventListener("click", () => {
    alert("El reporte de utilidades o perdidas se ha generado con éxito, por favor revise su correo y verifique que el PDF con la información halla llegado.");
  });
  
  cerrar.addEventListener("click", () => {
    ventanaOK.close();
  });