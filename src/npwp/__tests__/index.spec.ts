import FormatNpwp from "../index";

describe("function FormatNpwp", () => {
  it("should return correctly format NPWP", () => {
    const npwpNumber = "232323234444444";
    expect(FormatNpwp(npwpNumber)).toBe("23.232.323.4-444.444");
  });
});
