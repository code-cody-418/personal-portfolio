//Adds a bg color when mouse enters a nav link to give it a button look

const bgLinkOne = document.querySelector("#linkBgOne")
const bgLinkTwo = document.querySelector("#linkBgTwo")
const bgLinkThree = document.querySelector("#linkBgThree")
const bgLinkFour = document.querySelector("#linkBgFour")

//link one
bgLinkOne.addEventListener("mouseenter", (e) => {
    bgLinkOne.style.backgroundColor = "#6c757d"
})

bgLinkOne.addEventListener("mouseleave", (e) => {
    bgLinkOne.style.backgroundColor = ""
})

//link two
bgLinkTwo.addEventListener("mouseenter", (e) => {
    bgLinkTwo.style.backgroundColor = "#6c757d"
})

bgLinkTwo.addEventListener("mouseleave", (e) => {
    bgLinkTwo.style.backgroundColor = ""
})

//link three
bgLinkThree.addEventListener("mouseenter", (e) => {
    bgLinkThree.style.backgroundColor = "#6c757d"
})

bgLinkThree.addEventListener("mouseleave", (e) => {
    bgLinkThree.style.backgroundColor = ""
})

//link four
bgLinkFour.addEventListener("mouseenter", (e) => {
    bgLinkFour.style.backgroundColor = "#6c757d"
})

bgLinkFour.addEventListener("mouseleave", (e) => {
    bgLinkFour.style.backgroundColor = ""
})


//Adds a border color when entered to give button look

//service one
const targetServiceOne = document.querySelector("#serviceOne")

targetServiceOne.addEventListener("mouseenter", (e) => {
    targetServiceOne.style.outline = "5px solid rebeccapurple"
})

targetServiceOne.addEventListener("mouseleave", (e) => {
    targetServiceOne.style.outline = ""
})

//service two
const targetServiceTwo = document.querySelector("#serviceTwo")

targetServiceTwo.addEventListener("mouseenter", (e) => {
    targetServiceTwo.style.outline = "5px solid rebeccapurple"
})

targetServiceTwo.addEventListener("mouseleave", (e) => {
    targetServiceTwo.style.outline = ""
})


//service three
const targetServiceThree = document.querySelector("#serviceThree")

targetServiceThree.addEventListener("mouseenter", (e) => {
    targetServiceThree.style.outline = "5px solid rebeccapurple"
})

targetServiceThree.addEventListener("mouseleave", (e) => {
    targetServiceThree.style.outline = ""
})