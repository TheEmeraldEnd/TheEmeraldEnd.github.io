class ProjectItem{
    constructor(name, catagory , description, summary, link, imageLink, status){
        this.name = name;
        this.catagory = catagory;
        this.description = description; 
        this.summary = summary;
        this.link = link; 
        this.imageLink = imageLink;
        this.status = status;
    }
}

var ProjectLibrary = [];
function AddProjectItem(incomingProjectItem){
    ProjectLibrary.push(incomingProjectItem);
}

//Game Catagory
var tempName = "Game-Selector";
var tempCatagory = "Game";
var tempDescription = "Used to select games and add applications to the selector.";
var tempSummary = "Used to select games and add applications to the selector.";
var tempLink = "https://github.com/TheEmeraldEnd/Game-Selector";
var tempImageLink = "";
var tempStatus = "Finished";
var tempProjectItem = new ProjectItem(
    tempName,
    tempCatagory,
    tempDescription,
    tempSummary,
    tempLink,
    tempImageLink,
    tempStatus
);
AddProjectItem(tempProjectItem);

var tempName = "Battle-Scene";
var tempCatagory = "Game";
var tempDescription = "A beginner project to test out battling systems.";
var tempSummary = "Turn based test system.";
var tempLink = "https://github.com/TheEmeraldEnd/Battle-Scene";
var tempImageLink = "";
var tempStatus = "Prototype Only";
var tempProjectItem = new ProjectItem(
    tempName,
    tempCatagory,
    tempDescription,
    tempSummary,
    tempLink,
    tempImageLink,
    tempStatus
);
AddProjectItem(tempProjectItem);

var tempName = "Platformer-Project";
var tempCatagory = "Game";
var tempDescription = "A beginner project to test platforming.";
var tempSummary = "Testing platforming mechanics.";
var tempLink = "https://github.com/TheEmeraldEnd/Platformer-Project";
var tempImageLink = "";
var tempStatus = "Prototype Only";
var tempProjectItem = new ProjectItem(
    tempName,
    tempCatagory,
    tempDescription,
    tempSummary,
    tempLink,
    tempImageLink,
    tempStatus
);
AddProjectItem(tempProjectItem);

//AI Catagory
var tempName = "Wizrobe101Bot";
var tempCatagory = "AI";
var tempDescription = "Used to test color identification to see cards.";
var tempSummary = "Used to test color identification to see cards.";
var tempLink = "https://github.com/TheEmeraldEnd/Wizrobe101Bot";
var tempImageLink = "ProjectLibraryImages/Wizrobe101Bot.png";
var tempStatus = "Unfinished";
var tempProjectItem = new ProjectItem(
    tempName,
    tempCatagory,
    tempDescription,
    tempSummary,
    tempLink,
    tempImageLink,
    tempStatus
);
AddProjectItem(tempProjectItem);

//ASP.NET Catagory
var tempName = "LegoTestSite";
var tempCatagory = "ASP.NET";
var tempDescription = "Used to provide an API for lego sets. Sets can be searched up and the individual pieces can "+
    " This is not the client side. The client side is a seperate application located under LegoSiteClientAccess.";
var tempSummary = "Used to provide an API for lego sets.";
var tempLink = "https://github.com/TheEmeraldEnd/LegoTestSite";
var tempImageLink = "ProjectLibraryImages/LegoTestSite.png";
var tempStatus = "Unfinished";
var tempProjectItem = new ProjectItem(
    tempName,
    tempCatagory,
    tempDescription,
    tempSummary,
    tempLink,
    tempImageLink,
    tempStatus
);
AddProjectItem(tempProjectItem);

var tempName = "Lego Site Client Access";
var tempCatagory = "ASP.NET";
var tempDescription = "Provides a GUI access to the LegoTestSite project (which acts as an API).";
var tempSummary = "Used to provide an GUI for lego sets lego piece system.";
var tempLink = "https://github.com/TheEmeraldEnd/LegoSiteClientAccess";
var tempImageLink = "";
var tempStatus = "Unfinished";
var tempProjectItem = new ProjectItem(
    tempName,
    tempCatagory,
    tempDescription,
    tempSummary,
    tempLink,
    tempImageLink,
    tempStatus
);
AddProjectItem(tempProjectItem);

//Static website Category
var tempName = "PokemonDualTypeCalculator";
var tempCatagory = "Static Website";
var tempDescription = "Provides a description of the strengths and weaknesses of a pokemon " +
    "depending on their type combination.";
var tempSummary = "Calculate type combo's strengths and weaknesses.";
var tempLink = "Static Website Projects/PokemonDualTypeCalculator/index.html";
var tempImageLink = "ProjectLibraryImages/PokemonDualTypeCalculator.png";
var tempStatus = "Minimum Viable Product Achieved";
var tempProjectItem = new ProjectItem(
    tempName,
    tempCatagory,
    tempDescription,
    tempSummary,
    tempLink,
    tempImageLink,
    tempStatus
);
AddProjectItem(tempProjectItem);

var tempName = "RecipeProject";
var tempCatagory = "Static Website";
var tempDescription = "Provides possible cooking recipes to cook with. Built to remember cooking settings " + 
    "because I can't remember them.";
var tempSummary = "Store and display cooking recipes.";
var tempLink = "Static Website Projects/Recipe Project/index.html";
var tempImageLink = "ProjectLibraryImages/RecipeProject.png";
var tempStatus = "Minimum Viable Product Achieved";
var tempProjectItem = new ProjectItem(
    tempName,
    tempCatagory,
    tempDescription,
    tempSummary,
    tempLink,
    tempImageLink,
    tempStatus
);
AddProjectItem(tempProjectItem);