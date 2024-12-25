document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const feedbackMessage = document.getElementById('feedbackMessage');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            // Send the registration request
            const response = await fetch('http://localhost:3001/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            // Display success or error feedback
            if (data.success) {
                feedbackMessage.textContent = "Registration successful! Redirecting to login...";
                feedbackMessage.style.color = "green";
                feedbackMessage.style.opacity = "1";

                setTimeout(() => {
                    window.location.href = '../login/login.html';
                }, 2000);
            } else {
                feedbackMessage.textContent = data.message;
                feedbackMessage.style.color = "red";
                feedbackMessage.style.opacity = "1";
            }
        } catch (error) {
            console.error('Error:', error);
            feedbackMessage.textContent = "An unexpected error occurred. Please try again.";
            feedbackMessage.style.color = "red";
            feedbackMessage.style.opacity = "1";
        }
    });
});
