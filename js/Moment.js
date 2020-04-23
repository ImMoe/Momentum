class Moment {
    user = localStorage.getItem("moment_user");
    constructor() {
        if (this.user == null) {
            const retrieveName = prompt("It seems to be your first time. Please enter your name");
            localStorage.setItem("moment_user", retrieveName);
        }
    }
    getUser() {
        return this.user;
    }

    momentOfDay() {
        const today = new Date();
        const hour = today.getHours();
        if (hour < 12) {
            return "Good morning";
        } else if (hour < 19) {
            return "Good evening";
        } else {
            return "Good night";
        }
    }
}