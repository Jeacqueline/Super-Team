const Manager = require('../lib/Manager')

describe("Manager", () => {
    it("should create a new Manager object", () => {
      const manager = new Manager(
        "Jack",
        "14",
        "jack@gmail.com",
        "14"
      );
      expect(manager.name).toBe("Jack");
      expect(manager.id).toBe("14");
      expect(manager.email).toBe("jack@gmail.com");
      expect(manager.office).toBe("14");
      expect(manager.role).toBe("Manager");
    });
  });