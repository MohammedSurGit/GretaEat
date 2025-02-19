const category = document.querySelector(".category");

/* récupere toutes les categories et les affiches */
fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((response) => response.json())
  .then((data) => {
    const categories = data.categories;
    for (i = 0; i < 14; i++) {
      let img = document.createElement("img");
      img.src = `${categories[i].strCategoryThumb}`;

      let p = document.createElement("p");
      p.textContent = `${categories[i].strCategory}`;

      let newCategory = document.createElement("a");
      newCategory.href = '../pages/categorie.html';
      newCategory.title = `${categories[i].strCategory}`
      newCategory.appendChild(img);
      newCategory.appendChild(p);

      category.appendChild(newCategory);
    }
    
    const categorieResult = document.querySelectorAll('a');
    
    categorieResult.forEach(e => {
      e.addEventListener('click', () => {
        localStorage.removeItem('recipeCategorie');
        localStorage.setItem('strCategory', e.title);
      }) 
    })
});




