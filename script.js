document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.getElementById('emailForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    emailForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the default form submission

        // --- IMPORTANT: This is where you would send the data to a service (e.g., Mailchimp) ---
        // For a real-world application, replace this with an AJAX call (using fetch or axios) 
        // to your email marketing service's API endpoint.
        // For this example, we'll just simulate a successful submission.
        
        console.log("Email captured:", document.getElementById('email').value);
        
        // Visual Feedback: Hide the form and show the thank you message
        emailForm.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
    });
});
