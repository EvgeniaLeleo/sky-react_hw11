const createArray = (n) => {
  const arr = [];

  for (let i = 0; i < n; i += 1) {
    arr.push(i);
  }

  return arr;
};

const isValidEmail = (email) => {
  return email.match(/^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i);
};

export { createArray, isValidEmail };
