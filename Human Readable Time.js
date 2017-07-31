/*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/
function humanReadable(s) {
  let h = "00",
    m = "00",
    sec = "00";

  h = h + Math.trunc(s / 3600);
  h = h.substring(h.length - 2, h.length);

  m = m + Math.trunc(s / 60 % 60);
  m = m.substring(m.length - 2, m.length);

  sec = sec + Math.trunc(s % 60);
  sec = sec.substring(sec.length - 2, sec.length);

  return h + ":" + m + ":" + sec;
}
