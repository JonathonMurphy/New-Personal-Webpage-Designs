/*
document.getElementById("container").addEventListener("click", function () {
    changeBackgroundColor (); 
});

function changeBackgroundColor () {
    "use strict";
    var response = prompt("What is your favorite color?");
    document.body.style.backgroundColor = response;
};
*/

document.getElementById("color-picker").addEventListener("change", function () {
	getColorPickerValue ();
});


function getColorPickerValue () {
    var color = document.getElementById("color-picker").value;
	
    document.body.style.backgroundColor = color;
};

getColorPickerValue ();

