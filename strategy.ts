/*
    Design pattern strategy
    If class has a method that can be call to do same action with different type/algorithm
    instead of doing a big if everytime we want to know which case we are with a big method, we use strategy
    https://refactoring.guru/design-patterns/strategy
*/

// Create a interface
interface IStrategy {
  execute(a: number, b: number): void;
}

// Implements the interface for each type of strategy
class SubStrategy implements IStrategy {
  execute(a: number, b: number): void {
    console.log(`a: ${a} + b:${b} = ${a + b}`);
  }
}

// Implements the interface for each type of strategy
class SumStrategy implements IStrategy {
  execute(a: number, b: number): void {
    console.log(`a: ${a} - b:${b} = ${a - b}`);
  }
}

// Implements the interface for each type of strategy
class DivStrategy implements IStrategy {
  execute(a: number, b: number): void {
    if (b == 0) {
      console.log(`b:${b} cannot be equal to 0.`);
    } else {
      console.log(`a: ${a} / b:${b} = ${a / b}`);
    }
  }
}

/*  
    Creates a class in between to keep a ref to the current strategy
    and call the execute method without knowing from which IStrategy it's from
*/
 class Context {
  // current strategy
  private _strategy?: IStrategy;

  // set it with a public method
  public setStrategy(strategy: IStrategy) {
    this._strategy = strategy;
  }

  // Call the IStrategy.execute
  public makesCalcul(a: number, b: number) {
    if (!this._strategy) {
      throw new Error(
        "The strategy need to be set before calling this method."
      );
    }
    this._strategy.execute(a, b);
  }
}

let a = 6;
let b = 2;
let context = new Context();
let types = ["sub", "sum", "div"];

// Check if no IStrategy is choosen => exeption
try {
  context.makesCalcul(a, a);
} catch (e) {
  console.log(e);
}

// Foreach on all IStrategy to call the correct execute
types.forEach((type) => {
  if (type == "sub") {
    context.setStrategy(new SubStrategy());
  } else if (type == "sum") {
    context.setStrategy(new SumStrategy());
  } else if (type == "div") {
    context.setStrategy(new DivStrategy());
  }

  context.makesCalcul(a, b);
});

// Check if divide by 0
context.makesCalcul(a, 0);
