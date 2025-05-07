document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    // For registration page
    if (signUpButton && signInButton) {
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }
    
    // Automatically show the appropriate panel based on the page
    if (window.location.pathname.includes('registration.html') || 
        window.location.pathname.includes('registration.php')) {
        container.classList.add("right-panel-active");
    }
});