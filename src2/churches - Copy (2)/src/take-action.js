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

class TakeAction extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
      

   /* START TAKE ACTION BAR */

#take-action section {
  width: 100%;
  height: 240px;
  background-color: var(--app-button-color);
  display: flex;
  align-items: center;
 padding: var(--app-desktop-padding);
    box-sizing: border-box;
}

#take-action section > div {
  width: var(--app-content-wdith);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
    margin-top: -12px;
}

#take-action section > div div{
  width: 25%;
   text-align: left;
}

.title {
    width: 100%;
    display: flex;
    justify-content: center;
}

p.headline-body {
    padding: 12px 48px 0 0 
}

h2.small-headline {
      font-size: 28px;

}

 h2 {
  color: var(--app-primary-color);
  margin-bottom: 0;
}

 @media only screen and (max-width: 768px) {
#take-action section  {

   padding: 40px 64px;
    height: auto;
}

#take-action section  > div {
flex-wrap: wrap;
}

#take-action section  > div div{
  width: 45%;

}
 h2 {
font-size: var(--app-medium-headline);
}

 }

   @media only screen and (max-width: 480px) {


    #take-action section  {
  
   padding: 40px 32px;
    height: auto;
}

 h2 {
font-size: var(--app-small-headline);
}
#take-action section > div div{
 font-size: 14px;
}
   }


   @media only screen and (max-width: 375px) {


    #take-action section  {
   padding: var(--app-mobile-padding);
   padding-top: 40px;
   padding-bottom: 40px;
}
#take-action section > div div {
    width: 100%;    text-align: center;
}

}
  /* END TAKE ACTION BAR */




      </style>

 <div class="title">
          <h5>Take action</h5>
          </div>
<div id="take-action">
          <section>          
            <div>     
             
              <div>
                <h2 class="small-headline">Learn</h2>
                <p class="headline-body">Get the facts about this issue and how we’re helping.</p>
              </div>
                            <div>
                <h2 class="small-headline">Get Involved</h2>
                <p class="headline-body">Get the facts about this issue and how we’re helping.</p>
              </div>
              <div>
                <h2 class="small-headline">Raise Awareness  </h2>
                <p class="headline-body">Get the facts about this issue and how we’re helping.</p>
              </div>
                   <div>
                <h2 class="small-headline">Share</h2>
                <p class="headline-body">Get the facts about this issue and how we’re helping.</p>
              </div>
            </div>
          </section>
          </div>

  


    `;
  }
}

window.customElements.define('take-action', TakeAction);
