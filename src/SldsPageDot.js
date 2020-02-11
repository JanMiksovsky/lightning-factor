import * as internal from "../node_modules/elix/src/base/internal.js";
import * as template from "../node_modules/elix/src/core/template.js";
import SeamlessButton from "../node_modules/elix/src/base/SeamlessButton.js";

/**
 * SLDS variation of an Elix [PageDot](https://component.kitchen/elix/PageDot).
 *
 * This is used by the Carousel component and its variations.
 */
export default class SldsPageDot extends SeamlessButton {
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

customElements.define("slds-page-dot", SldsPageDot);
