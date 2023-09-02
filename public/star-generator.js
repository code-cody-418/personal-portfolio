let str = ''

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < 100; i++) {

    if (i % 2) {
        let x = getRandomInt(2000)
        let y = getRandomInt(2000)
        let color = "#fff"
        console.log(x + "px" + " " + y + "px" + " " + color + " " + ",")
    } else if (i % 5) {
        let x = getRandomInt(2000)
        let y = getRandomInt(2000)
        let color = "#9932cc"
        console.log(x + "px" + " " + y + "px" + " " + color + " " + ",")
    } else {
        let x = getRandomInt(2000)
        let y = getRandomInt(2000)
        let color = "#1dacd6"
        console.log(x + "px" + " " + y + "px" + " " + color + " " + ",")
    }

    let x = getRandomInt(2000)
    let y = getRandomInt(2000)
    let color = "#fff"
    console.log(x + "px" + " " + y + "px" + " " + color + " " + ",")
}
