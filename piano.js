let display = document.getElementById("display");

let keys = document.querySelectorAll(".key");

function playSound(letter) {

    let audio = document.getElementById(letter + "-audio");

    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }

    display.innerText = "You Pressed: " + letter.toUpperCase();

    let keyDiv = document.getElementById(letter);
    keyDiv.classList.add("active");

    setTimeout(() => {
        keyDiv.classList.remove("active");
    }, 150);
}

keys.forEach(key => {
    key.addEventListener("click", () => {
        let letter = key.id;
        playSound(letter);
    });
});

document.addEventListener("keydown", (e) => {
    let letter = e.key.toLowerCase();

    if (letter >= 'a' && letter <= 'z') {
        playSound(letter);
    }
});
