const {
  maskify,
  numberToOrdinal,
  calculate
} = require('./assessment')

describe('Challenge', () => {
  it('should mask the digits of standard credit cards', () => {
    expect(maskify("5512103073210694")).toBe("5###########0694")
  })

  it('should not mask the digits of short credit cards', () => {
    expect(maskify("54321")).toBe("54321")
  })
  
  it ('should not mask non-digit characters', () => {
    expect(maskify("4556-3646-0793-5616")).toBe("4###-####-####-5616")
    expect(maskify("ABCD-EFGH-IJKLM-NOPQ")).toBe("ABCD-EFGH-IJKLM-NOPQ")
    expect(maskify("A1234567BCDEFG89HI")).toBe("A#######BCDEFG89HI")
    expect(maskify("A1234XYZ5ßß5789HI")).toBe("A####XYZ#ßß##89HI")
  })
  
  it ('should not mask empty string', () => {
    expect(maskify("")).toBe("")
  })
})



// let assert = require("chai").assert;
describe('Challenge', function() {
  
  it('should use "st" suffix with number ending in 1', () => {
    expect(numberToOrdinal(1)).toBe("1st");
    expect(numberToOrdinal(21)).toBe("21st");
  });
  
  it('should use "nd" suffix with number ending in 2', () => {
    expect(numberToOrdinal(2)).toBe("2nd");
    expect(numberToOrdinal(32)).toBe("32nd");
  });
  
  it('should use "rd" suffix with number ending in 3', () => {
    expect(numberToOrdinal(3)).toBe("3rd");
    expect(numberToOrdinal(43)).toBe("43rd");
  });
  
  it('should use "th" suffix with teen numbers ending with 11', () => {
    expect(numberToOrdinal(11)).toBe("11th");
    expect(numberToOrdinal(111)).toBe("111th");
  });
  
  it('should use "th" suffix with teen numbers ending with 12', () => {
    expect(numberToOrdinal(12)).toBe("12th");
    expect(numberToOrdinal(212)).toBe("212th");
  });
  
  it('should use "th" suffix with teen numbers ending with 13', () => {
    expect(numberToOrdinal(13)).toBe("13th");
    expect(numberToOrdinal(313)).toBe("313th");
  });
  
  it('should use "th" suffix with all other numbers', () => {
    expect(numberToOrdinal(4)).toBe("4th");
    expect(numberToOrdinal(9)).toBe("9th");
    expect(numberToOrdinal(10)).toBe("10th");
    expect(numberToOrdinal(14)).toBe("14th");
    expect(numberToOrdinal(10000)).toBe("10000th");
  });
  
  it('should not add suffix to 0', () => {
    expect(numberToOrdinal(0)).toBe("0");
  });
});



// let assert = require("chai").assert;
describe('Challenge', function() {
  it('should work for null or undefined input', function() {
    expect(calculate(null)).toBe(0);
    expect(calculate()).toBe(0);
  });
  it('should work for an empty string', function() {
    expect(calculate("")).toBe(0);
  });
  it('should work for an blank string', function() {
    expect(calculate("  ")).toBe(0);
  });
  it('should work for expression padded with spaces', function() {
    expect(calculate("  1 2 3   ")).toBe(3);
  });
  it('should parse numbers', function() {
    expect(calculate("1 2 3")).toBe(3);
  });
  it('should parse floats', function() {
    expect(calculate("1 2 3.5")).toBe(3.5);
  });
  it('should support addition', function() {
    expect(calculate("1 3 +")).toBe(4);
  });
  it('should support multiplication', function() {
    expect(calculate("1 3 *")).toBe(3);
  });
  it('should support subtraction', function() {
    expect(calculate("1 3 -")).toBe(-2);
  });
  it('should support division', function() {
    expect(calculate("4 2 /")).toBe(2);
  });
  it('should raise error on invalid operand', function() {
    expect(() => calculate("1 3+")).toThrow("Unknown operand 3+");
    expect(() => calculate("1 3 &")).toThrow("Unknown operand &");
  });
  it('should handle complex expressions', function() {
    expect(calculate("5 1 2 + 4 * + 3 -")).toBe(14);
  });
});

