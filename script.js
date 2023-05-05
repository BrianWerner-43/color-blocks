$(document).ready(onReady);
// Pasted the <p> tags from html as a refrence to execute my code

// {/* <p>Red Count: <span id="red-count">1</span></p> */}
    // <p>Blue Count: <span id="blue-count">1</span></p>
    // <p>Green Count: <span id="green-count">1</span></p>
    // <p>Yellow Count: <span id="yellow-count">1</span></p>

// created a function called onReady to contain all of my color buttons
// and added a line to remove color blocks when clicked
 let redCount = 1;
 let blueCount = 1;
 let greenCount = 1;
 let yellowCount = 1;

 function onReady () {
    $('#red-btn').on('click', appendRedContainer); 
    $('#blue-btn').on('click',appendBlueContainer);
    $('#green-btn').on('click', appendGreenContainer);
    $('#yellow-btn').on('click', appendYellowContainer);
    
    
   $('#color-block').on('click', '.block', removeColorBlock);
}

// adding my colors so they can be incremented by 1
// Created a set of different functions for each of my colors
 function appendRedContainer() {
    $('#color-block').append('<div class="block red-fill"></div>');
    redCount ++;  
     $('#red-count').html(redCount);   
}
 function appendBlueContainer() {
    $('#color-block').append('<div class="block blue-fill"></div>');
    blueCount ++;
    $('#blue-count').html(blueCount);
}   
 function appendGreenContainer() {
    $('#color-block').append('<div class="block green-fill"></div>');
    greenCount ++;
    $('#green-count').html(greenCount);
}
 function appendYellowContainer() {
    $('#color-block').append('<div class="block yellow-fill"></div>');
    yellowCount ++;
    $('#yellow-count').html(yellowCount);
}
//Created a function to call .block to remove each block individually
  function removeColorBlock() {
    // Tried doing the stretch to have the the count decrement the color box
    // but not having any luck #sadFace
    //  redCount --;
    //  blueCount --;
    //  greenCount --;
    //  yellowCount --;
    //  $('#red-count').html(redCount);
    //  $('#blue-count').html(blueCount);
    //  $('#green-count').html(greenCount);
    //  $('#yellow-count').html(yellowCount);
     $(this).remove().parent();

}










    console.log('🟥 🟦 🟩 🟨');