const _ = require('lodash');

function mask(str, symbol, start, end) {
    if (_.isNil(end)) end = str.length - 1;
    return str.substring(0, start) + _.repeat(symbol, end - start + 1) + str.substring(end + 1);
}

function numberToOrdinal(n) {
    return n + getSuffix(n);

    function getSuffix(n) {
        if (isTeenNumberEndingWith11or12or13(n)) return "th";
        return useSuffixByEnding(n);
    }

    function isTeenNumberEndingWith11or12or13(n) {
        return [11, 12, 13].includes(n % 100);
    }

    function useSuffixByEnding(n) {
        switch (n % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }
}

module.exports = { mask, numberToOrdinal };
