/* ১০. সিরিয়াস প্রাকটিস 
হয় মডিউল 34 ভালো করে দেখে ফেলো। বিশেষ করে the meal db রি তারপরে আরো সময় থাকলে এর আরেকটা খালতো ভাই the coktaildb থেকে কিছু জিনিস এনে দেখাবে। একজাক্টলি কি দেখাতে হবে। সেটা আমি বলে দিবো না। তুমি ওদের ওয়েবসাইট এ যাও। সেখানে কি কি লেখা আছে সেগুলা পড়ো। api গুলা এর ছোট করে কি কি করে বলা আছে। সেগুলা দেখো। তারপর কিছু ডাটা লোড করো। সেই ডাটাগুলো দেখাও। এইখানে সার্চ ফাংশনালিটি ইমপ্লিমেন্ট করো। অনেকটা mealdb এর মতো। আবার কোন একটাতে ক্লিক করলে সেটার ডিটেল দেখাবে। 
 */

// fetching the data and calling next function to display list

const loadLists = async(listType) =>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?${listType}=list`
    const res = await fetch(url)
    const data = await res.json()

    if(listType === 'c'){
        displayLists(data, 'category-list', 'strCategory', 'c')
    }
    else if(listType === 'g'){
        displayLists(data, 'glass-list', 'strGlass', 'g')
    }
    else if(listType === 'i'){
        displayLists(data, 'ingredient-list', 'strIngredient1', 'i')
    }
    else{
        displayLists(data, 'alcofilter-list', 'strAlcoholic', 'a')
    }
}

// common code for displaying lists and calling loadDetails function

const displayLists = (data, elementId, dataNotation, type) =>{
    const catergoryUl = document.getElementById(elementId);
    catergoryUl.innerHTML='';
    const ingredientArray = data.drinks;
    for(const drink of ingredientArray){
        const drinkLi = drink[dataNotation];
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${drinkLi}</a>`;
        const spaceRemoved = spaceRemover(li.innerText);
        li.addEventListener('click', function(){
            loadDetails(type, spaceRemoved, displayDetails);
    })
    catergoryUl.appendChild(li);
}
}

// common code for fetching secondary detailed data through dynamic url

const loadDetails = async(type, names, callFunction)=>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${type}=${names}`;
    const res = await fetch(url)
    const data = await res.json()
    callFunction(data);
}

// finally common code for displaying datas in grid format

const detailsDiv = document.getElementById('details');
const displayDetails = data =>{
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


// common code for calling for fetch the primary data for lists

const buttonEventHandler = (elementId, type)=>{
    const button = document.getElementById(elementId);
    button.addEventListener('click', loadLists(type))
}

// calling the event handler above with params

buttonEventHandler('btn-categories', 'c');
buttonEventHandler('btn-glasses', 'g');
buttonEventHandler('btn-ingredients', 'i');
buttonEventHandler('btn-alcofilters', 'a');