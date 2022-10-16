console.log('hello from JS')

document.getElementById('h1')
document.getElementsByTagName('li')

document.getElementById('fruits-title').style.color = 'red'
document.getElementById('fruits-title').style.backgroundColor = 'red'
const title = document.getElementById('fruits-title')
title.getAttribute('id')
title.classList

title.setAttribute('title', 'tooltip set by JS')


document.getElementsByClassName('places')
document.querySelectorAll('#fruits-title')
document.querySelectorAll('.fruits-container')
document.querySelector('.fruits-container')

document.getElementsByClassName('fruits-container')[0].innerHTML

const sections = document.querySelectorAll('section');

for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';

}

const fruitsContainer = document.getElementById('fruits-container')
fruitsContainer.childNodes

document.createElement('div')


const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "my food list";
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
lin1.innerText = 'biryani';
ul.appendChild(li1);
const li2 = document.createElement('li');
lin1.innerText = 'biryani';
ul.appendChild(li2);
const li3 = document.createElement('li');
lin1.innerText = 'biryani';
ul.appendChild(li3);

section.appendChild(ul);
