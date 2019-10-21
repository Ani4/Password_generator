// DOM elements

const result = document.getElementById("result");
const lengthEl = document.getElementById("length");
const lowerEl = document.getElementById("lowercase");
const upperEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowerEl.checked;
  const hasUpper = upperEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  result.innerHTML = generatePassword(
    length,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol
  );
});

//GENERATE PASSWORD function

function generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol) {
  const generatedPassword = "";
  const typeCount = hasLower + hasUpper + hasNumber + hasSymbol;
  console.log(typeCount);
  const typeCheck = [
    { hasLower },
    { hasUpper },
    { hasNumber },
    { hasSymbol }
  ].filter(item => Object.values(item)[0]);
  console.log(typeCheck);
  if ((typeCount = 0)) {
    return "";
  }

  return 0;
}

// Generator function
const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
const getRandomUpper = () => {
  return console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
};
const getRandomNumber = () => {
  return console.log(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
};
const getRandomSymbol = () => {
  const symbols = '!@#$%^&*()_{}|":;,<>/?[]';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomPicker = {
  hasLower: getRandomLower,
  hasUpper: getRandomUpper,
  hasNumber: getRandomNumber,
  hasSymbols: getRandomSymbol
};
