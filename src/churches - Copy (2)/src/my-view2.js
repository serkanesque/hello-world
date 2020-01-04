/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './mission-values.js';
import './about-hero.js';

import './about-hero.js';
import './our-story.js';
import './progress-made.js';
import './chair-message.js';
import './publications-list.js';

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
 


      </style>






     <about-hero></about-hero>
<mission-values></mission-values>
<our-story></our-story>
<progress-made></progress-made>
<chair-message></chair-message>
<publications-list></publications-list>













 







            </div>
          </div>






    `;
  }
}

window.customElements.define('my-view2', MyView2);
