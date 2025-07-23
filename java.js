let body = document.getElementById("body")

const randomColor = function() {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return body.style.backgroundColor = color
}

let intervalId = null;

document.querySelector("#auto").addEventListener("click", function() {
    intervalId = setInterval(() => {
        document.querySelector("h1").style.color = "white";
        randomColor();
    }, 1500);
})

document.querySelector("#reset").addEventListener("click", function() {
    document.querySelector("h1").style.color = "steelblue"
    body.style.backgroundColor = "white"
    clearInterval(intervalId)
})

document.querySelector("#submit").addEventListener("click", function() {
    document.querySelector("h1").style.color = "white"
    clearInterval(intervalId)
    randomColor()
})