export class Github {
    constructor () {        
        this.client_id = '43fb4e1654632e02b7ac'
        this.client_secret = '9e998d9a39417971eea4efc391fafa1c6595179c'
        this.repo_count = 5;
        this.repo_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse  = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repoResponse  = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
                
        const profile = await profileResponse.json()
        const repos = await repoResponse.json()

        return {
            repos,
            profile
        }
    }

}

