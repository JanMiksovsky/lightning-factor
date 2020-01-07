import * as internal from "../node_modules/elix/src/internal.js";
import Popup from "../node_modules/elix/src/Popup.js";
import SldsOverlayFrame from "./SldsOverlayFrame.js";

/**
 * SLDS variation of an Elix [Popup](https://component.kitchen/elix/Popup).
 */
export default class XPopup extends Popup {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      framePartType: SldsOverlayFrame
    });
  }
}

customElements.define("slds-popup", XPopup);
