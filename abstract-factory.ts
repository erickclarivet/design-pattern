/**
 * Abstract Factory is a creational design pattern
 * that lets you produce families of related objects (ex UI components for Windows, UI components for Linux ect)
 * without specifying their concrete classes.
 */

interface IButton {
  push(): void;
}

interface ICheckBox {
  check(): void;
}

interface IGUIFactory {
  createButton(): IButton;
  createCheckBox(): ICheckBox;
}

class WinGUIFactory implements IGUIFactory {
  createButton(): IButton {
    return new WinButton();
  }

  createCheckBox(): ICheckBox {
    return new WinCheckBox();
  }
}

class LinuxGUIFactory implements IGUIFactory {
  createButton(): IButton {
    return new LinuxButton();
  }

  createCheckBox(): ICheckBox {
    return new LinuxCheckBox();
  }
}

class WinButton implements IButton {
  push(): void {
    console.log("windows button pushed !");
  }
}

class LinuxButton implements IButton {
  push(): void {
    console.log("linux button pushed !");
  }
}

class WinCheckBox implements ICheckBox {
  check(): void {
    console.log("windows checkbox checked !");
  }
}

class LinuxCheckBox implements ICheckBox {
  check(): void {
    console.log("linux checkbox checked !");
  }
}

class Application {
  private _factory: IGUIFactory;
  private _button?: IButton;
  private _checkbox?: ICheckBox;

  constructor(factory: IGUIFactory) {
    this._factory = factory;
  }

  createUI() {
    this._button = this._factory.createButton();
    this._checkbox = this._factory.createCheckBox();
  }

  interact() {
    if (!this._button) {
      throw new Error(
        "Error: Button has to be created in UI before being used !"
      );
    } else if (!this._checkbox) {
      throw new Error(
        "Error : CheckBox has to be created in UI before being used !"
      );
    }
    this._button.push();
    this._checkbox.check();
  }
}

function useApplication(application: Application) {
  try {
    if(!application) {
        throw new Error("Application cannot be null!");
    }
    application?.interact();
  } catch (e) {
    console.log(e);
  }
  application?.createUI();
  application?.interact();
}

let os = ["linux", "windows"];

os.forEach((o) => {
  if (o == "linux") {
    useApplication(new Application(new LinuxGUIFactory()));
  } else {
    useApplication(new Application(new WinGUIFactory()));
  }
});
