const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const generateHTML = require("../app");

describe("Employee classes", () => {
  describe("Manager", () => {
    it("should create a new Manager object", () => {
      const manager = new Manager(
        "Teresa",
        "15",
        "tere@gmail.com",
        "1595"
      );
      expect(manager.name).toBe("Teresa");
      expect(manager.id).toBe("15");
      expect(manager.email).toBe("tere@gmail.com");
      expect(manager.office).toBe("1595");
      expect(manager.role).toBe("Manager");
    });
  });

  describe("Engineer", () => {
    it("should create a new Engineer object", () => {
    const engineer = new Engineer(
    "Martin",
    "26",
    "martin@gmail.com",
    "martin"
    );
    expect(engineer.name).toBe("Martin");
    expect(engineer.id).toBe("26");
    expect(engineer.email).toBe("martin@gmail.com");
    expect(engineer.github).toBe("martin");
    expect(engineer.role).toBe("Engineer");
    });
    });
    
    describe("Intern", () => {
    it("should create a new Intern object", () => {
    const intern = new Intern(
    "Lucas",
    "27",
    "lu@gmail.com",
    "My University"
    );
    expect(intern.name).toBe("Lucas");
    expect(intern.id).toBe("27");
    expect(intern.email).toBe("lu@gmail.com");
    expect(intern.school).toBe("My University");
    expect(intern.role).toBe("Intern");
    });
    });
    });
    
    describe("generateHTML", () => {
    it("should generate an HTML file based on the team members array", () => {
    const teamMembers = [
    new Manager("Teresa", "15", "tere@gmail.com", "1595"),
    new Engineer("Martin", "26", "martin@gmail.com", "martin"),
    new Intern("Lucas", "27", "lu@gmail.com", "My University"),
    ];
    generateHTML(teamMembers);
    // comprobar que se ha generado el archivo HTML correctamente
    });
    });
