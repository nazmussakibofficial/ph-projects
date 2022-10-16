function loadCountry() {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data));
}

function displayCountry(countries) {
    const container = document.getElementById('container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.innerHTML = `
        <h3>Name : ${country.name.common} </h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        `;
        container.appendChild(countryDiv);
    })

}

loadCountry();