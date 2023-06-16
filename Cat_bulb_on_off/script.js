function bulbOn() {
    document.getElementById("bulbImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("bulbStatus").textContent = "Switched On";
    document.getElementById("bulbOff").style.backgroundColor = "red";
    document.getElementById("bulbOn").style.backgroundColor = "gray";
}

function bulbOff() {
    document.getElementById("bulbImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("bulbStatus").textContent = "Switched Off";
    document.getElementById("bulbOff").style.backgroundColor = "gray";
    document.getElementById("bulbOn").style.backgroundColor = "green";
}
