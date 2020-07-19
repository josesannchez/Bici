const form = document.getElementById('form');
const nombre = document.getElementById('username');
const apellido = document.getElementById('apellido');
const edad = document.getElementById('edad');
const nacionalidad = document.getElementById('nacio');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('verificar');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usuarioValue = nombre.value.trim();
	const apellidoValue = apellido.value.trim();
	const edadValue= edad.value.trim();
	const nacionalidadValue = nacionalidad.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usuarioValue === '') {
		setErrorFor(nombre, 'Noi puede dejar el usuairo en blanco');
	} else {
		setSuccessFor(nombre);
	}
	if(apellidoValue === '') {
		setErrorFor(apellido, 'Noi puede dejar el usuairo en blanco');
	} else {
		setSuccessFor(apellido);
	}
	if(edadValue === '') {
		setErrorFor(edad, 'Noi puede dejar el usuairo en blanco');
	} else {
		setSuccessFor(edad);
	}
	if(nacionalidadValue === '') {
		setErrorFor(nacionalidad, 'Noi puede dejar el usuairo en blanco');
	} else {
		setSuccessFor(nacionalidad);
	}
	
	
	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password no debe ingresar en blanco.');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 no debe ngresar en blanco');
	} else if(passwordValue !== password2Value) {
		setErrorFor(verificar, 'Passwords no coinciden');
	} else{
		setSuccessFor(verificar);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}