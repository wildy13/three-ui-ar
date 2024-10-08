import slug from 'slug';
import '../css/main.css'
import '../css/tailwind.css'

export class SlideOver {
    constructor(options = {
        open: { id: 'open_button', name: 'Open', background: 'bg-blue-500', fontColor: 'text-slate-100' },
        close: { id: 'close_button', name: 'Close' },
        card: { id: 'card', background: 'bg-slate-400' },
        body: { id: 'body', button: 2, menu: [] }
    }) {
        this.options = options;
        this.createElements();
    }

    createElements() {
        for (const key in this.options) {
            if (this.options.hasOwnProperty(key)) {
                this.createElement(key, this.options[key]);
            }
        }
    }

    createElement(type, config) {
        let element;
        if (type === 'open') {
            const existingOpenElement = document.querySelector(`#${config.id}`);
            if (existingOpenElement) {
                existingOpenElement.remove();
            }

            element = document.createElement('button');
            element.innerText = config.name;
            element.className = 'z-[99999] absolute top-5 left-5 p-2 rounded';
            element.classList.add(config.background, config.fontColor);
            element.setAttribute('id', config.id);

            document.body.appendChild(element);

            element.addEventListener('click', () => {
                const card = document.querySelector(`#${this.options.card.id}`);
                if (card) {
                    if (card.classList.contains('-translate-x-full')) {
                        card.classList.remove('-translate-x-full');
                        card.classList.add('translate-x-0');
                    } else {
                        card.classList.remove('translate-x-0');
                        card.classList.add('-translate-x-full');
                    }
                } else {
                    console.error('Card element not found!');
                }
            });

        } else if (type === 'card') {
            const existingCardElement = document.querySelector(`#${config.id}`);
            if (existingCardElement) {
                existingCardElement.remove();
            }

            element = document.createElement('div');
            element.setAttribute('id', config.id);
            element.className = `c fixed top-0 left-0 w-1/2 h-full z-[99999] p-4 transform -translate-x-full transition-transform duration-300`;
            element.classList.add(config.background);

            document.body.appendChild(element);

        } else if (type === 'close') {
            setTimeout(() => {
                const card = document.querySelector(`#${this.options.card.id}`);
                if (card) {
                    const existingCloseButton = document.querySelector(`#${config.id}`);
                    if (existingCloseButton) {
                        existingCloseButton.parentElement.remove();
                    }

                    const parent = document.createElement('div');
                    parent.className = 'w-full p-1 flex justify-end items-center';
                    card.insertBefore(parent, card.children[0]);

                    element = document.createElement('button');
                    element.innerText = config.name;
                    element.setAttribute('id', config.id);
                    parent.appendChild(element);

                    element.addEventListener('click', () => {
                        card.classList.add('-translate-x-full');
                        card.classList.remove('translate-x-0');
                    });
                } else {
                    console.error('Card element not found for close button!');
                }
            }, 100);
        } else if (type === 'body') {
            const card = document.querySelector(`#${this.options.card.id}`);
            if (card) {
                const parent = document.createElement('div');
                parent.className = "flex flex-col p-2 w-fit";
                card.appendChild(parent);

                if (Array.isArray(config.menu)) {
                    config.menu.forEach((item, index) => {
                        const div1 = document.createElement('div');
                        div1.className = "py-1"
                        parent.appendChild(div1);

                        const button = document.createElement('button');
                        button.innerText = item.name || `Button ${index + 1}`;
                        const buttonSlug = slug(item.name || `button-${index}`);
                        button.id = buttonSlug;
                        div1.appendChild(button);

                        button.addEventListener('click', () => {
                            div2.classList.toggle('hidden');
                            if (this.buttonClickCallback) {
                                this.buttonClickCallback(button.id);
                            }
                        });

                        const div2 = document.createElement('div');
                        div2.classList = "flex flex-col items-start hidden pl-4"
                        div1.appendChild(div2);

                        if (Array.isArray(config.menu[index].submenu)) {
                            config.menu[index].submenu.forEach(sub => {
                                const submenu = document.createElement('button');
                                const submenuSlug = slug(sub.name || `submenu-${index}`);
                                submenu.id = submenuSlug;
                                submenu.innerText = sub.name;
                                div2.appendChild(submenu);

                                submenu.addEventListener('click', () => {
                                    if (this.submenuClickCallback) {
                                        this.submenuClickCallback(submenu.id);
                                    }
                                });
                            });
                        }
                    });
                } else {
                    for (let index = 0; index < config.button; index++) {
                        const button = document.createElement('button');
                        button.innerText = `Button ${index + 1}`;
                        parent.appendChild(button);
                    }
                }

            } else {
                console.error('Card element not found for body buttons!');
            }
        }
    }

    updateElements(newOptions) {
        this.options = { ...this.options, ...newOptions };
        this.createElements();
    }

    onButtonClick(callback) {
        this.buttonClickCallback = callback;
    }

    onSubmenuClick(callback) {
        this.submenuClickCallback = callback;
    }
}