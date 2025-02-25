
console.log("hello world!");

let pageTitle = document.querySelector("#page-title")

// Javascript Timeout changes h1 title after 3 seconds
setTimeout(function () {
    pageTitle.style.color = "pink";
}, 3000)

// click event on header changes background color
document.querySelector("header").onclick = function () {
    document.querySelector("header").style.backgroundColor = "black";
}

document.querySelector("#img-fall").addEventListener("click", function () {
    document.querySelector("#img-spring").style.visibility = "visible";
})
document.querySelector("#img-spring").addEventListener("click", function () {
    document.querySelector("#img-summer").style.visibility = "visible";
})
document.querySelector("#img-summer").addEventListener("click", function () {
    document.querySelector("#img-winter").style.visibility = "visible";
})
document.querySelector("#img-winter").addEventListener("click", function () {
    document.querySelector("#img-fall").style.visibility = "hidden";
})