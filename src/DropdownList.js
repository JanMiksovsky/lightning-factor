import * as internal from "../node_modules/elix/src/internal.js";
import * as template from "../node_modules/elix/src/template.js";
import DropdownList from "../node_modules/elix/src/DropdownList.js";
import XButton from "./Button.js";
import XMenu from "./Menu.js";
import XPopup from "./Popup.js";

/**
 * SLDS variation of an Elix [DropdownList](https://component.kitchen/elix/DropdownList).
 */
export default class XDropdownList extends DropdownList {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      horizontalAlign: "stretch",
      menuPartType: XMenu,
      popupPartType: XPopup,
      sourcePartType: XButton
    });
  }

  get [internal.template]() {
    return template.concat(
      super[internal.template],
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
      `
    );
  }
}

customElements.define("x-dropdown-list", XDropdownList);
