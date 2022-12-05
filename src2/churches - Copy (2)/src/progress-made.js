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

class ProgressMade extends PolymerElement {
  static get template() {
    return html`

      <style include="shared-styles">
      



  /* START PROGESS  */

   #progress-made  {
width: 100%;
    background-color: var(--app-primary-color);
    display: flex;
    padding: 0 16px;
    box-sizing: border-box;

  background-image: url('./src/images/progress.png');
  background-repeat:  no-repeat;
  background-size: cover;

 } 

    #progress-made  > div {

       width: var(--app-content-wdith);  
    margin: 0 auto;
     
           
display: flex;
    flex-direction: column;
    align-items: center;
        padding: 100px 0 160px;
 }   
    #progress-made  > div > div{
text-align: center;
      
 }   
     #progress-made  > div > div:first-child{
width: 66%;
margin: 0 auto;

 }   
    #progress-made  > div > div:last-child{
display: flex;
justify-content: space-between;    
color: #fff;  
 }   

    #progress-made  > div > div:last-child div{

      width: 20%;
     
}
   #progress-made h2 {

    color: #fff;  
    line-height: 1.25em;
   }

    #progress-made h5 {
    background-color: #fff;
    color: var(--app-primary-color);
    display: inline-block;
    padding: 12px 0;
    width: 160px;
    position: relative;
    margin: 0;
    text-transform: uppercase;
    text-align: center;
    font-weight: normal;
 
 }

#progress-made span {
  font-size: 72px;

}
#progress-made p {
  font-size: 28px;
  margin: 0;
}

.large-headline {
   margin: 58px 0 68px;
}

  @media only screen and (max-width: 768px) {

     #progress-made  > div > div:first-child{
width: 85%;
 } 


    #progress-made  > div > div:last-child{
  flex-wrap: wrap;
 } 

    #progress-made  > div > div:last-child div{
      width: 47.5%;
      margin-bottom: 32px;
     
}

   #progress-made h2 {
    font-size: 36px;
    color: #fff;  
   }

#progress-made p {
  font-size: 22px;
}

  }


   @media only screen and (max-width: 480px) {

     #progress-made  > div > div:first-child{
width: 100%;
 } 


    #progress-made  > div > div:last-child{
  flex-wrap: wrap;
 } 

    #progress-made  > div > div:last-child div{
      width: 100%;
      margin-bottom: 32px;
     
}

   #progress-made h2 {
    font-size: 22px;
    color: #fff;  
   }

#progress-made span {
  font-size: 44px;

}
#progress-made p {
  font-size: 16px;
}
   }

  /* END PROGRESS  */
   




      </style>


<div id="progress-made">
<div>
    <div>
        <h5>Progress</h5>
         <h2 class="large-headline">Working towards a world without legalised
violence against children.</h2>    
    </div>
    <div>
         <div>
            <span class="accent">50</span>
            <h2 class="small-headline">millions trees planted</h2>
         </div>
         <div>
            <span class="accent">50</span>
            <h2 class="small-headline">millions trees planted</h2>
         </div>
         <div>
            <span class="accent">50</span>
            <h2 class="small-headline">millions trees planted</h2>
         </div>
         <div>
            <span class="accent">50</span>
            <h2 class="small-headline">millions trees planted</h2>
         </div>                           

     </div>
</div>
</div>
  


    `;
  }
}

window.customElements.define('progress-made', ProgressMade);
