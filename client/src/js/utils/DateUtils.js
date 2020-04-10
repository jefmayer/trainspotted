/* eslint-disable no-console */
export function getDatesByInterval(interval, startDate, now) {
  // Get number of days between dates
  const dayInterval = Math.round((now - startDate) / (1000 * 60 * 60 * 24) / interval);
  // Build array of m/yy based off interval
  const arr = [];
  let i = 0;
  let date = startDate;
  do {
    arr.push(`${date.getMonth() + 1}/${date.getFullYear().toString().substr(2)}`);
    date = new Date(date.setDate(new Date().getDate() + dayInterval));
    i += 1;
  }
  while (i < interval);
  return arr;
}

export function getDatePositionInRange(date, startDate, now) {
  return ((date - startDate) / (now - startDate));
}
/* eslint-enable no-console */
