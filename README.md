# DOM Manipulation Mini-project: JavaScript Color Theme Switcher
![image](https://github.com/EleoXDA/Theme_Color_Switcher_JS/assets/27622683/77c00775-719c-47f4-8a94-c47dc8a74ce3)

This project demonstrates a simple way to use JavaScript, HTML, and CSS to change the color theme of a webpage. It also uses the localStorage web API to persist the selected theme across different browsing sessions.

## Description
This project creates a webpage with a dropdown menu to select a color theme. Each theme is defined in a CSS file. When a theme is selected, JavaScript changes the webpage's class to the selected theme, which in turn changes the colors of the webpage. The selected theme is saved in the local storage, so the page remembers the user's theme preference even after refreshing or reopening the browser.

## Usage
1. Fork the repository on GitHub to create a copy on your own account.
2. Clone or download the forked repository to your local machine.
3. Open the index.html file in your web browser.
4. Use the dropdown menu at the top of the page to select a color theme. The page colors will change immediately.
5. Refresh the page, or close and reopen your browser. The page will remember your selected theme.

## Code Structure
The code for this project is split across three files:

- index.html: This file defines the structure of the webpage, including the dropdown menu for selecting a theme.
- styles.css: This file defines three color themes as CSS classes. Each theme changes the background color and text color of the page.
- theme-switcher.js: This file adds interactivity to the webpage. It listens for the 'change' event on the dropdown menu and changes the page's theme class accordingly. It also saves the selected theme in the local storage and applies the saved theme when the page loads.

## Try it Yourself
To try this project yourself, clone the repository and open index.html in your web browser. You should see a dropdown menu at the top of the page. Select a theme from the dropdown menu and see how the page colors change!
