const output = document.getElementById("timer");

const timeCounter = setInterval(function() {
    if (output.textContent <= 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(timeCounter);
    }

    output.textContent--;
}, 1000);