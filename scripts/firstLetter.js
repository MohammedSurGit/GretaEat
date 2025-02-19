const categorieSection = document.querySelector('#categorie-section');
const firstLetters = document.querySelector('#first-letters');

const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

for (let i = 0; i < alphabet.length; i++) {

    const newLetter = document.createElement('a');
    newLetter.innerText = ` ${alphabet[i].toLocaleUpperCase()}`;
    newLetter.title = alphabet[i];

    const newSpan = document.createElement('span');
    newSpan.textContent = ' / ';

    firstLetters.appendChild(newLetter);
    firstLetters.appendChild(newSpan);
}

function firstLetterDisplay(firstLetter) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
      .then(r => r.json())
      .then((data) => {
        const categorie = data.meals;
        try {
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
        } catch (error) {console.log(error)}
  
        const categorieResult = document.querySelectorAll('a');
  
        categorieResult.forEach(e => {
          e.addEventListener('click', () => {
          localStorage.setItem('idMeal', e.title)
          }) 
        })
      })
}

const firstLetter = document.querySelectorAll('a');
firstLetter.forEach(e => {
    e.addEventListener('click', () => {
        categorieSection.innerHTML = '';
        firstLetterDisplay(e.title);
    })
});


