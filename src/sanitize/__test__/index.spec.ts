import { sanitize } from "..";

describe("sanitize", () => {
  test("shuld return empty string", () => {
    expect(sanitize(undefined)).toBe("");
  });
  test("should replace special characters except -", () => {
    const sample = "sa~`!@#$%^&*()_+=?/.,><|}{][mple";
    expect(sanitize(sample)).toBe("sample");
  });
  test("should should allow -", () => {
    const sample = "sa~`!@#$%^&*()_+=?/.,><|}{][-mple";
    expect(sanitize(sample)).toBe("sa-mple");
  });
});
