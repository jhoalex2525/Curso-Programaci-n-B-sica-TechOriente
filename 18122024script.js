const form = document.getElementById('userForm');
const addButton = document.getElementById('addField');
var nombre, correo, telefono, direccion;

array = [ 'nombre', 'correo', 'telefono', 'direccion'];
i = array.length;
for(i=0; i<=4;i++){
addButton.addEventListener('click', ()=> {
    const newField = document.createElement('input');
    newField.type = 'text';
    newField.name = 'extraField';
    newField.placeholder = array[i];
    form.appendChild(newField);
});
};
const usernameInput = document.getElementById('username');
usernameInput.addEventListener('input', ()=> {
    const errorMessage = document.getElementById('error');
    if(!usernameInput.value.match(/^[a-zA-Z0-9]{3,}$/)){
        errorMessage.textContent = "Username must be at least 3 characters long and alphanumeric";
    }else{
        errorMessage.textContent ='';
    }
});

