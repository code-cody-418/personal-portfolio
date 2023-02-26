import './style.css'
import { store } from './Store/store' //initiates the redux store
import Experience from './Experience/Experience.js'
import { gamePage } from './Pages/game'
import { signInPage } from './Pages/sign-in'
import { loadGameUi } from './ui/loadGameUi'
import { getJwt } from './Utils/get-jwt'
import { checkJwt } from './Utils/check-jwt'
import { renderPage } from './Utils/render-page.js'
import { loadAccount } from './Account/load-account'

//CheckJwt uses promise to check for valid jwtToken to determine which page to display
export const pageSetup = () => {
    checkJwt()
        .then((response) => {
            let signInConfirm = response.data.body.jwtValid
            if (signInConfirm) { //Renders game
                renderPage(gamePage)
                loadGameUi()
                loadAccount()
                const experience = new Experience(document.querySelector('canvas.webgl'))
            } else { //Renders sign-in page
                renderPage(signInPage)
                getJwt()
            }
        })
        .catch(error => console.log(error))
}
pageSetup()