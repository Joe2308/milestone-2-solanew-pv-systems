// Solar savings calculator event listeners added to input field values to call computeSavings function//
document.getElementById("irradience").addEventListener("change", computeSavings);
document.getElementById("roof_space").addEventListener("change", computeSavings);
document.getElementById("unit_cost").addEventListener("change", computeSavings);
document.getElementById("orientation").addEventListener("change", computeSavings);

// Solar savings calculator function to call when user changes an input field value//
function computeSavings() {

    // Get input fields//
    var irradience = document.getElementById("irradience").value;
    var roof_space = document.getElementById("roof_space").value;
    var unit_cost = document.getElementById("unit_cost").value;
    var orientation = document.getElementById("orientation").value;

    // Math to determine solar radiance based on a solar panel that is 19% effiecient//
    var efficiency = (irradience * .19);

    // If user chooses west facing roof we add 2% losses to efficiency of solar panels//
    if (orientation === "west") {
        efficiency = (irradience * .17);

        // If user chooses east facing roof we add 4% losses to efficiency of solar panels//
    } else if (orientation === "east") {
        efficiency = (irradience * .15);
    }

    // The total generation of the system is based it's efficiency times available roof space//
    var generation = (efficiency * roof_space);

    // Savings made is the total generation times what the customer pays per unit of electricity//
    var savings = (generation * (unit_cost * .01)).toFixed(2);
    savings = savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");

    // Waring message added if customer does not choose a county//
    if (irradience === "default") {
        document.getElementById("savings").innerHTML = "Please Choose County!";

        // Message to customer of potential savings made//
    } else {
        document.getElementById("savings").innerHTML = "Your Annual Savings = €" + savings;
    }
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