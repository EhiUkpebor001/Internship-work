

let zeroGenerator = document.querySelector("#zeroValues")
let oneGenerator = document.querySelector("#oneValues")
let twoGenerator = document.querySelector("#twoValues")
let threeGenerator = document.querySelector("#threeValues")
let fourGenerator = document.querySelector("#fourValues")
let fiveGenerator = document.querySelector("#fiveValues")
let sixGenerator = document.querySelector("#sixValues")
let sevenGenerator = document.querySelector("#sevenValues")
let eightGenerator = document.querySelector("#eightValues")
let nineGenerator = document.querySelector("#nineValues")

let tenGenerator = document.querySelector("#tenValues")
let twentyGenerator = document.querySelector("#twentyValues")
let thirtyGenerator = document.querySelector("#thirtyValues")
let fortyGenerator = document.querySelector("#fortyValues")
let fiftyGenerator = document.querySelector("#fiftyValues")
let sixtyGenerator = document.querySelector("#sixtyValues")
let seventyGenerator = document.querySelector("#seventyValues")
let eightyGenerator = document.querySelector("#eightyValues")
let ninetyGenerator = document.querySelector("#ninetyValues")
let hundredGenerator = document.querySelector("#hundredValues")

function zero() {
    zeroGenerator.style.display="block";
    let randomizer = Math.random();
    zeroGenerator.textContent = randomizer;
}

function one() {
    oneGenerator.style.display="block";
    let randomizer = Math.random() * 2 ;
    oneGenerator.textContent = randomizer;
}

function two() {
    twoGenerator.style.display="block";
    let randomizer = Math.random() * 3 ;
    twoGenerator.textContent = randomizer;
}

function three() {
    threeGenerator.style.display="block";
    let randomizer = Math.random() * 4  ;
    threeGenerator.textContent = randomizer;
}

function four() {
    fourGenerator.style.display="block";
    let randomizer = Math.random() * 5  ;
    fourGenerator.textContent = randomizer;
}

function five() {
    fiveGenerator.style.display="block";
    let randomizer = Math.random() * 6 ;
    fiveGenerator.textContent = randomizer;
}

function six() {
    sixGenerator.style.display="block";
    let randomizer = Math.random() * 7 ;
    sixGenerator.textContent = randomizer;
}

function seven() {
    sevenGenerator.style.display="block";
    let randomizer = Math.random() * 8 ;
    sevenGenerator.textContent = randomizer;
}

function eight() {
    eightGenerator.style.display="block";
    let randomizer = Math.random() * 9 ;
    eightGenerator.textContent = randomizer;
}

function nine() {
    nineGenerator.style.display="block";
    let randomizer = Math.random() * 10 ;
    nineGenerator.textContent = randomizer;
}



function ten() {
    tenGenerator.style.display="block";
    let randomizer = Math.floor( Math.random() * 11 );
    tenGenerator.textContent = randomizer;
}

function twenty() {
    twentyGenerator.style.display="block";
    let randomizer = Math.floor( Math.random() * 10 ) + 11;
    twentyGenerator.textContent = randomizer;
}

function thirty() {
    thirtyGenerator.style.display="block";
    let randomizer = Math.floor( Math.random() * 10 ) + 21;
    thirtyGenerator.textContent = randomizer;
}

function forty() {
    fortyGenerator.style.display="block";
    let randomizer = Math.floor( Math.random() * 10 ) + 31;
    fortyGenerator.textContent = randomizer;
}

function fifty() {
    fiftyGenerator.style.display="block";
    let randomizer = Math.floor( Math.random() * 10 ) + 41;
    fiftyGenerator.textContent = randomizer;
}

function sixty() {
    sixtyGenerator.style.display="block";
    let randomizer = Math.floor( Math.random() * 10 ) + 51;
    sixtyGenerator.textContent = randomizer;
}

function seventy() {
    seventyGenerator.style.display="block";
    let randomizer = Math.floor( Math.random() * 10 ) + 61;
    seventyGenerator.textContent = randomizer;
}

function eighty() {
    eightyGenerator.style.display="block";
    let randomizer = Math.floor( Math.random() * 10 ) + 71;
    eightyGenerator.textContent = randomizer;
}

function ninety() {
    ninetyGenerator.style.display="block";
    let randomizer = Math.floor( Math.random() * 10 ) + 81;
    ninetyGenerator.textContent = randomizer;
}

function hundred() {
    hundredGenerator.style.display="block";
    let randomizer = Math.floor( Math.random() * 10 ) + 91;
    hundredGenerator.textContent = randomizer;
}