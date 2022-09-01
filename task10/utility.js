function spaceRemover(string){
const spacesReplaced = string.replaceAll(' ', '_');
return spacesReplaced;
}

// console.log(spaceRemover('coffee / tea'))


// const linkMaker = text =>{
//     const spaceRemoved = spaceRemover(text);
//     const newLink = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='${spaceRemoved}'`
//     return newLink;
// }


