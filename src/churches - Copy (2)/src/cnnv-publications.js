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

class CnnvPublications extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">


  /* START HOMEPAGE WHAT WE DO */


#cnnv-publications {
  width: 100%;

    background-color: #fff;
  display: flex;
  align-items: center;
    box-sizing: border-box;

padding: var(--app-desktop-padding);
padding-top: 100px;
padding-bottom: 100px;  

}

#cnnv-publications > div {
  width: 1216px;
  margin: 0 auto;
   

}


#cnnv-publications p.headline-body {
  margin-top: 6px;
  line-height: 1.625em;
  width: 100%;
  box-sizing: border-box;
}

#cnnv-publications > div h1 {
  color:var(--app-primary-color);
  margin:0;
  padding: 0;
  line-height: 1.25em;
      margin-bottom: 10px;
}

#cnnv-publications > div h5 {
background-color: var(--app-primary-color);
    color: #fff;
    position: relative;


}

#cnnv-publications section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width:100%;
  margin-top: 64px;
}

#cnnv-publications > div div{
  display: block;

  background-color: #fff;
      padding-bottom: 76px;
          position: relative;
    width: calc(47.29% );            
          

}

#cnnv-publications > div div div {
margin-top: 0;
}

#cnnv-publications > div div div:first-child{
    position: relative;
    top: 0;
    width: 100%;
    padding-top: 66.62%;
    margin: 0;
      background-color: transparent;

}

#cnnv-publications > div div div {
    width: 100%;
    box-sizing: border-box;    
    padding: 0;
}

#cnnv-publications > div div div p {

  padding-right: 32px;
    margin-bottom: 32px;
}

#cnnv-publications h2 {
color: var(--app-primary-color);
    margin-top: 25px;
    margin-bottom: 8px;
    line-height: 1.2em;
    min-height: 72px;
    padding-right: 40px;
    font-size: 28px;

  }

  span {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.45em;
    text-transform: uppercase;
    color: #354463c9;
    font-family: komet, sans-serif;
    margin-top: 20px;
    display: block;
    padding-right: 122px;
  }

.small-headline {
    font-size: 22px;
  }

#cnnv-publications p {
    font-size: 16px;
    width: 66%;
}
#cnnv-publications .button {
    font-size: 18px;
}

.more {
  position: relative !important;
  
        background-color: transparent !important;
            margin-top: 40px !important
}


iron-image {
  width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}


 @media only screen and (max-width: 1120px) and (min-width: 768px)  {

#cnnv-publications > div h1 {
  font-size: calc(2.58vw + 12px);
 }

}


 @media only screen and (max-width: 1024px) {

#cnnv-publications section {
  width: 100%;
}

#cnnv-publications > div h1 {
  padding-right: 64px;
 }

#cnnv-publications section {
    flex-direction: column;
  }

  #cnnv-publications > div {
      padding-right: 0;

  }
#cnnv-publications > div div{
    width: 100%;    
      display: block; 
      margin-bottom: 64px;
    padding-bottom: 0;
         
}
#cnnv-publications > div div div p {
  
    padding-right: 16px;
 
}



.more {

 
    bottom: -5px;
     padding-right: 0 !important;

}


#cnnv-publications > div div div p {
  margin-bottom: 0;
}


#cnnv-publications > div div div:first-child{
    position: relative;
    width: 43.25%;

    margin:0;

    float: left;
    padding-top: 30.2%;
    margin-left: 4.5%;
    top: -32px;

  }

#cnnv-publications > div div div:nth-child(2) {
    width: 50%;
    padding: 38px 28px 0 16px;
       float: right
}

#cnnv-publications > div div div:last-child {
    width: 48.5%;
    height: 40px;
    float: right;
    clear: left;
    text-align: right;
 }


#cnnv-publications h2 {
      font-size: 25px;
    margin-bottom: 20px;
}
#cnnv-publications p {
    font-size: 16px;
}
#cnnv-publications .button {
    font-size: 18px;
}
}



 @media only screen and (max-width: 1024px) and (min-width: 769px) {


#cnnv-publications > div div div:nth-child(2){
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

#cnnv-publications > div div div:last-child {
    width: 48.5%;
    height: auto;
    float: right;
    text-align: left;
    padding: 0;
    clear: right;
    margin-top: 64px;

 
}

}




  @media only screen and (max-width: 768px) {

#cnnv-publications {

padding: var(--app-tablet-padding);
padding-top: 100px;
padding-bottom: 100px;
}

#cnnv-publications h2 { 
    margin-bottom: 16px;
      font-size: 22px;

}

.more {
 margin-top: 31% !important;
 bottom: auto;
}

}


  @media only screen and (max-width: 660px) {
#cnnv-publications {

}

#cnnv-publications > div h1 {
    padding-right: 0;
}

#cnnv-publications > div div{
    width: 100%;
    display: flex;
    flex-direction: column;
        justify-content: flex-end;
    align-items: center;
    padding-bottom: 40px;
}

#cnnv-publications > div div div:first-child{
 
    width: 80% !important;
    padding-top: 53.25% !important;
    float: none;
    margin-left: 0;

  }

#cnnv-publications > div div div{
    width: 100% !important;
    float: none;
    padding: 0 32px !important;

  }
#cnnv-publications > div div div:last-child {

 height: auto;
 }
#cnnv-publications h2 {
    text-align: center;
    font-size: 24px;
}
#cnnv-publications p {
    text-align: center;
    font-size: 14px;
}

#cnnv-publications .button {
    font-size: 16px;
}
.more { 
    bottom: 32px;   
      margin-bottom: 0 !important;

}


}


  @media only screen and (max-width: 480px) {
#cnnv-publications {
      padding: var(--app-mobile-padding);
    padding-top: 64px;
    padding-bottom: 0;
}
#cnnv-publications h2 {
  font-size: 20px;
    margin-bottom: 8px;
}
#cnnv-publications > div h1 {

    margin: 40px 0 100px 0;

}

}

  @media only screen and (max-width: 375px) {
#cnnv-publications {
      padding: var(--app-mobile-small-padding);
    padding-top: 64px;
    padding-bottom: 0;
}




      </style>
  


<div id="cnnv-publications">
            <div>     
           
     
             <h1 class="large-headline">Publications</h1>
             <p class="headline-body">Our handbooks provide information, tools and resources which can be used to work in partnership with others towards the prohibition and elimination of corporal  punishment.</p>
              <section>



  <dom-repeat items="{{articles}}">
    <template>

     <div>
         <div>
             <iron-image sizing="cover" preload placeholder="" fade src="{{item.img}}"></iron-image>

              </div>
              <div>
       
               <h2 class="small-headline">{{item.subtitle}}</h2>
         
                <p class="headline-body">{{item.desc}}</p>
               </div>
               <div class="more"><a name="view4" href="[[rootPath]]view4" class="button">Download</a></div>
              </div>



    </template>
  </dom-repeat>






       </section>
            </div>
            </div>



  


    `;
  }

ready() {
  super.ready();
  db.collection('publications').orderBy("id", "asc")
  .get().then((snapshot) => {   
   this.articles = [];
    snapshot.docs.forEach(doc => {
       this.articles.push(doc.data()); 
    })     
  });

}
}





window.customElements.define('cnnv-publications', CnnvPublications);
