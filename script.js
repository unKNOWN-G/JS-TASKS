/* Image Element */
imageElemDiv = document.getElementsByClassName("imageContainer")[0];
imageElem = imageElemDiv.getElementsByTagName("img")[0];
console.log(imageElem);

/* Input Element */
options = document.getElementsByClassName("options")[0];
console.log(options);
thicknessElem = document.getElementById("thickness");
blurElem = document.getElementById("blurness");
colorElem = document.getElementById("colorval");

thicknessElem.addEventListener("input", thicknessExecute);
blurElem.addEventListener("input", blurExecute);
colorElem.addEventListener("input", colorExecute);

function thicknessExecute(elem) {
  rangeVal = elem.currentTarget.value;
  imageElem.style.borderWidth = `${(50 * rangeVal) / 100}px`;
}

function blurExecute(elem) {
  rangeVal = elem.currentTarget.value;
  imageElem.style.filter = `blur(${(5 * rangeVal) / 100}px)`;
}

function colorExecute(elem) {
  colorVal = elem.currentTarget.value;
  borderVal = imageElem.style.border;
  imageElem.style.borderColor = colorVal;
}

// const inputs = document.querySelectorAll(".controls input");

// function handleUpdate(e) {
//   const suffix = this.dataset.sizing || "";
//   document.documentElement.style.setProperty(
//     `--${this.name}`,
//     this.value + suffix
//   );
// }

// inputs.forEach((input) => input.addEventListener("change", handleUpdate));
// inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
