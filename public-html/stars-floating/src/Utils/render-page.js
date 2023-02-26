const mainPage = document.getElementById('main')

//renderPage is used to conditionally render a page. Exp: game or sign-in
export const renderPage = (page) => {
    mainPage.insertAdjacentHTML('afterbegin', page)
    return true
}