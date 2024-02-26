// Must be the same as value-circle's stroke-dasharray and pathLength
const MAX_VALUE = 100;

export class ProgressBar {
  #progressBarContainer = null;
  #valueCircle = null;
  #progressElement = null;
  #state = { value: 50, animated: false, hidden: false };

  constructor(progressBarContainer, progressElement, valueCircle, params) {
    this.#progressBarContainer = progressBarContainer;
    this.#progressElement = progressElement;
    this.#valueCircle = valueCircle;
    this.#state = { ...this.#state, ...params };

    this.#initProgressBar();
  }

  #initProgressBar() {
    this.setValue(this.#state.value);

    if (this.#state.animated) {
      this.startAnimation();
    } else {
      this.stopAnimation();
    }

    if (this.#state.hidden) {
      this.hide();
    } else {
      this.show();
    }
  }

  setValue(value) {
    this.#state.value = Math.min(value, MAX_VALUE);

    this.#progressElement.setAttribute("value", this.#state.value);
    this.#valueCircle.setAttribute(
      "stroke-dashoffset",
      MAX_VALUE - this.#state.value
    );

    if (this.#state.value === MAX_VALUE) {
      this.#valueCircle.setAttribute("stroke-dasharray", "none");
    } else {
      this.#valueCircle.setAttribute("stroke-dasharray", MAX_VALUE);
    }
  }

  startAnimation() {
    this.#valueCircle.style.animation =
      "rotate-progress-bar 2s linear infinite";
  }

  stopAnimation() {
    this.#valueCircle.style.animation = "";
  }

  show() {
    this.#state.hidden = false;
    this.#progressBarContainer.style.visibility = "visible";
  }

  hide() {
    this.#state.hidden = true;
    this.#progressBarContainer.style.visibility = "hidden";
  }
}
