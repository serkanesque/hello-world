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

class HeroHp extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">


  /* START HOMEPAGE HERO */

#hero {
  width: 100%;
  height: 672px;
  background-color: var(--app-primary-color);
  background-image: url('./src/images/hero2.png');
  background-repeat:  no-repeat;
  background-size: cover;
  display: flex;
      background-position-x: 70%;
}

#hero > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--app-content-wdith);
  height: 672px;
  margin: 0 auto;
  padding: var(--app-desktop-padding);
 
}

#hero > div > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
         flex-direction: row-reverse;
}

#hero > div div {
  height: auto;  
}

#hero > div > div div:first-child {
   width: 41%;
    align-self: flex-start;
}
#hero >  div > div div:last-child {

     background-color: #fff;
  padding: 0px 64px 64px;
  box-sizing: border-box;
   width: 49%;
       text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}



#hero h1 {
font-size: calc(2.58vw + 24px);
color: #fff;
margin: 0;

  line-height: 1.25em;  
}

#hero h2 {
  margin-top: 64px;
  margin-bottom: 20px;
  line-height: 1.25em;  

   

}

 @media only screen and (min-width: 1120px) {
#hero h1 {
    font-size: 72px;
 }
}
 @media only screen and (max-width: 1120px) {

  #hero {
    height: calc(500px + 10vw);
}
#hero > div {
    height: auto;

}
#hero h2 {
  font-size: calc(2.58vw + 12px);
 }

 #hero > div > div div:last-child {

    padding: 0px 40px 40px;

}
}

 @media only screen and (max-width: 768px) {

#hero {
  height: auto;

}

#hero > div {
  height: auto;
 padding: var(--app-tablet-padding)
}

  #hero > div >  div {
      flex-wrap: wrap;
          height: auto;
    }

    #hero > div div {
      width: 100% !important;
}

#hero > div >  div div:first-child {
   height: auto;
   align-self: auto;
   margin: 32px 0 56px 0;
}
#hero > div > div div:last-child {
    height: auto;
       margin: 32px 0 94px 0;
}

#hero h1 {
font-size: 44px;

}
  }


 @media only screen and (max-width: 480px) {

#hero > div div:first-child {

    text-align: left;
}

#hero > div {
  height: auto;
 padding: var(--app-mobile-padding)
}

#hero > div div:last-child {
     text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#hero > div > div div:last-child {
    padding: 0px 32px 32px;

}
 }
 @media only screen and (max-width: 480px) {
  #hero h1{
    font-size: 40px;
  }
 }

  /* END HOMEPAGE HERO */  


      </style>


  <div id="hero">
              <div>
<div>
                     <div>
                <h1 class="accent">#stop<br />corporal<br />punishment</h1>
                </div>

                <div>
                <h5>The Issue</h5>
                <h2 class="large-headline">Climate change 
poses the biggest 
threat to women in 
developing nations.</h2>
                <a href="#">Read more</a>
                </div>
                </div>         
              </div>
            </div>



  


    `;
  }
}

window.customElements.define('hero-hp', HeroHp);
