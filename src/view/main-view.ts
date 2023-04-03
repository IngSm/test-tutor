import { AbstractView, createElement } from "../framework/index";

class MainView extends AbstractView {
  get element(): HTMLElement {
    return createElement(
      "<h1>HELLO WORLD</h1>"
    );
  }
};

export default new MainView();