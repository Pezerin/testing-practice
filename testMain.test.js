const {
  capitalize,
  reverseString,
  calc,
  caesarCipher,
  analyzeArray,
} = require("./main");

test("Capitalize capitalizes first letter", () => {
  expect(capitalize("hello")).toMatch("Hello");
});

test("reverseString reverses string", () => {
  expect(reverseString("hello")).toMatch("olleh");
});

test("Calculator performs all operations correctly", () => {
  expect(calc.add(1, 2)).toBe(3);
  expect(calc.subtract(1, 2)).toBe(-1);
  expect(calc.multiply(1, 2)).toBe(2);
  expect(calc.divide(1, 2)).toBe(0.5);
});

test("caesarCipher encrypts messages correctly", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("bro", 1)).toBe("csp");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray correctly returns object with avg, min, max and length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
