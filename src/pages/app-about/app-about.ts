import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './about-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';
import {resolveRouterPath} from "../../router";

@customElement('app-about')
export class AppAbout extends LitElement {
  static styles = [
    sharedStyles,
    styles
  ]

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>See all businesses</h2>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at, explicabo fugiat fugit id laboriosam nobis officiis placeat provident quas quia quos, saepe tempore unde vel. Aspernatur sequi ullam voluptas.</p>

            <div slot="footer">
              <sl-button href="${resolveRouterPath()}" variant="primary">Back 🏡</sl-button>
              <sl-button href="${resolveRouterPath('contact-us')}" variant="success">List your business today</sl-button>
            </div>

          </sl-card>
        </div>
      </main>
  </main>
    `;
  }
}
