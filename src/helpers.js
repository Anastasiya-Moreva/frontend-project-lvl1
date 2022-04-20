export const getRandom = (min, max) => Math.round(Math.random() * (max - min)) + min;

export const yesOrNo = (x) => (x ? 'yes' : 'no');

export default getRandom();
