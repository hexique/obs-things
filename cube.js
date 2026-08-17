const counterPath = document.getElementById('counter');
let counter = 0;

window.incrementCounter = function() {
    counter++;
    counterPath.textContent = `Счётчик вращений: ${counter}`;
    console.log(counter);
};

const duration = 7500;

setInterval(() => {
    window.incrementCounter();
}, duration);