let formularioDoctores = document.getElementById("registro-doctores")
formularioDoctores.addEventListener("submit", (event) => {
    event.preventDefault()
    const datosMedicos ={
        nombreDoctor: document.getElementById("nombreDoctor").value,
        apellidoDoctor: document.getElementById("apellidoDoctor").value,
        cedulaDoctor: document.getElementById("cedulaDoctor").value,
        especialidad: document.getElementById("especialidad").value,
        consultorio: document.getElementById("consultorio").value,
        correo: document.getElementById("correo").value
    }
    guardarCookies(datosMedicos)
    const confirmacion =confirm("¿Desea ver los datos?")
    if(confirmacion){
        window.location.href = "listado-doctores.html"
    }else{
        formularioDoctores.reset()
    }
})

function guardarCookies(doctor){
    //las cookies antiguas
    let datos = obtenerCookie("doctores");
    if (datos === "") {
        datos = "[]";
    }
    //objeto
    const doctoresObjetos = JSON.parse(datos)
    //añadir nuevas
    doctoresObjetos.push(doctor)
    const jsonDatos = JSON.stringify(doctoresObjetos)
    cambiarCookie("doctores", jsonDatos)
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