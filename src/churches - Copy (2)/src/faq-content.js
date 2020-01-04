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
import './cnnv-questions.js';

class FaqContent extends PolymerElement {
  static get template() {
    return html`
<style include="normalize styles webflow ">
.div-block {

   background-color: #8e24aa;
}
plastic-image {
  width: 100%;
    height: 740px;
      background-color: #f5f5f5;
}

 </style>


 <div class="section top">
    <div class="div-block">
      <div class="div-block-2">
        <h1 class="heading _64px">We challenge the view that corporal punishment is a Biblical doctrine</h1>
        <p class="paragraph">We believe that positive, non-violent discipline best models Christ’s teachings.</p>
      </div>
      <div class="div-block-3">
<plastic-image sizing="cover" placeholder="/src/images/placeholder-m.png" preload srcset="http://churchesfornon-violence.org/imgs/faq-hero.png"></plastic-image>

      </div>
    </div>
  </div>


<div class="section-2 white">
    <div class="div-block-4 narrow">
      <h2 class="heading-2 page-ttile">Frequently Asked Questions</h2>

    

   


      <cnnv-questions></cnnv-questions>


   </div>
      </div>



    `;
  
  }


ready() {
  super.ready();


}
scrollIntoView(e) {
   var sectionId = e.target.getAttribute('section-id');
  this.shadowRoot.querySelector('#' + sectionId + '').scrollIntoView();
}
}



window.customElements.define('faq-content', FaqContent);
