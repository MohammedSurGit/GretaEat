const searchValue = document.querySelector("#search");
const searchButton = document.querySelector("#search-button");
const categorieSection = document.querySelector("#categorie-section");

function searchByName(name) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json())
    .then((data) => {
      const categorie = data.meals;

      try {
        for (i = 0; i < categorie.length; i++) {
            let img = document.createElement("img");
            img.src = `${categorie[i].strMealThumb}`;
    
            let p = document.createElement("p");
            p.textContent = `${categorie[i].strMeal}`;
    
            let newCategory = document.createElement("a");
            newCategory.href = "../pages/meal.html";
            newCategory.title = `${categorie[i].idMeal}`;
            newCategory.appendChild(img);
            newCategory.appendChild(p);
    
            categorieSection.appendChild(newCategory);
          }
      } catch (error) {console.log(error)}

      const categorieResult = document.querySelectorAll("a");

      categorieResult.forEach((e) => {
        e.addEventListener("click", () => {
          localStorage.setItem("idMeal", e.title);
        });
      });
    });
}

searchButton.addEventListener("click", () => {
    categorieSection.innerHTML = "";
    searchByName(searchValue.value);
});
