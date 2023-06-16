let bombDefuserKey = document.getElementById("bombDefuserKey");
let bombTimer = document.getElementById("bombTimer");

let unqId = null;

let count = parseInt(bombTimer.innerHTML);

let countDown = function () {
    count--;
    bombTimer.innerHTML = count;
    if (count === 0) {
        bombTimer.innerHTML = "BOOM!";
        clearInterval(unqId);
    }
};


unqId = setInterval(countDown, 1000);

bombDefuserKey.addEventListener("keydown", function (event) {
    let defuseKey = bombDefuserKey.value;

    if (defuseKey === "buddi" && count !== 0 && event.key === "Enter") {
        bombTimer.innerHTML = "🎉 You did it! 🎊";
        clearInterval(unqId);
    }

});
