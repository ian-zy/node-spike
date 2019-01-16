function maskify (creditCard) {
    if (isShortCreditCard(creditCard)) return creditCard
    
    const parts = splitCreditCard(creditCard, 1, 4);
    return parts.head + maskAllDigits(parts.body) + parts.tail
    
    
    function isShortCreditCard(creditCard) {
      return creditCard.length < 6
    }
    
    function splitCreditCard(creditCard, headLength, tailLength) {
      return {
        head: creditCard.substring(0, headLength),
        body: creditCard.substring(headLength, creditCard.length - tailLength),
        tail: creditCard.substring(creditCard.length - tailLength)
      }
    }
    
    function maskAllDigits(maskable) {
      return maskable.replace(/\d/g, '#');
    }
  }
  
function numberToOrdinal(n) {
    return n + getSuffix(n);
    
    function getSuffix(n) {
      if (n == 0) return "";
      if (isTeenNumberWithSpecialEnding(n)) return "th";
      return selectSuffixByEndingDigit(n%10);
    }
    
    function isTeenNumberWithSpecialEnding(n) {
      return [11, 12, 13].includes(n % 100);
    }
    
    function selectSuffixByEndingDigit(digit) {
      switch (digit) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    }
  }
  
function calculate (expression) {  
    const tokens = tokenize(expression);
    if (tokens.length == 0) return 0;
    return evaluateTokens(tokens);
    
    function tokenize(expression) {
      if (expression === null || expression === undefined) return [];
      
      let trimmed = expression.trim();
      return trimmed.length == 0 ? [] : trimmed.split(/\s+/);
    }
    
    function evaluateTokens(tokens) {
      const supportedOperator = {
        "+": (op1, op2) => op1 + op2,
        "-": (op1, op2) => op1 - op2,
        "*": (op1, op2) => op1 * op2,
        "/": (op1, op2) => op1 / op2
      };
      
      const stack = [];
      tokens.forEach(evaluateToken);
      return stack.pop();
      
      function evaluateToken(t) {
        if (supportedOperator[t]) {
          evaluateOperator(supportedOperator[t]);
        } else {
          evaluateOperand(t);    
        }
      }
      
      function evaluateOperator(operator) {
        let operand2 = stack.pop();
        let operand1 = stack.pop();
        stack.push(operator(operand1, operand2));
      }
      
      function evaluateOperand(operand) {
        const parsed = Number(operand);
        if (isNaN(parsed)) throw "Unknown operand " + operand;
        stack.push(parsed); 
      }
    }
  }

module.exports = {
  maskify,
  calculate,
  numberToOrdinal
}
