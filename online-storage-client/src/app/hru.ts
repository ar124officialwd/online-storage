export function hru(num) {
  let unit;
  const units = ['TB', 'GB', 'MB', 'KB', 'Bytes'];
  for (unit = units.pop(); units.length && num >= 1024; unit = units.pop()) {
    num /= 1024;
  }
  return [num, unit];
}
