function GetTypeInteractionsTable() {
    return {
        Normal: {
            weaknesses: ['Fighting'],
            resistances: [],
            immune: ['Ghost']
        },
        Fire: {
            weaknesses: ['Water', 'Ground', 'Rock'],
            resistances: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'],
            immune: []
        },
        Water: {
            weaknesses: ['Electric', 'Grass'],
            resistances: ['Fire', 'Water', 'Ice', 'Steel'],
            immune: []
        },
        Electric: {
            weaknesses: ['Ground'],
            resistances: ['Electric', 'Flying', 'Steel'],
            immune: []
        },
        Grass: {
            weaknesses: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug'],
            resistances: ['Water', 'Electric', 'Grass', 'Ground'],
            immune: []
        },
        Ice: {
            weaknesses: ['Fire', 'Fighting', 'Rock', 'Steel'],
            resistances: ['Ice'],
            immune: []
        },
        Fighting: {
            weaknesses: ['Flying', 'Psychic', 'Fairy'],
            resistances: ['Bug', 'Rock', 'Dark'],
            immune: []
        },
        Poison: {
            weaknesses: ['Ground', 'Psychic'],
            resistances: ['Grass', 'Fighting', 'Poison', 'Bug', 'Fairy'],
            immune: []
        },
        Ground: {
            weaknesses: ['Water', 'Grass', 'Ice'],
            resistances: ['Poison', 'Rock'],
            immune: ['Electric']
        },
        Flying: {
            weaknesses: ['Elecric', 'Ice', 'Rock'],
            resistances: ['Grass', 'Fighting', 'Bug'],
            immune: ['Ground']
        },
        Psychic: {
            weaknesses: ['Bug', 'Ghost', 'Dark'],
            resistances: ['Fighting', 'Psychic'],
            immune: []
        },
        Bug: {
            weaknesses: ['Fire', 'Flying', 'Rock'],
            resistances: ['Grass', 'Fighting', 'Ground'],
            immune: []
        },
        Rock: {
            weaknesses: ['Water', 'Grass', 'Fighting', 'Ground', 'Steel'],
            resistances: ['Normal', 'Fire', 'Poison', 'Flying'],
            immune: []
        },
        Ghost: {
            weaknesses: ['Ghost', 'Dark'],
            resistances: ['Poison', 'Bug'],
            immune: ['Normal', 'Fighting']
        },
        Dragon: {
            weaknesses: ['Ice', 'Dragon', 'Fairy'],
            resistances: ['Fire', 'Water', 'Electric', 'Grass'],
            immune: []
        },
        Dark: {
            weaknesses: ['Fighting', 'Bug', 'Fairy'],
            resistances: ['Ghost', 'Dark'],
            immune: ['Psychic']
        },
        Steel: {
            weaknesses: ['Fire', 'Fighting', 'Ground'],
            resistances: ['Normal', 'Grass', 'Ice', 'Flying', 'Psychic', 'Bug', 'Rock',
                'Dragon', 'Steel', 'Fairy'],
            immune: ['Poison']
        },
        Fairy: {
            weaknesses: ['Poison', 'Steel'],
            resistances: ['Fighting', 'Bug', 'Dark'],
            immune: ['Dragon']
        }
    }
}

function GetTypesMultiplierTable() {
    return {
        weaknessAdjust: 2,
        neutralAdjust : 1,
        resistanceAdjust: 0.5,
        immuneAdjust: 0
    };
}

//The main function called in the html document
function calculateTypeInteractions() {
    //Get the constants that are read only
    let multiplierAdjustors = Object.fromEntries(Object.keys(GetTypeInteractionsTable()).map(type => [type, 1]));

    //Get type 1 properties
    let type1 = GetTypeInteractions('types1');

    //Get type 2 properties
    let type2 = GetTypeInteractions('types2');

    //Get the multiplier adjusted with weaknesses, resistances, and immunities
    for (var type in multiplierAdjustors) {
        multiplierAdjustors[type] = GetCurrentTypeMultiplier(type.toString(), type1, type2);
    }

    //Display the adjustors
    for (var type in multiplierAdjustors) {
        let adjustElement = document.getElementById(`${type.toString()}Adjust`);

        let multiplier = multiplierAdjustors[type];

        color = GetColorString(multiplier);

        adjustElement.innerText = `x${multiplier.toString()}`;
        adjustElement.style.backgroundColor = color;
    }
}

