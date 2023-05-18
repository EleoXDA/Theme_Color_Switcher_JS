document.addEventListener('DOMContentLoaded', function() {
  var themeSelector = document.getElementById('theme-selector');
  
  themeSelector.addEventListener('change', function() {
      document.body.classList.remove('theme-default', 'theme-dark', 'theme-light'); // Remove the existing theme class
      document.body.classList.add(this.value); // Add the selected theme class
      localStorage.setItem('selectedTheme', this.value); // Save the selected theme in local storage
  });

  // Load the saved theme from local storage (if any)
  var savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
      document.body.classList.remove('theme-default', 'theme-dark', 'theme-light'); // Remove the existing theme class
      document.body.classList.add(savedTheme); // Add the saved theme class
      themeSelector.value = savedTheme; // Set the dropdown menu's value to the saved theme
  }
});
