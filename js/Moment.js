class Moment {
    user = localStorage.getItem("moment_user");
    today = new Date();
    imageCount = 5;

    constructor() {
        if (this.user == null) {
            const retrieveName = prompt("It seems to be your first time. Please enter your name");
            localStorage.setItem("moment_user", retrieveName);
            this.user = localStorage.getItem("moment_user");
        }
    }
    getUser() {
        return this.user;
    }

    momentOfDay() {
        const { today } = this;
        const hour = today.getHours();
        if (hour < 12) {
            return "Good morning";
        } else if (hour < 19) {
            return "Good evening";
        } else {
            return "Good night";
        }
    }

    changebackground() {
        const { today } = this;

        const dayImages = "/images/day";
        const nightImages = "/images/night";

        const random = Math.floor(Math.random() * this.imageCount + 1);

        if (today.getHours() < 19) {
            return `${dayImages}/${random}.jpg`;
        } else {
            return `${nightImages}/${random}.jpg`;
        }

    }

    async generateQuote() {
        return await fetch("https://type.fit/api/quotes").then(response => response.json());
    }


}