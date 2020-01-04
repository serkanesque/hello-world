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

class Article extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">


  /* START HOMEPAGE HERO */

#hero {
  width: 100%;
  height: 672px;
  background-color: var(--app-primary-color);
  background-image: url('./src/images/article.png');
  background-repeat:  no-repeat;
  background-size: cover;
  display: flex;
      background-position-y: 50%;
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
             flex: 1;
}

#hero > div div {
  height: auto;  
}

#hero > div > div div:first-child {
   width: 41%;
    align-self: flex-start;
    order: 2;
}
#hero >  div > div div:last-child {

     background-color: #fff;
  padding: 0px 64px 64px;
  box-sizing: border-box;
   width: 49%;
  
}



#hero h1 {
font-size: calc(2.58vw + 24px);
color: #fff;
margin: 0;

  line-height: 1.2em;  
}


#hero h2 {
  margin-top: 72px;
  margin-bottom: 20px;
  line-height: 1.4em;  
font-size: 28px;
   

}


#hero .accent {
      margin-top: 0px;
}

 @media only screen and (min-width: 1120px) {
#hero h1 {
    font-size: 72px;
 }
}
 @media only screen and (max-width: 1120px) {

#hero > div > div div:last-child {
      width: 57%;
}

  #hero {
    height: calc(500px + 10vw);
}
#hero > div {
    height: auto;

}
#hero h2 {
  font-size: 28px;
  margin-top: 64px;
 }

 #hero > div > div div:last-child {

    padding: 0px 40px 40px;

}
}

 @media only screen and (max-width: 768px) {

#hero > div > div div:first-child {
  order: 0;
}
#hero {
  height: auto;

}

#hero h2 {
  font-size: calc(2vw + 12px)

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
#hero h2 {
    margin-top: 48px;

}
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
                <h1 class="accent">#stop<br />violence<br />against</br />children</h1>
                </div>

                <div>
                <h5>The Issue</h5>
                <h2 class="large-headline">We aim to broaden religious support for law reform to end corporal punishment of children and to challenge faith-based justification for it.</h2>
                <a href="#">Read more</a>
                </div>
                </div>         
              </div>
            </div>



  


    `;
  }
}

window.customElements.define('article', Article);
