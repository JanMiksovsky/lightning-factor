import * as internal from "../node_modules/elix/src/internal.js";
import * as template from "../node_modules/elix/src/template.js";
import XButton from "./Button.js";
import XMenu from "./Menu.js";
import MenuButton from "../node_modules/elix/src/MenuButton.js";
import XPopup from "./Popup.js";

/**
 * SLDS variation of an Elix [MenuButton](https://component.kitchen/elix/MenuButton).
 */
export default class XButtonMenu extends MenuButton {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      generic: false,
      popupPartType: XPopup,
      menuPartType: XMenu,
      sourcePartType: XButton
    });
  }

  get [internal.template]() {
    const base = super[internal.template];

    // Inject an SLDS down icon into the source slot.
    const sourceSlot = base.content.querySelector('slot[name="source"]');
    if (sourceSlot) {
      const downIconTemplate = template.html`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="downIcon"><path d="M3.8 6.5h16.4c.4 0 .8.6.4 1l-8 9.8c-.3.3-.9.3-1.2 0l-8-9.8c-.4-.4-.1-1 .4-1z"></path></svg>
      `;
      sourceSlot.innerHTML = "";
      sourceSlot.append(downIconTemplate.content);
    }

    return template.concat(
      base,
      template.html`
        <style>
          /* Turn off some Elix styles */
          #source {
            padding: 0;
          }

          #popup {
            margin-top: .125rem;
            margin-bottom: .125rem;            
          }

          #menu {
            background: inherit;
            padding: 0;
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
      `
    );
  }
}

customElements.define("x-button-menu", XButtonMenu);
