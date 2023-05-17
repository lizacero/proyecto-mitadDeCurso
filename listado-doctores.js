let tablaDoctores = document.getElementById("tabla-doctores")
let cuerpoTabla = tablaDoctores.querySelector("tbody")

const doctoresCookie = JSON.parse(obtenerCookie("doctores"))
const pacientesCookie = JSON.parse(obtenerCookie("pacientes") || "[]")

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

    let pacientesEncontrados = pacientesCookie.filter(paciente => doctor.especialidad === paciente.especialidad)
    const doctorPaciente = fila.insertCell()
    if(pacientesEncontrados.length>0){
        doctorPaciente.innerHTML = `<ul id="pacientes"></ul>`
        const pacientes = doctorPaciente.querySelector("#pacientes")
        for (let j=0; j < pacientesEncontrados.length; j++){
            const pacienteEncontrado = pacientesEncontrados[j]
            pacientes.innerHTML += `<li>${pacienteEncontrado.nombrePaciente}</li>`
        }
    } else {
        doctorPaciente.textContent = "Sin pacientes"
    }

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