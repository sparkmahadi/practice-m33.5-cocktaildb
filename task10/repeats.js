// const loadCategoryDetails = async(categoryName) =>{
//     const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`;
//     const res = await fetch(url)
//     const data = await res.json()
//     displayCategoryDetails(data);
// }

// const loadGlassDetails = async(glassName) =>{
//     const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glassName}`;
//     const res = await fetch(url)
//     const data = await res.json()
//     displayGlassDetails(data);
// }

// ---------------------------------

/* const displayGlassDetails = data =>{
    detailsDiv.innerHTML='';
    const arr = data.drinks;
    arr.forEach(drink => {
        const newCard = document.createElement('div');
        newCard.innerHTML = `
        <div class="col">
                  <div class="card">
                    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Name: ${drink.strDrink}</h5>
                      <p class="card-text"> Id: ${drink.idDrink}</p>
                    </div>
                  </div>
                </div>
        `;
        detailsDiv.appendChild(newCard)
    });
}


const displayCategoryDetails = data =>{
    detailsDiv.innerHTML='';
    const arr = data.drinks;
    arr.forEach(drink => {
        const newCard = document.createElement('div');
        newCard.innerHTML = `
        <div class="col">
                  <div class="card">
                    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Name: ${drink.strDrink}</h5>
                      <p class="card-text"> Id: ${drink.idDrink}</p>
                    </div>
                  </div>
                </div>
        `;
        detailsDiv.appendChild(newCard)
    });
} */

// -----------------------------------------(not resolved: glassUl not working for different object properties)(resolved using for of loop)

/* const glassUl = document.getElementById('glass-list');
const displayGlasses = data =>{
    const arr = data.drinks;
    arr.forEach(glass => {
        const glassLi = glass.strGlass;
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${glassLi}</a>`;
        const spaceRemoved = spaceRemover(li.innerText);
        li.addEventListener('click', function(){
            loadDetails('g',spaceRemoved, displayDetails);
        })
        glassUl.appendChild(li)
    });
}

const catergoryUl = document.getElementById('category-list');
const displayCategories = data =>{
    catergoryUl.innerHTML='';
    const drinksArray = data.drinks;
    drinksArray.forEach(drink => {
        const drinkLi = drink.strCategory;
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${drinkLi}</a>`;
        const spaceRemoved = spaceRemover(li.innerText);
        li.addEventListener('click', function(){
            loadDetails('c',spaceRemoved, displayDetails);
        })
        
    catergoryUl.appendChild(li);
    });
}

const ingredientsUl = document.getElementById('ingredient-list');
const displayIngredients = data =>{
    ingredientsUl.innerHTML = '';
    const ingredientArray = data.drinks;
    for(const drink of ingredientArray){
        const drinkLi = drink['strIngredient1'];
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${drinkLi}</a>`;
        const spaceRemoved = spaceRemover(li.innerText);
        li.addEventListener('click', function(){
            loadDetails('i',spaceRemoved, displayDetails);
           
    })
    ingredientsUl.appendChild(li);
}} */

// -------------------------------------------

// const categoryButton = document.getElementById('btn-categories');
// categoryButton.addEventListener('click', loadLists('c'))

// const glassButton = document.getElementById('btn-glasses');
// glassButton.addEventListener('click', loadLists('g'));

// -------------------------------------------