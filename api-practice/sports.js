const loadMeals = (search) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.countries));
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="loadMealDetail(${meal.idLeague})" class="card">
            <img src="${meal.strLogo}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strLeagueAlternate}</h5>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeals(searchText);
    searchField.value = '';
}

const loadMealDetail = (idMeal) => {
    // console.log('get details of id', idMeal);
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookuptable.php?l=${idMeal}`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.countries[0]));
}

const displayMealDetails = meal => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
    <img src="${meal.strLogo}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strLeagueAlternate}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    detailContainer.appendChild(mealDiv);
}

// loadMeals('');