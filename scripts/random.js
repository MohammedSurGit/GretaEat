const recipeTitle = document.querySelector("#title");
const category = document.querySelector("#category");
const origin = document.querySelector("#origin");

const recipeImage = document.querySelector(".recipe__image");
const recipeIngredientList = document.querySelector(".recipe__ingredient > ul");

const randomBtn = document.getElementById("random-btn");

/* fetch et creer une div avec les elements la composant  */
async function displayMeal(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const meal = data.meals[0];
      document.querySelector('.recipe__card-header').style.display = 'flex';

      /* title */
      recipeTitle.innerText = `Recette : `;
      recipeTitle.appendChild(document.createElement('span'))
      document.querySelector('#title > span').textContent = `${meal.strMeal}`;

      /* category */
      category.innerText = `Catégorie : `;
      category.appendChild(document.createElement('a'));
      document.querySelector('#category a').href = '../pages/categorie.html';
      localStorage.setItem('recipeCategorie', meal.strCategory);
      document.querySelector('#category a').textContent = `${meal.strCategory}`;

      /* zone */
      origin.innerText = `Zone géographique : `;
      origin.appendChild(document.createElement('a'));
      document.querySelector('#origin a').textContent = `${meal.strArea}`;

      recipeImage.src = `${meal.strMealThumb}`;
      let ingredientList = [
        meal.strIngredient1,
        meal.strIngredient2,
        meal.strIngredient3,
        meal.strIngredient4,
        meal.strIngredient5,
        meal.strIngredient6,
        meal.strIngredient7,
        meal.strIngredient8,
        meal.strIngredient9,
        meal.strIngredient10,
        meal.strIngredient11,
        meal.strIngredient12,
        meal.strIngredient13,
        meal.strIngredient14,
        meal.strIngredient15,
        meal.strIngredient16,
        meal.strIngredient17,
        meal.strIngredient18,
        meal.strIngredient19,
        meal.strIngredient20,
      ];
      let measureList = [
        meal.strMeasure1,
        meal.strMeasure2,
        meal.strMeasure3,
        meal.strMeasure4,
        meal.strMeasure5,
        meal.strMeasure6,
        meal.strMeasure7,
        meal.strMeasure8,
        meal.strMeasure9,
        meal.strMeasure10,
        meal.strMeasure11,
        meal.strMeasure12,
        meal.strMeasure13,
        meal.strMeasure14,
        meal.strMeasure15,
        meal.strMeasure16,
        meal.strMeasure17,
        meal.strMeasure18,
        meal.strMeasure19,
        meal.strMeasure20,
      ]

      document.querySelector('#ingrediants').textContent = 'Ingrédients';

      for (let i = 0; i < ingredientList.length; i++ ) {
        if (ingredientList[i] != null && measureList[i] != null && ingredientList[i] != '' && measureList[i] != '') {
          const newLi = document.createElement('li');
          newLi.textContent = `${ingredientList[i]} : `;

          const newSpan = document.createElement('span');
          newSpan.textContent = `${measureList[i]}`;

          newLi.appendChild(newSpan);
          recipeIngredientList.appendChild(newLi);
        }
      } 

      const instructionsTitle = document.querySelector('#instructions h2');
      const instructionsText = document.querySelector('#instructions p');

      instructionsTitle.textContent = 'Instructions';
      instructionsText.textContent = `${meal.strInstructions}`;


      
    });
}

/* au clique affiche un plat aleatoire  */
randomBtn.addEventListener("click", () => {
  recipeIngredientList.innerHTML = "";
  displayMeal("https://www.themealdb.com/api/json/v1/1/random.php");
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.recipe__card-header').style.display = 'none';
})

