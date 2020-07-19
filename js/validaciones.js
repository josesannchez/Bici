function iniciar(pagina){
if(confirm("profv llene los campos de inicio de sesion")){
document.envaa.action = pagina;
document.envaa.submit();
}}
//LOGINN
function Login() {
	var Correo=document.getElementById("correo");
	var Contraseña=document.getElementById("password");
	var btnregist=document.getElementById("form");

btnregist.addEventListener('submit', function(event)
{
event.preventDefault();
if (Correo.value =="null" || Contraseña.value=="null" ) {
     alert('Bien echo presione acepta porfavor para continuar');
	}
	else{
	alert('Error,Llene porfavor los campos para iniciar sesion');
	return false;
	}
});
}

//solicitud para el tour en bicicleta
	function solicitar(){
    if (confirm("La solicitud a sido enviada con exito presione aceptar para salir porfv")){
       document.EnviarForm.submit();
}
}

//registrar usuarios
function validarFormulario(){
    var tNombre = document.getElementById('nombre').value;
    var tApellido = document.getElementById('apellido').value;
    var tEdad = document.getElementById('edad').value;
    var tNacionalidad = document.getElementById('nacionalidad').value;
    var tCorreo = document.getElementById('correo').value;
    var Contraseña =document.getElementById('password');
    var verificar =document.getElementById('verificar');
 
    //Test campo obligatorio
    if(tNombre == null || tNombre.length == 0 || /^\s+$/.test(tNombre)){
      alert('Debe ingresar el nombre');
      return false;
    }
 if(TApellido == null || TApellido.length == 0 || /^\s+$/.test(TApellido)){
      alert('Debe ingresar el apellido');
      return false;
    }
    //Test edad
    if(tEdad == null || tEdad.length == 0 || isNaN(tEdad)){
      alert('Debe ingresar una edad');
      return false;
    }
  if(tNacionalidad == null || tNacionalidad.length == 0 || /^\s+$/.test(tNacionalidad)){
      alert('Debe ingresar la nacionalidad');
      return false;
    }
    //Test correo
    if(!(/\S+@\S+\.\S+/.test(tCorreo))){
      alert('Debe escribir un correo válido');
      return false;
    }
    if(Contraseña === '') {
		setErrorFor(password, 'Debe ingresar una Contraseña.');
	} else {
		setSuccessFor(password);
	}
	return true;
 }

  
        
  