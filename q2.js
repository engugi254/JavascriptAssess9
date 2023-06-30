class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    calculateAnnualSalary() {
      const baseSalary = this.salary * 12;
      const bonus = 0.1 * baseSalary; 
      return baseSalary + bonus;
    }
  }
  
  // Create two instances of the Manager class
  const manager1 = new Manager('Kevin', 5000, 'Sales');
  const manager2 = new Manager('Edward', 6000, 'Marketing');
  
  // Calculate the annual salaries
  const annualSalary1 = manager1.calculateAnnualSalary();
  const annualSalary2 = manager2.calculateAnnualSalary();
  
  console.log(manager1.name + "'s annual salary: $" + annualSalary1);
  console.log(manager2.name + "'s annual salary: $" + annualSalary2);
  