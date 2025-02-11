import { Calculator } from "../src/calculator";

it("Suma dos numeros positivos", () => {
  expect(Calculator.add(1, 3)).toBe(4);
});
it("Resta dos numeros", () => {
  expect(Calculator.substract(1, 3)).toBe(-2);
});
it("Divide dos numeros", () => {
  expect(Calculator.divide(1, 3)).toBe(1 / 3);
});
it("Multiplica dos numeros", () => {
  expect(Calculator.multiply(1, 3)).toBe(3);
});

it("Divide por cero", () => {
  expect(Calculator.divide(1, 0)).toBe(Infinity); // Esto devuelve Infinity en JavaScript
});

it("Suma dos números negativos", () => {
  expect(Calculator.add(-1, -3)).toBe(-4); // -1 + (-3) es -4
});

it("Resta un número negativo", () => {
  expect(Calculator.substract(1, -3)).toBe(4); // 1 - (-3) es 1 + 3 = 4
});

it("Suma dos números flotantes", () => {
  expect(Calculator.add(1.2, 3.4)).toBe(4.6); // 1.2 + 3.4 es 4.6
});

it("Multiplica números flotantes", () => {
  expect(Calculator.multiply(1.5, 2.0)).toBe(3.0); // 1.5 * 2.0 es 3.0
});
