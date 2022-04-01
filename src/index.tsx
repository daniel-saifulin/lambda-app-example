import * as ReactDOM from 'react-dom';
import { createGlobalStyle, StyleSheetManager } from 'styled-components';
import Price from './Price';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

class HelloWorldWidget extends HTMLElement {
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
    const name = this.getAttribute('name');

    ReactDOM.render(
      <StyleSheetManager target={this.shadow as unknown as HTMLElement}>
        <>
          <GlobalStyle />
          <Price />
        </>
      </StyleSheetManager>,
      this.shadow,
    );
  }
}

window.customElements.define(`fwd-hello-world-widget`, HelloWorldWidget);
