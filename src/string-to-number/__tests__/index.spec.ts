import { stringToNumber } from "..";

describe('stringToNumber', () => {
  test('should return 0 when undefined', () => {
    const sample = undefined;
    expect(stringToNumber(sample)).toBe(0);
  })
  test('should replace -', () => {
    const sample = "123-456";
    expect(stringToNumber(sample)).toBe(123456);
  })
  test('should replace _', () => {
    const sample = "123_456";
    expect(stringToNumber(sample)).toBe(123456);
  })
  test('should replace space', () => {
    const sample = "123 456";
    expect(stringToNumber(sample)).toBe(123456);
  })
  test('should replace special characters', () => {
    const sample = "123!@#$%^&*()-+=_\|][{} 456";
    expect(stringToNumber(sample)).toBe(123456);
  })
})
