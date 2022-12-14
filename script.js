elems = document.getElementsByClassName("keyBox");
for (elemWrap of elems) {
  //   console.log(elemWrap);
  elemWrap.addEventListener("click", execute);
  elemWrap.addEventListener("click", playSound);
  elemWrap.addEventListener("transitionend", revert);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function playSound(e) {
  const audio = document.querySelector(
    `audio[data-key="${e.currentTarget.id}"]`
  );
  audio.play();
}
function execute(elem) {
  let currentElem = elem.currentTarget;
  currentElem.classList.add("keybox_active");
}

function revert(elem) {
  let currentElem = elem.currentTarget;
  currentElem.classList.remove("keybox_active");
}
