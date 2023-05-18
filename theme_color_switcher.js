document.addEventListener('DOMContentLoaded', function() {
    var themeSelector = document.getElementById('theme-selector');
    themeSelector.addEventListener('change', function() {
        document.body.classList.remove('theme-default', 'theme-dark', 'theme-light');         // Remove the existing theme class
        document.body.classList.add(this.value);         // Add the selected theme class
    });
});
