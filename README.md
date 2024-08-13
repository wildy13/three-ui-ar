# THREE UI AR

`three-ui-ar` is a versatile JavaScript package designed to simplify the creation of user interfaces (UI) within augmented reality (AR) environments. By providing an easy-to-use API for managing sliding panels, menus, and interactive components, `ThreeUI` enables developers to integrate dynamic and responsive UI elements seamlessly into their AR experiences.

## Components

### 1. [SlideOver](./src/slideOver.js)

The core component of the package that manages the sliding panel functionality.

## Features

- **Open and Close Buttons**: Easily configure buttons to open and close the sliding panel.
- **Customizable Panels**: Set up panels with different backgrounds and styles.
- **Dynamic Menus and Submenus**: Add menus and submenus with customizable buttons.
- **Callback Functions**: Execute custom code when menu or submenu items are clicked.
- **Responsive Design**: Built to adapt to different screen sizes and layouts.
- **Integration with Three.js**: Easily integrate with Three.js for 3D experiences.

## Installation

To use `SlideOver` in your project, follow these steps:

### For a Standard JavaScript Project

1. **Add `SlideOver` to Your Project:**

   Download the source file and include it in your project directory.

2. **Include and Initialize `SlideOver`:**

   ```js
   import { SlideOver } from './path/to/slideOver.js';

   document.addEventListener('DOMContentLoaded', () => {
       const slider = new SlideOver();
   });
