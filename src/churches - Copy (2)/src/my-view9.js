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
import '@polymer/app-layout/app-grid/app-grid-style.js';

import './faq-content.js';
import './publications-content.js';

class MyView9 extends PolymerElement {
  static get template() {
    return html`
   <style include="normalize styles webflow">
   


 </style>




 






   
<app-route 
route="{{route}}" pattern="/:page" data="{{routeData}}">
</app-route>



<app-route 
route="{{route}}" pattern="/publications" active="{{publicationsActive}}">
</app-route>


<app-route 
route="{{route}}" pattern="/faqs" active="{{faqsActive}}">
</app-route>








<dom-if if="[[publicationsActive]]">
  <template>
   
      <publications-content></publications-content>
 
  </template>
</dom-if>

<dom-if if="[[faqsActive]]">
  <template>

      <faq-content></faq-content>

  </template>
</dom-if>


















    `;
  }
  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
  console.log(this.route.path);
    this.page =  this.route.path;
  }

  _pageChanged(page) {
 
    
  }




  ready() {
  super.ready(); 
  this.page =  this.route.path;

}


}
window.customElements.define('my-view9', MyView9);

