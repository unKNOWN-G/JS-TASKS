let buttonElem = document.getElementById("colorChanger");
let displayElem = document.getElementById("colorHex");
let copyElem = document.getElementById("copyElem");
let backgroundElem = document.getElementById("outerContainer");

buttonElem.addEventListener("click", changeColor);
copyElem.addEventListener("click", copyData);

function randomHexVal() {
  let data = "1234567890ABCDEF";
  let randomDigit = parseInt(Math.random() * 16);
  return data[randomDigit];
}

function randomHex() {
  let hexData = "";
  for (let i = 0; i < 6; i++) {
    hexData += randomHexVal();
  }
  return hexData;
}

function changeColor() {
  let hexNew = "#" + randomHex();
  backgroundElem.style.backgroundColor = hexNew;
  displayElem.innerHTML = hexNew;
}

function copyData() {
  let data = displayElem.innerHTML;
  navigator.clipboard.writeText(data);
}
