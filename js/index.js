
const moment = new Moment();

const body = document.body;
const currentTime = document.querySelector(".currentTime");
const greetUser = document.querySelector(".greet-user");
const quote = document.querySelector(".quote");
const focus = document.querySelector(".focus");

body.style.background = `linear-gradient(40deg, rgba(51, 51, 51, 0.212), rgba(0, 0, 0, 0.212)), url(${moment.changebackground()})`;

setInterval(function () {
    const today = new Date();
    currentTime.innerText = `${today.getHours() < 10 ? "0" + today.getHours() : today.getHours()}:${today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()}`;
}, 300);

greetUser.innerText = `${moment.momentOfDay()}!`;

focus.value = localStorage.getItem("moment_focus");
focus.addEventListener("keyup", moment.updateDailyTask);

moment.generateQuote().then(res => {
    const random = Math.floor(Math.random() * res.length);
    quote.innerText = `${res[random].text} - ${res[random].author}`;
});