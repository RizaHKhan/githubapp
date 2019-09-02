export class UI {
    constructor () {
        this.profile = document.querySelector('.git-content')
        this.repo = document.querySelector('.repo-content')
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
            output += 
            `
            
            
            `
        })

        this.repo.innerHTML = output;
        
        
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