import { greeter } from "./utils";

describe("greeter", () => {
  it("should greet the given name", () => {
    expect(greeter("Ian")).toBe("Hello, Ian!");
  });
});
