const loadRandom = () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => displayRandom(data.results))
}

loadRandom();

const displayRandom = user => {
    console.log(user[0].picture.thumbnail);
    const container = document.getElementById('container')
    container.innerHTML = `
    <img src="${user[0].picture.large}" alt="">
    <h1>lives in ${user[0].location.street.name}, ${user[0].location.city} city, ${user[0].location.state} state</h1>
    `
}