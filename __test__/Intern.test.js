const Intern = require('../lib/Intern')

describe("Intern", () => {
    it("should create a new Intern object", () => {
    const intern = new Intern(
    "Bob Johnson",
    "789",
    "bob@company.com",
    "University of XYZ"
    );
    expect(intern.name).toBe("Bob Johnson");
    expect(intern.id).toBe("789");
    expect(intern.email).toBe("bob@company.com");
    expect(intern.school).toBe("University of XYZ");
    expect(intern.role).toBe("Intern");
    });
    });