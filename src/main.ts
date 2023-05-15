import "./style.css";

import MainViewPresenter from "./presenter/main-view-presenter";
import { NasaImage } from "./model/nasa_image";

const appEntry: HTMLElement = document.querySelector("#app");

const nasaModel = new NasaImage()

const mainViewPresenter = new MainViewPresenter({container: appEntry}, {model: nasaModel})

mainViewPresenter.init();

