import { stringToNumber } from "..";

describe("stringToNumber", () => {
  test("should return 0 when undefined", () => {
    const sample = undefined;
    expect(stringToNumber(sample)).toBe(0);
  });
  test("should replace -", () => {
    const sample = "123-456";
    expect(stringToNumber(sample)).toBe(123456);
  });
  test("should replace _", () => {
    const sample = "123_4-5+6";
    expect(stringToNumber(sample)).toBe(123456);
  });
  test("should replace space", () => {
    const sample = "123 4{}56";
    expect(stringToNumber(sample)).toBe(123456);
  });
  test("should replace special characters", () => {
    const sample = "123!@#$%^&*()-+=_|][{} 456";
    expect(stringToNumber(sample)).toBe(123456);
  });
  test("should get 10000", () => {
    const sample = "Rp 10.000";
    expect(stringToNumber(sample)).toBe(10000);
  });
  test("should get 40", () => {
    const sample = "40 USD";
    expect(stringToNumber(sample)).toBe(40);
  });
  test("should get 10", () => {
    const sample = "$ 10";
    expect(stringToNumber(sample)).toBe(10);
  });
  test("should get 5", () => {
    const sample = "5%";
    expect(stringToNumber(sample)).toBe(5);
  });
});
