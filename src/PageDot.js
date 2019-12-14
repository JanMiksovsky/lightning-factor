import * as internal from "../node_modules/elix/src/internal.js";
import * as template from "../node_modules/elix/src/template.js";
import SeamlessButton from "../node_modules/elix/src/SeamlessButton.js";

export default class XPageDot extends SeamlessButton {
  get [internal.template]() {
    return template.concat(
      super[internal.template],
      template.html`
        <style>
          /* slds-button */
          :host {
              width: 1rem;
              height: 1rem;
              background: #fff;
              border: 1px solid #dddbda;
              border-radius: 50%;
              margin: 0 .25rem;
          }

          :host([selected]) {
              background: #0070d2;
              border-color: #0070d2;              
          }
        </style>
      `
    );
  }
}

customElements.define("x-page-dot", XPageDot);
