# Module 1 Solution - Lunch Checker

This project is a solution for Module 1 of the "Single Page Web Applications with AngularJS" course on Coursera. The app checks whether the number of items entered in a textbox is "Too much!" or "Enjoy!", based on predefined criteria.

## Description

The Lunch Checker app is a simple AngularJS application that allows users to:
1. Enter a list of items they usually eat for lunch, separated by commas.
2. Click the "Check If Too Much" button to get feedback:
   - If the number of items is less than or equal to 3, the app displays **"Enjoy!"**.
   - If the number of items is greater than 3, the app displays **"Too much!"**.
   - If the input is empty, the app displays **"Please enter data first"**.

The app also features dynamic styling to change the text and border colors based on the message displayed.

## Features

- Handles empty input gracefully.
- Ignores empty items (e.g., `item1, ,item2`) in the count.
- Displays messages with dynamic styling:
  - Green for "Enjoy!" or "Too much!".
  - Red for "Please enter data first".

## Technologies Used

- **HTML5** for the page structure.
- **CSS3** for styling.
- **AngularJS** for application logic.

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/BhargavRam-init/Learning-Angular.git
