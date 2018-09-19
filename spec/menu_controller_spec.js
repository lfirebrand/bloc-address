const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
  beforeEach(() => {
    this.menu = new MenuController();
  })

  describe("remindMe()", () => {

    it("should return a string with \"Learning is a life-long pursuit\"", () => {
      this.menu.remindMe();
      expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit");
    });
  });
});
