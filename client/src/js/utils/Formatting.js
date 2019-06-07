export function formatDate(date, months) {
  const arr = date.split('/');
  return `${months[arr[0] - 1]} ${arr[1]}, ${arr[2]}`;
}

export function formatTime(time) {
  const arr = time.split(':');
  let ampm = 'a.m.';
  if (time.indexOf('PM') !== -1) {
    ampm = 'p.m.';
  }
  return `${arr[0]}:${arr[1]} ${ampm}`;
}

export function formatDateForDB(date) {
  const arr = date.split('-');
  return `${arr[1]}/${arr[2]}/${arr[0]}`;
}

export function formatTimeForDB(time) {
  const timeValues = time.split(':');
  let hours = parseInt(timeValues[0], 10);
  let amPm = 'AM';
  if (hours > 12) {
    hours -= 12;
    amPm = 'PM';
  } else if (hours === 0) {
    hours = 12;
  }
  return `${hours}:${timeValues[1]}:00 ${amPm}`;
}

export function createEntryId(date, time) {
  const dateArr = date.split('-');
  const timeArr = time.split(':');
  return `${dateArr[0]}${dateArr[1]}${dateArr[2]}${timeArr[0]}${timeArr[1]}`;
}
