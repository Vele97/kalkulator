/*var calculated = false;

function calculate( event ){
    var clickedButtonValue = event.target.value;

    if ( calculated ) {
        display.value = "";

        calculated = false;
    }

    if(clickedButtonValue === '=') {
        if(display.value !== "") {

            //calculate and show the answer to display
            display.value = eval(display.value);

            calculated = true;
        }
    }
    // the rest of your logic here
}*/

const buttons = document.querySelectorAll("button");

//select the <input type="text" class+"display" disabled> element
const display = document.querySelector(".display");

//add eventListener to each button
buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

//calculate function
function calculate(event) {
  //current clicked buttons value
  var clickedButtonValue = event.target.value;

  if (clickedButtonValue === "=") {
    //check if the display is not empty then only do the calculation
    if (display.value !== "") {
      //calculate and show the answer to display
      display.value = eval(display.value);
    }

    //if any key except "=" pressed again clear display
    button.addEventListener("click", clearDisplay);
  } else if (clickedButtonValue === "C") {
    //clear everything on display
    display.value = "";
  } else {
    //otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}

function clearDisplay(clickedButtonValue) {
  if (clickedButtonValue !== "=") {
    display.value = "";
  }
}

var calculated = false;

function calculate(event) {
  var clickedButtonValue = event.target.value;

  if (calculated) {
    display.value = "";

    calculated = false;
  }

  if (clickedButtonValue === "=") {
    if (display.value !== "") {
      //calculate and show the answer to display
      display.value = eval(display.value);

      calculated = true;
    }
  }
  // the rest of your logic here
}
