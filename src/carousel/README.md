# Carousel

## Installation

To use `Carousel` in your project, follow these steps:

### For a Standard JavaScript Project

1. **Add `Carousel` to Your Project:**

   ## For NUXT JS :
   ### Basic Usage
   ```js
   import { Carousel } from 'three-ui-ar';

   onMounted(() => {
      const carousel = new Carousel();   
   });
   ```

   ### Callback usage
   ```js
   import { Carousel } from 'three-ui-ar';

   carousel.onButtonClick((id) => {
      console.log(`Button clicked with ID: ${id}`);
   });
   ```

   ### Update Components
   ```js
    const carousel = new Carousel({
        id: 'crl-1',
        items: [
            { src: 'https://picsum.photos/600/800?random=1', alt: 'Image 1' },
            { src: 'https://picsum.photos/600/800?random=2', alt: 'Image 2' },
            { src: 'https://picsum.photos/600/800?random=3', alt: 'Image 3' },
            { src: 'https://picsum.photos/600/800?random=4', alt: 'Image 4' },
            { src: 'https://picsum.photos/600/800?random=5', alt: 'Image 5' }
        ],
        itemWidth: '200px',
        gap: '10px'
    });

   ```