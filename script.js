// //Getting html elements
// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
// const btn3 = document.getElementById("btn3");
// const btn4 = document.getElementById("btn4");
// const btn5 = document.getElementById("btn5");
// const inp = document.getElementById("inp");
// const leTemps = document.getElementById("letemps");
// const resTemps = document.getElementById("restemps");
// //Creating variable
// const date = new Date();
// let hour = date.getHours();
// let min = date.getMinutes();
// let secs = date.getSeconds();

// let currentTime = `${hour}:${min}:${secs}`;
// let musicTime = 8 * 60;
// let priereTime = 2 * 60;
// let dejeunerTime = 4 * 60;
// let jeuxTime = 1 * 60;
// let pauseTime = 5 * 60;
// function clearTimeout() {
//   if (leTemps.innerHTML === O || btn2.clicked == true) {
//     clearInterval(musicInterval);
//   }
// }
// btn1.addEventListener("click", function musicInterval() {
//   resTemps.textContent = `${hour}:${min + musicTime / 60}`;
//   setInterval(function () {
//     const minutes = Math.floor(musicTime / 60);
//     let seconds = musicTime % 60;
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     } else {
//       seconds = seconds;
//     }
//     leTemps.innerHTML = `${minutes}:${seconds}`;
//     musicTime--;
//     if (musicTime <= 0) {
//       musicTime = 0;
//     }
//   }, 1000);
// });
// btn2.addEventListener("click", function () {
//   setInterval(function () {
//     const minutes = Math.floor(priereTime / 60);
//     let seconds = priereTime % 60;
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     } else {
//       seconds = seconds;
//     }
//     leTemps.innerHTML = `${minutes}:${seconds}`;
//     priereTime--;
//     if (priereTime <= 0) {
//       priereTime = 0;
//     }
//   }, 1000);
// });
// btn3.addEventListener("click", function () {
//   setInterval(function () {
//     const minutes = Math.floor(dejeunerTime / 60);
//     let seconds = dejeunerTime % 60;
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     } else {
//       seconds = seconds;
//     }
//     leTemps.innerHTML = `${minutes}:${seconds}`;
//     priereTime--;
//     if (dejeunerTime <= 0) {
//       dejeunerTime = 0;
//     }
//   }, 1000);
// });
// btn4.addEventListener("click", function () {
//   setInterval(function () {
//     const minutes = Math.floor(jeuxTime / 60);
//     let seconds = jeuxTime % 60;
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     } else {
//       seconds = seconds;
//     }
//     leTemps.innerHTML = `${minutes}:${seconds}`;
//     jeuxTime--;
//     if (jeuxTime <= 0) {
//       jeuxTime = 0;
//     }
//   }, 1000);
// });
// btn5.addEventListener("click", function () {
//   setInterval(function () {
//     const minutes = Math.floor(pauseTime / 60);
//     let seconds = pauseTime % 60;
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     } else {
//       seconds = seconds;
//     }
//     leTemps.innerHTML = `${minutes}:${seconds}`;
//     pauseTime--;
//     if (pauseTime <= 0) {
//       pauseTime = 0;
//     }
//   }, 1000);
// });

let countdown;
const leTemps = document.getElementById("letemps");
const resTemps = document.getElementById("restemps");
const btn = document.querySelectorAll("[data-time]");

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  countdownElement(seconds);
  backTimes(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    countdownElement(secondsLeft);
  }, 1000);
}
function countdownElement(seconds) {
  const minutes = Math.floor(seconds / 60);
  const second = seconds % 60;
  const deComptes = `${minutes}:${second < 10 ? "0" : ""}${second}`;
  document.title = deComptes;
  leTemps.textContent = deComptes;
}
function backTimes(tempsRestant) {
  const end = new Date(tempsRestant);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  resTemps.textContent = `You will be back at ${hour}: ${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}
function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}
btn.forEach((button) => button.addEventListener("click", startTimer));
document.entrer.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
