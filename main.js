document.getElementById('contactForm').addEventListener('submit', function(event) {
    var phoneInput = document.getElementById('phone').value;
    var phonePattern = /^[0-9]{7,11}$/; 

    if (!phonePattern.test(phoneInput)) {
        alert("Please enter a valid phone number (7-11 digits).");
        event.preventDefault();
    }
});
