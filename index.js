let recipeElementButtonBase = document.getElementById('recipeElementBase');
let recipeElementList = document.getElementById('recipeElementList');

function LoadWindow(incomingRecipeTitleString){
    window.location=`Recipes/${incomingRecipeTitleString}/recipe.html`;
}

//list of recipes inside of the recipe's list (must be added in manually)
let recipeFolders = [
    'Eggs In a Basket Sandwiches',
    'Carbonara (Eggless)'
];
recipeFolders.sort();

//format the list (doesn't set the list when clicked yet)
for(let i = 0; i < recipeFolders.length; i++){
    let newRecipeElement = recipeElementButtonBase.cloneNode(true);
    newRecipeElement.children[0].textContent = `${recipeFolders[i]}`;
    newRecipeElement.children[0].onclick = function() {LoadWindow(recipeFolders[i]);};
    recipeElementList.appendChild(newRecipeElement);
}
recipeElementButtonBase.remove();

//Set the recipes while typing
let recipeButtons = document.getElementsByClassName('recipeElement')

function LoadEnteredInput(incomingText){
    for(let i = 0; i < recipeButtons.length; i++){
        var recipeTitle = recipeButtons[i].textContent;

        if (recipeTitle.toUpperCase().includes(incomingText.toUpperCase())){
            recipeButtons[i].parentElement.style.display = 'inline';
        }
        else{
            recipeButtons[i].parentElement.style.display = 'none';
        }
    }
}
let inputText = document.getElementById('recipeSearchBar');
inputText.addEventListener('input', function(evt) {
    LoadEnteredInput(this.value)
});
