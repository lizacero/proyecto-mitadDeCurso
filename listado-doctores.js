let tablaDoctores = document.getElementById("tabla-doctores")
let cuerpoTabla = tablaDoctores.querySelector("tbody")

const doctoresCookie = JSON.parse(obtenerCookie("doctores"))

for (let i = 0; i < doctoresCookie.length; i++) {
    let doctor = doctoresCookie[i]

    let fila = cuerpoTabla.insertRow()
    let celdaNombreDoctor = fila.insertCell()
    let celdaApellidoDoctor = fila.insertCell()
    let celdaCedulaDoctor = fila.insertCell()
    let celdaEspecialidad = fila.insertCell()
    let celdaConsultorio = fila.insertCell()
    let celdaCorreo = fila.insertCell()

    celdaNombreDoctor.textContent = doctor.nombreDoctor
    celdaApellidoDoctor.textContent = doctor.apellidoDoctor
    celdaCedulaDoctor.textContent = doctor.cedulaDoctor
    celdaEspecialidad.textContent = doctor.especialidad
    celdaConsultorio.textContent = doctor.consultorio
    celdaCorreo.textContent = doctor.correo

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