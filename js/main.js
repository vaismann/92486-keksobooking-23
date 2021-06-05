function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= max) {
    return('min value cannot be bigger or same than max');
  } else if (min < 0) {
    return('number cannot be negative');
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
getRandomInt(0, 100);

function getRandomFloatInt(min, max, fixed) {
  if (min >= max) {
    return('min value cannot be bigger or same than max');
  } else if ( min < 0 || fixed < 0) {
    return('number cannot be negative');
  } else {
    return ((Math.random() * (max - min + 1)) + min).toFixed(fixed);
  }
}
getRandomFloatInt(0, 100, 10);
