const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const generateHTML = require("../app");

describe("Employee classes", () => {
  describe("Manager", () => {
    it("should create a new Manager object", () => {
      const manager = new Manager(
        "John Smith",
        "123",
        "john@company.com",
        "1234"
      );
      expect(manager.name).toBe("John Smith");
      expect(manager.id).toBe("123");
      expect(manager.email).toBe("john@company.com");
      expect(manager.office).toBe("1234");
      expect(manager.role).toBe("Manager");
    });
  });

  describe("Engineer", () => {
    it("should create a new Engineer object", () => {
    const engineer = new Engineer(
    "Jane Doe",
    "456",
    "jane@company.com",
    "janedoe"
    );
    expect(engineer.name).toBe("Jane Doe");
    expect(engineer.id).toBe("456");
    expect(engineer.email).toBe("jane@company.com");
    expect(engineer.github).toBe("janedoe");
    expect(engineer.role).toBe("Engineer");
    });
    });
    
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
    });
    
    describe("generateHTML", () => {
    it("should generate an HTML file based on the team members array", () => {
    const teamMembers = [
    new Manager("John Smith", "123", "john@company.com", "1234"),
    new Engineer("Jane Doe", "456", "jane@company.com", "janedoe"),
    new Intern("Bob Johnson", "789", "bob@company.com", "University of XYZ"),
    ];
    generateHTML(teamMembers);
    // comprobar que se ha generado el archivo HTML correctamente
    });
    });
