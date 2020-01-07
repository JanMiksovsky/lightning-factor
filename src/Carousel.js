import * as internal from "../node_modules/elix/src/internal.js";
import * as template from "../node_modules/elix/src/template.js";
import Carousel from "../node_modules/elix/src/Carousel.js";
import CenteredStrip from "../node_modules/elix/src/CenteredStrip.js";
import SlidingStage from "../node_modules/elix/src/SlidingStage.js";
import XPageDot from "./PageDot.js";

/**
 * SLDS variation of an Elix [Carousel](https://component.kitchen/elix/Carousel).
 */
export default class XCarousel extends Carousel {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      proxyListOverlap: false,
      proxyListPartType: CenteredStrip,
      proxyPartType: XPageDot,
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

customElements.define("x-carousel", XCarousel);
