export const getRandom = (min, max) => Math.round(Math.random() * (max - min)) + min;

export const yesOrNoToBool = (value) => {
  if (value.toLowerCase() === 'yes') {
    return true;
  }
  return false;
};
