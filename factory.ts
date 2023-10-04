/**
 * Like design pattern abstract factory but for only one product
 * Here we create an abstract factory + a factory by object because we assume that we will store
 * a lot of properties or logic but it could work with only one IFactory, normal Factory 
 * implementing the interface and a method taking a parameter and creating the correct object (IProduct)
 * with a if or switch statement
 * https://refactoring.guru/design-patterns/builder/typescript/example#example-0
 * https://refactoring.guru/design-patterns/factory-method
 */

abstract class AFactory {
    abstract createProduct() : IProduct

    showName() : void {
        let product = this.createProduct();
        console.log('Product is ', product.showName());
    }
}

class ChairFactory extends AFactory {
    createProduct(): IProduct {
        return new Chair();
    }
}

class TableFactory extends AFactory {
    createProduct(): IProduct {
        return new Table();
    }
}

interface IProduct {
    showName() : string;
}

class Chair implements IProduct {
    showName(): string {
        return 'chair';
    }
}

class Table implements IProduct {
    showName(): string {
        return 'table';
    }
}

let chairCreator = new ChairFactory();
chairCreator.showName();

let tableCreator = new TableFactory();
tableCreator.showName();