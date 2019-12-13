import * as internal from "../node_modules/elix/src/internal.js";
import * as template from "../node_modules/elix/src/template.js";
import Menu from "../node_modules/elix/src/Menu.js";

export default class XMenu extends Menu {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      generic: false
    });
  }

  get [internal.template]() {
    return template.concat(
      super[internal.template],
      template.html`
        <style>
          /* Turn off some Elix styles */
          :host {
            background: inherit;
          }

          /* slds-dropdown */
          :host {
            min-width: 6rem;
            max-width: 20rem;
            padding: .25rem 0;
            font-size: .75rem;
          }          

          /* .slds-dropdown__item */
          ::slotted(*) {
            line-height: 1.5;
            font-weight: 400;
          }

          ::slotted(*) {
            font-size: .75rem;            
          }

          ::slotted(*) {
            background-color: transparent;
          }

          ::slotted(*) {
            color: #006dcc;
            text-decoration: none;
            transition: color .1s linear;
          }

          ::slotted(*) {
            cursor: pointer;
          }

          ::slotted(*) {
            position: relative;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -ms-flex-align: center;
            align-items: center;
            padding: .5rem .75rem;
            color: #080707;
            white-space: nowrap;
            cursor: pointer;
          }

          ::slotted(:hover) {
            background-color: #f3f2f2;            
          }
        </style>
      `
    );
  }
}

customElements.define("x-menu", Menu);