

// Solar savings calculator event listeners added to input field values to call onChange function//
document.getElementById("irradience").addEventListener("change", onChange);
document.getElementById("roof_space").addEventListener("change", onChange);
document.getElementById("unit_cost").addEventListener("change", onChange);
document.getElementById("orientation").addEventListener("change", onChange);

function onChange() {
    var irradience = document.getElementById("irradience").value;
    var roofSpace = document.getElementById("roof_space").value;
    var unitCost = document.getElementById("unit_cost").value;
    var orientation = document.getElementById("orientation").value;

    var savings = computeSavings(irradience, roofSpace, unitCost, orientation);
    savings = savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
    
     // Waring message added if customer does not choose a county//
    if (irradience === "default") {
        document.getElementById("savings").innerHTML = "Please Choose County!";

        // Message to customer of potential savings made//
    } else {
        document.getElementById("savings").innerHTML = "Your Annual Savings = €" + savings;
    }
}


function computeSavings(irradience, roofSpace, unitCost, orientation) {

   // Math to determine solar radiance based on a solar panel that is 19% effiecient//
    var efficiency = (irradience * .19);

    // If user chooses west facing roof we add 2% losses to efficiency of solar panels//
    if (orientation === "west") {
        efficiency = (irradience * .17);

        // If user chooses east facing roof we add 4% losses to efficiency of solar panels//
    } else if (orientation === "east") {
        efficiency = (irradience * .15);
    }

    // The total generation of the system is based on it's efficiency times available roof space//
    var generation = (efficiency * roofSpace);

    // Savings made is the total generation times what the customer pays per unit of electricity//
    var savings = (generation * (unitCost * .01)).toFixed(2);
    return savings;
}

//solar calculator answers section event listeners added to input fields to call showAnswer function//
document.getElementById("irradience").addEventListener("change", showAnswer);
document.getElementById("roof_space").addEventListener("change", showAnswer);
document.getElementById("unit_cost").addEventListener("change", showAnswer);
document.getElementById("orientation").addEventListener("change", showAnswer);

// ShowAnswer function displays answer when input is selected//
function showAnswer() {
    document.getElementById('answer').style.display = 'block';
}

document.getElementById("irradience").addEventListener("change", sortList);

function sortList() {
    var list = document.getElementById("irradience");
    sortedList = list.sort();
    list.innerHTML = sortedList;
}