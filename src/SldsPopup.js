import * as internal from "../node_modules/elix/src/base/internal.js";
import Popup from "../node_modules/elix/src/base/Popup.js";
import SldsOverlayFrame from "./SldsOverlayFrame.js";

/**
 * SLDS variation of an Elix [Popup](https://component.kitchen/elix/Popup).
 */
export default class SldsPopup extends Popup {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      framePartType: SldsOverlayFrame
    });
  }
}

customElements.define("slds-popup", SldsPopup);
