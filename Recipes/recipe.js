//Get the recipe title parameter from inside of the url
const urlParams = new URLSearchParams(window.location.search);
const recipeTitle = urlParams.get('recipeTitle').toString();

//Goes back to the index page
let backButton = document.getElementById('backButton');
function backToIndex(){
    window.location='../index.html';
}
backButton.onclick = function() {backToIndex();};

//Set the subtitle to the recipe thing
let subtitleElement = document.getElementById('subtitle');
subtitleElement.textContent = recipeTitle;

//Get the recipe
let recipeElement = document.getElementById('recipeElement');
recipeElement.textContent = 'thing';