# SlideOver

## Installation

To use `SlideOver` in your project, follow these steps:

### For a Standard JavaScript Project

1. **Add `SlideOver` to Your Project:**

   ## For NUXT JS :
   ### Basic Usage
   ```js
   import { SlideOver } from './path/to/slideOver.js';

   onMounted(() => {
      const sliderover = new SlideOver();   
   });
   ```

   ### Callback usage
   ```js
   import { SlideOver } from './path/to/slideOver.js';

   sliderover.onButtonClick((id) => {
      console.log(`Button clicked with ID: ${id}`);
   });

   // Menetapkan callback untuk submenu click
   sliderover.onSubmenuClick((id) => {
      console.log(`Submenu clicked with ID: ${id}`);
   });
   ```

   ### Update Components
   ```js
   sliderover.updateElements({
    body: {
        menu: [{
            name: 'Menu 1',
            submenu: [{
                name: "Submenu 1"
            },
            {
                name: "Submenu 2"
            }]
         },
         {
            name: 'Menu 2'
         },
         {
            name: 'Menu 3'
         }],
      }
   });

   ```

   ### Config
   ```js
   {
      open: {
         id: 'open_button',
         name: 'open',
         background: 'bg-blue-500' // tailwind css,
         fontColor: 'text-slate-100'
      }, 
      close : {
         id: 'close_button',
         name: 'close'
      },
      card: {
         id: 'card',
         background: 'bg-slate-400'
      },
      body: {
        menu: [{
            name: 'Menu 1',
            submenu: [{
                name: "Submenu 1"
            },
            {
                name: "Submenu 2"
            }]
         },
         {
            name: 'Menu 2'
         },
         {
            name: 'Menu 3'
         }],
      }
   }
   ```