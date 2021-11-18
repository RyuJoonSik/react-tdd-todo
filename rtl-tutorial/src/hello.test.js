import * as testModule from "./hello.js";

describe("test spyon with function expressions", function () {
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it("should NOT mock message in foo", function () {
    const actual = testModule.foo();

    expect(actual).toBe("Hello world");
  });

  it("should mock message in foo", function () {
    jest.spyOn(testModule, "message").mockReturnValue("bull shit");

    const actual = testModule.foo();

    expect(actual).toBe("bull shit");
    expect(testModule.message).toHaveBeenCalledTimes(1);
  });
});
