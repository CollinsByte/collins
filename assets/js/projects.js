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

// get list of public user's repos
const getRepos = async () => {
    let repos = [];
    let response;
    for (let i = 1; i <= maxPages; i++) {
        response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=pushed&per_page=100&pages=${1}`
        );
        let data = await response.json();
        repos = repos.concat(data);
        console.log(data);
    }
    repos.sort((a, b) => b.forks_count - a.forks_count);
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    console.log(repos);
};

getRepos();


// display list of all user's public repos
const displayRepos = (repos) => {

};

















