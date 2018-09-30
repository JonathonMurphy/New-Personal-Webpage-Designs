document.getElementById("container").addEventListener("click", function() {
  changeBackgroundColor();
});

document.getElementById("color-picker").addEventListener("change", function() {
  getColorPickerValue();
})

function changeBackgroundColor() {
  var response = prompt("What is your favorite color?");

  document.body.style.backgroundColor = response;
}

function getColorPickerValue() {
  var color = document.getElementById("color-picker").value;
  
  document.body.style.backgroundColor = color;
}

getColorPickerValue();