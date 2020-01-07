import * as internal from "../node_modules/elix/src/internal.js";
import Popup from "../node_modules/elix/src/Popup.js";
import XOverlayFrame from "./OverlayFrame.js";

/**
 * SLDS variation of an Elix [Popup](https://component.kitchen/elix/Popup).
 */
export default class XPopup extends Popup {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      framePartType: XOverlayFrame
    });
  }
}

customElements.define("x-popup", XPopup);
