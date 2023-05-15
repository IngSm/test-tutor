import { RenderPosition, render } from "../framework";
import { MainView } from "../view";
import { NasaImage } from "../model/nasa_image";

export default class MainViewPresenter {

  private container: HTMLElement
  private readonly model: NasaImage

  constructor({container}: {container: HTMLElement}, {model}: {model: NasaImage}) {
    this.container = container;
    this.model = model;
  }


  async init(): Promise<void> {
    const nasaImage = await this.model.getPic();
    render(new MainView(nasaImage.hdurl, nasaImage.title, nasaImage.explanation), this.container, RenderPosition.AFTERBEGIN);
  }
}