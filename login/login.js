document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password }) 
            });

            if (response.ok) {
                const data = await response.json();
                alert('Login successful: ' + JSON.stringify(data));
            } else {
                const error = await response.text();
                alert('Login failed: ' + error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while logging in.');
        }
    });
});
