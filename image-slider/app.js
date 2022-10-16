const images = [
    'pic1.png',
    'pic2.png',
    'pic3.png',
    'pic4.png',
    'pic5.png',
    'pic6.png',
    'pic7.png',
];

let imgIndex = 0;
const img = document.getElementById('slider');
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgLink = images[imgIndex];
    img.setAttribute('src', imgLink);
    imgIndex++;
}, 1000)