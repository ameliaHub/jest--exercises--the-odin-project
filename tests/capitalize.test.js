import { capitalize } from "../src/capitalize";

it("Escribe mayúscula la primera letra", () => {
  expect(capitalize("hello")).toBe("Hello");
});
it("Escribe mayúscula la primera letra", () => {
  expect(capitalize("banana")).toBe("Banana");
});
it("Maneja input vacío", () => {
  expect(capitalize("")).toBe("");
});
it("Maneja input null", () => {
  expect(capitalize(null)).toBe("");
});
it("Maneja input undefined", () => {
  expect(capitalize(undefined)).toBe("");
});
it("Maneja espacios al inicio", () => {
  expect(capitalize(" hello")).toBe(" Hello");
});
it("Maneja caracteres especiales", () => {
  expect(capitalize("@hello")).toBe("@Hello");
});
it("No cambia una palabra con la primera letra en mayúscula", () => {
  expect(capitalize("Hello")).toBe("Hello");
});
it("Maneja palabras con mayúsculas y minúsculas intercaladas", () => {
  expect(capitalize("HeLLo")).toBe("Hello");
});
