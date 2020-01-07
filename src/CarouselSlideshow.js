import "./Button.js";
import * as internal from "../node_modules/elix/src/internal.js";
import * as template from "../node_modules/elix/src/template.js";
import CarouselSlideshow from "../node_modules/elix/src/CarouselSlideshow.js";
import CenteredStrip from "../node_modules/elix/src/CenteredStrip.js";
import SlidingStage from "../node_modules/elix/src/SlidingStage.js";
import XPageDot from "./PageDot.js";

/**
 * SLDS variation of an Elix [CarouselSlideshow](https://component.kitchen/elix/CarouselSlideshow).
 *
 * In the Lightning base components set, the carousel slideshow is implemented as the default
 * mode of a lightning-carousel rather than a separate component. However, that arrangement
 * unnecessarily complicates the base lightning-carousel component.
 */
export default class XCarouselSlideshow extends CarouselSlideshow {
  [internal.componentDidMount]() {
    super[internal.componentDidMount]();
    this[internal.ids].playButton.addEventListener("click", () => {
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
      selectionTimerDuration: 5000,
      showArrowButtons: false,
      stagePartType: SlidingStage
    });
  }

  [internal.render](changed) {
    super[internal.render](changed);
    if (changed.playing) {
      const { playing } = this[internal.state];
      this[internal.ids].playIcon.style.display = playing ? "none" : "block";
      this[internal.ids].pauseIcon.style.display = playing ? "block" : "none";
    }
  }

  get [internal.template]() {
    const base = super[internal.template];

    // Graft in play/pause button.
    // TODO: Expose part type for button.
    const explorerContainer = base.content.getElementById("explorerContainer");
    if (explorerContainer) {
      const playButtonTemplate = template.html`
        <x-button id="playButton">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" id="playIcon" viewBox="0 0 52 52"><path d="m8 43.7v-35.4c0-1 1.3-1.7 2.2-0.9l33.2 17.3c0.8 0.6 0.8 1.9 0 2.5l-33.2 17.5c-0.9 0.7-2.2 0.1-2.2-1z"></path></svg>          
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" id="pauseIcon" viewBox="0 0 52 52"><path d="m30 43c0 1 0.9 2 2 2h4c1.1 0 2-1.1 2-2v-34c0-1-0.9-2-2-2h-4c-1.1 0-2 1.1-2 2v34z m-16 0c0 1 0.9 2 2 2h4c1.1 0 2-1.1 2-2v-34c0-1-0.9-2-2-2h-4c-1.1 0-2 1.1-2 2v34z"></path></svg>
        </x-button>
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
            background: white;
            bottom: 0;
            color: #706e6b;
            height: 1.25rem;
            line-height: 1;
            line-height: 1;
            position: absolute;
            vertical-align: middle;
            width: 1.25rem;
          }

          .icon {
            fill: currentColor;
            height: 1rem;
            width: 1rem;
          }
        </style>
      `
    );
  }
}

customElements.define("x-carousel-slideshow", XCarouselSlideshow);
