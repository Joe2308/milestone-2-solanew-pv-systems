/**
 * Email JS sendMail funciton
 * @param {*} contactForm 
 * @returns 
 */
function sendMail(contactForm) {
    emailjs.send("service_y4rwptj", "template_7goiqio", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.messagesummary.value
        })
        .then(function (response) {
                console.log("SUCCESS", response);
                showAlert(false, 4);
            },
            function (error) {
                console.error("FAILED", error);
                showAlert(true, 4);
            });

    return false;
}

/**
 * Shows alert with successful or error message based on the error parameter. 
 * The alert fades after the time specified in the delay parameter expires.
 * 
 * @param {Boolean} error To especify the type of alert message. True is an 
 *                        error message and false is a successful message.
 * @param {Number} delay The time the alert remains visible before fading.
 */
function showAlert(error, delay) {
    // Show success alert
    const alertElement = $("#form-alert");
    if (error) {
        alertElement.find("#alertMessage").append("Something went wrong! Try again later.");
    } else {
        alertElement.find("#alertMessage").append("<strong>Success!</strong> Your message has been sent.");
    }

    alertElement.toggleClass('alert-error', error);
    alertElement.toggleClass('alert-success', !error);
    
    alertElement.show("fade");

    // Set 2 second timeout for success alert
    setTimeout(function () {
        alertElement.hide("fade");
    }, delay * 1000);
}

$(document).ready(function () {
    // manually close success alert
    $("#alert-close").click(function () {
        $("#form-alert").hide("fade");
    });
});
