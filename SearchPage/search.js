let catagoryDropDown = document.getElementById("catagoryDropdown");
let projectHolderElement = document.getElementById("ProjectHolderElement");
let uniqueCatagories = ProjectLibraryCollection.GetUniqueCatagories();

function MakeCatagoryOptionElement(incomingCatagory){
    let tempElement = `<option value="${incomingCatagory}">${incomingCatagory}</option>`
    return tempElement;
}

function MakeProjectItemDisplay(incomingProjectItem){
    let tempElement = 
        `<a href="${incomingProjectItem.Link()}" class="ProjectDisplayItem">` +
            `<p class="ProjectDisplayTitle" value="${incomingProjectItem.Name()}">` +
                `${incomingProjectItem.Name()}` +
            `</p>` +
            `<p class="ProjectDisplayCatagory" value="${incomingProjectItem.Catagory()}">  ` +
                `${incomingProjectItem.Catagory()}` +
            `</p>` +
        `</a>`;

    return tempElement;
}

function FilterResultsByCatagoryAndTitle(incomingCatagory = "", incomingTitle = ""){
    let projectElements = document.getElementsByClassName('ProjectDisplayItem');
    incomingCatagory = incomingCatagory.trim();
    incomingTitle = incomingTitle.trim();
    for(let i = 0; i < projectElements.length; i++){
        let tempProjectElement = projectElements[i];
        let catagory = tempProjectElement.getElementsByClassName("ProjectDisplayCatagory")[0].textContent.trim();
        let title = tempProjectElement.getElementsByClassName("ProjectDisplayTitle")[0].textContent.trim();
        
        if (tempProjectElement.classList.contains('HiddenDisplayItem')){
            tempProjectElement.classList.remove('HiddenDisplayItem');
        }

        if (incomingCatagory != catagory && incomingCatagory != ""){
            tempProjectElement.classList.add('HiddenDisplayItem');
        }

        if (!(title.toUpperCase().includes(incomingTitle.toUpperCase())) && !(incomingTitle == "")){
            tempProjectElement.classList.add('HiddenDisplayItem');
        }
        console.log(`${title.includes(incomingTitle)}`);
        
    }
}

//Load catagory options for drop down
for(let i = 0; i < uniqueCatagories.length; i++){
    catagoryDropDown.innerHTML += MakeCatagoryOptionElement(uniqueCatagories[i]);
}

//Load all projects for examination
for(let i = 0; i < ProjectLibraryCollection.ProjectLibrary.length; i++){
    let tempProjectItem = ProjectLibraryCollection.ProjectLibrary[i];
    
    if (i === 0){
        projectHolderElement.innerHTML = MakeProjectItemDisplay(tempProjectItem);
    }
    else{
        projectHolderElement.innerHTML += MakeProjectItemDisplay(tempProjectItem);
    }
}

FilterResultsByCatagoryAndTitle("Game", "Ba")