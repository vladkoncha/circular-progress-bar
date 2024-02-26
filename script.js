import { ProgressBar } from "./progress-bar/progress-bar.js";

const progressValueInput = document.querySelector(".progress-value-input");
const animationSwitch = document.querySelector(".animate-switch");
const visibilitySwitch = document.querySelector(".hide-switch");

const form = document.querySelector(".progress-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

const progressBarContainer = document.querySelector(".circular-bar-container");
const progressElement = document.querySelector(".progress");
const valueCircle = document.querySelector(".value-circle");

const progressBar = new ProgressBar(
  progressBarContainer,
  progressElement,
  valueCircle,
  {
    value: +progressValueInput.value,
    animated: animationSwitch.checked,
    hidden: visibilitySwitch.checked,
  }
);

const handleValueInput = () => {
  progressBar.setValue(+progressValueInput.value);
};

const handleAnimationToggle = () => {
  animationSwitch.checked
    ? progressBar.startAnimation()
    : progressBar.stopAnimation();
};

const handleVisibilityToggle = () => {
  visibilitySwitch.checked ? progressBar.hide() : progressBar.show();
};

progressValueInput.addEventListener("input", handleValueInput);
animationSwitch.addEventListener("input", handleAnimationToggle);
visibilitySwitch.addEventListener("input", handleVisibilityToggle);
