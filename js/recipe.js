console.log("siden loades");

const myRecipe = new URLSearchParams(window.location.search).get("recipe");

const recipeContainer = document.querySelector(".recipe-container");

fetch(`https://dummyjson.com/recipes/${myRecipe}`)
  .then((response) => response.json())
  .then((recipe) => {
    recipeContainer.innerHTML = `<h1>${recipe.name}</h1>
        <div class="recipe-info">
          <div class="element"><p>PREP: ${recipe.prepTimeMinutes}</p></div>
          <div class="element"><p>COOK: ${recipe.cookTimeMinutes}</p></div>
          <div class="element"><p>SERVINGS: ${recipe.servings}</p></div>
          <div class="stars element element4">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          <div class="element element5">
            <p>Rating: ${recipe.rating}</p>
            <p>Reviews: ${recipe.reviewCount}</p>
          </div>
        </div>

        <div class="ingredient-info">
          <div class="food-category">
            <img src="${recipe.image}" alt="${recipe.name}" />
          </div>
          <div>
            <h2>Ingredients</h2>
            <ul>
      ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
            </ul>
          </div>
        </div>
        <div class="instruction-list">
          <h2>Instructions</h2>
          <ol>
${recipe.instructions.map((instruction) => `<li>${instruction}</li>`).join("")}
            
           
          </ol>
        </div>`;
  });
