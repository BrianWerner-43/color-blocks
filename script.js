$(document).ready(onReady);
// Pasted the <p> tags from html as a refrence to execute my code

// {/* <p>Red Count: <span id="red-count">1</span></p> */}
    // <p>Blue Count: <span id="blue-count">1</span></p>
    // <p>Green Count: <span id="green-count">1</span></p>
    // <p>Yellow Count: <span id="yellow-count">1</span></p>

// created a function called onReady to contain all of my color buttons
// and added a line to remove color blocks when clicked

function onReady () {
    $('#red-btn').on('click', appendRedContainer,); 
    $('#blue-btn').on('click',appendBlueContainer);
    $('#green-btn').on('click', appendGreenContainer);
    $('#yellow-btn').on('click', appendYellowContainer);
    $('#color-block').on('click', '.block', removeColorBlock);
}

// Created a set of different functions for each of my colors
function appendRedContainer() {
    $('#color-block').append('<div class="block red-fill"></div>');
}
function appendBlueContainer() {
    $('#color-block').append('<div class="block blue-fill"></div>');
}
function appendGreenContainer() {
    $('#color-block').append('<div class="block green-fill"></div>');
}
function appendYellowContainer() {
    $('#color-block').append('<div class="block yellow-fill"></div>');
}
// Created a function to call .block to remove each block individually
function removeColorBlock() {
     $(this).remove();

}










    console.log('🟥 🟦 🟩 🟨');