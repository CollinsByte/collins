// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
        return element;
    }

    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
};

// Nav Styles on scroll

// Open menu & search pop-up

// Open/Close Search form pop-up

// -- Close the search form pop-up on ESC keypress

// Switch theme/add to local storage

// Swiper