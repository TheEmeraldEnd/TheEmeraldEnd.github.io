
//window.location.href = "Static Website Projects/Recipe Project/index.html";

let projectListListID = "ProjectListListID";

//Project Display
let projectListListElement = document.getElementById(projectListListID);

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
            `<button>` + 
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
        let tempElement = `<a class="ProjectFlexColumnContainer ProjectListFlexRowItem ProjectDisplayWrapper" href="${incomingProjectLink}"` +
                `title="Go To ${incomingProjectTitle}">`;
        tempElement += this.MakeImageElement(incomingProjectImageLink);
        tempElement += this.MakeTitleElement(incomingProjectTitle);
        tempElement += this.MakeSummaryElement(incomingProjectSummary);
        tempElement += '</a>';


        return tempElement;
    }

}

let uniqueCatagories = ProjectLibraryCollection.GetUniqueCatagories();

for(let i = 0; i < uniqueCatagories.length; i++){
    let projectsInCatagory = ProjectLibraryCollection.GetProjectsOfCatagory(uniqueCatagories[i]);
    console.log(uniqueCatagories[i])
    let tempProjectElementList = [];
    for(let j = 0; j < projectsInCatagory.length; j++){
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



