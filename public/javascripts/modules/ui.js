export class UI {
    constructor () {
        this.profile = document.querySelector('.git-content')
        this.rep = document.querySelector('.repo-content')
    }

    

    showProfile(user) {
        this.profile.innerHTML = `
            
            <div class="left">
                <h2>${user.name}</h2>
                <img src="${user.avatar_url}">
            </div>

            <div class="right">
            <h2>Biography</h2>
            <p>${user.bio}</p>
            </div>

            <div class="bottom">
                <p>Followers: ${user.followers}</p>
                <p>Following: ${user.following}</p>
                <p>Public Repos: ${user.public_repos}</p>
                <a href="${user.html_url}">Profile Link</a>
            </div>
        `
    }

    showRepos(repos) {
        let output = ''

        repos.forEach(function(repo) {
            output += `
            <div class="repo">
            <h3><a href="${repo.html_url}">${repo.name}</a></h3>
            <p>Stargazers: ${repo.stargazers_count}</p>
            <p>Watchers Count: ${repo.watchers_count}</p>
            <p>Forms Count: ${repo.forms_count}</p>
            </div>
            `
        })

        this.rep.innerHTML = output        
        
    }

    //show alert message
    showAlert(message) {
        
        const alert = document.querySelector('.alert')
        alert.innerHTML = message
    };
    
    clearProfile() {
        this.profile.innerHTML = ''
    }



}