import { reverseString } from "../src/reverseString";

it("Revierte una cadena", () => {
  expect(reverseString("Hola")).toBe("aloH");
});

it("Revierte una cadena con varios caracteres", () => {
  expect(reverseString("abcdef")).toBe("fedcba");
});

it("Revierte una cadena vacía", () => {
  expect(reverseString("")).toBe("");
});

it("Revierte una cadena de un solo carácter", () => {
  expect(reverseString("a")).toBe("a");
});

it("Revierte una cadena con espacios", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

it("Revierte una cadena con caracteres especiales y números", () => {
  expect(reverseString("123!@#")).toBe("#@!321");
});
