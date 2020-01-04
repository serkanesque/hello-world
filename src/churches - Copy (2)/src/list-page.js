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

class ListPage extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">

:host {
  display: block;
}




      </style>


<dom-if if="[[active]]">
<template>
<h1>List page</h1>
</template>
</dom-if>



  


    `;
  }

ready() {
  super.ready();
  console.log(this.name)

}
}

window.customElements.define('list-page', ListPage);
