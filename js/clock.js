const months = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
];
const days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
];

const hour = () => {
    let timeNow = new Date();

    /* we add a zero if we get the hour, minutes and seconds from 1 to 9 */
    let hour =
        timeNow.getHours().toString().length === 1
            ? `0${timeNow.getHours()}`
            : timeNow.getHours();
    let minutes =
        timeNow.getMinutes().toString().length === 1
            ? `0${timeNow.getMinutes()}`
            : timeNow.getMinutes();
    let seconds =
        timeNow.getSeconds().toString().length === 1
            ? `0${timeNow.getSeconds()}`
            : timeNow.getSeconds();

    /* changing background according to the time */
    backgroundImage(hour);

    document.getElementById(`time`).innerHTML = `${hour}: ${minutes}: ${seconds}`;

    let ordinalNumber = ordinalDate(timeNow.getDate());
    let dateNow = `${days[timeNow.getDay()]}, ${months[timeNow.getMonth()]
        } ${timeNow.getDate()}${ordinalNumber}, ${timeNow.getFullYear()}`;
    document.getElementById(`date`).innerHTML = dateNow;

    document.getElementById(`container-clock`).classList.toggle(`encourage`);    
}
setInterval(hour, 1000);

/* obtaining wallpaper according to the time of day */
const backgroundImage = (time) => {
    let changeBackground = document.getElementById(`background`);
    const morning = `url(./images/morning.png)`;
    const afternoon = `url(./images/afternoon.png)`;
    const night = `url(./images/night.png)`;
    const early_morning = `url(./images/early-morning.png)`;

    return time >= 6 && time < 12
        ? (changeBackground.style.backgroundImage = morning)
        : time >= 12 && time < 19
            ? (changeBackground.style.backgroundImage = afternoon)
            : time >= 19 && time < 24
                ? (changeBackground.style.backgroundImage = night)
                : (changeBackground.style.backgroundImage = early_morning);
};

/* get cardinal number termination */
const ordinalDate = (date) => {
    switch (date) {
        case 1:
        case 21:
        case 31:
            return `st`;
        case 2:
        case 22:
            return `nd`;
        case 3:
        case 23:
            return `rd`;
        default:
            return `th`;
    }
};
