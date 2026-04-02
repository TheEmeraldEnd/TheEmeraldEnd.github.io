
//window.location.href = "Static Website Projects/Recipe Project/index.html";
let uniqueCatagories = ProjectLibraryCollection.GetUniqueCatagories();
let projectListListID = "ProjectListListID";
let maxProjectLimitPerCatagory = 3;

//Project Display
let projectListListElement = document.getElementById(projectListListID);

function GoToSearch(incomingCatagory = ""){
    
    if (incomingCatagory == "")
        window.location.href = "SearchPage/search.html"
    else{
        window.location.href = `SearchPage/search.html?catagory=${incomingCatagory}`;
    }
}

class ProjectCreationFunctions{
    static MakeProjectCatagoryDisplay(incomingProjectCatagoryString, incomingFormattedProjectElements, incomingCatagorySearchLink){
        //Ignore incomingCatagorySearchLink for now
        if (incomingCatagorySearchLink == ""){

        }
        else{

        }
        
        let tempElement = "";
        tempElement += 
            `<p class="ProjectCatagoryNameDisplay">` +
                `${incomingProjectCatagoryString}` +
            `</p>`;

        tempElement += `<div class="ProjectListFlexRowContainer ProjectCatagoryListDisplay">`
        
        for(let i = 0; i < incomingFormattedProjectElements.length; i++){
            tempElement += incomingFormattedProjectElements[i];
        }

        tempElement += 
            `<button onclick="GoToSearch('${incomingProjectCatagoryString}')">` + 
            `<img src="IndexImages/SearchForImage.png" title="To ${incomingProjectCatagoryString} Search">` +
            `</button>`

        tempElement += `</div>`;
        
        return tempElement;
            
    }

    static MakeImageElement(incomingImageLink){
        if (incomingImageLink === ''){
            incomingImageLink = "IndexImages/Default/DefaultProjectImage.png";
        }

        let tempElement = 
            '<div class="ProjectFlexColumnItemElement ProjectImageWrapper ProjectListFlexRowContainer">' +
                    '<div class="ProjectListFlexRowItem ProjectImageWrapperLeft"></div>' +
                    `<img src="${incomingImageLink}" class="ProjectImage ProjectListFlexRowItem">` +
                    '<div class="ProjectListFlexRowItem ProjectImageWrapperRight"></div>' +
                '</div>';

        return tempElement;
    }

    static MakeTitleElement(incomingProjectTitle){
        let tempElement = 
            '<p class="ProjectFlexColumnItemElement ProjectTitleElement">' +
            `${incomingProjectTitle}` +
            '</p>';

        return tempElement;
    }

    static MakeSummaryElement(incomingProjectSummary){
        let tempElement = 
            '<p class="ProjectFlexColumnItemElement ProjectSummaryElement">' +
            `${incomingProjectSummary}` +
            '</p>';

        return tempElement;
    }

    static MakeProjectDisplay(incomingProjectTitle, incomingProjectSummary, incomingProjectImageLink, incomingProjectLink){
        let tempElement = `<a class="ProjectFlexColumnContainer ProjectListFlexRowItem ProjectDisplayWrapper ProjectDisplayItem" href="${incomingProjectLink}"` +
                `title="Go To ${incomingProjectTitle}">`;
        tempElement += this.MakeImageElement(incomingProjectImageLink);
        tempElement += this.MakeTitleElement(incomingProjectTitle);
        tempElement += this.MakeSummaryElement(incomingProjectSummary);
        tempElement += '</a>';


        return tempElement;
    }

}

projectListListElement.innerHTML = "";

for(let i = 0; i < uniqueCatagories.length; i++){
    let projectsInCatagory = ProjectLibraryCollection.GetProjectsOfCatagory(uniqueCatagories[i]);
    let tempProjectElementList = [];
    let projectDisplayLimit = 0;

    if (projectsInCatagory.length < maxProjectLimitPerCatagory){
        projectDisplayLimit = projectsInCatagory.length;
    }
    else{
        projectDisplayLimit = maxProjectLimitPerCatagory;
    }

    for(let j = 0; j < projectDisplayLimit; j++){
        let tempProject = ProjectLibraryCollection.GetProjectDetails(projectsInCatagory[j]);
        if (tempProject.Name() == ""){
        }
        else{
            tempProjectElementList.push(
            ProjectCreationFunctions.MakeProjectDisplay(
                tempProject.Name(),
                tempProject.Summary(),
                tempProject.ImageLink(),
                tempProject.Link()
            )
        );
        }
        
    }

    
    projectListListElement.innerHTML += 
        ProjectCreationFunctions.MakeProjectCatagoryDisplay(
            uniqueCatagories[i], tempProjectElementList, "");
}

