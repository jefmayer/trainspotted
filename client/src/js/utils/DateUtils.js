/* eslint-disable no-console */
function addMonths(date, months) {
  const d = date.getDate();
  date.setMonth(date.getMonth() + months);
  if (date.getDate() !== d) {
    date.setDate(0);
  }
  return date;
}

function getRoundedEndDate(startDate, now) {
  let endDate = addMonths(now, 1);
  let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += endDate.getMonth() + 2;
  if (months % 2 !== 0) {
    endDate = addMonths(now, 1);
  }
  return new Date(`${endDate.getMonth() + 1}/1/${endDate.getFullYear()}`);
}

function getMonthsByInterval(startDate, now) {
  // Get number of months between then and now
  let months = (now.getFullYear() - startDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += now.getMonth() + 1;
  const arr = [];
  let i = 0;
  let date = startDate;
  do {
    arr.push(`${date.getMonth() + 1}/${date.getFullYear().toString().substr(2)}`);
    date = addMonths(date, 2);
    i += 1;
  }
  while (i <= months / 2);
  return arr;
}

function getDaysBetweenDates(date1, date2) {
  return Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
}

function getDatePositionInRange(date, startDate, now) {
  return ((date - startDate) / (now - startDate));
}

function convertTimeToMinutesElapsed(time) {
  const timeVals = time.split(':');
  let mins = parseInt(timeVals[1], 10);
  if (timeVals[2].indexOf('PM') !== -1 && timeVals[0] !== '12') {
    mins += (parseInt(timeVals[0], 10) + 12) * 60;
  } else {
    mins += parseInt(timeVals[0], 10) * 60;
  }
  return mins;
}

export {
  convertTimeToMinutesElapsed,
  getRoundedEndDate,
  getMonthsByInterval,
  getDaysBetweenDates,
  getDatePositionInRange,
};
/* eslint-enable no-console */
