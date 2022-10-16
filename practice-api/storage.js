document.getElementById('btn-add-name').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;

    localStorage.setItem('name', nameValue);
})

document.getElementById('btn-add-email').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;

    localStorage.setItem('email', emailValue);
});

document.getElementById('btn-add-msg').addEventListener('click', function () {
    const msgField = document.getElementById('msg-field');
    const msgValue = msgField.value;

    localStorage.setItem('msg', msgValue);
});

document.getElementById('btn-all').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;

    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;

    const msgField = document.getElementById('msg-field');
    const msgValue = msgField.value;

    const all = { name: nameValue, email: emailValue, msg: msgValue }
    localStorage.setItem('all', JSON.stringify(all));

});



document.getElementById('btn-remove-name').addEventListener('click', function () {
    localStorage.removeItem('name');
})

document.getElementById('btn-remove-email').addEventListener('click', function () {
    localStorage.removeItem('email');
});

document.getElementById('btn-remove-msg').addEventListener('click', function () {
    localStorage.removeItem('msg');
});


document.getElementById('btn-clear').addEventListener('click', function () {
    localStorage.clear();
})