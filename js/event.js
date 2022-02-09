function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// just set name the function
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// handel event with annomomus
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// handel addEventListener
const goldenrodButton = document.getElementById('make-goldenrod-button');

goldenrodButton.addEventListener('click', makeGoldenrod)
function makeGoldenrod() {
    document.body.style.backgroundColor = 'goldenrod';
}
// one line function

const pinkButton = document.getElementById('make-hotPink-button');
pinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

// no variable decrial (direct shortcut)
document.getElementById('make-lightBlue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})