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

}
#did-you-know {
  width: 100%;
    background-color: var(--app-button-color);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
padding: var(--app-desktop-padding);
box-sizing: border-box;

  background-image: url('./src/images/did-you-know2.png');
  background-repeat:  no-repeat;
      padding-bottom: 64px;
}

#did-you-know > div {
width: var(--app-content-wdith);
    margin: 0 auto;
        display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 128px;
}

#did-you-know > div div {
    width: 48.575%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    
}
#did-you-know > div > div:last-child {

  }


#did-you-know > div > div:last-child  > div {
    height: 250px;
    width: 100%;

    margin-bottom: 16px;
    box-sizing: border-box;
    padding: 40px 50px;
    display: flex;   
              box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 2px;
    background-color: #fff; 

}

#did-you-know > div > div:last-child > div:nth-of-type(1) {
    padding: 64px 50px;
}

#did-you-know > div > div:last-child  > div div:first-child {
    width: 90%;

}
#did-you-know > div > div:last-child  > div div:last-child {
   width: 8%;
    margin-top: 32px;
}

#did-you-know > div > div:last-child  > div div:last-child a {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: block;
    background-color: var(--app-button-color);
    margin-bottom: 12px;
        float: right;
    clear: both;
        margin-right: 6px;

}

h2 {
font-size: calc(2.58vw + 24px);
color: #fff;
margin: 0;
line-height: 1.25em;  
}

h3 {
     color: var(--app-primary-color); 
}

.twitter {
      background-image: url(src/twitter.svg);
        background-repeat: no-repeat;
    background-size: 55%;
    background-position: 50% 50%;
}

.facebook {
      background-image: url(src/facebook.svg);
        background-repeat: no-repeat;
    background-size: 50%;
    background-position: 50% 50%;
}


#did-you-know > div div:last-child div h3 {
  font-size: 48px;
    margin: 0 0 10px 0;
}

#did-you-know > div div:last-child div p {
  font-size: 17px;
    margin: 0;
}

#did-you-know h5 {
    background-color: var(--app-primary-color);
    color: white;
    display: inline-block;
    padding: 12px 0;
    width: 160px;
    position: absolute;
    margin: -21px 0 0 50px;
    text-transform: uppercase;
    text-align: center;
    font-weight: normal;
}

.headline-body-large {
      font-size: 17px;
    margin: 0;
    padding-right: 50px;
        text-align: left;
}


@media only screen and (min-width: 1120px) {

h2 {
    font-size: 72px;
}
}

 @media only screen and (max-width: 1024px) {

#did-you-know > div > div:last-child {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#did-you-know h5 {
    margin: -21px 0;
}

#did-you-know > div > div:last-child  > div {
        padding: 48px 32px 32px;
    }

#did-you-know > div div:first-child {
        width: 40%;
    }

#did-you-know > div div:last-child {
        width: 60%;
    }

#did-you-know > div > div:last-child > div:nth-of-type(1) {
    padding: 52px 32px 32px;
}



}

 @media only screen and (max-width: 900px) {

#did-you-know > div div:last-child {
    width: 55.85%;
}

#did-you-know > div > div:last-child > div {
    height: auto;
    }



#did-you-know > div > div:last-child > div {
    padding: 32px 32px 24px;
}

#did-you-know > div > div:last-child > div:nth-of-type(1) {
    padding: 40px 32px 24px;
}

#did-you-know > div > div:last-child > div div:last-child {
    margin-top: 10px;
}

#did-you-know > div div:last-child div h3 {
  font-size: 36px;
}

#did-you-know > div div:last-child div p {
  font-size: 16px;
}
}




 @media only screen and (max-width: 768px) {

#did-you-know {
      padding: var(--app-tablet-padding);
      padding-bottom: 80px;
}

#did-you-know > div  {
    flex-wrap: wrap;
    margin-top: 72px;
}

#did-you-know > div div {
    width: 100% !important;
}

#did-you-know > div >  div:last-child {
  margin-top: 80px;
  }

  #did-you-know > div > div:last-child > div div:first-child {
    width: 85% !important;
}
  #did-you-know > div > div:last-child > div div:last-child {
    width: 15% !important;
}

#did-you-know > div div:last-child div h3 {
    font-size: 36px;
}

#did-you-know > div div:last-child div p {
  font-size: 16px;
}

}
@media only screen and (max-width: 480px) {
#did-you-know {
padding: var(--app-mobile-padding);
padding-bottom: 80px;
  }

#did-you-know > div > div:last-child > div {
    padding: 32px 24px 24px;
}
#did-you-know > div > div:last-child > div:nth-of-type(1) {
    padding: 40px 24px 24px;
}
  #did-you-know > div div:last-child div p {
    padding-right: 20px;
  }
}
 @media only screen and (max-width: 425px) {


  #did-you-know > div div:last-child div h3 {
      font-size: 24px;
  }

  #did-you-know > div div:last-child div p {
    font-size: 14px;
  }
 }
@media only screen and (max-width: 375px) {
#did-you-know {
padding: var(--app-mobile-small-padding);
padding-bottom: 80px;
  }
}
  /* END DID YOU KNOW */




      </style>
  


          <div id="did-you-know">
            <div>
              <div>
                <h2 class="accent">No child should experience violence.</h2>
              <a name="view4" href="[[rootPath]]view4" class="button">Take action</a>

              </div>
              <div>
                <h5>Did you know</h5>

            <div>
                  <div>
                    <h3 class="large-headline">732 million</h3>
                    <p class="headline-body-large">
School-age children between 6 and 17 years live in countries where corporal punishment at school is not fully prohibited.                     </p>
                    </div>
                    <div>
                      <a class="twitter" href="" alt=""></a>
                      <a class="facebook" href="" alt=""></a>
                    </div>
                </div>  

                <div>
                  <div>
                    <h3 class="large-headline">Only 10%</h3>
                    <p class="headline-body-large">
Of the world’s children live in states where the law recognises their right to equal protection from assault.
                    </p>
                    </div>
                    <div>
                      <a class="twitter" href="" alt=""></a>
                      <a class="facebook" href="" alt=""></a>
                    </div>
                </div>  

                <div>
                  <div>
                    <h3 class="large-headline">In 34 states</h3>
                    <p class="headline-body-large">
Children convicted of an offence may be sentenced to corporal punishment under criminal, religious and/or traditional law.
                    </p>
                    </div>
                    <div>
                      <a class="twitter" href="" alt=""></a>
                      <a class="facebook" href="" alt=""></a>
                    </div>
                </div>                  

      

             



              </div>
            </div>
          </div>



  


    `;
  }
}

window.customElements.define('did-you-know', DidYouKnow);
