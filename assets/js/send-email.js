function sendMail(contactForm) {
    emailjs.send("service_y4rwptj", "template_7goiqio", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.messagesummary.value
        })
        .then(function (response) {
                showAlert();
                console.log("SUCCESS", response);
            },
            function (error) {
                console.error("FAILED", error)
            });

    return false;
}

function showAlert() {
    $("#btn-submit").click(function () {
        if ($("#messagesummary").value === String) {
            $("#form-alert").show("fade");

            setTimeout(function () {
                $("#form-alert").hide("fade");
            }, 2000);
        }
    });

    $("#alert-close").click(function () {
        $("#form-alert").hide("fade");
    });
};