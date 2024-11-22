
    async function sendEmail(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Create an object to hold the data
        const formData = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        try {
            // Send data to the backend (you'll need to implement the backend)
            const response = await fetch('https://your-backend-url/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // If the response is OK, show a success message
                document.getElementById('success').innerHTML = '<div class="alert alert-success">Your details are saved successfully.</div>';
                // Clear the form
                document.getElementById('contactForm').reset();
            } else {
                // If there's an error, show an error message
                document.getElementById('success').innerHTML = '<div class="alert alert-danger">There was an error sending your message. Please try again later.</div>';
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('success').innerHTML = '<div class="alert alert-danger">There was an error sending your message. Please try again later.</div>';
        }
    }
