// CONSTANTS
const myRec = new URLSearchParams(window.location.search).get("recipes");
const selectCuisine = document.getElementById("cuisine");
const selectMealType = document.querySelector("#mealType");
const recipeContainer = document.querySelector(".list_flex");
const h1 = document.querySelector("h1");

// VARIABLES
let allRecipes,
  filteredData,
  cuisine = "All",
  mealType = "All";

// FETCH DATA
function getData() {
  fetch(`https://dummyjson.com/recipes?limit=0`)
    .then((response) => response.json())
    .then((data) => {
      allRecipes = data.recipes;
      filteredData = allRecipes;
      buildSelects();
      showList(allRecipes);
    });
}

// BUILD SELECTS
function buildSelects() {
  const uniqueCuisines = Array.from(new Set(allRecipes.map((recipe) => recipe.cuisine)));

  const markup = uniqueCuisines.map((cuisine) => `<option value="${cuisine}">${cuisine}</option>`).join("");
  selectCuisine.innerHTML += markup;

  const uniqueMTypes = Array.from(new Set(allRecipes.map((recipe) => recipe.mealType[0])));
  const markup2 = uniqueMTypes.map((element) => `<option value="${element}">${element}</option>`).join("");
  selectMealType.innerHTML += markup2;
}

// SHOW DATA
function showList(data) {
  const markup = data
    .map(
      (recipe) => `
    <a href="recipe.html?recipe=${recipe.id}"><div class="list_item">
          <div class="item_description">
            <p>${recipe.cuisine}</p>
            <h2>${recipe.name}</h2>
            <p>TIME: ${recipe.prepTimeMinutes} + ${recipe.cookTimeMinutes} min.</p>
            <p>SERVINGS: ${recipe.servings}</p>
            <p>${recipe.difficulty}</p>
          </div>
          <img
            src="${recipe.image}"
            alt="Recipe image"
          />
        </div></a>`
    )
    .join("");
  recipeContainer.innerHTML = markup;
}

// FILTER RECIPES BY TAG
function filterCuisine(event) {
  console.log("filter");
  cuisine = event.target.value;
  if (cuisine == "All") {
    filteredData = allRecipes;
  } else {
    filteredData = allRecipes.filter((recipe) => recipe.cuisine == cuisine);

    showList(filteredData);

    h1.textContent = cuisine + "(" + filteredData.length + ")";

    const uniqueMTypes = Array.from(new Set(filteredData.map((recipe) => recipe.mealType[0])));
    const markup = uniqueMTypes.map((element) => `<option value="${element}">${element}</option>`).join("");
    selectMealType.innerHTML = '<option value="All">All</option>' + markup;
  }
}

// FILTER RECIPES BY MEALTYPE
function filterMealType(event) {
  mealType = event.target.value;
  if (mealType == "All") {
    showList(filteredData);
  } else {
    const filterMealTypeData = filteredData.filter((recipe) => recipe.mealType.includes(mealType));
    showList(filterMealTypeData);
    h1.textContent = cuisine + " / " + mealType + "  (" + filterMealTypeData.length + ")";
  }
}

// EVENT-LISTENERS
selectCuisine.addEventListener("change", filterCuisine);
selectMealType.addEventListener("change", filterMealType);

// RUN SCRIPT
getData();
