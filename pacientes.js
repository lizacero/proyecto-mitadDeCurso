function mostrarpacientes() {
    let pacientes = []
    let localpacientes = localStorage.getItem("pacientes")
    if (localpacientes) {
        pacientes = JSON.parse(localpacientes)
    }
    const tablapacientes = document.getElementById("tabla-pacinetes")
    const cuerpoTabla = tablapacientes.getElementsByTagName("tbody")[0]

    pacientes.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombre = fila.insertCell()
        celdaNombre.textContent= paciente.paciente
        const celdaapellido = fila.insertCell();
        celdaapellido.textContent=paciente.apellido
        const celdaCedula = fila.insertCell();
        celdaCedula.textContent=paciente.cedula
        const celdaEdad = fila.insertCell();
        celdaEdad.textContent=paciente.edad
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent=paciente.telefono
        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent=paciente.especialidad
    
    });
}

mostrarpacientes()
