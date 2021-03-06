import * as internal from "../node_modules/elix/src/base/internal.js";
import DropdownList from "../node_modules/elix/src/base/DropdownList.js";
import html from "../node_modules/elix/src/core/html.js";
import SldsButton from "./SldsButton.js";
import SldsMenu from "./SldsMenu.js";
import SldsPopup from "./SldsPopup.js";
import SldsUpDownToggle from "./SldsUpDownToggle.js";

/**
 * SLDS variation of an Elix [DropdownList](https://component.kitchen/elix/DropdownList).
 */
export default class SldsDropdownList extends DropdownList {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      horizontalAlign: "stretch",
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
          /* slds-input */
          :host {
            height: 1.875rem;
          }

          [part~="source"] {
            align-items: start;
            color: inherit;
          }

          [part~="value"] {
            flex: 1;
            text-align: start;
          }

          [part~="value"],
          [part~="popup-toggle"] {
            padding: 0 0.75rem;
          }
        </style>
      `
    );
    return result;
  }
}

customElements.define("slds-dropdown-list", SldsDropdownList);
