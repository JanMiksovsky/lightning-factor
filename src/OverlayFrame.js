import * as internal from "../node_modules/elix/src/internal.js";
import * as template from "../node_modules/elix/src/template.js";
import OverlayFrame from "../node_modules/elix/src/OverlayFrame.js";

/**
 * SLDS variation of an Elix [OverlayFrame](https://component.kitchen/elix/OverlayFrame).
 *
 * In SLDS, this isn't offered as a standalone component, but doing so here means that
 * we can easily add the SLDS overlay style to anything with a popup.
 */
export default class XOverlayFrame extends OverlayFrame {
  get [internal.template]() {
    return template.concat(
      super[internal.template],
      template.html`
        <style>
          /* slds-dropdown */
          :host {
            min-width: 6rem;
            max-width: 20rem;
            border: 1px solid #dddbda;
            border-radius: .25rem;
            padding: .25rem 0;
            font-size: .75rem;
            background: #fff;
            box-shadow: 0 2px 3px 0 rgba(0,0,0,.16);
          }
        </style>
      `
    );
  }
}

customElements.define("x-overlay-frame", XOverlayFrame);
