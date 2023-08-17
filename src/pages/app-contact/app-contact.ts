import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './contact-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';
import {resolveRouterPath} from "../../router";

@customElement('app-contact')
export class AppContact extends LitElement {
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
              <h2>List your business today</h2>
            </div>

            <p>Aperiam at, explicabo fugiat fugit id laboriosam nobis officiis placeat provident quas quia quos, saepe tempore unde vel. Aspernatur sequi ullam voluptas.</p>

            <div slot="footer">
              <sl-button href="${resolveRouterPath()}" variant="primary">Back 🏡</sl-button>
              <sl-button href="${resolveRouterPath('about')}" variant="warning">See all businesses</sl-button>
            </div>

          </sl-card>
        </div>
      </main>
    `;
  }
}
