$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        // Client-side validation example
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        
        if (name === '' || email === '') {
            alert('Please fill out all required fields.');
            event.preventDefault(); // Prevent form submission
        }
    });
});
