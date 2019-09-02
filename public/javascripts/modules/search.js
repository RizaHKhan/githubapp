//initialize github
import { Github } from './github'
import { UI } from './ui'

const github = new Github
const ui = new UI
//search input 

const searchUser = document.getElementById('searchUser')

searchUser.addEventListener('keyup', (e) => {
    let userText = e.target.value;

    if(userText != '') {
        //make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                //show alert 
                ui.showAlert('User not found')
            } else {
                //show profile
                ui.showAlert('')
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)

            }
        })
    } else {
        //clear profile
        ui.clearProfile();
        ui.showAlert('')
    }
})