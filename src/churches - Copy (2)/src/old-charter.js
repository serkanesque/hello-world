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
}

ul {
  border: 1px solid #fff;
  list-style-type: none;
  margin: 0;
  padding: 0; 
  width: calc(50% - 2px); 
  float: left;
}

div ul:first-child {
      border-right: none;
}

ul li {
  width: 100%;
  float: left;
  color: #fff;
  height: 120px;  
  border-bottom: 1px solid #fff;
      font-family: komet, sans-serif;
    font-weight: 300;
    font-size: 16px;
    padding: 12px 32px 12px 16px;
    box-sizing: border-box;
}


ul li:nth-of-type(5),ul li:nth-of-type(10) {
  border-bottom: none;
}
span { 
  display: block;
  float: left;
  width: 13.5%;
}

li span:last-child {
  width: 86.5%;
}


.large-headline {
  color: #fff;
  font-size: 58px;
  line-height: 1em;
}

 @media only screen and (max-width: 768px) {

  #our-charter {
  padding: var(--app-tablet-padding);
  }

ul {
  border: 1px solid #fff;
  width: 100%; 

}

ul li {
  height: auto;
      min-height: 120px;
      padding-bottom: 20px;
}

div ul:first-child {
      border-right: 1px solid #fff;
}

div ul:last-child {
      border-top: none;
}


.large-headline {
  font-size: 44px;
}
 }

  @media only screen and (max-width: 480px) {


  #our-charter {
  padding: var(--app-mobile-padding);
  }

  ul {
    border: none !important;   
  }

  ul li {
        padding: 16px 0 24px 0;
        border-bottom: none;
    
      min-height: auto;
      
  }

  .large-headline {
        color: #c1f7d5;
  }

  }
      </style>
  


<div id="our-charter">

    <div>
      <ul>
        <li><span class="large-headline">1</span><span>All children are entitled to equal respect for their inherent human dignity.</span></li>
        <li><span class="large-headline">2</span><span> All children are entitled to grow up in family and all other settings free from
corporal punishment and all other forms of violence and humiliating treatment.</span></li>
        <li><span class="large-headline">3</span><span>All children have the right to speak out and be listened to.</span></li>
        <li><span class="large-headline">4</span><span>All adults have the responsibility to enable children to feel safe enough to
speak out when they feel hurt or threatened. </li>
                <li><span class="large-headline">5</span><span>All children are entitled to positive, non-violent relationships with the adults
who care for them.</span></li>
</ul>
<ul>
                        <li><span class="large-headline">6</span><span>The protection of children from violence is the responsibility of the whole
community.</span></li>
                        <li><span class="large-headline">7</span><span>All children are entitled to learn about the United Nations Convention on the
Rights of the Child in a way that is appropriate to their age and development.</span></li>

                        <li><span class="large-headline">8</span><span>All children are entitled to the highest standard of care and protection from
those who work with them.</span></li>

                        <li><span class="large-headline">9</span><span>Children who have endured any form of violence are entitled to emotional,
physical, spiritual and psychological support from people qualified to help
them.</span></li>
                        <li><span class="large-headline">10</span><span>All children are entitled to learn non-violent ways to resolve conflict.</span></li>
      </ul>

    </div>

</div>



  


    `;
  
  }

}

window.customElements.define('our-charter', DidYouKnow);
