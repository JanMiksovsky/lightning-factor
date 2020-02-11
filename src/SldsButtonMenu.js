import * as internal from "../node_modules/elix/src/base/internal.js";
import * as template from "../node_modules/elix/src/core/template.js";
import MenuButton from "../node_modules/elix/src/base/MenuButton.js";
import SldsButton from "./SldsButton.js";
import SldsMenu from "./SldsMenu.js";
import SldsPopup from "./SldsPopup.js";
import SldsOverlayFrame from "./SldsOverlayFrame.js";

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
      popupPartType: SldsPopup,
      menuPartType: SldsMenu,
      sourcePartType: SldsButton
    });
  }

  get [internal.template]() {
    const result = super[internal.template];

    // Inject an SLDS down icon into the source slot.
    const sourceSlot = result.content.querySelector('slot[name="source"]');
    if (sourceSlot) {
      const downIconTemplate = template.html`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="downIcon"><path d="M3.8 6.5h16.4c.4 0 .8.6.4 1l-8 9.8c-.3.3-.9.3-1.2 0l-8-9.8c-.4-.4-.1-1 .4-1z"></path></svg>
      `;
      sourceSlot.innerHTML = "";
      sourceSlot.append(downIconTemplate.content);
    }

    result.content.append(
      template.html`
        <style>
          #popup {
            margin-top: .125rem;
            margin-bottom: .125rem;            
          }

          /* .slds-button_icon-border */
          #source {
            width: 2rem;
            height: 2rem;
          }

          #downIcon {
            fill: currentColor;
            width: .875rem;
            height: .875rem;            
          }
        </style>
      `.content
    );
    return result;
  }
}

customElements.define("slds-button-menu", SldsButtonMenu);
