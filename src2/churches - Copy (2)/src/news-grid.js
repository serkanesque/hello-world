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
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';

class NewsGrid extends PolymerElement {
  static get template() {
    return html`
<style include="app-grid-style shared-styles">

 /* START ENTRIES GRID */  


#entries {
  width: 100%;
  min-height: 400px;
  background-color: #fff;
  display: flex;
}

#entries > div { 
  width: var(--app-content-wdith);
    min-height: 648px;
  margin: 0 auto;
  padding: var(--app-desktop-padding);

}

#entries > div > div:first-child {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center
}

#entries > div > div:first-child div{
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
width: auto;
}

#entries > div > div:first-child div span {
  color: #fff;
  font-size: 14px;
  margin-right: 8px;
  text-transform: uppercase;
}

#entries h3 {
  color:  var(--app-primary-color);
  font-size: 44px;
  display: block;
  text-transform: uppercase;
}


    ul {
      padding: 0;
      list-style: none;
    }


ul.switch  {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color:  var(--app-primary-color);
  border-radius: 20px;
}

ul.switch li {

  font-size: 14px;
  text-align: center;
 padding: 8px;  
}

ul.switch li a {
  color:  var(--app-button-color);
  text-decoration: underline;
  min-width: 80px;  
  display: inline-block;
  padding: 2px 0;  
  font-size: 14px;
}
ul.switch li a.selected {
  background-color: #fff;
  color:  var(--app-primary-color);
  text-decoration: none;

  border-radius: 20px;  
}


    .item {
        background-color: var(--app-primary-color);
          top: 50%;
    }

.item > div:first-child {
  top: 50%;
  padding: 20px;
      display: flex;
    flex-direction: column;
    justify-content: space-between;
        height: 50%;
    box-sizing: border-box;
    z-index: 10;
}
.item > div:first-child a {
font-size: 14px;
}
.item > div:last-child {
      bottom: 200px;
    height: 50%;
}

.app-grid {
  margin: 0;
  padding: 0;
  width: calc(100% + 32px);
}

iron-image {
    width: 100%;
    height: 100%;
        background-color: var(--app-button-color);
  }

.item:nth-child(3), .item:nth-child(4), .item:nth-child(8){
      @apply --app-grid-expandible-item;
      height: 0;
     padding-top: 0;
         padding-top: 40%;
    }



.item:nth-child(3) > div:last-child, .item:nth-child(4) > div:last-child,.item:nth-child(8) > div:last-child {
        background-color: var(--app-primary-color);
  height: 50%;
  }

.item:nth-child(3) iron-image, .item:nth-child(4) iron-image,.item:nth-child(8) iron-image {
    height: 50%;
    top: 50%;
  }

.item:nth-child(3) > div:first-child, .item:nth-child(4) > div:first-child, .item:nth-child(8) > div:first-child   {
  top: 0;
}



.item:nth-child(3) > div:first-child, .item:nth-child(4) > div:first-child, .item:nth-child(8) > div:first-child  {
    height: calc(50% + 36px);
justify-content: space-between;

}
.item:nth-child(3) h5, .item:nth-child(4) h5, .item:nth-child(8) h5 { 
position: relative;
margin:  0;
    height: 40px;

}
.item:nth-child(3) h2, .item:nth-child(4) h2 , .item:nth-child(8) h2  {
    font-size: 36px;
    margin-bottom: 0;   
        margin-top: 3px; 
        line-height: 1.25em;
}

.item h2 {
    color: #fff;
    font-size: 22px;
    margin-top: 28px;   
        line-height: 1.32em; 
}
.item a {
    color: #fff;
    font-size: 14px;
    text-decoration: underline;
}



 h5 {
   
 background-color: #fff;
 color: var(--app-primary-color);

width: 160px;

margin: -36px 0 0 0;

}

    .item:nth-child(3) h5:nth-of-type(1) {
display: none;
 }

  .item:nth-child(5) > div:nth-child(3),  .item:nth-child(8) > div:nth-child(3) {
display: none;
}

  .item:nth-child(5) > div:nth-child(2){
    bottom: 200px;
    height: 50%;
}

  @media only screen and (max-width: 1120px) {
:host {
            --app-grid-gutter:  24px;  
}

.app-grid {

  width: calc(100% + 24px);
}




.item h2 {
     font-size: calc(2vw);
}

.item:nth-child(3) h2, .item:nth-child(4) h2, .item:nth-child(8) h2 {
    font-size: calc(3vw);
    margin-bottom: 0;
  }



  .item:nth-child(3) h5, .item:nth-child(4) h5, .item:nth-child(8) h5 {
  align-self: flex-start;
}

  }


 @media only screen and (max-width: 768px) {

 :host {   
          --app-grid-column:  64px; 
          --app-grid-gutter:  32px;                 
          --app-grid-columns: 3;      
            --app-grid-expandible-item-columns: 2;
        }


.item {
      height: 360px !important;
}

  .item:nth-child(3), .item:nth-child(4) {
    max-width: calc(33% - 29px) !important;
    margin-right: 0;
    }
.item:nth-child(4) {
    margin-right: auto;
  }

  .item:nth-child(3) > div:last-child, .item:nth-child(4) > div:last-child {
    display: none;
  }

  .item:nth-child(3) iron-image,  .item:nth-child(4) iron-image  {
    top: 0;
  }

 .item:nth-child(3) h2,    .item:nth-child(4) h2 {
    color: #fff;
    font-size: 22px;
    margin-top: 28px;
    margin-bottom: 0;
 }

  .item:nth-child(3) h5:nth-of-type(1), .item:nth-child(4) h5:nth-of-type(1) {

    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: var(--app-primary-color);
    width: 160px;
    position: absolute;
    margin: -36px 0 0 0;
    text-transform: uppercase;
    text-align: center;
    font-weight: normal;

 }
  .item:nth-child(3) h5:nth-of-type(2), .item:nth-child(4) h5:nth-of-type(2) {
    display: none;
 }

.item:nth-child(3) > div:first-child, .item:nth-child(4) > div:first-child {
 top: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 10;

}

.item:nth-child(5), .item:nth-child(6) {
      @apply --app-grid-expandible-item;
    }

.item:nth-child(5) > div:first-child {

      top: 0;
          height: calc(50% + 36px);
}

 .item:nth-child(5) > div:last-child {
    background-color: var(--app-primary-color);
    height: 50%;
}

.item:nth-child(5) > div:nth-child(2) {
  top: 50%;
}

.item:nth-child(5) h5:nth-of-type(2) {
  display: flex;
    position: relative;
    margin: 32px 0 0;
}

.item:nth-child(5) h5:nth-of-type(1) {
  display: none;
}
.item:nth-child(5) h2{
  margin-top: 0;
}


h5 {
  width: 128px !important;
}
}


 @media only screen and (max-width: 600px) {


 :host {   
          --app-grid-column:  64px; 
          --app-grid-gutter:  16px;                 
          --app-grid-columns: 2;      
            --app-grid-expandible-item-columns: 2;
        }

.item h2 {
font-size: 16px;
}

h3 {
 font-size: 32px;
}

#entries > div > div:first-child {
    flex-wrap: wrap;
}

#entries > div > div:first-child div {
    width: auto;
    margin-bottom: 32px;
}



  /* START App-grid-expandible-item */ 

.item:nth-child(3), .item:nth-child(6) {
      @apply --app-grid-expandible-item;
    }

.item:nth-child(3) > div:first-child,.item:nth-child(6) > div:first-child {

      top: 0;
          height: calc(50% + 36px);
}

 .item:nth-child(3) > div:last-child, .item:nth-child(6) > div:last-child {
    background-color: var(--app-primary-color);
    height: 50%;
}

.item:nth-child(3) > div:nth-child(2),.item:nth-child(6) > div:nth-child(2)  {
  top: 50%;
}

.item:nth-child(3) h5:nth-of-type(2),.item:nth-child(6) h5:nth-of-type(2) {
  display: flex;
    position: relative;
    margin: 32px 0 0;
}

.item:nth-child(3) h5:nth-of-type(1),.item:nth-child(6) h5:nth-of-type(1) {
  display: none;
}
.item:nth-child(3) h2,.item:nth-child(6) h2{
  margin-top: 0;
}
.item:nth-child(3) iron-image,.item:nth-child(6) iron-image {
  height: 100%;
}

  /* END App-grid-expandible-item */ 



h5 {
  width: 128px !important;
}

.item:nth-child(4), .item:nth-child(5),.item:nth-child(7), .item:nth-child(8) {
    max-width: calc(50% - 16px) !important;
}

.item:nth-child(5) > div:first-child, .item:nth-child(7) > div:first-child,, .item:nth-child(8) > div:first-child {
    top: 50%;
}

.item:nth-child(5) > div:nth-child(2),.item:nth-child(8) > div:nth-child(2)  {
     top: 0%; 
} 
.item:nth-child(5) h5:nth-of-type(2),.item:nth-child(8) h5:nth-of-type(2) {
    display: none;
}
.item:nth-child(5) h5:nth-of-type(1),.item:nth-child(8) h5:nth-of-type(1) {
    display: flex;
}

.item:nth-child(5) > div:first-child,.item:nth-child(8) > div:first-child {
    top: 50%;
    height: calc(50% + 36px);
}

.item:nth-child(8) iron-image {
    height: 50%;
    top: 0;
}


.item:nth-child(5) h2,.item:nth-child(8) h2 {
    margin-top: 28px;
}



.item:nth-child(4) > div:first-child,.item:nth-child(5) > div:first-child {

    height: auto;
}

}



 /* END ENTRIES GRID */  



      </style>

      <div>
        <h3 class="accent">All entries</h3>
        <div>
          <ul class="switch">
              <li><a class="selected" href="#">All</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Events</a></li>                                      
          </ul>
        </div>
      </div>

 <div>

        <div>
    
  <ul class="app-grid" has-aspect-ratio>
    <li class="item">
           <div>
           <h5>News</h5>
       <h2 class="small-headline">This is the title for the latest blog post this long</h2>
          <a href="#">Read this post</a></div>
       <div>

       <iron-image sizing="cover" preload src=""></iron-image>

       </div>
   
    </li>
    <li class="item">
      <div>
       <h5>News</h5>
       <h2 class="small-headline">This is the title for the latest blog post this long</h2>
          <a href="#">Read this post</a></div>
       <div><iron-image sizing="cover" preload src=""></iron-image></div>

    </li>
    <li class="item">
      <div>
   <h5>News</h5>
       <h2 class="small-headline">This is the title for the latest blog post this long</h2>
          <a href="#">Read this post</a>
    <h5>News</h5>
          </div>

       <div><iron-image sizing="cover" preload src=""></iron-image></div>
       
        <div></div>
    </li>
        <li class="item">
           <div>
        
       <h2 class="small-headline">This is the title for the latest blog post this long</h2>
          <a href="#">Read this post</a>
    <h5>News</h5>
          </div>
       <div>

       <iron-image sizing="cover" preload src=""></iron-image>

       </div>
       <div></div>
    </li>
    <li class="item">
      <div>
       <h5>News</h5>
       <h2 class="small-headline">This is the title for the latest blog post this long</h2>
          <a href="#">Read this post</a>
           <h5>News</h5>
          </div>
       <div><iron-image sizing="cover" preload src=""></iron-image></div>
  <div></div>
    </li>
    <li class="item">
      <div>
       <h5>News</h5>
       <h2 class="small-headline">This is the title for the latest blog post this long</h2>
          <a href="#">Read this post</a>
 <h5>News</h5>
          </div>
       <div><iron-image sizing="cover" preload src=""></iron-image></div>
         
    </li>
            <li class="item">
           <div>
        
       <h2 class="small-headline">This is the title for the latest blog post this long</h2>
          <a href="#">Read this post</a>
    <h5>News</h5>
          </div>
       <div>

       <iron-image sizing="cover" preload src=""></iron-image>

       </div>
   
    </li>
    <li class="item">
      <div>
   
       <h2 class="small-headline">This is the title for the latest blog post this long</h2>
          <a href="#">Read this post</a>    <h5>News</h5></div>
       <div><iron-image sizing="cover" preload src=""></iron-image></div>
    <div></div>
    </li>
    <li class="item">
      <div>
       <h5>News</h5>
       <h2 class="small-headline">This is the title for the latest blog post this long</h2>
          <a href="#">Read this post</a></div>
       <div><iron-image sizing="cover" preload src=""></iron-image></div>
       
    </li>
  </ul>
     
                        
      </div>
  
  


    `;
  }

  

}

window.customElements.define('news-grid', NewsGrid);
