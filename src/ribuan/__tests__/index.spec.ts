import ribuan from "../index";

describe("function ribuan", () => {
  it("should return ribuan from input string", () => {
    const value: string = "10000";
    expect(ribuan(value)).toBe("10.000");
  });
  it("should return ribuan from input number", () => {
    const value: number = 10000;
    expect(ribuan(value)).toBe("10.000");
  });
});
