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
