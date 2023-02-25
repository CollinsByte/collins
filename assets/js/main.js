// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
        return element;
    }

    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
};

// Nav Styles on scroll
const  scrollHeader = () => {
    const headerElement = selectElement('#header');
    if (this.scrollY > 15) {
        headerElement.classList.add('activated');
    } else {
        headerElement.classList.remove('activated');
    }
};

window.addEventListener("scroll", scrollHeader);

// Open menu & search pop-up

// Open/Close Search form pop-up

// -- Close the search form pop-up on ESC keypress

// Switch theme/add to local storage

// Swiper