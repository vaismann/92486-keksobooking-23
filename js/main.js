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

const ACCOMODATION_TYPE = ['palace', 'flat', 'house', 'bungalow','hotel'];
const TIME_LIST = ['12:00', '13:00', '14:00'];
const FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTO_LIST = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

const generateObject = () => {
  return {
  const author = {
    avatar: 'img/avatars/user[{{xx}}].png',
  };

  const offer = {
    title: 'Title',
    location: [{{location.lat}}, {{location.lng}}],
    price: getRandomInt(0, 100000),
    type: getRandomArrayElement(ACCOMODATION_TYPE),
    rooms: getRandomInt(),
    guests: getRandomInt(),
    checkin: getRandomArrayElement(TIME),
    checkout: getRandomArrayElement(TIME),
    features:


  };
}
}
