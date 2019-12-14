import * as internal from "../node_modules/elix/src/internal.js";
import * as template from "../node_modules/elix/src/template.js";
import CarouselSlideshow from "../node_modules/elix/src/CarouselSlideshow.js";
import CenteredStrip from "../node_modules/elix/src/CenteredStrip.js";
import SlidingStage from "../node_modules/elix/src/SlidingStage.js";
import XPageDot from "./PageDot.js";

export default class XCarouselSlideshow extends CarouselSlideshow {
  [internal.componentDidMount]() {
    super[internal.componentDidMount]();
    this[internal.ids].playButton.addEventListener('click', () => {
      this[internal.raiseChangeEvents] = true;
      this.playing = !this.playing;
      this[internal.raiseChangeEvents] = false;
    });
  }

  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      proxyListOverlap: false,
      proxyListPartType: CenteredStrip,
      proxyPartType: XPageDot,
      showArrowButtons: false,
      stagePartType: SlidingStage
    });
  }

  [internal.render](changed) {
    super[internal.render](changed);
    if (changed.playing) {
      const { playing } = this[internal.state];
      this[internal.ids].playButton.textContent = playing ? '||' : '>';
    }
  }

  get [internal.template]() {
    const base = super[internal.template];

    // Graft in play/pause button.
    // TODO: Expose part type for button.
    const explorerContainer = base.content.getElementById('explorerContainer');
    if (explorerContainer) {
      const playButtonTemplate = template.html`
        <button id="playButton"></button>
      `;
      explorerContainer.append(playButtonTemplate.content);
    }

    return template.concat(
      base,
      template.html`
        <style>
          #proxyList {
            margin-top: 0.5em;
          }

          #playButton {
            bottom: 0;
            position: absolute;
          }
        </style>
      `
    );
  }
}

customElements.define("x-carousel-slideshow", XCarouselSlideshow);
