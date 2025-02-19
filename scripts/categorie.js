let categorieSection = document.querySelector("#categorie-section");

/* fetch et affiche les categories  */
function categoryMeal(category) {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.json())
    .then((data) => {
      const categorie = data.meals;

      for (i = 0; i < categorie.length; i++) {
        let img = document.createElement("img");
        img.src = `${categorie[i].strMealThumb}`;

        let p = document.createElement("p");
        p.textContent = `${categorie[i].strMeal}`;

        let newCategory = document.createElement("a");
        newCategory.href = '../pages/meal.html';
        newCategory.title = `${categorie[i].idMeal}`;
        newCategory.appendChild(img);
        newCategory.appendChild(p);

        categorieSection.appendChild(newCategory);
      }

      const categorieResult = document.querySelectorAll('a');

      categorieResult.forEach(e => {
        e.addEventListener('click', () => {
        localStorage.setItem('idMeal', e.title)
        }) 
      })
    })
}

function firstLetterDisplay(firstLetter) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    .then(r => r.json())
    .then((data) => {
      const categorie = data.meals;

      for (i = 0; i < categorie.length; i++) {
        let img = document.createElement("img");
        img.src = `${categorie[i].strMealThumb}`;

        let p = document.createElement("p");
        p.textContent = `${categorie[i].strMeal}`;

        let newCategory = document.createElement("a");
        newCategory.href = '../pages/meal.html';
        newCategory.title = `${categorie[i].idMeal}`;
        newCategory.appendChild(img);
        newCategory.appendChild(p);

        categorieSection.appendChild(newCategory);
      }

      const categorieResult = document.querySelectorAll('a');

      categorieResult.forEach(e => {
        e.addEventListener('click', () => {
        localStorage.setItem('idMeal', e.title)
        }) 
      })
    })
}

/* au chargement de la page recupere le local storage et affiche lance la fonction */
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('recipeCategorie') != '') {
    categoryMeal(localStorage.getItem('recipeCategorie'));
  }

  categorieSection.innerHTML = '';
  categoryMeal(localStorage.getItem('strCategory'));
})
