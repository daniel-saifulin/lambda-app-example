import * as ReactDOM from 'react-dom';
import Price from './Price';

class BtcInfoWidget extends HTMLElement {
  private shadow = this.attachShadow({ mode: 'open' });

  static get observedAttributes() {
    return ['name'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    ReactDOM.render(
      <>
        <Price />
      </>,
      this.shadow,
    );
  }
}

window.customElements.define(`fwd-crypto-widget`, BtcInfoWidget);
