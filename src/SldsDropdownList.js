import * as internal from "../node_modules/elix/src/base/internal.js";
import * as template from "../node_modules/elix/src/core/template.js";
import DropdownList from "../node_modules/elix/src/base/DropdownList.js";
import SldsButton from "./SldsButton.js";
import SldsMenu from "./SldsMenu.js";
import SldsPopup from "./SldsPopup.js";

/**
 * SLDS variation of an Elix [DropdownList](https://component.kitchen/elix/DropdownList).
 */
export default class SldsDropdownList extends DropdownList {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      horizontalAlign: "stretch",
      menuPartType: SldsMenu,
      popupPartType: SldsPopup,
      sourcePartType: SldsButton
    });
  }

  get [internal.template]() {
    const result = super[internal.template];
    result.content.append(
      template.html`
        <style>
          /* slids-input */
          :host {
            height: 1.875rem;
          }

          #source {
            padding: 0 0.75rem;
          }
        </style>
      `.content
    );
    return result;
  }
}

customElements.define("slds-dropdown-list", SldsDropdownList);
