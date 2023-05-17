let tablaPacientes = document.getElementById("tabla-pacientes")
let cuerpoTabla = document.querySelector("tbody")

const pacientesCookie = JSON.parse(obtenerCookie("pacientes"))
const doctoresCookie = JSON.parse(obtenerCookie("doctores") || "[]")

for (let i = 0; i < pacientesCookie.length; i++){
    let paciente = pacientesCookie[i]

    let fila = cuerpoTabla.insertRow()
    let celdaNombrePaciente = fila.insertCell()
    let celdaApellidoPaciente = fila.insertCell()
    let celdaCedulaPaciente =  fila.insertCell()
    let celdaEdad = fila.insertCell()
    let celdaTelefono = fila.insertCell()
    let celdaEspecialidad = fila.insertCell()

    celdaNombrePaciente.textContent = paciente.nombrePaciente
    celdaApellidoPaciente.textContent = paciente.apellidoPaciente
    celdaCedulaPaciente.textContent = paciente.cedulaPaciente
    celdaEdad.textContent = paciente.edad
    celdaTelefono.textContent = paciente.telefono
    celdaEspecialidad.textContent = paciente.especialidad

    const doctorEspecialidad = doctoresCookie.find(doctor => paciente.especialidad === doctor.especialidad)
    const celdaDoctorPaciente = fila.insertCell()
    celdaDoctorPaciente.textContent = doctorEspecialidad ? doctorEspecialidad.nombreDoctor : "Por asignar";
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