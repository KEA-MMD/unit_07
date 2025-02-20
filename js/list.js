console.log("siden loades");

const myRec = new URLSearchParams(window.location.search).get("recipes");

const recipeContainer = document.querySelector(".list_flex");

fetch(`https://dummyjson.com/recipes`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const allRecipes = data.recipes;
  const markup = allRecipes
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
