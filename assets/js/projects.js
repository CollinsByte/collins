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


// get information from github profile
const getProfile = async() => {
    const response = await fetch(
        `https://api.github.com/users/${username}`
    );
    console.log(`awaiting the response from the fetch request`);
    const profile = await response.json();
    console.log(profile);
    displayProfile(profile)
};

getProfile();

// display information from github profile 
const displayProfile = (profile) => {
    const userInfo = selectElement('.user-info');
    userInfo.innerHTML = `
        <figure>
            <img alt="user avatar" src=${profile.avatar_url} />
        </figure>
        <div>
            <h2><a href=${profile.blog}><strong>${profile.name}</strong></h2>
            <p>${profile.bio}</p>
            <p>
                <strong>Location:</strong> ${profile.location}
            </p>
            <p>
                <strong>@${profile.login}</strong>
                Repos: ${profile.public_repos}
                Gists: ${profile.public_gists}
            </p>
        </div>
    `;
};
