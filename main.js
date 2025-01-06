function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function reverseString(word) {
  return word.split("").reverse().join("");
}

const calc = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

function caesarCipher(msg, shift) {
  shift = shift % 26;

  let cipher = "";

  for (let i = 0; i < msg.length; i++) {
    if (msg[i].charCodeAt(0) >= 65 && msg[i].charCodeAt(0) <= 90) {
      cipher += String.fromCharCode(
        ((msg[i].charCodeAt(0) - 65 + shift) % 26) + 65
      );
    } else if (msg[i].charCodeAt(0) >= 97 && msg[i].charCodeAt(0) <= 122) {
      cipher += String.fromCharCode(
        ((msg[i].charCodeAt(0) - 97 + shift) % 26) + 97
      );
    } else {
      cipher += msg[i];
    }
  }

  return cipher;
}

function analyzeArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const avg = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return { average: avg, min: min, max: max, length: length };
}

module.exports = {
  capitalize,
  reverseString,
  calc,
  caesarCipher,
  analyzeArray,
};
