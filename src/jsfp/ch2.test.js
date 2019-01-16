const { once, onceAndAfter, alternator } = require("./ch2");

describe("#once", () => {
  test("should invoke given fn only once", () => {
    const mockFn = jest.fn();
    const testFn = once(mockFn);
    testFn();
    testFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe("#onceAndAfter", () => {
  test("should invoke first function once and second function thereafter", () => {
    const mockFnOne = jest.fn();
    const mockFnTwo = jest.fn();
    const testFn = onceAndAfter(mockFnOne, mockFnTwo);
    testFn();
    expect(mockFnOne).toHaveBeenCalledTimes(1);
    expect(mockFnTwo).not.toHaveBeenCalled();

    testFn();
    expect(mockFnOne).toHaveBeenCalledTimes(1);
    expect(mockFnTwo).toHaveBeenCalledTimes(1);
  });
});

test("#alternator", () => {
    const mockFnOne = jest.fn();
    const mockFnTwo = jest.fn();
    const testFn = alternator(mockFnOne, mockFnTwo);

    testFn();
    expect(mockFnOne).toHaveBeenCalledTimes(1);
    expect(mockFnTwo).toHaveBeenCalledTimes(0);

    testFn();
    expect(mockFnOne).toHaveBeenCalledTimes(1);
    expect(mockFnTwo).toHaveBeenCalledTimes(1);

    testFn();
    expect(mockFnOne).toHaveBeenCalledTimes(2);
    expect(mockFnTwo).toHaveBeenCalledTimes(1);

    testFn();
    expect(mockFnOne).toHaveBeenCalledTimes(2);
    expect(mockFnTwo).toHaveBeenCalledTimes(2);
})