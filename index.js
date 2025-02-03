let recipeElementButtonBase = document.getElementById('recipeElementBase');
let recipeElementList = document.getElementById('recipeElementList');

function LoadWindow(){
    window.location='Recipes/recipe.html';
}

//list of recipes inside of the recipe's list (must be added in manually)
let recipeFolders = [
    'Carbonara (Eggless)',
    'Eggs In a Basket Sandwiches'
];

//format the list (doesn't set the list when clicked yet)
for(let i = 0; i < recipeFolders.length; i++){
    let newRecipeElement = recipeElementButtonBase.cloneNode(true);
    newRecipeElement.children[0].textContent = `${recipeFolders[i]}`;
    newRecipeElement.children[0].onclick = function() {LoadWindow();};
    recipeElementList.appendChild(newRecipeElement);
}
recipeElementButtonBase.remove();