function sendMail(contactForm) {
    emailjs.sendcontactForm("gmail", "heritage", {
        "name": contactForm.name.value,
        "from_email_address": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}