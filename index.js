let recipeElementButtonBase = document.getElementById('recipeElementBase');
let recipeElementList = document.getElementById('recipeElementList');

//Tags
let recipeButtonTag = "recipeElement"
let recipeImageTag = "finishedProductImage"

//Defign functions
function LoadWindow(incomingRecipeTitleString){
    window.location=`Recipes/${incomingRecipeTitleString}/recipe.html`;
}

function SetFinishedResult(incomingRecipeTitleString){
    let finishedProduct = `Recipes/${incomingRecipeTitleString}/Finished.jpg`
    return finishedProduct;
}

//childClassTag should be a string
//parentElement should be an element
//returns the child element
function SearchThroughDescendants(childClassTag, parentElement){
    for(let i = 0; i < parentElement.children.length; i++){
        let child = parentElement.children[i]
        if (child.classname === childClassTag)
            return child; 
    }
}

//list of recipes inside of the recipe's list (must be added in manually)
let recipeFolders = [
    'Eggs In a Basket Sandwiches',
    'Carbonara (Eggless)',
    'Omlette',
    'Honey Milk',
    'Salmon'
];
recipeFolders.sort();

//format the list (doesn't set the list when clicked yet)
for(let i = 0; i < recipeFolders.length; i++){
    let newRecipeElement = recipeElementButtonBase.cloneNode(true);
    SearchThroughDescendants(recipeButtonTag).textContent = `${recipeFolders[i]}`;
    SearchThroughDescendants(recipeButtonTag).onclick = function() {LoadWindow(recipeFolders[i]);};
    SearchThroughDescendants(recipeImageTag).src = SetFinishedResult(recipeFolders[i]);
    recipeElementList.appendChild(newRecipeElement);
}
recipeElementButtonBase.remove();

//Set the recipes while typing
let recipeElements = document.getElementsByClassName('recipeElement')

function LoadEnteredInput(incomingText){
    for(let i = 0; i < recipeElements.length; i++){
        var recipeTitle = recipeElements[i].textContent;

        if (recipeTitle.toUpperCase().includes(incomingText.toUpperCase())){
            recipeElements[i].parentElement.style.display = 'inline';
        }
        else{
            recipeElements[i].parentElement.style.display = 'none';
        }
    }
}
let inputText = document.getElementById('recipeSearchBar');
inputText.addEventListener('input', function(evt) {
    LoadEnteredInput(this.value)
});
