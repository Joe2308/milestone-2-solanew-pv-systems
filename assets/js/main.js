/**
 * Event handler to execute input field values
 */
function onChange() {
    var irradience = document.getElementById("irradience").value;
    var roofSpace = document.getElementById("roof_space").value;
    var unitCost = document.getElementById("unit_cost").value;
    var orientation = document.getElementById("orientation").value;

    var savings = computeSavings(irradience, roofSpace, unitCost, orientation);
    savings = savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");

    // Warning message added if customer does not choose a county//
    if (irradience === "default") {
        document.getElementById("savings").innerHTML = "Please Choose County!";

        // Message to customer of potential savings made//
    } else {
        document.getElementById("savings").innerHTML = "Your Annual Savings = €" + savings;
    }

    showAnswer();
}

/**
 * Calculate total savings based on the passed parameters
 * 
 * @param {Number} irradience 
 * @param {Number} roofSpace 
 * @param {Number} unitCost 
 * @param {String} orientation 
 * @returns {Number} savings in euros
 */
function computeSavings(irradience, roofSpace, unitCost, orientation) {

    // Math to determine solar radiance based on a solar panel that is 19% effiecient//
    var efficiency = (irradience * 0.19);

    // If user chooses west facing roof we add 2% losses to efficiency of solar panels//
    if (orientation === "west") {
        efficiency = (irradience * 0.17);

        // If user chooses east facing roof we add 4% losses to efficiency of solar panels//
    } else if (orientation === "east") {
        efficiency = (irradience * 0.15);
    }

    // The total generation of the system is based on it's efficiency times available roof space//
    const generation = (efficiency * roofSpace);

    // Savings made is the total generation times what the customer pays per unit of electricity//
    return (generation * (unitCost * 0.01)).toFixed(2);
}

/**
 * ShowAnswer function displays answer when input is selected
 */
function showAnswer() {
    document.getElementById('answer').style.display = 'block';
}


$(function () {
    // Hide steps list items on document loaded
    $("#instruct").hide();

    //Show and hide list items when icon is clicked and add class to rotate the arrow icon with css
    $("#rotate").on("click", function () {
        $("#instruct").slideToggle(1000);
        if ($("#rotate").hasClass("down")) {
            $(this).removeClass("down").addClass("up");
        } else {
            $(this).removeClass("up").addClass("down");
        }
    });

    // Jquery funtion to collapse mobile nav on clicking links
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //Jquery function to change nav bar color on scroll
    $(window).scroll(function () {
        var scrolling = $(window).scrollTop();
        if (scrolling > 10) {
            $("#nav-scroll").css({
                "background": "#343a40",
                "transition": ".3s ease-in-out"
            });
            $(".nav-link").css("color", "#fff");

            $(".navbar-toggler").css("background", "#fff");
        } else {
            $("#nav-scroll").css("background", "#fff");
            $(".nav-link").css("color", "rgba(0,0,0,.5)");
        }
    });

    //Jquery for Read More Read Less paragraph 1
    $("#show-btn").on("click", function () {
        if ($("#dots").css("display") === "none") {
            $("#dots").css("display", "inline");
            $(this).text("Read More");
            $("#more").css("display", "none");
        } else {
            $("#dots").css("display", "none");
            $(this).text("Read Less");
            $("#more").css("display", "inline");
        }
    });

    //Jquery for Read More Read Less paragraph 2
    $("#show-btn-2").on("click", function () {
        if ($("#dots-2").css("display") === "none") {
            $("#dots-2").css("display", "inline");
            $(this).text("Read More");
            $("#more-2").css("display", "none");
        } else {
            $("#dots-2").css("display", "none");
            $(this).text("Read Less");
            $("#more-2").css("display", "inline");
        }
    });

    // Solar savings calculator event listeners added to input field values to call onChange function
    document.getElementById("irradience").addEventListener("change", onChange);
    document.getElementById("roof_space").addEventListener("change", onChange);
    document.getElementById("unit_cost").addEventListener("change", onChange);
    document.getElementById("orientation").addEventListener("change", onChange);
});