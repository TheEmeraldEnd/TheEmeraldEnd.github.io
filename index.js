let recipeElementButtonBase = document.getElementById('recipeElementBase');
let recipeElementList = document.getElementById('recipeElementList');

for(let i = 0; i < 4; i++){
    let newRecipeElement = recipeElementButtonBase.cloneNode(true);

    recipeElementList.appendChild(newRecipeElement);
}