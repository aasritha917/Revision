const API_URL = 'https://www.themealdb.com/api/json/v1/1/';
let meals = [];
let currentPage = 1;
const mealsPerPage = 10;
let filteredMeals = [];

document.getElementById('search-bar').addEventListener('input', debounce(searchMeals, 500));
document.getElementById('category-filter').addEventListener('change', filterMeals);
document.getElementById('sort-dropdown').addEventListener('change', sortMeals);

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

async function fetchMeals() {
    showLoader();
    const response = await fetch(`${API_URL}search.php?s=`);
    const data = await response.json();
    meals = data.meals;
    filteredMeals = meals; 
    hideLoader();
    displayMeals();
    populateCategories();
}

function populateCategories() {
    const categoryFilter = document.getElementById('category-filter');
    const categories = [...new Set(meals.map(meal => meal.strCategory))]; 
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

function displayMeals() {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    const start = (currentPage - 1) * mealsPerPage;
    const end = start + mealsPerPage;
    const paginatedMeals = filteredMeals.slice(start, end);

    paginatedMeals.forEach(meal => {
        const mealCard = document.createElement('div');
        mealCard.className = 'meal-card';
        mealCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <p>${meal.strCategory}</p>
        `;
        mealContainer.appendChild(mealCard);
    });
    setupPagination();
}

function setupPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    const totalPages = Math.ceil(filteredMeals.length / mealsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayMeals();
        });
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pagination.appendChild(pageButton);
    }
}

function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

function searchMeals() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    filteredMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(query));
    currentPage = 1; 
    displayMeals();
}

function filterMeals() {
    const category = document.getElementById('category-filter').value;
    if (category) {
        filteredMeals = meals.filter(meal => meal.strCategory === category);
    } else {
        filteredMeals = meals; 
    }
    currentPage = 1; 
    displayMeals();
}

function sortMeals() {
    const sortBy = document.getElementById('sort-dropdown').value;
    if (sortBy === 'name') {
        filteredMeals.sort((a, b) => a.strMeal.localeCompare(b.strMeal));
    } else if (sortBy === 'category') {
        filteredMeals.sort((a, b) => a.strCategory.localeCompare(b.strCategory));
    }
    currentPage = 1; ge
    displayMeals();
}

fetchMeals();
