export class Github {
    constructor () {        
        this.client_id =  process.env.CLIENT_ID
        this.client_secret = process.env.CLIENT_SECRET
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

