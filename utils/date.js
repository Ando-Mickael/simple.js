function isDayValid(year, month, day) {
    const date = new Date(year, month - 1, day);

    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day &&
        day >= 1 &&
        day <= new Date(year, month, 0).getDate()
    );
}

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// jj/mm/aaaa -> aaaa-mm-jj
function formatToPg(date) {
    let tab = date.split("/");
    return (tab[2] + "-" + tab[1] + "-" + tab[0]);
}

module.exports = {
    isDayValid,
    isLeapYear,
    formatToPg
}