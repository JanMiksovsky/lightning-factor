import * as internal from "../node_modules/elix/src/base/internal.js";
import * as template from "../node_modules/elix/src/core/template.js";
import Carousel from "../node_modules/elix/src/base/Carousel.js";
import CenteredStrip from "../node_modules/elix/src/base/CenteredStrip.js";
import SldsPageDot from "./SldsPageDot.js";
import SlidingStage from "../node_modules/elix/src/base/SlidingStage.js";

/**
 * SLDS variation of an Elix [Carousel](https://component.kitchen/elix/Carousel).
 */
export default class XCarousel extends Carousel {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      proxyListOverlap: false,
      proxyListPartType: CenteredStrip,
      proxyPartType: SldsPageDot,
      showArrowButtons: false,
      stagePartType: SlidingStage
    });
  }

  get [internal.template]() {
    return template.concat(
      super[internal.template],
      template.html`
        <style>
          #proxyList {
            margin-top: 0.5em;
          }
        </style>
      `
    );
  }
}

customElements.define("slds-carousel", XCarousel);
