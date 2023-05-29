function mostrarMedicos() {
    let medicos = []
    let localMedicos = localStorage.getItem("medicos")
    if(localMedicos){
        medicos = JSON.parse(localMedicos)
    }
    const tablaMedicos = document.getElementById("tabla-medicos")
    const cuerpoTabla = tablaMedicos.getElementsByTagName("tbody")[0]
    medicos.forEach(medico => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombreMedico = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaCorreo = fila.insertCell()


        celdaNombreMedico.textContent = medico.nombre
        celdaApellido.textContent = medico.apellido
        celdaNumeroCedula.textContent = medico.cedula
        celdaEspecialidad.textContent = medico.especialidad
        celdaConsultorio.textContent = medico.consultorio
        celdaCorreo.textContent = medico.correo
        
    });
}

mostrarMedicos()

//let medicos= [
   // {
   //     nombreMEdico:"Juan",
   //     apellidoMedico:"fernandez",
   //     cedulaMedico:"123456789",
   //     especialidad:"cirujia",
   //     consultorio:"201",
   //     correoContacto:"fernandez@clinica123",
   //     paciente:"tita"
  //  },
  //  {
  //      nombreMEdico:"Enrique",
  //      apellidoMedico:"Muñoz",
  //      cedulaMedico:"7456123",
 //    especialidad:"vacunacion",
//     consultorio:"301",
   //     correoContacto:"muñoz@clinica123",
   //     paciente:"crox",
    //}
//]
//let nombreMEdico=["juan","enrique"]
//let apellidoMedico=["fernandez","muñoz"]
//let cedulaMedico=["123456789","7456123"]
//let especialidad=["cirujia","vacunacion"]
//let consultorio=["201","301"]
//let correoContacto=["fernandez@clinica123","muñoz@clinica123"]
//let paciente=["tita","crox"]

//for (let i=0; i<medicos.length; i++ ){
   // let medico=medicos[i];
    //let fila =cuerpotabla.insertRow();
   // let celdanombreMEdico = fila.insertCell();
   // let celdaapellidoMedico = fila.insertCell();
    //let celdacedulaMedico =fila.insertCell();
    //let celdaespecialidad =fila.insertCell();
    //let celdaconsultorio =fila.insertCell();
    //let celdacorreoContacto=fila.insertCell();
    //let celdapaciente =fila.insertCell();

   // celdanombreMEdico.textContent=medico.nombreMEdico;
    //celdaapellidoMedico.textContent=medico.apellidoMedico;
   // celdacedulaMedico.textContent=medico.cedulaMedico;
   // celdaespecialidad.textContent=medico.especialidad;
    //celdaconsultorio.textContent=medico.consultorio;
    //celdacorreoContacto.textContent=medico.correoContacto;
    //celdapaciente.textContent=medico.paciente;

//}
  



