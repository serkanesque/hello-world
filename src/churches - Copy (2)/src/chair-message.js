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

class ChairMessage extends PolymerElement {
  static get template() {
    return html`

      <style include="shared-styles">
      

   /* START TEAM  */

   #team  {
width: 100%;
    background-color: #fff;
    display: flex;
    padding: 0 16px;
    box-sizing: border-box;
 } 

    #team  > div {

       width: var(--app-content-wdith);  
    margin: 0 auto;

        padding-top: 100px;
 }   

  #team div > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 64px;
  }
    #team  div > div * {
    width: 50%;
  }
   #team h5 {
    background-color: var(--app-primary-color);
    color: white;
    display: inline-block;
    padding: 12px 0;
    width: 160px;
    position: relative;
    margin: 0;
    text-transform: uppercase;
    text-align: center;
    font-weight: normal;
 }


      </style>



  


    `;
  }
}

window.customElements.define('chair-message', ChairMessage);
