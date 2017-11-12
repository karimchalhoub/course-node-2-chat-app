// Jan 1st 1970 00:00:00 am
const moment = require('moment');

var date = new Date();
console.log(date.getMonth());

var dateTwo = moment();
console.log(dateTwo.format('DD/MM/YYYY h:mm A'));

var dateThree = dateTwo.add(1, 'year').subtract(9,'months');

console.log(dateThree.format('DD/MM/YYYY h:mm a'));
