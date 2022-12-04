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
import '@polymer/skeleton-carousel/skeleton-carousel.js'; 

class WhatWeDo extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">


  /* START HOMEPAGE WHAT WE DO */


#what-we-do {
  width: 100%;

    background-color: var(--app-primary-color);
  display: flex;
  align-items: center;
    box-sizing: border-box32
padding: var(--app-desktop-padding);
padding-top: 108px;
padding-bottom: 180px;  

}

#what-we-do > div {
  width: var(--app-content-wdith);
  margin: 0 auto;
       text-align: center;

}




#what-we-do > div h1 {
  color: #fff;
  margin: 50px 0 154px 0;
font-size: 48px;
  line-height: 1.25em;
      width: 41%;
    margin: 80px auto 173px auto;
}

#what-we-do > div h5 {
 background-color: #fff;
 color: var(--app-primary-color);
 position: relative;


}

#what-we-do section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:calc(100%);
}

#what-we-do > div div{
  display: block;

  background-color: #fff;
      padding-bottom: 76px;
          position: relative;
    width: 33%;
            
          

}

#what-we-do > div div div {
    margin-top: -32px;
}

#what-we-do > div div div:first-child{
    position: relative;
    top: -68px;

    margin: 0;
      background-color: transparent;

}

#what-we-do > div div div {
    width: 100%;
    box-sizing: border-box;    
    padding: 0 32px 8px;
}

#what-we-do > div div div p {
  margin-bottom: 32px;
  padding-right: 0;
    margin-bottom: 32px;
}

#what-we-do h2 {
    color: var(--app-primary-color);
    margin-top: 0;
    margin-bottom: 16px;
    line-height: 1.25em;    
}
#what-we-do p {
    font-size: 16px;
}
#what-we-do .button {
    font-size: 18px;
}

.more {
   
  
        background-color: transparent !important;
}


iron-image {
  width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}



 @media only screen and (max-width: 1120px) and (min-width: 768px)  {

#what-we-do > div h1 {
  font-size: calc(2.58vw + 12px);
 }

}


 @media only screen and (max-width: 1024px) {

#what-we-do section {
  width: 100%;
}

#what-we-do > div h1 {
  padding-right: 64px;
 }

#what-we-do section {
    flex-direction: column;
  }

  #what-we-do > div {
      padding-right: 0;

  }
#what-we-do > div div{
    width: 100%;    
      display: block; 
      margin-bottom: 64px;
    padding-bottom: 0;
         
}
#what-we-do > div div div p {
  
    padding-right: 16px;
 
}



.more {

 
    bottom: -5px;
     padding-right: 0 !important;

}


#what-we-do > div div div p {
  margin-bottom: 0;
}


#what-we-do > div div div:first-child{
    position: relative;
    width: 43.25%;

    margin:0;

    float: left;
    padding-top: 30.2%;
    margin-left: 4.5%;
    top: -32px;

  }

#what-we-do > div div div:nth-child(2) {
    width: 50%;
    padding: 38px 28px 0 16px;
       float: right
}

#what-we-do > div div div:last-child {
    width: 48.5%;
    height: 40px;
    float: right;
    clear: left;
    text-align: right;
 }


#what-we-do h2 {
      font-size: 25px;
    margin-bottom: 20px;
}
#what-we-do p {
    font-size: 16px;
}
#what-we-do .button {
    font-size: 18px;
}
}



 @media only screen and (max-width: 1024px) and (min-width: 769px) {


#what-we-do > div div div:nth-child(2){
margin-bottom: 0;
}

.more {
      position: relative !important;
  float: right;
        background-color: transparent !important;
}


.small-headline {
    font-size: 28px;

  }

#what-we-do > div div div:last-child {
    width: 48.5%;
    height: auto;
    float: right;
    text-align: left;
    padding: 0;
    clear: right;
    margin-top: 32px;

 
}

}




  @media only screen and (max-width: 768px) {

#what-we-do {

padding: var(--app-tablet-padding);
padding-top: 100px;
padding-bottom: 100px;
}

