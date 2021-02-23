/* eslint-env browser */
/* use-strict */

var dier = document.querySelector("#dier");
var pinguBtn = document.querySelector("#pinguin");
var schildBtn = document.querySelector("#schildpad");
var visBtn = document.querySelector("#vis");
var kleur = document.querySelector(".dot");


if (dier.className === "") {
    document.body.classList.add("pinguin");

    kleur.classList.add("pingu")
}


pinguBtn.addEventListener("click", function () {
    document.body.className = "";
    document.body.classList.add("pinguin");

    kleur.classList.add("pingu")
    pinguCheck()
});

schildBtn.addEventListener("click", function () {
    document.body.className = "";
    document.body.classList.add("schildpad");

    kleur.classList.add("schillie")
    schildpadCheck()

});

visBtn.addEventListener("click", function () {
    document.body.className = "";
    document.body.classList.add("vis");

    kleur.classList.add("visje")
});


function pinguCheck() {
    if (kleur.className === "dot pingu schillie") {
        kleur.classList.remove("schillie")
    } else if (kleur.className === "dot pingu visje") {
        kleur.classList.remove("visje")
    } else if (kleur.className === "dot pingu schillie visje") {
        kleur.classList.remove("visje", "schillie")
    }
}

function schildpadCheck() {
    if (kleur.className === "dot pingu schillie visje") {
        kleur.classList.remove("visje")
    } else if (kleur.className === "dot pingu visje schillie") {
        kleur.classList.remove("visje")
    }
}


var maxDots = 50;
var interval = 100;
var time = 0;
var dots = document.getElementsByClassName('dot');
var dot = dots[0];
var dotSize = dot.offsetWidth;

document.addEventListener('mousemove', function (event) {
    // dot.style.left = event.clientX + 'px';
    // dot.style.top = event.clientY + 'px';

    if (event.timeStamp > time + interval && dots.length <= maxDots) {
        time = event.timeStamp;
        addDot();
    }
});

function addDot() {
    var dotClone = dot.cloneNode();

    dotClone.style.width = dotClone.style.height = randomSize();
    dotClone.style.left = event.clientX + 'px';
    dotClone.style.top = event.clientY + 'px';
    dotClone.style.transform = "translate(" + randomLocation() + ", " + randomLocation() + ")" + randomHoekie();
    document.body.appendChild(dotClone);

    if (dots.length === maxDots) {
        removeDot();
    }
}

function removeDot() {
    document.body.removeChild(dots[1]);
}

function randomLocation() {
    return Math.floor(Math.random() * (dotSize * 2)) - (dotSize) + 'px';
}

function randomSize() {
    var max = dotSize * 0.5;
    var min = dotSize * 0.2;
    return Math.floor(Math.random() * max + min) + 'px';
}

function randomHoekie() {
    /* hoek wordt getal tussen 0 en 1 */
    var hoek = Math.random();
    /* hoek wordt getal tussen 0 en 90 */
    hoek = hoek * 90;
    /* hoek wordt getal tussen -45 en 45 */
    hoek = hoek - 45;
    /* heok met graden */
    hoek = hoek + "deg";
    /* maak de rotate compleet */
    hoek = " rotate(" + hoek + ")";
    /* stuur complete rotate terug */
    return hoek;
}
