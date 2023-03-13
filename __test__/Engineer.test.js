const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    it("should create a new Engineer object", () => {
    const engineer = new Engineer(
    "Dian",
    "45",
    "dian@company.com",
    "dian"
    );
    expect(engineer.name).toBe("Dian");
    expect(engineer.id).toBe("45");
    expect(engineer.email).toBe("dian@company.com");
    expect(engineer.github).toBe("dian");
    expect(engineer.role).toBe("Engineer");
    });
    });