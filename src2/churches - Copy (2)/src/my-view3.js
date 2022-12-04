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
import './latest-post.js';
import './all-enteries-page.js';
import './news-enteries-page.js';
import './events-enteries-page.js';
import './post-page.js';

class MyView3 extends PolymerElement {
  static get template() {
    return html`
   <style include="normalize webflow styles">



      </style>




 






   


<app-route 
route="{{route}}" pattern="/list/:category" data="{{categoryData}}" active="{{allActive}}">
</app-route>

<app-route 
route="{{route}}" pattern="/list" active="{{listActive}}">
</app-route>

<app-route 
route="{{route}}" pattern="/post/:id" data="{{postData}}" active="{{postActive}}">
</app-route>


 <dom-if if="[[listActive]]">
<template>
 <all-enteries-page categoryPage="all"></all-enteries-page>



</template>
</dom-if>

<dom-if if="[[postActive]]">
<template>
<post-page post="{{postData.id}}" active="{{postActive}}"></post-page>
</template>
</dom-if>






    `;
  }


ready() {
  super.ready();


}
}
window.customElements.define('my-view3', MyView3);
