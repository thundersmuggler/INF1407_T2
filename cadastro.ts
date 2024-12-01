window.onload = function() {

    const nome_usuario = document.getElementById("usuario");
    const senha_usuario = document.getElementById("senha");

    document.getElementById("botao_voltar")?.addEventListener("click",  () => {window.location.href = "index.html";});

    // Add event listener to the "Cadastrar" button
    document.getElementById('botao_cadastrar')?.addEventListener('click', () => {
        // Get the values from the input fields
        const usuario = (document.getElementById('campo_usuario') as HTMLInputElement).value;
        const senha = (document.getElementById('campo_senha') as HTMLInputElement).value;

        // Create the JSON payload
        const data = {
            usuario: usuario,
            senha: senha
        };

        // Send the data to the backend
        fetch('/your-django-endpoint/', { // Replace with your Django URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify JSON content
                'X-CSRFToken': getCSRFToken() // Include CSRF token
            },
            body: JSON.stringify(data) // Convert data to JSON string
        })
        .then((response: Response) => {
            if (response.ok) {
                return response.json(); // Parse JSON response
            } else {
                throw new Error('Failed to submit data');
            }
        })
        .then((result: any) => {
            console.log('Success:', result);
            // Handle success (e.g., show a success message)
        })
        .catch((error: Error) => {
            console.error('Error:', error.message);
            // Handle errors (e.g., show an error message)
        });
    });

    // Function to get the CSRF token from cookies (Django requires it for POST requests)
    function getCSRFToken(): string {
        const cookieValue = document.cookie
            .split('; ')
            .find((row) => row.startsWith('csrftoken='))
            ?.split('=')[1];
        return cookieValue || '';
    }
}
