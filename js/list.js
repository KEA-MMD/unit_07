const recipeList = document.querySelector(".list_flex");

function collectData() {
  console.log("script loaded collectData");
  fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then(showRecipes);
}

function showRecipes(data) {
  console.log("showRecipes");

  const allRecipes = data.recipes;
  let arrayWithRecipes = allRecipes.map(
    (recipe) =>
      `
    <a href="recipe.html"><div class="list_item">
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
        </div></a>
    `
  );

  recipeList.innerHTML = arrayWithRecipes.join("");
}

collectData();
