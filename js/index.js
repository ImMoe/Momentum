
const moment = new Moment();

const currentTime = document.querySelector(".currentTime");
const greetUser = document.querySelector(".greet-user");

setInterval(function () {
    const today = new Date();
    currentTime.innerText = `
        ${today.getHours() < 10 ?
            "0" + today.getHours() :
            today.getHours()}: ${today.getMinutes() < 10 ?
                "0" + today.getMinutes() :
                today.getMinutes()}
    `;
}, 300);

greetUser.innerText = `${moment.momentOfDay()}, ${moment.getUser()}`;