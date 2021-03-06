/*jshint esversion: 6 */
/**
 * Solar calculator function event handler to execute input field values
 * Origional concept from tutorial https://youtu.be/vkBiEuZSq9s expaned to suit my needs
 * Credit to my mentor for help in tidying and refactoring my functions
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
 * Answer is populated in empty h2 heading
 */
function showAnswer() {
    document.getElementById('answer').style.display = 'block';
}

/**
 * Jquery for Read More Read Less paragraph 1
 * Based on tutorial https://www.w3schools.com/howto/howto_js_read_more.asp 
 * I adapted tutorial to work with Jquery
 */
function setupReadMoreButton(buttonElement, expandibleElement, truncatedElement) {
    buttonElement.on("click", function () {
        if (truncatedElement.css("display") === "none") {
            truncatedElement.css("display", "inline");
            $(this).text("Read More");
            expandibleElement.css("display", "none");
        } else {
            truncatedElement.css("display", "none");
            $(this).text("Read Less");
            expandibleElement.css("display", "inline");
        }
    });
}

/**
 * Jquery functions on document load
 */
$(function () {
    // Hide steps list items for solar calculator on document loaded
    $("#instruct").hide();

    /**
     * Show and hide list items when icon is clicked and add class to rotate the arrow icon with css
     * Origional concept from guidence in stackoverflow
     */
    $("#rotate").on("click", function () {
        $("#instruct").slideToggle(1000);
        if ($("#rotate").hasClass("down")) {
            $(this).removeClass("down").addClass("up");
        } else {
            $(this).removeClass("up").addClass("down");
        }
    });

    // Jquery funtion to collapse mobile nav on clicking links from stackoverflow
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Jquery function to change nav bar color on scroll based on tutorial https://youtu.be/pS8NmrhKH0w
    $(window).scroll(function () {
        var scrolling = $(window).scrollTop();
        if (scrolling > 10) {
            $("#nav-scroll").css({
                "background": "#343a40",
                "transition": ".3s ease-in-out",
                "-moz-transition": ".3s ease-in-out",
                "-webkit-transition": "0.3s ease-in-out",
                "-o-transition": "0.3s ease-in-out"
            });
            $(".nav-link").css("color", "#fff");

            $(".navbar-toggler").css("background", "#fff");
        } else {
            $("#nav-scroll").css("background", "#585855");
            $(".nav-link").css("color", "#fff");
            $(".navbar-toggler").css("background", "#fff");
        }
    });

    // Scroll to top button from tutorial https://youtu.be/TjZw8VXCuOg
    $("#scroll-to-top").on("click", function () {
        window.scrollTo(0, 0);
    });

    // Scroll to top only appears when window is scrolled 20px
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
            $("#scroll-to-top").fadeIn();
        } else {
            $("#scroll-to-top").fadeOut();
        }
    });

    setupReadMoreButton($("#show-btn"), $("#more"), $("#dots"));
    setupReadMoreButton($("#show-btn-2"), $("#more-2"), $("#dots-2"));

    // Solar savings calculator event listeners added to input field values to call onChange function
    document.getElementById("irradience").addEventListener("change", onChange);
    document.getElementById("roof_space").addEventListener("change", onChange);
    document.getElementById("unit_cost").addEventListener("change", onChange);
    document.getElementById("orientation").addEventListener("change", onChange);
});