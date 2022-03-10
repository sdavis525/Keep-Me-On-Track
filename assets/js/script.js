var DateTime = luxon.DateTime;
const { DateTime } = require("luxon");

DateTime.fromISO('2017-W23-3').plus({ weeks: 1, days: 2 }).toISOWeekDate()