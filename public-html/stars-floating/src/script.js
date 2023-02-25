import './style.css'
import './ui/ui.css'
import { store } from './Store/store' //initiates the redux store
import Experience from './Experience/Experience.js'
import { gamePage } from './Pages/game'
import { signInPage } from './Pages/sign-in'
import { loadGameUi } from './ui/loadGameUi'
import { getJwt } from './Utils/get-jwt'


const mainPage = document.getElementById('main')

const signInConfirm = false

const renderPage = (page) => {
    mainPage.insertAdjacentHTML('afterbegin', page)
    return true
}

if (signInConfirm) {
    //Renders game
    renderPage(gamePage)
    loadGameUi()
    const experience = new Experience(document.querySelector('canvas.webgl'))
} else {
    //Renders sign-in page
    renderPage(signInPage)
    getJwt()
}