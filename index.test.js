const format = require("./index");

describe("WikiFormatter", () => {
  it("should format", () => {
    const input = "|column1  |column2     |\n|1             |!(|\n|3|4|";
    const expected = "|column1|column2|\n|1      |!(|\n|3      |4      |";

    expect(format(input)).toBe(expected);
  });
  it("should not format due to spaces", () => {
    const input = "|column1|column2|\n\n|1|2|";
    const expected = "|column1|column2|\n\n|1|2|";

    expect(format(input)).toBe(expected);
  });
  it("should not format due no tables", () => {
    const input = "just a regular string nothing to see here";
    const expected = "just a regular string nothing to see here";

    expect(format(input)).toBe(expected);
  });
  it("should not format due special character", () => {
    const input = "!(DATE)";
    const expected = "!(DATE)";

    expect(format(input)).toBe(expected);
  });
  it("should trim excess", () => {
    const input = "|column1|column2|  \n|1|2|  ";
    const expected = "|column1|column2|\n|1      |2      |";

    expect(format(input)).toBe(expected);
  });
  it("should handle ! cells", () => {
    const input = "!|table|\n|column1|column2|\n|1|2|";
    const expected = "!|table         |\n|column1|column2|\n|1      |2      |";

    expect(format(input)).toBe(expected);
  });
  it("should excape !-| -!", () => {
    const input = "|column!-|-!|column2|\n|1|2|";
    const expected = "|column!-|-!|column2|\n|1          |2      |";

    expect(format(input)).toBe(expected);
  });
  it("should excape other characters", () => {
    const input =
      "!|ThisTableWillNotInterpret|!c any directives|'''it is treated'''|\n|!1 like a literal|--and is especially useful--|''for test tables.''|\n|^SinceTheyTend| * to have WikiWord symbols in them.|";
    const expected =
      "!|ThisTableWillNotInterpret|!c any directives           |'''it is treated''' |\n|!1 like a literal         |--and is especially useful--|''for test tables.''|\n|^SinceTheyTend            |* to have WikiWord symbols in them.              |";

    expect(format(input)).toBe(expected);
  });
});
