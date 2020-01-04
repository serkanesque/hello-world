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
width: 1100px;
    margin: 0 auto;
        display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 100px;   
    flex-wrap: wrap;

    position: relative;
        left: 10px;

}

#our-charter > div > div {
    width: calc(50% - 24px);
        display: flex;
  

        border: 1px dotted #fff;
        height: 160px;
        margin-bottom: 20px;

}


#our-charter > div > div div:first-child {
    width: 11%;
    display: flex;
    justify-content: center;

        align-items: center;
        position: relative;
  }
#our-charter > div > div div:nth-child(2) {
    width: 74%;
    display: flex;
    justify-content: center;

        align-items: center;
  }

#our-charter > div > div div:last-child {
      width: 15%;
    display: flex;
    justify-content: center;

        align-items: center;
        flex-direction: column;
            
  }

#our-charter > div > div div:last-child a{
      width: 32px;
    height: 32px;
    border-radius: 50%;
    display: block;
    background-color: var(--app-button-color);
    margin-bottom: 12px;
    float: right;
    clear: both;
  }

#our-charter > div > div div:last-child a:last-child{
    margin-bottom: 0;
 
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

.large-headline {
    color: var(--app-primary-color);
    margin: 0;
    position: absolute;
    left: -20px;
    padding: 12px 20px;
    font-size: 28px;
    background-color: #fff;

    box-sizing: border-box;
}
p.headline-body {
  color: #fff;
    margin: 0;
        padding-right: 24px;
}
span {
  text-transform: uppercase;
}
      </style>
  


      <div id="our-charter">
          <div>

              <div>
                <div><h1 class="large-headline">1.</h1></div>
                <div><p class="headline-body"><span>All children</span> are entitled to equal respect for their 
                inherent human dignity.</div>
                <div>           
                  <a class="twitter" href="" alt=""></a>
                  <a class="facebook" href="" alt=""></a></div>
              </div>

              <div>
                <div><h1 class="large-headline">2.</h1></div>
                <div><p class="headline-body"><span>All children</span> are entitled to grow up in family and all other settings free from
corporal punishment and all other forms of violence and humiliating treatment.</div>
                <div>           
                  <a class="twitter" href="" alt=""></a>
                  <a class="facebook" href="" alt=""></a></div>
              </div>

              <div>
                <div><h1 class="large-headline">3.</h1></div>
                <div><p class="headline-body"><span>All children</span> have the right to speak out and be listened to.</div>
                <div>           
                  <a class="twitter" href="" alt=""></a>
                  <a class="facebook" href="" alt=""></a></div>
              </div>    

              <div>
                <div><h1 class="large-headline">4.</h1></div>
                <div><p class="headline-body"><span>All adults</span> have the responsibility to enable children to feel safe enough to
speak out when they feel hurt or threatened.</div>
                <div>           
                  <a class="twitter" href="" alt=""></a>
                  <a class="facebook" href="" alt=""></a></div>
              </div>                             
            <div>
                <div><h1 class="large-headline">5.</h1></div>
                <div><p class="headline-body"><span>All children</span> are entitled to positive, non-violent relationships with the adults
who care for them.</div>
                <div>           
                  <a class="twitter" href="" alt=""></a>
                  <a class="facebook" href="" alt=""></a></div>
              </div>    

              <div>
                <div><h1 class="large-headline">6.</h1></div>
                <div><p class="headline-body">The protection of children from violence is the responsibility of the whole
community.</div>
                <div>           
                  <a class="twitter" href="" alt=""></a>
                  <a class="facebook" href="" alt=""></a></div>
              </div>   
       <div>
                <div><h1 class="large-headline">7.</h1></div>
                <div><p class="headline-body"><span>All children</span> are entitled to learn about the United Nations Convention on the
Rights of the Child in a way that is appropriate to their age and development.</div>
                <div>           
                  <a class="twitter" href="" alt=""></a>
                  <a class="facebook" href="" alt=""></a></div>
              </div>    

              <div>
                <div><h1 class="large-headline">8.</h1></div>
                <div><p class="headline-body">All children are entitled to equal respect for their 
                inherent human dignity.</div>
                <div>           
                  <a class="twitter" href="" alt=""></a>
                  <a class="facebook" href="" alt=""></a></div>
              </div>  
     <div>
                <div><h1 class="large-headline">9.</h1></div>
                <div><p class="headline-body">All children are entitled to equal respect for their 
                inherent human dignity.</div>
                <div>           
                  <a class="twitter" href="" alt=""></a>
                  <a class="facebook" href="" alt=""></a></div>
              </div>    

              <div>
                <div><h1 class="large-headline">10.</h1></div>
                <div><p class="headline-body">All children are entitled to equal respect for their 
                inherent human dignity.</div>
                <div>           
                  <a class="twitter" href="" alt=""></a>
                  <a class="facebook" href="" alt=""></a></div>
              </div> 
          </div>
      </div>



  


    `;
  
  }

}

window.customElements.define('our-charter', DidYouKnow);
