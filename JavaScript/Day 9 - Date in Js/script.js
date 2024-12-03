const d = new Date();
console.log(d); // 2024-12-03T19:14:35.951Z
console.log(d.toDateString()); // Wed Dec 04 2024
console.log(d.toString()); // Wed Dec 04 2024 00:47:09 GMT+0530 (India Standard Time)
console.log(d.toISOString()); // 2024-12-03T19:17:22.941Z
console.log(typeof d); // object
console.log(d.getDate()); // 4
// Sun = 0 , Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6
console.log(d.getDay()); // Wed=3
// Jan=0, Feb=1, Mar=2, Apr=3, May=4, Jun=5, Jul=6, Aug=7, Sep=8, Oct=9, Nov=10, Dec=11
console.log(d.getMonth()); // Dec=11
console.log(d.getFullYear()); // 2024
console.log(d.getMilliseconds()); // random
console.log(d.getMinutes()); // show current minute
console.log(d.getHours()); // show current hour

console.log("We use milliseconds in JavaScript to get exact timings because it provides a high degree of precision for measuring time intervals. This is particularly useful in applications where timing is critical, such as in animations, games, or scientific simulations. Additionally, milliseconds are a standard unit of time measurement in computing, making it easy to convert and compare times across different systems and languages.");

console.log(d.getTime()); // random milliseconds
const now = Date.now();
console.log(now); // random milliseconds

const date = new Date("2022-10-20T10:10:10");
const newdate = new Date(2024,4,28);
console.log(date.toString()); // Thu Oct 20 2022 10:10:10 GMT+0530 (India Standard Time)
console.log(newdate.toString()); // Tue May 28 2024 00:00:00 GMT+0530 (India Standard Time)
console.log(date.toDateString()); // Thu Oct 20 2022
console.log(newdate.toDateString()); // Tue May 28 2024

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
const newDate = new Date(2024, 4, 28, 10, 10, 10, 0);
console.log(newDate.toString()); // Tue May 28 2024 10:10:10 GMT+0530 (India Standard Time)

// Set Date and Time
const customDate = new Date();
customDate.setDate(20);
customDate.setMonth(10);
customDate.setFullYear(2024);
console.log(customDate.toString()); // Wed Nov 20 2024 01:23:27 GMT+0530 (India Standard Time)
console.log(customDate.toLocaleDateString()); // 20/11/2024
console.log(customDate.toLocaleString()); // 20/11/2024, 1:25:07 am

// Date Calculations
const date1 = new Date();
const date2 = new Date("2025-04-21");
console.log(date2-date1); // 11937797164 (milliseconds)

// Countdown Timer for olympics
const date3 = new Date();
const date4 = new Date("2028-07-14T00:00:00");

const oly_date = date4 - date3;
const days = Math.floor(oly_date/(1000*60*60*24));
/*
why we modulo with 24
80 hours / 24 => 80 % 24
3 days : 8 hours
*/
const hour = Math.floor((oly_date/(1000*60*60))%24);
const minute = Math.floor((oly_date/(1000*60))%60);
const second = Math.floor((oly_date/(1000))%60);
console.log(`Olympics countdownTimer: ${days} days, ${hour} hours, ${minute} minutes, ${second} seconds`)











































