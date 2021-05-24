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
                console.log("FAILED", error)
            });

    return false;
}