function calculateTypeInteractions() {
    //Get the constants that are read only
    let typesMultiplier = {
        weaknessAdjust : 2,
        resistanceAdjust : 0.5,
        immuneAdjust : 0
    };

    let pokemonTypes = {
        Normal: {
            string: 'Normal',
            weaknesses: ['Fighting'],
            resistances: [],
            immune: ['Ghost']
        },
        Fire: {
            string: 'Fire',
            weaknesses: ['Water', 'Ground', 'Rock'],
            resistances: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'],
            immune: []
        },
        Water: {
            string: 'Water',
            weaknesses: ['Electric', 'Grass'],
            resistances: ['Fire', 'Water', 'Ice', 'Steel'],
            immune: []
        },
        Electric: {
            string: 'Electric',
            weaknesses: ['Ground'],
            resistances: ['Electric', 'Flying', 'Steel'],
            immune: []
        },
        Grass: {
            string: 'Grass',
            weaknesses: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug'],
            resistances: ['Water', 'Electric', 'Grass', 'Ground'],
            immune: []
        },
        Ice: {
            string: 'Ice',
            weaknesses: ['Fire', 'Fighting', 'Rock', 'Steel'],
            resistances: ['Ice'],
            immune: []
        },
        Fighting: {
            string: 'Fighting',
            weaknesses: ['Flying', 'Psychic', 'Fairy'],
            resistances: ['Bug', 'Rock', 'Dark'],
            immune: []
        },
        Poison: {
            string: 'Poison',
            weaknesses: ['Ground', 'Psychic'],
            resistances: ['Grass', 'Fighting', 'Poison', 'Bug', 'Fairy'],
            immune: []
        },
        Ground: {
            string: 'Ground',
            weaknesses: ['Water', 'Grass', 'Ice'],
            resistances: ['Poison', 'Rock'],
            immune: ['Electric']
        },
        Flying: {
            string: 'Flying',
            weaknesses: ['Elecric', 'Ice', 'Rock'],
            resistances: ['Grass', 'Fighting', 'Bug'],
            immune: ['Ground']
        },
        Psychic: {
            string: 'Psychic',
            weaknesses: ['Bug', 'Ghost', 'Dark'],
            resistances: ['Fighting', 'Psychic'],
            immune: []
        },
        Bug: {
            string: 'Bug',
            weaknesses: ['Fire', 'Flying', 'Rock'],
            resistances: ['Grass', 'Fighting', 'Ground'],
            immune: []
        },
        Rock: {
            string: 'Rock',
            weaknesses: ['Water', 'Grass', 'Fighting', 'Ground', 'Steel'],
            resistances: ['Normal', 'Fire', 'Poison', 'Flying'],
            immune: []
        },
        Ghost: {
            string: 'Ghost',
            weaknesses: ['Ghost', 'Dark'],
            resistances: ['Poison', 'Bug'],
            immune: ['Normal', 'Dark']
        },
        Dragon: {
            string: 'Dragon',
            weaknesses: ['Ice', 'Dragon', 'Fairy'],
            resistances: ['Fire', 'Water', 'Electric', 'Grass'],
            immune: []
        },
        Dark: {
            string: 'Dark',
            weaknesses: ['Fighting', 'Bug', 'Fairy'],
            resistances: ['Ghost', 'Dark'],
            immune: ['Psychic']
        },
        Steel: {
            string: 'Steel',
            weaknesses: ['Fire', 'Fighting', 'Ground'],
            resistances: ['Normal', 'Grass', 'Ice', 'Flying', 'Psychic', 'Bug', 'Rock',
                'Dragon', 'Steel', 'Fairy'],
            immune: ['Poison']
        },
        Fairy: {
            string: 'Fairy',
            weaknesses: ['Poison', 'Steel'],
            resistances: ['Fighting', 'Bug', 'Dark'],
            immune: ['Dragon']
        }
    }

    let multiplierAdjustors = {
        Normal: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Grass: 1,
        Ice: 1,
        Fighting: 1,
        Poison: 1,
        Ground: 1,
        Flying: 1,
        Psychic: 1,
        Bug: 1,
        Rock: 1,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Steel: 1,
        Fairy: 1
    };

    //Get the 2 types of the pokemon
    let type1 = getCheckedValue('types1');
    let type2 = getCheckedValue('types2');

    //Get type 1 properties
    let type1Resistances;
    let type1Weaknesses;
    let type1Immunities;

    //Get type 2 properties
    let type2Resistances;
    let type2Weaknesses;
    let type2Immunities;

    //add the types to the list
    for (var type in pokemonTypes) {
        if (type1 == type) {
            type1Resistances = pokemonTypes[type].resistances;
            type1Weaknesses = pokemonTypes[type].weaknesses;
            type1Immunities = pokemonTypes[type].immune;
        }

        if (type2 == type) {
            type2Resistances = pokemonTypes[type].resistances;
            type2Weaknesses = pokemonTypes[type].weaknesses;
            type2Immunities = pokemonTypes[type].immune;
        }
    }

    //Get the multiplier adjusted with weaknesses, resistances, and immunities
    for (var type in multiplierAdjustors) {
        //Variables for readability
        let typeName = type.toString();
        let multiplierAdjust = 1


        //Get type 1 calculations
        if (type1Resistances.includes(typeName)) {
            multiplierAdjust *= typesMultiplier.resistanceAdjust;
        }

        if (type1Weaknesses.includes(typeName)) {
            multiplierAdjust *= typesMultiplier.weaknessAdjust;
        }

        if (type1Immunities.includes(typeName)) {
            multiplierAdjust *= typesMultiplier.immuneAdjust;
        }

        if (type1 != type2) {
            //Get type 2 calculations
            if (type2Resistances.includes(typeName)) {
                multiplierAdjust *= typesMultiplier.resistanceAdjust;
            }

            if (type2Weaknesses.includes(typeName)) {
                multiplierAdjust *= typesMultiplier.weaknessAdjust;
            }

            if (type2Immunities.includes(typeName)) {
                multiplierAdjust *= typesMultiplier.immuneAdjust;
            }
        }

        multiplierAdjustors[type] = multiplierAdjust;
    }

    //Display the adjustors
    for (var type in multiplierAdjustors) {
        let adjustElement = document.getElementById(`${type.toString()}Adjust`);

        let multiplier = multiplierAdjustors[type];
        let color;

        if (multiplier === 4) {
            color = "#73D216";
        }
        else if (multiplier === 2) {
            color = "#4E9A06";
        }
        else if (multiplier === 0.5) {
            color = "#A40000";
        }
        else if (multiplier === 0.25) {
            color = "#7C0000";
        }
        else if (multiplier === 0) {
            color = "#2E3436";
        }
        else {
            color = "#696969";
        }


        adjustElement.innerText = `x${multiplier.toString()}`;
        adjustElement.style.backgroundColor = color;

    }
}


function getCheckedValue(groupName) {
    var radioButtons = document.getElementsByName(groupName);
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return radioButtons[i].value;
        }
    }

    return 'Error';
}

