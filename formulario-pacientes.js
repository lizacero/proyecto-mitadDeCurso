let formularioPacientes = document.getElementById("registro-pacientes")
formularioPacientes.addEventListener("submit", (event) => {
    event.preventDefault()
    const datosPacientes = {
        nombrePaciente: document.getElementById("nombrePaciente").value,
        apellidoPaciente: document.getElementById("apellidoPaciente").value,
        cedulaPaciente: document.getElementById("cedulaPaciente").value,
        edad: document.getElementById("edad").value,
        telefono: document.getElementById("telefono").value,
        especialidad: document.getElementById("especialidad").value,
    }
    guardarCookies(datosPacientes)
    const confirmacion =confirm("¿Desea ver los datos?")
    if(confirmacion){
        window.location.href = "listado-pacientes.html"
    }else{
        formularioDoctores.reset()
    }
})

function guardarCookies(paciente){
    //las cookies antiguas
    let datos = obtenerCookie("pacientes");
    if (datos === "") {
        datos = "[]";
    }
    //objeto
    const pacientesObjetos = JSON.parse(datos)
    //añadir nuevas
    pacientesObjetos.push(paciente)
    const jsonDatos = JSON.stringify(pacientesObjetos)
    cambiarCookie("pacientes", jsonDatos)
}

function obtenerCookie(nombre) {
    const cookies = document.cookie.split("; ") //split busca cualquier tipo de texto
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return "";
}

function cambiarCookie(nombre, valor) {
    document.cookie = `${nombre}= ${encodeURIComponent(valor)}`;
}