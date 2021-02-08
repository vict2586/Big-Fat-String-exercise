"use strict";

document.addEventListener("DOMContentLoaded", ButtonClick);

const generate = document.querySelector("#Generate");
const Input = document.querySelector("#Input_text");
const options = document.querySelector("#Options");
const Output = document.querySelector("#Output_text");

let input;
let choose;
let output;

function ButtonClick() {

    console.log("start");

    generate.addEventListener("click", Chooseoutput);
}

function Chooseoutput() {

    console.log("Done");

    input = Input.value;

    if (input) {
      getOption();
    } else {
        console.log("You need to write something first.");
    }
}

function getOption() {

    console.log("Finish");

    choose = parseInt(options.value);

    mannyAnwser();
}

function mannyAnwser() {

    console.log("So manny anwsers");

    switch (choose) {
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
    }
}

function numberOne() {

    console.log("One done");

    const firstLetter = input[0].toUpperCase();
    const restOfFirstName = input.substring(1).toLowerCase();

    output = `${firstLetter}${restOfFirstName}`;

    showResult();
}

function numberToo() {

    console.log("Too done");
    const firstNamePosition = input.indexOf(" ");

    output = input.substring(0, firstNamePosition);

    showResult();
}

function numberThree() {

    console.log("Three done");

    const firstNamePosition = input.indexOf(" ");

    output = input.substring(0, firstNamePosition).length;

    showResult();
}

function numberFour() {

    console.log("Four done");

    const firstPosition = input.indexOf(" ") + 1;
    const lastPosition = input.lastIndexOf(" ");

    const middleName = input.substring(firstPosition, lastPosition);

    output = `Middle name: ${middleName} at position ${firstPosition} and ${lastPosition}`;

    showResult();
}

function numberFive() {

    console.log("Five done");

    const fileType = input.lastIndexOf(".");
    output = input.substring(fileType);

    showResult();
}

function numberSix() {

    console.log("Six done");

    const star = "*";

    output = star.repeat(input.length);

    showResult();
}

function numberSeven() {

    console.log("Seven done");

    const beforeUppercase = input.substring(0, 2).toLowerCase();
    const uppercaseLetter = input[2].toUpperCase();
    const afterUppercase = input.substring(3).toLowerCase();

    output = `${beforeUppercase}${uppercaseLetter}${afterUppercase}`;

    showResult();
}

function numberEight() {

    console.log("Eight done");

    let wasLastLetterAHyphenOrSpace = false;
    let result = "";

    for (let index = 0; index < input.length; index++) {
        if (wasLastLetterAHyphenOrSpace === true) {
            result += input[index].toUpperCase();
        } else {
            result += input[index];
        }

        if (input[index] === "-" || input[index] === " ") {
            wasLastLetterAHyphenOrSpace = true;
        } else {
            wasLastLetterAHyphenOrSpace = false;
        }
    }

    output = result;

    showResult();
}

function showResult() {
    console.log("showResult");

    Output.textContent = output;
}