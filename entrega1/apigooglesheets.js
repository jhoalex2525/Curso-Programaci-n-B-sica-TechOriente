document.getElementById('miFormulario').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validar el formulario antes de enviarlo
    const esFormularioValido = validarFormulario();

    if (!esFormularioValido) {
        alert('Por favor, complete todos los campos correctamente.');
        return;  // Si el formulario no es válido, no enviamos la información
    }

    const formData = {
        nombre: document.getElementById('name').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('phone').value,
        asunto: document.getElementById('subject').value,
        mensaje: document.getElementById('message').value
    };

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbw0aqJoPPrOANziCns_GlKur-rd1_41Wi8PepRFlRtGRd5B3skNW2oTZYRYI1a0sYZeJA/exec', {
            method: 'POST',
            body: JSON.stringify(formData),
            mode: 'no-cors', // Evita que se bloqueen por CORS
            headers: { 'Content-Type': 'application/json' }
        });

        //const result = await response.json();
        console.log(response)

        //console.log(result.message);
        // alert("result.message");
        document.getElementById('miFormulario').reset();

    } catch (error) {
        console.error('Hubo un error al enviar:', error);
        // alert('Error al enviar tu información.');
    }
});