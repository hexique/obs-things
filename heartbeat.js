const counterPath = document.getElementById('heartbeat');

window.incrementCounter = function() {
    bpm = Math.round(Math.random() * 314);
    counterPath.textContent = `${bpm}`;
    console.log(bpm);
};

let bpm = 0;
const cooldown = 1000;

setInterval(() => {
    window.incrementCounter();
}, cooldown);