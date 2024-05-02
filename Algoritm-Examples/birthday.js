const birthday = [[11, 11, 1985], [25, 11, 1999], [08, 04, 1992], [30, 04, 1978]];
const today = [30, 04, 2024];

birthday.push([27, 03, 1991]);
birthday.push([20, 09, 1991]);
birthday.push([23, 03, 2004]);
birthday.push([13, 12, 2010]);
birthday.push([15, 05, 2019]);

function calculateAge(birth, date) {
    const [day, month, year] = birth;
    const [currentDay, currentMonth, currentYear] = date;
    let age = currentYear - year;
    return age;
}

birthday.forEach(birthday => {
    const [day, month, year] = birthday;
    const age = calculateAge(birthday,today);
    console.log(`${day} ${month} ${year} doğumlu kişi ${age} yaşındadır`);
})