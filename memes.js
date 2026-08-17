let memes = []

for(let i = 0; i < 100; i++){
    memes.push(i + 1)
}

memes = shuffle(memes)

function shuffle(list){
    return list
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

window.incrementCounter = function() {
    secs -= 1
    if (secs < 0){
        secs = 20
        id += 1
        console.log(id);
        if (id > 107){
            memes = shuffle(memes)
            id = 0
        }
        document.getElementById('img').src = `img/memes/${memes[id]}.jpg`;
        console.log(document.getElementById('img').src)
    }
    
    document.getElementById('time').textContent = `0:${String(secs).padStart(2, "0")}`;
    
};

let id = 0;
let secs = 20
const cooldown = 1000;

setInterval(() => {
    window.incrementCounter();
}, cooldown);