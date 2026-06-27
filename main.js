import { getForecastWeather } from "./src/api";

import "./styles/styles.scss";
import "./styles/detailView.scss";
import "./styles/loading.scss";
import { loadMainMenu } from "./src/mainMenu";

export const rootElement = document.getElementById("app");
//getCurrentWeather("Frankfurt am Main");
//loadDetailView("Frankfurt am Main");
loadMainMenu();
