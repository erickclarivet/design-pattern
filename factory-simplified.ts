/**
 * Simplified version of factory design pattern
 */

interface IMeubleFactory {
  createMeuble(customer: Customer): IMeuble;
}

class MeubleFactory implements IMeubleFactory {
  createMeuble(customer: Customer): IMeuble {
    switch (customer.commandType) {
      case "sofa":
        return new Sofa();
      case "tabouret":
        return new Tabouret();
      default:
        return new None();
    }
  }
}

interface IMeuble {
  showName(): void;
}

class Sofa implements IMeuble {
  showName(): void {
    console.log("sofa");
  }
}

class Tabouret implements IMeuble {
  showName(): void {
    console.log("tabouret");
  }
}

class None implements IMeuble {
  showName(): void {
    console.log("none");
  }
}

class Customer {
  commandType: string;

  constructor(commandType: string) {
    this.commandType = commandType;
  }
}

let productFactory = new MeubleFactory();
productFactory.createMeuble(new Customer("sofa")).showName();
productFactory.createMeuble(new Customer("tabouret")).showName();
productFactory.createMeuble(new Customer("none")).showName();
