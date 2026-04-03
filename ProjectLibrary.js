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

    Name(){
        return this.name;
    }

    Catagory(){
        return this.catagory;
    }

    Description(){
        return this.description;
    }

    Summary(){
        return this.summary;
    }

    Link(){
        return this.link;
    }

    ImageLink(){
        return this.imageLink;
    }

    Status(){
        return this.status;
    }


}

class ProjectLibraryCollection{
    static ProjectLibrary = [];

    static AddProjectItem(incomingProjectItem){
        ProjectLibraryCollection.ProjectLibrary.push(incomingProjectItem);
    }

    static GetUniqueCatagories(){
        let listOfUniqueCatagories = [];

        for(let i = 0; i < ProjectLibraryCollection.ProjectLibrary.length; i++){
            let tempProjectCatagory = ProjectLibraryCollection.ProjectLibrary[i].Catagory();
            if (!listOfUniqueCatagories.includes(tempProjectCatagory))
                listOfUniqueCatagories.push(tempProjectCatagory);
        }

        return listOfUniqueCatagories;
    }

    static GetProjectsOfCatagory(incomingCatagory = ""){
        let listOfProjects = [];

        for(let i = 0; i < ProjectLibraryCollection.ProjectLibrary.length; i++){
            let tempProjectCatagory = ProjectLibraryCollection.ProjectLibrary[i].Catagory();
            let tempProjectName = ProjectLibraryCollection.ProjectLibrary[i].Name();
            if (incomingCatagory === tempProjectCatagory && tempProjectName !== ""){
                listOfProjects.push(tempProjectName);
            }
            
        }

        return listOfProjects;
    }

    static GetProjectDetails(incomingProjectName = ""){
        let tempProject = new ProjectItem("", "", "", "", "", "", "");

        for(let i = 0; i < ProjectLibraryCollection.ProjectLibrary.length; i++){
            if (incomingProjectName === ProjectLibraryCollection.ProjectLibrary[i].Name()){
                return ProjectLibraryCollection.ProjectLibrary[i];
            }
        }
        return tempProject;
    }

    static GetProjectLibrary(){
        return this.ProjectLibrary;
    }
}



//Game Catagory
var tempName = "Locomotion-Test ";
var tempCatagory = "Game";
var tempDescription = "Testing a basic version of the cyberpunk dash alongside other abilities.";
var tempSummary = "Testing a basic version of the cyberpunk dash alongside other abilities.";
var tempLink = "https://github.com/TheEmeraldEnd/Locomotion-Test";
var tempImageLink = "";
var tempStatus = "Prototype";
var tempProjectItem = new ProjectItem(
    tempName,
    tempCatagory,
    tempDescription,
    tempSummary,
    tempLink,
    tempImageLink,
    tempStatus
);
ProjectLibraryCollection.AddProjectItem(tempProjectItem);

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
ProjectLibraryCollection.AddProjectItem(tempProjectItem);

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
ProjectLibraryCollection.AddProjectItem(tempProjectItem);

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
ProjectLibraryCollection.AddProjectItem(tempProjectItem);

var tempName = "LXXIX";
var tempCatagory = "Game";
var tempDescription = "A quick game about time travel and Pompeii. Built with Twine.";
var tempSummary = "Game with time travel and Pompeii, a Twine story.";
var tempLink = "https://github.com/TheEmeraldEnd/LXXIX";
var tempImageLink = "";
var tempStatus = "Outdated";
var tempProjectItem = new ProjectItem(
    tempName,
    tempCatagory,
    tempDescription,
    tempSummary,
    tempLink,
    tempImageLink,
    tempStatus
);
ProjectLibraryCollection.AddProjectItem(tempProjectItem);

var tempName = "School-Project-Gallery";
var tempCatagory = "Game";
var tempDescription = "Used in a school video project about life.";
var tempSummary = "Used in a school video project about life.";
var tempLink = "https://github.com/TheEmeraldEnd/School-Project-Gallery";
var tempImageLink = "";
var tempStatus = "School Project";
var tempProjectItem = new ProjectItem(
    tempName,
    tempCatagory,
    tempDescription,
    tempSummary,
    tempLink,
    tempImageLink,
    tempStatus
);
ProjectLibraryCollection.AddProjectItem(tempProjectItem);

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
ProjectLibraryCollection.AddProjectItem(tempProjectItem);

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
ProjectLibraryCollection.AddProjectItem(tempProjectItem);

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
ProjectLibraryCollection.AddProjectItem(tempProjectItem);

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
ProjectLibraryCollection.AddProjectItem(tempProjectItem);

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
ProjectLibraryCollection.AddProjectItem(tempProjectItem);

//Website
var tempName = "LegoPiecesWebsite";
var tempCatagory = "Website";
var tempDescription = "An original version of what the lego website was going to be. ";
var tempSummary = "An original version of what the lego website was going to be.";
var tempLink = "https://github.com/TheEmeraldEnd/LegoPiecesWebsite";
var tempImageLink = "";
var tempStatus = "Prototype";
var tempProjectItem = new ProjectItem(
    tempName,
    tempCatagory,
    tempDescription,
    tempSummary,
    tempLink,
    tempImageLink,
    tempStatus
);
ProjectLibraryCollection.AddProjectItem(tempProjectItem);

//Arduino
var tempName = "Arduino-Communicator";
var tempCatagory = "Arduino";
var tempDescription = "A quick application to communicate between arduino and other applications. Done in c# for accessability.";
var tempSummary = "A quick application to communicate between arduino and other applications.";
var tempLink = "https://github.com/TheEmeraldEnd/Arduino-Communicator";
var tempImageLink = "";
var tempStatus = "Prototype";
var tempProjectItem = new ProjectItem(
    tempName,
    tempCatagory,
    tempDescription,
    tempSummary,
    tempLink,
    tempImageLink,
    tempStatus
);
ProjectLibraryCollection.AddProjectItem(tempProjectItem);

//Application
var tempName = "Productivity-Tracker";
var tempCatagory = "Application";
var tempDescription = "An application, built with Unity, to keep track of productivity vs video games.";
var tempSummary = "A unity application to measure productivity against game time.";
var tempLink = "https://github.com/TheEmeraldEnd/Productivity-Tracker";
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
ProjectLibraryCollection.AddProjectItem(tempProjectItem);

var tempName = "Steam-Game-Selector";
var tempCatagory = "Application";
var tempDescription = "Used to put pathways into one spot. (Steam ends up doing the same thing).";
var tempSummary = "Used to easily access multiple applications.";
var tempLink = "https://github.com/TheEmeraldEnd/Steam-Game-Selector";
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
ProjectLibraryCollection.AddProjectItem(tempProjectItem);






//Unsorted in Catagory






