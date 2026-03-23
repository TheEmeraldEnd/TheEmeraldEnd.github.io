//Goes back to the index page
let backButton = document.getElementById('backButton');
function backToIndex(){
    window.location='../../index.html';
}
backButton.onclick = function() {backToIndex();};