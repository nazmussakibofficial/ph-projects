

function initialCounter() {
    let savedCounter = localStorage.getItem('counter');
    let counter = 0;
    if (savedCounter) {
        localStorage.setItem('counter', savedCounter);
    }
    else {
        localStorage.setItem('counter', counter);
    }
}

initialCounter();

function counterText() {
    const counterText = document.getElementById('counter');
    counterText.innerText = localStorage.getItem('counter');
}

counterText();

document.getElementById('btn-counter').addEventListener('click', function () {
    let counter = parseInt(localStorage.getItem('counter'));
    counter++;
    localStorage.setItem('counter', counter);
    counterText();

})