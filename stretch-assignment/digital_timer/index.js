let timeInterval = null;

const digits = document.querySelector(`.digits`);
const secTens = document.querySelector(`#secondTens`);
const secOnes = document.querySelector(`#secondOnes`);
const msHundreds = document.querySelector(`#msHundreds`);
const msTens = document.querySelector(`#msTens`);

function timer() {
  let milSec = 0;
  let sec = 0;
  digits.classList.remove([`redDigit`]);
  document.querySelector(`#btnStart`).setAttribute(`disabled`, `disabled`)

  timeInterval = setInterval(() => {
    milSec++;
    if (milSec >= 100) {
      milSec = 0
      sec++;
    }
    if (milSec >= 10) {
      msHundreds.textContent = milSec.toString().split(``)[0];
      msTens.textContent = milSec.toString().split(``)[1];
    } else {
      msHundreds.textContent = `0`;
      msTens.textContent = `${milSec}`;
    }
    if (sec < 10) {
      secTens.textContent = `0`;
      secOnes.textContent = `${sec}`;
    } else {
      secTens.textContent = `1`;
      secOnes.textContent = `0`;
      sec = 0;
      digits.classList.add([`redDigit`]);
      document.querySelector(`#btnStart`).removeAttribute(`disabled`);
      clearInterval(timeInterval);
    }
  }, 10)
}

function reset() {
  if (timeInterval) {
    clearInterval(timeInterval);
  }
  secTens.textContent = `-`;
  secOnes.textContent = `-`;
  msHundreds.textContent = `-`;
  msTens.textContent = `-`;
  digits.classList.remove([`redDigit`]);
  document.querySelector(`#btnStart`).removeAttribute(`disabled`);
}

document.querySelector(`#btnStart`).addEventListener(`click`, (e) => {
  e.preventDefault();
  timer();
});

document.querySelector(`#btnReset`).addEventListener(`click`, (e) => {
  e.preventDefault();
  reset();
});
