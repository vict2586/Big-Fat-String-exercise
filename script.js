"use strict";

document.addEventListener("DOMContentLoaded", ButtonClick);

let input;
let change;
let output;

function start() {
  console.log("start");

  // click -> generate output
  document.querySelector("#Generate").addEventListener("click", Output);
};

function Output() {
  console.log("Done");
  
  //get string from input
  input = document.querySelector("#Input_text").value;

  if (input) {
    getOption();
  } else {
    console.log("You need to write something first.");
  }  

};

function getOption() {

  console.log("Finish");

  change = parseInt(selectStringConversion.value);

  mannyAnwser();
}

function mannyAnwser() {

  console.log("So manny anwsers");

  switch (change) {
      case 1:
          numberOne();
          break;
      case 2:
          numberToo();
          break;
      case 3:
          numberThree();
          break;
      case 4:
          numberFour();
          break;
      case 5:
          numberFive();
          break;
      case 6:
          numberSix();
          break;
      case 7:
          numberSeven();
          break;
      case 8:
          numberEight();
          break;
      default:
          console.log("no option selected");
          break;
  };
};

function numberOne() {

  console.log("One done");

  const firstLetter = input[0].toUpperCase();
  const restOfFirstName = input.substring(1).toLowerCase();

  output = `${firstLetter}${restOfFirstName}`;

  showOutput();
};


function numberToo() {

  console.log("Too done");

  const firstNamePosition = input.indexOf(" ");

  output = input.substring(0, firstNamePosition);

  showOutput();
}

function numberThree() {

  console.log("Three done");

  const firstNamePosition = input.indexOf(" ");

  output = input.substring(0, firstNamePosition).length;

  showOutput();
}

function numberFour() {

  console.log("Four done");

  const firstPosition = input.indexOf(" ") + 1;

  const lastPosition = input.lastIndexOf(" ");

  const middleName = input.substring(firstPosition, lastPosition);

  output = `Middle name: ${middleName} at position ${firstPosition} and ${lastPosition}`;

  showOutput();
}



function showOutput() {
  console.log("showOutput");

  output.textContent = stringResult;
}