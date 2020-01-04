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

class PublicationsList extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">


  /* START HOMEPAGE WHAT WE DO */


#publications-list {
  width: 100%;

    background-color: var(--app-primary-color);
  display: flex;
  align-items: center;
    box-sizing: border-box;

padding: var(--app-desktop-padding);
padding-top: 100px;
padding-bottom: 100px;  

}

#publications-list > div {
  width: var(--app-content-wdith);
  margin: 0 auto;
   

}




#publications-list > div h1 {
  color: #fff;
  margin: 40px 0 120px 0;
  padding-right: 96px;
  line-height: 1.25em;
}

#publications-list > div h5 {
 background-color: #fff;
 color: var(--app-primary-color);
 position: relative;


}

#publications-list section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:calc(100% - 32px);
}

#publications-list > div div{
  display: block;

  background-color: #fff;
      padding-bottom: 76px;
          position: relative;
    width: calc(31.18% - 20px);
            
          

}

#publications-list > div div div {
margin-top: 0;
}

#publications-list > div div div:first-child{
    position: relative;
    top: -32px;
    width: 100%;
    padding-top: 65.27%;
    margin: 0 0 0 10.3%;
      background-color: transparent;

}

#publications-list > div div div {
    width: 100%;
    box-sizing: border-box;    
    padding: 0 32px 8px;
}

#publications-list > div div div p {
  margin-bottom: 32px;
  padding-right: 0;
    margin-bottom: 32px;
}

#publications-list h2 {
    color: var(--app-primary-color);
    margin-top: 0;
    margin-bottom: 16px;
    line-height: 1.25em;    
}
#publications-list p {
    font-size: 16px;
}
#publications-list .button {
    font-size: 18px;
}

.more {
      position: absolute !important;
  
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

#publications-list > div h1 {
  font-size: calc(2.58vw + 12px);
 }

}


 @media only screen and (max-width: 1024px) {

#publications-list section {
  width: 100%;
}

#publications-list > div h1 {
  padding-right: 64px;
 }

#publications-list section {
    flex-direction: column;
  }

  #publications-list > div {
      padding-right: 0;

  }
#publications-list > div div{
    width: 100%;    
      display: block; 
      margin-bottom: 64px;
    padding-bottom: 0;
         
}
#publications-list > div div div p {
  
    padding-right: 16px;
 
}



.more {

 
    bottom: -5px;
     padding-right: 0 !important;

}


#publications-list > div div div p {
  margin-bottom: 0;
}


#publications-list > div div div:first-child{
    position: relative;
    width: 43.25%;

    margin:0;

    float: left;
    padding-top: 30.2%;
    margin-left: 4.5%;
    top: -32px;

  }

#publications-list > div div div:nth-child(2) {
    width: 50%;
    padding: 38px 28px 0 16px;
       float: right
}

#publications-list > div div div:last-child {
    width: 48.5%;
    height: 40px;
    float: right;
    clear: left;
    text-align: right;
 }


#publications-list h2 {
      font-size: 25px;
    margin-bottom: 20px;
}
#publications-list p {
    font-size: 16px;
}
#publications-list .button {
    font-size: 18px;
}
}



 @media only screen and (max-width: 1024px) and (min-width: 769px) {


#publications-list > div div div:nth-child(2){
margin-bottom: 0;
}

.more {
      position: relative !important;
  float: right;
        background-color: transparent !important;
}


.small-headline {
    font-size: 24px;
  }

#publications-list > div div div:last-child {
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

#publications-list {

padding: var(--app-tablet-padding);
padding-top: 100px;
padding-bottom: 100px;
}

#publications-list h2 { 
    margin-bottom: 16px;
      font-size: 22px;

}

.more {
 margin-top: 31% !important;
 bottom: auto;
}

}


  @media only screen and (max-width: 660px) {
#publications-list {

}

#publications-list > div h1 {
    padding-right: 0;
}

#publications-list > div div{
    width: 100%;
    display: flex;
    flex-direction: column;
        justify-content: flex-end;
    align-items: center;
    padding-bottom: 40px;
}

#publications-list > div div div:first-child{
 
    width: 80% !important;
    padding-top: 53.25% !important;
    float: none;
    margin-left: 0;

  }

#publications-list > div div div{
    width: 100% !important;
    float: none;
    padding: 0 32px !important;

  }
#publications-list > div div div:last-child {

 height: auto;
 }
#publications-list h2 {
    text-align: center;
    font-size: 24px;
}
#publications-list p {
    text-align: center;
    font-size: 14px;
}

#publications-list .button {
    font-size: 16px;
}
.more { 
    bottom: 32px;   
      margin-bottom: 0 !important;

}


}


  @media only screen and (max-width: 480px) {
#publications-list {
      padding: var(--app-mobile-padding);
    padding-top: 64px;
    padding-bottom: 0;
}
#publications-list h2 {
  font-size: 20px;
    margin-bottom: 8px;
}
#publications-list > div h1 {

    margin: 40px 0 100px 0;

}

}

  @media only screen and (max-width: 375px) {
#publications-list {
      padding: var(--app-mobile-small-padding);
    padding-top: 64px;
    padding-bottom: 0;
}




      </style>
  


<div id="publications-list">
            <div>     
           
            <h5>What we do</h5>
             <h1 class="large-headline">Our mission dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, nsectetur adipiscing</h1>

              <section>



     <div>
              <div>
             <iron-image sizing="cover" preload placeholder="" fade src="./src/images/advocacy.png"></iron-image>

              </div>
              <div>
               <h2 class="small-headline">Advocacy and Campaigning</h2>
                <p class="headline-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor. Nam pellentesque euismod laoreet.</p>
               </div>
               <div class="more"><a name="view4" href="[[rootPath]]view4" class="button">Read more</a></div>
              </div>

     <div>
              <div>
             <iron-image sizing="cover" preload placeholder="" fade src="./src/images/education.png"></iron-image>
              </div>
              <div>
               <h2 class="small-headline">Advocacy and Campaigning</h2>
                <p class="headline-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor. Nam pellentesque euismod laoreet.</p>
               </div>
               <div class="more"><a name="view4" href="[[rootPath]]view4" class="button">Read more</a></div>
              </div>


     <div>
              <div>
             <iron-image sizing="cover" preload placeholder="" fade src="./src/images/tree.png"></iron-image>

              </div>
              <div>
               <h2 class="small-headline">Advocacy and Campaigning</h2>
                <p class="headline-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor. Nam pellentesque euismod laoreet.</p>
               </div>
               <div class="more"><a name="view4" href="[[rootPath]]view4" class="button">Read more</a></div>
              </div>






       </section>
            </div>
            </div>



  


    `;
  }

}




window.customElements.define('publications-list', PublicationsList);
