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


class DidYouKnow extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">

  /* START DID YOU KNOW */


.more {
  margin-top: 57px;
  width: 100% !important;
}
#our-charter {
  width: 100%;
    background-color: var(--app-primary-color);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
padding: var(--app-desktop-padding);
box-sizing: border-box;
padding-bottom: 164px;

}

#our-charter > div {
width: 1120px;
    margin: 0 auto;
        display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 100px;   
    flex-wrap: wrap;
    position: relative; 
    height: auto;
}


#our-charter > div > div {
width: 49%;


box-sizing: border-box;
min-height: 416px;
}

#our-charter > div > div:first-child {

background-color:  var(--app-button-color); 
    padding: 48px 64px 84px;
box-sizing: border-box;

    align-items: center;
    display: flex;
    flex-wrap: wrap;
}

.large-headline {
      font-size: 28px;
      margin-top:0;
          line-height: 1.28em;
}

iron-image {
  height: 100%;
    width: 100%;
}

h2 {
  margin-bottom: 0;
}

 @media only screen and (max-width: 1120px) {
#our-charter > div > div:first-child {
  padding: 4%;

}




.headline-body {
  padding-right: 0;
}
}

 @media only screen and (max-width: 1080px) {


.large-headline {
    font-size: 26px;

  }
}

 @media only screen and (max-width: 768px) {

#our-charter {
  padding: var(--app-tablet-padding);
  padding-bottom: 64px;
}

#our-charter div {
  margin-top: 20px;
}
.large-headline {
      font-size: 28px;
}
#our-charter > div > div {
  width: 100%;
  box-sizing: border-box;
      min-height: 312px;
}

#our-charter > div > div:first-child {
    padding: 6%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    order: 2;
    margin-top: 32px;
    text-align: center;
}

}

  @media only screen and (max-width: 600px) {
 .large-headline {
      font-size: 24px;
}
}

  @media only screen and (max-width: 480px) {
    #our-charter {
  padding: var(--app-mobile-padding);
}

  }
      </style>
  


<div id="our-charter">

    <div>
     <div>
      <h2 class="large-headline">
       All children are entitled to equal respect for their inherent human dignity.
      </h2>

      <p class="headline-body">
Working actively towards a 
culture of respect for all children 
is a key towards ending violence 
against children.
      </p>
  
<a href="#">Read the Charter for Religious Communities</a>

      </div>
     <div><iron-image sizing="cover" preload placeholder="" fade src="./src/images/charter.png"></iron-image>
<div>


    </div>

</div>



  


    `;
  
  }

}

window.customElements.define('our-charter', DidYouKnow);
