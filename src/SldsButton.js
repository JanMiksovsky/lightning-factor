import * as internal from "../node_modules/elix/src/base/internal.js";
import Button from "../node_modules/elix/src/base/Button.js";
import html from "../node_modules/elix/src/core/html.js";

/**
 * SLDS variation of an Elix [Button](https://component.kitchen/elix/Button).
 */
export default class SldsButton extends Button {
  get [internal.template]() {
    const result = super[internal.template];
    result.content.append(
      html`
        <style>
          /* slds-button */
          :host {
            padding: 0;
            background: transparent;
            background-clip: border-box;
            border: 1px solid transparent;
            border-radius: 0.25rem;
            box-sizing: border-box;
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
            transition: border 0.15s linear;
            border-color: #dddbda;
          }

          :host(:active) {
            color: #005fb2;
          }

          :host(:focus) {
            box-shadow: 0 0 3px #0070d2;
          }

          :host(:focus),
          :host(:hover) {
            color: #005fb2;
          }

          /* Making this up, not sure if/how SLDS expects to center content. */
          [part~="inner"] {
            display: flex;
            justify-content: center;
          }
        </style>
      `
    );
    return result;
  }
}

customElements.define("slds-button", SldsButton);
