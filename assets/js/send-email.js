function sendMail(contactForm) {
    emailjs.send("service_y4rwptj", "template_7goiqio", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.messagesummary.value
        })
        .then(function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.error("FAILED", error);
            });

    return false;
}

/**
 * Bootstrap success alert only show when required fields are filled.
 * Based on youtube tutorial https://youtu.be/UTZjhCH80Zg
 * I added an if else state myself to ensure alert only displayed after required fields had input.
 */
$(document).ready(function () {
    $("#btn-submit").click(function () {

        if ($("#fullname").val() == "" || $("#emailaddress").val() == "" || $("#messagesummary").val() == "") {
            return;
        } else {
            //Show success alert
            $("#form-alert").show("fade");

            //Set 2 second timeout for success alert
            setTimeout(function () {
                $("#form-alert").hide("fade");
            }, 2000);

            //manually close success alert
            $("#alert-close").click(function () {
                $("#form-alert").hide("fade");
            });
        }
    });
});