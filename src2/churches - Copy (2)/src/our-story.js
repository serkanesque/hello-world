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


class OurStory extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">

  /* START DID YOU KNOW */


.more {
  margin-top: 57px;
  width: 100% !important;
}
#our-story {
  width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
padding: var(--app-desktop-padding);
box-sizing: border-box;
padding-bottom: 164px;

}

#our-story > div {
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

#our-story > div > div  {
  width: 47%;

}

.large-headline {
    font-size: 28px;
    margin-top: 0;
    line-height: 1.28em;
    color: #fff;
}


 #our-story > div > div:nth-of-type(3) .large-headline {
      font-size: 44px;
     color: var(--app-primary-color);
}

#our-story > div > div:nth-of-type(1)  {
  width: 100%;
  margin-bottom:100px;
}

#our-story > div > div > div {
   width: 100%;
   height: 312px;

}

#our-story > div > div div:nth-of-type(1) {


    background-color: var(--app-primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    box-sizing: border-box;
    margin-bottom: 64px;
    flex-wrap: wrap;



}
#our-story > div > div div:nth-of-type(1) p {

color: #fff;
}

iron-image {
  height: 100%;
    width: 100%;
}

.title {
      width: 100%;
    display: flex;
    justify-content: center;
}
h5 {
  position: relative;
  margin: 0;
}

.headline-body {
  padding-right:0;
  width: 100%;
}
p {

    color: var(--app-primary-color);
   font-family: komet, sans-serif;
   font-weight: 300;
   font-size: 18px;
    letter-spacing: -.015em;

}

p span {
      font-size: 14px;
    line-height: 1.33em;
    display: inline-block;
       opacity: 0.65;
}

 @media only screen and (max-width: 1024px) {

#our-story {
      padding: var(--app-tablet-padding);
      padding-bottom: 110px !important;
}
#our-story > div {
      margin-top: 64px;
}  
#our-story > div > div:nth-of-type(1) {

    margin-bottom: 64px;
}
    p {
    font-size:17px;
        padding-right: 32px;
    }

#our-story > div > div:nth-of-type(3) .large-headline {
    font-size: 28px;
    }

#our-story > div > div:nth-of-type(2) div {
      width: calc(50% - 16px);
    }

#our-story > div > div div:nth-of-type(1) {
  padding: 20px;
  order: 2;
}
.large-headline {
  font-size: 24px;
}
.headline-body {
  font-size: 15px;

}

#our-story > div > div:nth-of-type(2){
    width: 100%;
    display: flex;
        justify-content: space-between;

}
#our-story > div > div:nth-of-type(3){
    width: 100%;

  
}

}

 @media only screen and (max-width: 768px) {
#our-story > div > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}


#our-story > div > div:nth-of-type(2) div {
      width: 100%;
      display: none;
    }

#our-story > div > div div:nth-of-type(1) {
  order: 1;
  margin-top: 32px;
      display: none;
}
.large-headline {
    font-size: 28px;
    padding-right: 32px;
    display: none;
}
#our-story > div > div:nth-of-type(1) {
    margin-bottom: 32px;
}

  }

   @media only screen and (max-width: 480px) {
    #our-story {
    padding: var(--app-mobile-padding);

}

p {

    padding-right: 0;
}
.large-headline {
    font-size: 22px;
    padding-right: 8px;
}
   }


      </style>
  


<div id="our-story">

    <div>  
    <div class="title">
      <h5>Our story</h5>
      </div>

      <div>
        <div>    
         <h2 class="large-headline"> 
          "No violence against children is justifiable; all violence against children is preventable."
        </h2>
        <p class="headline-body">Paulo Sérgio Pinheiro<br /> <span>UN Secretary-General’s Study on Violence against Children</span></p>
        </div>
      <div>     <iron-image sizing="cover" preload placeholder="" fade src="./src/images/charter.png"></iron-image>
</div>
    </div>


      <div>
       <h1 class="large-headline">What we do</h1>
        <p>
         The Churches’ Network for Non-violence (CNNV) was formed to broaden religious support for law reform to end corporal punishment of children and other cruel and humiliating forms of violence against children and to challenge faith-based justification for it. CNNV aims to work with others towards developing a network of support, practical resources and information and to encourage people in all religious communities to play an active role in the movement for reform.
        </p>
        <p>
CNNV rejects all forms of violence against children including corporal punishment in all its forms. We believe positive, non-violent discipline best models the example set by Jesus. All the recorded encounters between Jesus and children were gentle, respectful and compassionate.
        </p>
        <p>
CNNV believes that religious leaders and their communities and faith-based organisations should be in the forefront of work towards the prohibition and elimination of all forms of violence against children including corporal punishment.
        </p>
        <p>We aim to work with others in forming a network of support, information and practical resources to assist people in religious communities to raise the status of children and promote positive, non-violent discipline. We aim to work with people from all religions in activities and events.</p>
      </div>




     

 
    



</div>



  


    `;
  
  }

}

window.customElements.define('our-story', OurStory);
