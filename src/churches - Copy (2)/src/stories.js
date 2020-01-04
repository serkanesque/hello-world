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

class Stories extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">

    /* START STORIES */

#stories {
  width: 100%;
    background-color:#fff;
    height: auto;
padding: 0 16px;
box-sizing: border-box;
height: 824px;
display: flex;
    align-items: center;
}

#stories > div {
  width:var(--app-content-wdith);
  margin: 0 auto;
        display: flex;
    flex-direction: row;
    justify-content: space-between;

}

#stories > div > div:first-child {
  width: 46%;
    display: flex;
    align-items: center;
      position: relative;
          justify-content: center;
}

#stories > div > div:last-child {
  width: 64%;
  background-color: var(--app-button-color);
padding-top: 50.75%;
  display: flex;
  align-items: center;
}

#stories > div > div:first-child > div {
  width: 115%;
  color: white;
  background-color: var(--app-primary-color);
      position: absolute;
      margin-left: 7.5%;
}

#stories > div > div:first-child div > div{
  width: 100%;
  color: white;
  background-color: var(--app-primary-color);
      position: relative;
      margin-left: 0;
          padding: 64px;
    box-sizing: border-box;
}

#stories h5 {
    background-color: var(--app-primary-color);
    color: #fff;  
    z-index: 10;  
    margin-left: 715px;

  }

#stories h3 {
font-size: 28px;
margin: 0;
  }

  #stories span {
      text-transform: uppercase;
      font-size: 14px;
      display: block;
      line-height: 1.45em;
  }


 @media only screen and (max-width: 1140px) {

#stories > div > div:first-child div > div{
 padding: calc(64px - 2.5vw);
  padding-top: calc(64px - 1vw);
    padding-bottom: calc(64px - 1vw);
        }

#stories h3 {
  font-size: 2.5vw
  }
#stories h5 {
left: calc((100vw - 160px) - 21.25% );
    margin-left: 0;
}

 }

  @media only screen and (max-width: 768px) {
#stories > div > div:first-child {
      width: calc(100% - 64px);
    order: 1;
}

#stories > div > div:last-child {
    width: calc(100% - 64px);
  }
#stories > div > div:first-child > div {
  width: 102%;
}
#stories > div {
flex-wrap: wrap;
  }
#stories > div > div:last-child {
width: calc(100% - 64px);
    padding-top: 80.25%;
  }
#stories h5 {
left: auto;
    margin-left: 7.5%;
}

}

 @media only screen and (max-width: 480px) {
#stories {
     padding: var(--app-mobile-padding);
}

#stories > div {

    justify-content: center;
}

#stories > div > div:first-child > div {
  position: relative;
}

#stories > div > div:last-child, #stories > div > div:first-child, #stories > div > div:first-child > div {
  width: 100%;
}
#stories > div > div:first-child > div {
margin-left: 0;
margin-top: 32px;
}

#stories > div > div:last-child {
      padding-top: 100%;
}


#stories h5 {  
left: auto;

    margin-left: 0
}
 }

 @media only screen and (max-width: 375px) {
#stories {
     padding: var(--app-mobile-small-padding);
}
}

      /* END STORIES */




      </style>
  
 <div id="stories">
 <div>
 <div>

 <div> 
 <div><h3 class="small-headline">
“I am a person who was helped by this organization. Before they gave me assistance, I was really struggling with this issue, but now my life is better.”
<span>BALKI, FARMER AND MOTHER IN NIGER</span></h3>
</div>
</div>


 </div><h5>Stories</h5>
 <div>

 </div>
 </div>
 </div>



  


    `;
  }
}

window.customElements.define('stories', Stories);
