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
import './our-charter.js';
class MissionValues extends PolymerElement {
  static get template() {
    return html`

      <style include="shared-styles">
      
         /* START Mission  */
#mission  {
  width: 100%;
    background-color: var(--app-primary-color);
  display: flex;
  align-items: center;
    box-sizing: border-box;
      padding: var(--app-desktop-padding);
      padding-top: 80px;


}

#mission > div {
  width: var(--app-content-wdith);
  margin: 0 auto;
    margin-top: 18px;

}

#mission > div > div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#mission > div > div > div {
  width: 33%;
  margin-bottom: 64px;
  background-color: #fff;
}

#mission > div > div > div div {
  width: auto;
  height: auto;
}



#mission h1 {

      color: #fff;
    margin: 99px 0 20px 0;
    padding-right: 64px;
    line-height: 1.25em;
}

#mission h5 {
  background-color: #fff;
  color: var(--app-primary-color);
  margin: 0;
}
#mission h3 {
  color: #fff;
  font-size: 44px;
}

#mission h2 {
  color: var(--app-primary-color);
  font-size: 28px;
  margin: 0 0 12px 0;
  line-height: 1.22em;

}

#mission h6 {
  color: var(--app-button-color);
  font-size: 80px;
  margin: 0;

}


#mission p {
  color: var(--app-primary-color);
  font-size: 16px;
}
#mission .button {
    display: block;
    width: 160px;
    box-sizing: border-box;
    text-align: center;
}

 @media only screen and (max-width: 1024px) {
    #mission > div > div > div {
      width: 30%;
    }

}

 @media only screen and (max-width: 768px) {

#mission {
      margin-top: 0;
          padding: var(--app-tablet-padding);
                padding-top: 80px;
}
    #mission > div > div > div {
      width: 30%;
    }
#mission h1 {
  padding-right: 0;
    font-size: 28px;
    margin-top: 74px;
}

#mission h2 {
  font-size: 22px;
}

#mission p {
  font-size: 14px;
}
}

 @media only screen and (max-width: 480px) {
#mission {
 
          padding: var(--app-mobile-padding);
        }

    #mission div {
          display: flex;
    justify-content: center;
    }
    #mission > div > div > div {
      width: 45%;
    }


#mission h1 {
text-align: center;
}


#mission h2 {
  font-size: 16px;
}

#mission p {
  font-size: 14px;
}

 }



#mission > div > div > div {
  width: 24.5%;
  margin-bottom: 4px;
  background-color: #fff;
  height: 300px;
}

#mission > div > div > div:nth-of-type(2),#mission > div > div > div:nth-of-type(4) {
  min-height: 400px;
}
#mission > div > div > div:nth-of-type(5),#mission > div > div > div:nth-of-type(7)  {
height: 400px;
margin-top: -100px;
}

   /* END MISSION  */
   




      </style>


<div id="mission">
    <div>
    <h5>Mission & values</h5>
    <h1 class="large-headline">We commit ourselves to addressing violence against children in all its forms and we
resolve to work with others towards eliminating violence against children.</h1>
    
        

     

    </div>
</div>
    <our-charter></our-charter>
  


    `;
  }
}

window.customElements.define('mission-values', MissionValues);
