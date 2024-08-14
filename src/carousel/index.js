import slug from 'slug';
import '../css/main.css';
import '../css/tailwind.css';

export class Carousel {
    constructor(
        options = {
            id: 'carousel',
            items: [],
            itemWidth: '200px',
            gap: '10px',
        }
    ) {
        this.options = options;
        this.createElement();
    }

    createElement() {
        const { id, items, itemWidth, gap } = this.options;

        document.body.className = "overflow-hidden"

        const button = document.createElement('button');
        button.className = 'absolute top-4 left-4 z-[999999] text-slate-100'
        button.innerText = 'Open'
        document.body.appendChild(button);

        const container = document.createElement('div');
        container.setAttribute('id', id);
        container.className = 'absolute  bottom-0 left-0 w-full h-32  overflow-x-auto  snap-x snap-mandatory scroll-smooth z-[99999] flex transform translate-y-full transition-transform duration-300 overflow-y-auto',
            container.style.gap = gap;

        items.forEach((item, index) => {
            const _slug = slug(item.alt)
            const _item = document.createElement('div');
            _item.className = "flex flex-none snap-center";
            container.appendChild(_item);

            const img = document.createElement('img');
            img.id = _slug;
            img.src = item.src;
            img.alt = item.alt;

            _item.appendChild(img);

            _item.addEventListener('click', () => {
                this.buttonClickCallback(_slug);
            })
        });


        button.addEventListener('click', () => {
            if (button.innerText.toLowerCase() === 'open') {
                button.innerText = 'close';
            } else {
                button.innerText = 'open';
            }

            if (container.classList.contains('translate-y-full')) {
                container.classList.remove('translate-y-full');
                container.classList.remove('bottom-0');
                container.classList.add('translate-y-0');
                container.classList.add('bottom-32');
            } else {
                container.classList.add('translate-y-full');
                container.classList.remove('translate-y-0');
                container.classList.remove('bottom-32');
                container.classList.add('bottom-0');
            }
        });


        document.body.appendChild(container);
    }

    onButtonClick(callback) {
        this.buttonClickCallback = callback;
    }
}
