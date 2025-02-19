console.log("siden loades");

constmyRecipe = new URLSearchParams(window.location.search).get("recipe");

const recipeContainer = document.querySelector(".recipe-container");

fetch(`https://dummyjson.com/recipes/${myRecipe}`)
  .then((response) => response.json())
  .then((data) => {
    recipeContainer.innerHTML = `<h1>${data.name}</h1>
        <div class="recipe-info">
          <div class="element"><p>PREP: ${data.prepTimeMinutes}</p></div>
          <div class="element"><p>COOK: ${data.cookTimeMinutes}</p></div>
          <div class="element"><p>SERVINGS: ${data.servings}</p></div>
          <div class="stars element element4">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          <div class="element element5">
            <p>Rating: ${data.rating}</p>
            <p>Reviews: ${data.reviewCount}</p>
          </div>
        </div>

        <div class="ingredient-info">
          <div class="food-category">
            <img src="billeder/greek.webp" alt="${data.name}" />
          </div>
          <div>
            <h2>Ingredients</h2>
            <ul>
              <li>Ingredient</li>
              <li>Ingredient</li>
              <li>Ingredient</li>
              <li>Ingredient</li>
              <li>Ingredient</li>
              <li>Ingredient</li>
              <li>Ingredient</li>
              <li>Ingredient</li>
            </ul>
          </div>
        </div>
        <div class="instruction-list">
          <h2>Instructions</h2>
          <ol>
            <li>Instruction keidaak</li>
            <li>Instruction</li>
            <li>Instruction</li>
            <li>Instruction</li>
            <li>Instructionjdoh</li>
            <li>Instruction</li>
            <li>Instructioniqopqoudohosahkgad</li>
          </ol>
        </div>`;
  });
