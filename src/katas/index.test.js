const { mask, numberToOrdinal } = require('./index');

test('should mask a substring with given symbol', () => {
    expect(mask('hello world!', '*', 3, 6)).toBe('hel****orld!');
    expect(mask('hello world!', '*', 3)).toBe('hel*********');
});

describe('#numberToOrdinal', () => {
    it('should use "-st" suffix for numbers ending in 1', () => {
        expect(numberToOrdinal(1)).toBe('1st');
        expect(numberToOrdinal(21)).toBe('21st');
    });
    it('should use "-nd" suffix for numbers ending in 2', () => {
        expect(numberToOrdinal(2)).toBe("2nd");
        expect(numberToOrdinal(32)).toBe("32nd");
    });
    it('should use "-rd" suffic for numbers ending in 3', () => {
        expect(numberToOrdinal(3)).toBe("3rd");
        expect(numberToOrdinal(43)).toBe("43rd");
    });
    it('should "-th" for all "teen" numbers ending with 11, 12, and 13', () => {
        expect(numberToOrdinal(11)).toBe("11th");
        expect(numberToOrdinal(12)).toBe("12th");
        expect(numberToOrdinal(13)).toBe("13th");
    });
    it('should use "-th" for all other numbers', () => {
        expect(numberToOrdinal(5)).toBe("5th");
        expect(numberToOrdinal(14)).toBe("14th");
        expect(numberToOrdinal(127)).toBe("127th");
    });
});
