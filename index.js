var bar = document.getElementById("whyrureadingthis");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var quad = document.getElementById("quad");
var dubu = document.getElementById("dumb-button");
var dudi = document.getElementById("dumb-things");
var rev = document.getElementById("review");
var subbut = document.getElementById("sub");
var stat = document.getElementById("status");
var suntext = document.getElementById("sun-text");
var sun = document.getElementById("sun");
const lifespan = 2486372248080;
const sunborn = -145065600000000000000;
const sundie = 157680000000000000000;

function update() {
    let percent = (Date.now() - sunborn) / (sundie - sunborn) * 100;
    suntext.innerHTML = `The sun is ${percent.toFixed(14)}% of the way to going kaboom!`;
    sun.setAttribute("width", (percent * 0.998) + "%");
}

dubu.addEventListener("click", e => {
    dubu.remove();
    dudi.style.display = "block";
});

/*subbut.addEventListener("click", e => {
    fetch("https://camelcasedsnivy.pythonanywhere.com/review", {method: "POST", body: rev.value})
        .then(res => {
            if (res.status == 204) {
                stat.className = "twohundred";
                stat.innerText = "[Submitted! (204)] ";
            } else if (res.status == 429) {
                stat.className = "four29";
                stat.innerText = "[You are submitting too fast! (429)] ";
            } else {
                stat.className = "othererror";
                stat.innerText = `[Some other unknown error occured! (${res.status})] `;
            }
        });
});*/

setInterval(update, 50);
