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


import './cnnv-questions.js';

class MyView5 extends PolymerElement {
  static get template() {
    return html`
   <style include="normalize webflow styles">

      </style>


<div class="section">
    <div class="container">
      <div class="div-block-18">
        <h1 class="heading">Question & answers</h1>
        <p class="paragraph">Explore our community features, case studies, opinion pieces, and more</p>
      </div>

      <cnnv-questions></cnnv-questions>

</div>
</div>




   












    `;
  }


ready() {
  super.ready();


}
}
window.customElements.define('my-view5', MyView5);
