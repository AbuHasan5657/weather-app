import { rootElement } from "../main";

export function renderLoadingScreen(message = "Lade...") {
  rootElement.innerHTML = getLoadingHtml(message);
}

function getLoadingHtml(message) {
  return `
    <div class="loading_message">${message}</div>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    `;
}
