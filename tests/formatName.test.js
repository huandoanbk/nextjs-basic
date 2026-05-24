import { formatName } from "../lib/formatName";

describe("formatName", () => {
  test("joins first and last name", () => {
    expect(formatName("Henry", "Nguyen")).toBe("Henry Nguyen");
  });

  test("trims extra whitespace", () => {
    expect(formatName("  Henry  ", "  Nguyen ")).toBe("Henry Nguyen");
  });

  test("handles missing values", () => {
    expect(formatName("Henry", "")).toBe("Henry");
    expect(formatName("", "Nguyen")).toBe("Nguyen");
  });
});
