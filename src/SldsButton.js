import * as internal from "../node_modules/elix/src/internal.js";
import * as template from "../node_modules/elix/src/template.js";
import SeamlessButton from "../node_modules/elix/src/SeamlessButton.js";

/**
 * SLDS variation of an Elix [SeamlessButton](https://component.kitchen/elix/SeamlessButton).
 */
export default class XButton extends SeamlessButton {
  get [internal.template]() {
    return template.concat(
      super[internal.template],
      template.html`
        <style>
          /* slds-button */
          :host {
            padding: 0;
            background: transparent;
            background-clip: border-box;
            border: 1px solid transparent;
            border-radius: .25rem;
            line-height: 1.875rem;
            text-decoration: none;
            color: #0070d2;
            -webkit-appearance: none;
            white-space: normal;
          }

          /* slds-button_icon-border */
          :host {
            line-height: 1;
            vertical-align: middle;
            color: #706e6b;
            border: 1px solid #dddbda;
            transition: border .15s linear;
            border-color: #dddbda;
          }

          :host(:active) {
            color: #005fb2;
          }

          :host(:focus) {
            box-shadow: 0 0 3px #0070D2;
          }

          :host(:focus),
          :host(:hover) {
            color: #005fb2;
          }
        </style>
      `
    );
  }
}

customElements.define("slds-button", XButton);
