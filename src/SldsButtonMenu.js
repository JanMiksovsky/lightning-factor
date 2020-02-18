import * as internal from "../node_modules/elix/src/base/internal.js";
import html from "../node_modules/elix/src/core/html.js";
import MenuButton from "../node_modules/elix/src/base/MenuButton.js";
import SldsButton from "./SldsButton.js";
import SldsMenu from "./SldsMenu.js";
import SldsOverlayFrame from "./SldsOverlayFrame.js";
import SldsPopup from "./SldsPopup.js";
import SldsUpDownToggle from "./SldsUpDownToggle.js";

/**
 * SLDS variation of an Elix [MenuButton](https://component.kitchen/elix/MenuButton).
 *
 * Note: SLDS calls this a "button menu"; Elix calls this a "menu button".
 * They're the same thing.
 */
export default class SldsButtonMenu extends MenuButton {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      framePartType: SldsOverlayFrame,
      generic: false,
      menuPartType: SldsMenu,
      popupPartType: SldsPopup,
      popupTogglePartType: SldsUpDownToggle,
      sourcePartType: SldsButton
    });
  }

  get [internal.template]() {
    const result = super[internal.template];
    result.content.append(
      html`
        <style>
          #popup {
            margin-top: 0.125rem;
            margin-bottom: 0.125rem;
          }

          /* .slds-button_icon-border */
          #source {
            width: 2rem;
            height: 2rem;
          }
        </style>
      `
    );
    return result;
  }
}

customElements.define("slds-button-menu", SldsButtonMenu);
