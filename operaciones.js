function validacion() {
    const x = document.getElementById("idia");
    const dia = x.value;

    const y = document.getElementById("imes");
    const mes = y.value;

    const z = document.getElementById("iaño");
    const año = z.value;

    if ((dia <= 31 && dia > 0) && (año <= 2024 && año > 0) && (mes <= 12 && mes > 0)) {
        if ((dia === "31") && (mes === "2"||mes ==="4"||mes === "6"|| mes==="9"||mes==="11")) {
            const miDiv2 = document.getElementById("salidaMes");
            miDiv2.textContent = "El mes que se ingresó no tiene 31 días";
        } else {
            calcularEdad(dia, mes, año);
        }
    } else {
        const miDiv1 = document.getElementById("salidaDia");
        miDiv1.textContent = "El formato de los días debe ser mayor a 0 y menor o igual a 31";
        const miDiv2 = document.getElementById("salidaMes");
        miDiv2.textContent = "El formato de los meses debe ser mayor a 0 y menor o igual a 12";
        const miDiv3 = document.getElementById("salidaAño");
        miDiv3.textContent = "El formato del año debe ser mayor a 0 menor o  igual a 2024";
    }
}


function calcularEdad(dia, mes, año) {
    const fechaActual = new Date();

    const diaAct = fechaActual.getDate();
    const mesAct = fechaActual.getMonth() + 1;
    const añoAct = fechaActual.getFullYear();

    let edadAño = añoAct - año;
    let edadMes = mesAct - mes;
    let edadDia = diaAct - dia;

    if (edadDia < 0) {
        edadMes--;
        const diasEnMesAnterior = new Date(añoAct, mesAct - 1, 0).getDate();
        edadDia += diasEnMesAnterior;
    }

    if (edadMes < 0) {
        edadAño--;
        edadMes += 12;
    }

    if (edadDia > new Date(añoAct, mesAct, 0).getDate()) {
        edadDia = new Date(añoAct, mesAct, 0).getDate();
        edadMes++;
        if (edadMes > 11) {
            edadAño++;
            edadMes = 1;
        }
    }

    resultados(edadDia, edadMes, edadAño);
}

function resultados(edadDia, edadMes, edadAño) {
    const miDiv4 = document.getElementById("salidaDia");
    miDiv4.textContent = "Tienes " + edadDia + " días de edad";
    const miDiv5 = document.getElementById("salidaMes");
    miDiv5.textContent = "Tienes " + edadMes + " meses de edad";
    const miDiv6 = document.getElementById("salidaAño");
    miDiv6.textContent = "Tienes " + edadAño + " años de edad";
}