// Grab Element
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
        return element;
    }

    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
};

const username = 'paradigm-lab';
const maxPages = 2;
const hideForks = true;
const repoList = selectElement('.repo-list');
const repoSection = selectElement('.repos');
const filterInput = selectElement('.filter-repos');

console.log(filterInput);
