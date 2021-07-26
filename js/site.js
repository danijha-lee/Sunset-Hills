




function sunsetHills() {
    let inputOne = document.getElementById("inputOne").value;
    let inputTwo = document.getElementById("inputTwo").value;
    let inputThree = document.getElementById("inputThree").value;
    let inputFour = document.getElementById("inputFour").value;
    let inputFive = document.getElementById("inputFive").value;
    let inputSix = document.getElementById("inputSix").value;

    inputOne = parseInt(inputOne);
    inputTwo = parseInt(inputTwo);
    inputThree = parseInt(inputThree);
    inputFour = parseInt(inputFour);
    inputFive = parseInt(inputFive);
    inputSix = parseInt(inputSix);

    let inputArray = [inputOne, inputTwo, inputThree, inputFour, inputFive, inputSix,]
    
    let returnArray = [];

    returnArray.push(inputArray[0]);
    if (inputArray[1].value > inputArray[0].value) {
        returnArray.push(inputArray[1]);

    } else if (inputArray[2].value > inputArray[1].value && inputArray[2].value > inputArray[0]) {
        returnArray.push(inputArray[2].value);

    } else if (inputArray[3].value > inputArray[2].value && inputArray[3].value > inputArray[1] && inputArray[3].value > inputArray[0]) {
        returnArray.push(inputArray[3].value);

    } else if (inputArray[4].value > inputArray[3].value && inputArray[4].value > inputArray[2] && inputArray[4].value > inputArray[1] && inputArray[4].value > inputArray[0]) {
        returnArray.push(inputArray[4].value);
    
    } else if (inputArray[5].value > inputArray[4].value && inputArray[5].value > inputArray[3] && inputArray[5].value > inputArray[2] && inputArray[5].value > inputArray[1] && inputArray[5].value > inputArray[0]) {
        returnArray.push(inputArray[5].value);
    
    } else if (inputArray[6].value > inputArray[5].value && inputArray[6].value > inputArray[4] && inputArray[6].value > inputArray[3] && inputArray[6].value > inputArray[2] && inputArray[6].value > inputArray[1] && inputArray[6].value > inputArray[0]) {
        returnArray.push(inputArray[6].value);
    } else {
        return returnArray;

    }