#what-we-do h2 { 
    margin-bottom: 16px;
      font-size: 22px;

}

.more {
 margin-top: 31% !important;
 bottom: auto;
}

}


  @media only screen and (max-width: 1920px) {
#what-we-do {

}
h1 span {
    color: var(--app-primary-color);
  background-color: var(--app-button-color);
      padding: 4px 10px;
}


#what-we-do > div h1 {
    padding-right: 0;
}
#what-we-do > div > section > div {

    border-radius: 2px;
        box-sizing: border-box;
    border-left: 8px solid #c1f7d5;
    border-bottom: 8px solid #c1f7d5;
   
}

#what-we-do > div div{
    width: calc(33% - 12px);
    display: flex;
    flex-direction: column;

    align-items: center;
    padding-bottom: 96px;
}

#what-we-do > div div div:first-child{
 
    width: calc(100% - 64px);
    padding-top: 53.25% !important;
    float: none;
    margin-left: 0;
        border-bottom: 4px solid #c1f7d5;
    border-right: 4px solid #c1f7d5;
 

  }

#what-we-do > div div div{
   
    float: none;
    padding: 0 32px !important;

  }
#what-we-do > div div div:last-child {

 height: auto;
 }
#what-we-do h2 {
    text-align: center;
    font-size: 30px;
}
#what-we-do p {
    text-align: center;
    font-size: 16px;
}

#what-we-do .button {
    font-size: 16px;
    position: absolute;
    bottom: 0;
    margin: 32px 0;
}
.more { 


}


}


  @media only screen and (max-width: 480px) {
#what-we-do {
      padding: var(--app-mobile-padding);
    padding-top: 64px;
    padding-bottom: 0;
}
#what-we-do h2 {
  font-size: 20px;
    margin-bottom: 8px;
}
#what-we-do > div h1 {

    margin: 40px 0 154px 0;

}

}

  @media only screen and (max-width: 375px) {
#what-we-do {
      padding: var(--app-mobile-small-padding);
    padding-top: 64px;
    padding-bottom: 0;
}


}

      </style>
  


<div id="what-we-do">
            <div>     
           
            <h5>What we do</h5>
             <h1 class="large-headline"><span>No child</span> should experience violence.</h1>

              <section>



     <div>
              <div>
             <iron-image sizing="cover" preload placeholder="" fade src="./src/images/advocacy.png"></iron-image>

              </div>
              <div>
               <h2 class="small-headline">We Encourage.</h2>
                <p class="headline-body">Encourage religious leaders and communities to take a lead in promoting law reform to give children equal protection and support parents in positive non-violent discipline.</p>
               </div>
              <a name="view4" href="[[rootPath]]view4" class="button">Read more</a>
              </div>

     <div>
              <div>
             <iron-image sizing="cover" preload placeholder="" fade src="./src/images/education.png"></iron-image>
              </div>
              <div>
               <h2 class="small-headline">We Challenge.</h2>
                <p class="headline-body">
Challenge those who use their religion to justify physical punishment of children. Religious values of compassion, respect for human dignity and non-violence are not compatible with corporal punishment of children.</p>
               </div>
             <a name="view4" href="[[rootPath]]view4" class="button">Read more</a>
              </div>


     <div>
              <div>
             <iron-image sizing="cover" preload placeholder="" fade src="./src/images/tree.png"></iron-image>

              </div>
              <div>
               <h2 class="small-headline">We Invite.</h2>
                <p class="headline-body">
Invite religious leaders to support legal reform. We are committed to taking leadership and working in solidarity with people from all sectors towards ending all corporal punishment of children.   </p>
               </div>
               <a name="view4" href="[[rootPath]]view4" class="button">Read more</a>
              </div>






       </section>
            </div>
            </div>



  


    `;
  }

}




window.customElements.define('what-we-do', WhatWeDo);
