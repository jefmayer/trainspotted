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
  let months = (now.getFullYear() - startDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += now.getMonth() + 2;
  let endDate = now;
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
  console.log(months);
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

export {
  getRoundedEndDate,
  getMonthsByInterval,
  getDaysBetweenDates,
  getDatePositionInRange,
};
/* eslint-enable no-console */
