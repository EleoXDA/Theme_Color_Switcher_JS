document.addEventListener('DOMContentLoaded', function() {
    var themeButtons = document.querySelectorAll('.theme-button');
    
    themeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            document.body.classList.remove('theme-default', 'theme-dark', 'theme-light');             // Remove the existing theme class
            document.body.classList.add(this.dataset.theme);             // Add the selected theme class
            localStorage.setItem('selectedTheme', this.dataset.theme);             // Save the selected theme in local storage
        });
    });

    // Load the saved theme from local storage (if any)
    var savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        document.body.classList.remove('theme-default', 'theme-dark', 'theme-light');         // Remove the existing theme class
        document.body.classList.add(savedTheme);         // Add the saved theme class
    }
});
