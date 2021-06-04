function getRandomInt(min, max) {
  min = Math.abs(Math.ceil(min));
  max = Math.abs(Math.floor(max));

  if (min >= max) {
    console.log('min value cannot be bigger or same than max');
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
console.log(getRandomInt(0, 100));

function getRandomFloatInt(min, max, fixed) {
  min = Math.abs(min);
  max = Math.abs(max);
  fixed = 0;

  if (min >= max) {
    console.log('min value cannot be bigger or same than max');
  } else {
    return (Math.random() * (max - min + 1)) + min;
  }
}
console.log(getRandomFloatInt(0, 100, 10));
