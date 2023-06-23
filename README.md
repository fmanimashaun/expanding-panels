# Expanding Panels Project

## Overview

The Expanding Panels project is a web application that showcases a set of panels with different backgrounds. When a panel clicks, it expands to fill the entire container width, providing more information about the selected conference. This project is built using HTML, CSS, and JavaScript with the help of the Tailwind CSS framework.

## Features

- **Interactive Panel Expansion:** Clicking on a panel triggers an event that expands the selected panel to occupy the full width of the container. In contrast, the other panels shrink to their original size. This interaction provides a visually engaging experience for users.

- **Dynamic Background Images:** Each panel has a unique background image, which adds visual appeal and helps convey the theme of the content.

- **Responsive Design:** The project is designed to be responsive, adapting to different screen sizes and devices. It utilizes CSS media queries and Tailwind CSS utility classes to ensure a consistent user experience across various devices.

> [Live Demo Link](https://fmanimashaun.github.io/expanding-panels/)

## Demo

![screenshot](./docs/assets/img/demo.gif)

## Installation

To install and run this project locally, please follow these steps:

1. Clone the project repository:

```bash
git clone https://github.com/fmanimashaun/expanding-panels.git
```

2. Navigate to the project directory:

```bash
cd expanding-panels
```

3. Open the `index.html` file in a web browser to view the project.

## Code Highlights

Here are some notable aspects of the project's code:

- **Event Handling with JavaScript:** The JavaScript code utilizes event handling to respond to click events on the panels. When a panel is clicked, the `active` class is added to the clicked panel, while the `active` class is removed from the other panels.

  ```javascript
  const cards = document.querySelectorAll('.panel');
  const parent = document.querySelector('.jscontainer');

  parent.addEventListener('click', function (e) {
    cards.forEach((card) => {
      card.classList.remove('active');
    });
    e.target.classList.add('active');
  });
  ```

- **CSS Styling with Tailwind CSS:** The project leverages the Tailwind CSS framework to style the panels and apply responsive design techniques. The utility classes Tailwind CSS provides enable concise and efficient elements styling.

  ```css
  .panel {
    @apply flex-[100px] shadow-2xl rounded-[50px] cursor-pointer bg-cover bg-no-repeat relative;
    transition: width 1s ease-in-out;
  }

  .panel.active {
    @apply flex-[100%];
  }

  .panel.active h3 {
    @apply opacity-100 transition-opacity duration-300 ease-in delay-400;
  }

  .panel:not(.active) h3 {
    @apply opacity-0 transition-opacity duration-300 ease-in delay-400;
  }
  ```

## Author

👤 **Engr. Animashaun Fisayo**

- [GitHub](https://github.com/fmanimashaun)
- [Twitter](https://twitter.com/fmanimashaun)
- [LinkedIn](https://www.linkedin.com/in/fmanimashaun/)
- [Website](https://fmanimashaun.com)

## Contributing

We welcome contributions from the community. If you'd like to contribute, please fork the repository and make your changes, then open a pull request to propose your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
