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
  } else if (hours === 12) {
    amPm = 'PM';
  } else if (hours === 0) {
    hours = 12;
  }
  return `${hours}:${timeValues[1]}:00 ${amPm}`;
}

export function formatDateForSelect(value) {
  let date = value.getDate().toString();
  if (date.length === 1) {
    date = `0${date}`;
  }
  let month = (value.getMonth() + 1).toString();
  if (month.length === 1) {
    month = `0${month}`;
  }
  return `${value.getFullYear()}-${month}-${date}`;
}

export function formatTimeForSelect(value) {
  let hours = '';
  let mins = '';
  if (typeof value === 'string') {
    const arr = value.split(':');
    const [arrHours, arrMins] = arr;
    hours = arrHours;
    mins = arrMins;
  } else {
    hours = value.getHours().toString();
    mins = value.getMinutes().toString();
  }
  if (hours.length === 1) {
    hours = `0${hours}`;
  }
  if (mins.length === 1) {
    mins = `0${mins}`;
  }
  return `${hours}:${mins}`;
}

export function createEntryId(date, time) {
  const dateArr = date.split('-');
  const timeArr = time.split(':');
  return `${dateArr[0]}${dateArr[1]}${dateArr[2]}${timeArr[0]}${timeArr[1]}`;
}

export function getRandomNumberKey() {
  return `key-${Math.round(Math.random() * 1000 * Math.random() * 1000 / Math.random() * 1000 + Math.random() * 1000)}`;
}
