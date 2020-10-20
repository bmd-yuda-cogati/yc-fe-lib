import slugify from "../index";

describe("slugify()", () => {
  it(`Returns an empty string if it contains only non alphanumeric characters`, () => {
    expect(slugify("")).toBe("");
    expect(slugify("$!@|/__/#{}*=+=)é決意 테스트-")).toBe("");
  });

  it(`Returns a string in proper slug format otherwise`, () => {
    expect(slugify("Symbol Test T$e!@s|t/s)d__0(f/a#d{s}a*s=+=")).toBe(
      "symbol-test-t-e-s-t-s-d-0-f-a-d-s-a-s"
    );
    expect(slugify("Multiple     spaces     test")).toBe(
      "multiple-spaces-test"
    );
    expect(slugify(" Trim Test ")).toBe("trim-test");
    expect(slugify("Unicode Tést 決意 t테e스s트t")).toBe(
      "unicode-t-st-t-e-s-t"
    );
    expect(slugify("APPLE iPhone XS 512GB - Space Gray")).toBe(
      "apple-iphone-xs-512gb-space-gray"
    );
    expect(
      slugify("LOGITECH Wireless Mini Mouse M187 - Red [910-002742]")
    ).toBe("logitech-wireless-mini-mouse-m187-red-910-002742");
    expect(
      slugify("SANKEN Bottom Loading Stand Water Dispenser HWDC-505")
    ).toBe("sanken-bottom-loading-stand-water-dispenser-hwdc-505");
  });
});
