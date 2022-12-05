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

class ChildStories extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">

    /* START STORIES */

:host {
background-color: #fff;
padding: 132px 0;
}
#stories {
  width: 100%;
    background-color:#fff;

padding:  var(--app-desktop-padding);
box-sizing: border-box;
height: auto;
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
    line-height: 1.42em;
  }

  #stories span {

      font-size: 14px;
      display: block;
      margin-top: 20px;
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



 @media only screen and (max-width: 900px) {

#stories > div > div:first-child > div {
    width: 120%;
        margin-left: 40px;

}
}


  @media only screen and (max-width: 800px) {
:host {

padding:85px 0 64px;
}

#stories {

padding:  var(--app-tablet-padding);

    padding-bottom: 64px;
height: auto;
    align-items: flex-start;

}

#stories > div > div:first-child > div {
    margin-left: 64px;
    top: -64px; 
    width: 100%;
}

#stories > div > div:first-child {
      width: calc(100% - 64px);
    order: 1;
}

#stories > div > div:last-child {
  width: 100%;
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
    margin-left: 64px;
}
#stories > div > div:first-child div > div {
    padding: 64px;
}

#stories h3 {
    font-size: 22px;
}

}
 @media only screen and (max-width: 700px) {
#stories > div > div:first-child div > div {
    padding: 40px;
}
}

 @media only screen and (max-width: 480px) {
#stories {
    padding: var(--app-mobile-padding);
  }
#stories > div {

    justify-content: center;
}
#stories > div > div:first-child div > div {
    padding: 32px;
}
#stories > div > div:first-child > div {
  position: relative;
}

#stories > div > div:last-child, #stories > div > div:first-child, #stories > div > div:first-child > div {
  width: 100%;
}
#stories > div > div:first-child > div {
margin-left: 0;
 margin-top: 95px;
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

      /* END STORIES */




      </style>
  
 <div id="stories">
 <div>
 <div>

 <div> 
 <div id="quote"><h3 class="small-headline">
“I am a person who was helped by this organization. Before they gave me assistance, I was really struggling with this issue, but now my life is better.”
<span class="caption">BALKI, FARMER AND MOTHER IN NIGER</span></h3>
</div>
</div>



 </div><h5>Stories</h5>
 <div id="img">

 </div>
 </div>
 </div>



  


    `;
  }

   constructor() {
        super();
        this._boundListener = this._myLocationListener.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('resize', this._boundListener);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('resize', this._boundListener);
    }
    _myLocationListener(){ 

          var winWidth =  window.innerWidth;  
           var sHeight =  this.shadowRoot.querySelector('#stories').clientHeight;
           var iHeight =  this.shadowRoot.querySelector('#img').clientHeight;  
           var qHeight =  this.shadowRoot.querySelector('#quote').clientHeight; 

        if(window.innerWidth<800 && window.innerWidth>528 ) {        
           var offset =  iHeight + (qHeight - 64) + "px";  
           this.shadowRoot.querySelector('#stories').style.height = offset;
           console.log("1")
         } else if (window.innerWidth<528) {
           var offset =  iHeight + qHeight + "px";  
           this.shadowRoot.querySelector('#stories').style.height = offset;
                   console.log("2")
         } else {
           this.shadowRoot.querySelector('#stories').style.height = "auto";
                   console.log("3")
         }

      
      
    }
}

window.customElements.define('child-stories', ChildStories);
