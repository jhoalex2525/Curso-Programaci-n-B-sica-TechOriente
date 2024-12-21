// Función para validar el nombre (sin números, mínimo 2 caracteres)
const validarNombre = (nombre) => {
    const nombreRegex = /^[a-zA-Z\s]+$/; // Solo letras y espacios
    const campoNombre = document.getElementById('name');
    if (nombre && (!nombreRegex.test(nombre) || nombre.length < 2)) {
        campoNombre.style.borderColor = 'red';
        return false;
    } else {
        campoNombre.style.borderColor = '';  // Restaurar borde normal si está bien
        return true;
    }
};

// Función para validar el email
const validarEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  // Regex para email
    const campoEmail = document.getElementById('email');
    if (email && !emailRegex.test(email)) {
        campoEmail.style.borderColor = 'red';
        return false;
    } else {
        campoEmail.style.borderColor = '';  // Restaurar borde normal si está bien
        return true;
    }
};

// Función para validar el teléfono (solo números y mínimo 5 dígitos)
const validarTelefono = (telefono) => {
    const telefonoRegex = /^[0-9]{5,}$/;  // Solo números y mínimo 5 dígitos
    const campoTelefono = document.getElementById('phone');
    if (telefono && !telefonoRegex.test(telefono)) {
        campoTelefono.style.borderColor = 'red';
        return false;
    } else {
        campoTelefono.style.borderColor = '';  // Restaurar borde normal si está bien
        return true;
    }
};

// Función para validar el asunto (mínimo 4 caracteres)
const validarAsunto = (asunto) => {
    const campoAsunto = document.getElementById('subject');
    if (asunto && asunto.length < 4) {
        campoAsunto.style.borderColor = 'red';
        return false;
    } else {
        campoAsunto.style.borderColor = '';  // Restaurar borde normal si está bien
        return true;
    }
};

// Función para validar el mensaje (mínimo 10 caracteres)
const validarMensaje = (mensaje) => {
    const campoMensaje = document.getElementById('message');
    if (mensaje && mensaje.length < 10) {
        campoMensaje.style.borderColor = 'red';
        return false;
    } else {
        campoMensaje.style.borderColor = '';  // Restaurar borde normal si está bien
        return true;
    }
};

// Función que valida todos los campos al escribir
const validarFormularioEnTiempoReal = () => {
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('phone').value;
    const asunto = document.getElementById('subject').value;
    const mensaje = document.getElementById('message').value;

    // Validaciones en tiempo real
    validarNombre(nombre);
    validarEmail(email);
    validarTelefono(telefono);
    validarAsunto(asunto);
    validarMensaje(mensaje);
};

// Agregar los event listeners para validar en tiempo real
document.getElementById('name').addEventListener('input', () => validarFormularioEnTiempoReal());
document.getElementById('email').addEventListener('input', () => validarFormularioEnTiempoReal());
document.getElementById('phone').addEventListener('input', () => validarFormularioEnTiempoReal());
document.getElementById('subject').addEventListener('input', () => validarFormularioEnTiempoReal());
document.getElementById('message').addEventListener('input', () => validarFormularioEnTiempoReal());
