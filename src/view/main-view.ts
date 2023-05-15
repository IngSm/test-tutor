import { AbstractView, createElement } from "../framework/index";

export default class MainView extends AbstractView {

  picUrl: string;
  title: string;
  info: string;
  handleClick: Function;

  constructor(picUrl: string, title: string, info: string) {
    super();
    this.picUrl = picUrl;
    this.title = title;
    this.info = info;
  }

  get element(): HTMLElement {
    return createElement(
      `
      <div class="main-view">
        <div class="main-view__title">
          <h1>${this.title}</h1>
        </div>
        <div class="main-view__pic">
          <img class="main-view__img" src="${this.picUrl}">
        </div>
        <div class="main-view__info">
          <p class="main-view__info-text">${this.info}</p>
        </div>
      </div>
      `
    );
  }
};