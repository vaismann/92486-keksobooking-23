import {getRandomPositiveFloat} from './utils/get-random-positive-float.js';
import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';

const COUNT_OFFERS = 10;
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const IMAGES = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const ACC_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const getNumber = function () {
  const result = getRandomPositiveInteger(1, 10);
  return result < 10 ? `0${result}` : result;
};

const getLocation = function () {
  return {
    lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
  };
};

const getRandomItem = function (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const getRandomArray = function (array) {
  const result = [];
  const randomInt = getRandomPositiveInteger(0, array.length - 1);
  for (let el = 0; el <= randomInt; el++) {
    const item = getRandomItem(array);
    if (!result.includes(item)) {
      result.push(item);
    }
    return result;
  }
};

const createOffer = function () {
  const location = getLocation();

  return {
    author: {
      avatar: `img/avatars/user${getNumber()}.png`,
    },
    offer: {
      title: 'Title',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomPositiveInteger(1, 100000),
      rooms: getRandomPositiveInteger(1, 20),
      type: getRandomItem(ACC_TYPE),
      guests: getRandomPositiveInteger(1, 100),
      checkin: getRandomItem(TIMES),
      checkout: getRandomItem(TIMES),
      features: getRandomArray(FEATURES),
      description: 'Description',
      photos: getRandomArray(IMAGES),
    },
    location,
  };
};

const getOffers = function (count) {
  return new Array(count).fill(null).map(() => createOffer());
};

getOffers(COUNT_OFFERS);
