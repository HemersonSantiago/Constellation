export const getRandomImage = () => {
  const randomNumber = Math.floor(Math.random() * 18) + 1;
  const imageCar = require(`../assets/images/car-${randomNumber}.jpg`);
  return imageCar;
};
