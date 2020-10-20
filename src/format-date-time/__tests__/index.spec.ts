import {
  Timezone,
  Location,
  FormatDate,
  FormatTime,
  FormatDateTime,
  FormatDateTimeLoc
} from "../index";

describe("get Timezone", () => {
  it("should get local timezone from the user", () => {
    const timezone = Timezone();
    expect(timezone).toBe("Asia/Jakarta");
  });
});

describe("get Location", () => {
  it("should get location WIB", () => {
    const timezone = Location("Asia/Jakarta");
    expect(timezone).toBe("WIB");
  });
  it("should get location WITA", () => {
    const timezone = Location("Asia/Makassar");
    expect(timezone).toBe("WITA");
  });
  it("should get location WIT", () => {
    const timezone = Location("Asia/Jayapura");
    expect(timezone).toBe("WIT");
  });
});

describe("Format Date", () => {
  describe("using default format", () => {
    it("should format date DD MMM YYYY", () => {
      const datetimeUTC = "2020-05-20T23:10:00.000000Z";
      const dateFormated = FormatDate(datetimeUTC);
      expect(dateFormated).toBe("21 Mei 2020");
    });
  });
  describe("using custom format", () => {
    it("should format date DD/MM/YYYY", () => {
      const datetimeUTC = "2020-05-20T23:10:00.000000Z";
      const dateFormated = FormatDate(datetimeUTC, "DD/MM/YYYY");
      expect(dateFormated).toBe("21/05/2020");
    });
  });
  describe("when datetimeUTC empty or undefined", () => {
    it("should just return when datetimeUTC is undefined or empty", () => {
      const datetimeUTC = "";
      const dateFormated = FormatDate(datetimeUTC);
      expect(dateFormated).toBe("");
    });
  });
});

describe("Format Time", () => {
  describe("using default format", () => {
    it("should format time HH:mm", () => {
      const datetimeUTC = "2020-05-20T23:10:00.000000Z";
      const timeFormated = FormatTime(datetimeUTC);
      expect(timeFormated).toBe("06:10");
    });
  });
  describe("using custom format", () => {
    it("should format time HH:mm:ss", () => {
      const datetimeUTC = "2020-05-20T23:10:00.000000Z";
      const timeFormated = FormatTime(datetimeUTC, "HH:mm:ss");
      expect(timeFormated).toBe("06:10:00");
    });
  });
  describe("when datetimeUTC empty or undefined", () => {
    it("should just return when datetimeUTC is undefined or empty", () => {
      const datetimeUTC = "";
      const timeFormated = FormatTime(datetimeUTC);
      expect(timeFormated).toBe("");
    });
  });
});

describe("Format Date Time", () => {
  describe("using default format", () => {
    it("should format date time DD MMM YYYY, HH:mm", () => {
      const datetimeUTC = "2020-05-20T23:10:00.000000Z";
      const datetimeFormated = FormatDateTime(datetimeUTC);
      expect(datetimeFormated).toBe("21 Mei 2020, 06:10");
    });
  });
  describe("using custom format", () => {
    it("should format date time DD MMM YYYY, HH:mm Loc", () => {
      const datetimeUTC = "2020-05-20T23:10:00.000000Z";
      const datetimeFormated = FormatDateTime(datetimeUTC, "DD/MM/YYYY HH:mm");
      expect(datetimeFormated).toBe("21/05/2020 06:10");
    });
  });
  describe("when datetimeUTC empty or undefined", () => {
    it("should just return when datetimeUTC is undefined or empty", () => {
      const datetimeUTC = "";
      const datetimeFormated = FormatDateTime(datetimeUTC);
      expect(datetimeFormated).toBe("");
    });
  });
});

describe("Format Date Time Loc", () => {
  describe("using default format", () => {
    it("should format date time DD MMM YYYY, HH:mm Loc", () => {
      const datetimeUTC = "2020-05-20T23:10:00.000000Z";
      const datetimeFormated = FormatDateTimeLoc(datetimeUTC);
      expect(datetimeFormated).toBe("21 Mei 2020, 06:10 WIB");
    });
  });
  describe("using custom format", () => {
    it("should format date time DD MMM YYYY, HH:mm Loc", () => {
      const datetimeUTC = "2020-05-20T23:10:00.000000Z";
      const datetimeFormated = FormatDateTimeLoc(
        datetimeUTC,
        "DD/MM/YYYY HH:mm"
      );
      expect(datetimeFormated).toBe("21/05/2020 06:10 WIB");
    });
  });
  describe("when datetimeUTC empty or undefined", () => {
    it("should just return when datetimeUTC is undefined or empty", () => {
      const datetimeUTC = "";
      const datetimeFormated = FormatDateTimeLoc(datetimeUTC);
      expect(datetimeFormated).toBe("");
    });
  });
});