//Get the weaknesses, resistances, and immunities of both types
function GetTypeInteractions(radioButtonGroupName) {
    let lookForType = GetCheckedValue(radioButtonGroupName);

    let typeInteractions = {
        typeName: '',
        resistances: [],
        weaknesses: [],
        immunities: []
    };

    for (var type in GetTypeInteractionsTable()) {
        let pokemonType = GetTypeInteractionsTable()[type];

        if (type == lookForType) {
            typeInteractions.typeName = type.toString();
            typeInteractions.resistances = pokemonType.resistances;
            typeInteractions.weaknesses = pokemonType.weaknesses;
            typeInteractions.immunities = pokemonType.immune;

            return typeInteractions;
        }
    }
}

//Gets the value of the radio buttons by group name
function GetCheckedValue(groupName) {
    var radioButtons = document.getElementsByName(groupName);
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return radioButtons[i].value;
        }
    }

    return 'Error';
}

//Gets the type multiplier for the current type being looked at
function GetCurrentTypeMultiplier(curentType, type1Interactions, type2Interactions) {
    let multiplierAdjust = 1;

    //Apply type1 adjustments to the multiplier adjustor
    multiplierAdjust *=
        ApplyMultiplier(type1Interactions.resistances, curentType, GetTypesMultiplierTable().resistanceAdjust) *
        ApplyMultiplier(type1Interactions.weaknesses, curentType, GetTypesMultiplierTable().weaknessAdjust) *
        ApplyMultiplier(type1Interactions.immunities, curentType, GetTypesMultiplierTable().immuneAdjust);

    if (type1Interactions.typeName !== type2Interactions.typeName) {
        //Apply type2 adjustments to the multiplier adjustor
        multiplierAdjust *=
            ApplyMultiplier(type2Interactions.resistances, curentType, GetTypesMultiplierTable().resistanceAdjust) *
            ApplyMultiplier(type2Interactions.weaknesses, curentType, GetTypesMultiplierTable().weaknessAdjust) *
            ApplyMultiplier(type2Interactions.immunities, curentType, GetTypesMultiplierTable().immuneAdjust);
    }

    return multiplierAdjust;
}

//Get's weather the incoming pokemon type is in an array, if so, return an adjustor, and if not, then return 1
function ApplyMultiplier(pokemonTypeArray, typeName, adjustorNumber) {
    return pokemonTypeArray.includes(typeName) ? adjustorNumber : 1;
}

//Returns the color code if adjustorComparator === current adjust, else returns current color
function GetColor(colorCode, currentColor, adjustorComparator, currentAdjust) {
    return (adjustorComparator === currentAdjust) ? colorCode : currentColor;
}

function GetColorString(multiplier) {
    let multiplierTable = GetTypesMultiplierTable();
    let color = "#696969";

    //Set up the color tables (don't know how to make it into a dictionary with floats and strings)
    let colorConditionals =
        [multiplierTable.weaknessAdjust * multiplierTable.weaknessAdjust,
        multiplierTable.weaknessAdjust,
        multiplierTable.resistanceAdjust,
        multiplierTable.resistanceAdjust * multiplierTable.resistanceAdjust,
        multiplierTable.immuneAdjust];

    let colorArray =
        ["#73D216",
        "#4E9A06",
        "#A40000",
        "#7C0000",
        "#2E3436"];


    for (let i = 0; i < colorConditionals.length; i++) {
        colorCode = colorArray[i];
        colorConditional = colorConditionals[i];
        color = GetColor(colorCode, color, colorConditional, multiplier);
    }

    return color;
}