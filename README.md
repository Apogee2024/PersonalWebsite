# Personal Website

This repository contains the code for my personal website, built using React. The website features pages for an overview (Home), information about me (About), my experience and skills (Experience), and a showcase of my projects (Projects). The site includes a dark/light theme toggle and responsive design to ensure a great user experience across devices.

## Features

- **Theming:** The website dynamically adjusts to the user's preferred color scheme (light or dark) and allows manual toggling between themes.
- **Routing:** Client-side routing is handled by `react-router-dom`, providing seamless transitions between pages.
- **Responsive Design:** The website is fully responsive, ensuring it looks great on all screen sizes.
- **Footer:** Displays the current year dynamically in the footer.

## Project Structure

- `App.js`: The main component that sets up the router and manages the theme state. It also handles the theme transition logic and displays the footer.
- `pages/`: Contains the different page components (`HomePage`, `AboutPage`, `RegistrationPage`, `ProjectPage`) that represent each section of the website.
- `components/Navigation.js`: Contains the navigation bar, which includes the theme toggle and links to the different sections of the website.
- `App.css`: Contains the styling for the website, including theme-specific styles and transitions.

## How to Run

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Apogee2024/PersonalWebsite.git
