const API_KEY = '4fbe5b0b4251b9a677f75ee2b4552e36';

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));
}

const displayTemp = data => {
    const temp = document.getElementById('temp');
    temp.innerText = data.main.temp;
    document.getElementById('weather').innerText = data.weather[0].main;
}

document.getElementById('search').addEventListener('click', function () {
    const searchText = document.getElementById('search-text');
    const city = searchText.value;
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})