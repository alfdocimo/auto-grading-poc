const whoRunsTheWorld = require("../index");

it("should return the correct value", () => {
  expect(whoRunsTheWorld()).toBe("devs!");
});
