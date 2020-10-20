import { titleCase } from "..";

describe(".titlecase", () => {
  test("should return empty string", () => {
    const status = undefined;
    expect(titleCase(status)).toBe("");
  });
  test("should replace _ to space", () => {
    const status = "I_AM";
    expect(titleCase(status)).toBe("I Am");
  });
  test("should replace - to space", () => {
    const status = "I-AM";
    expect(titleCase(status)).toBe("I Am");
  });
  test("should return title correctly", () => {
    const status = "WAITING_FOR_APPROVAL";
    expect(titleCase(status)).toBe("Waiting For Approval");
  });
});
