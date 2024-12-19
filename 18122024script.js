const form = document.getElementById('userForm');
const addButton = document.getElementById('addField');

addButton.addEventListener('click', ()=> {
    const newField = document.createElement('input');
    newField.type = 'text';
    newField.name = 'extraField';
    newField.placeholder = 'Additional Info';
    form.appendChild(newField);
});

const usernameInput = document.getElementById('username');
usernameInput.addEventListener('input', ()=> {})