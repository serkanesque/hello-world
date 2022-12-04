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


class LatestNews extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">

      :host {
  padding: 110px 0 32px 0;
      background-color: var(--app-primary-color)

      }

         /* START NEWS  */
#news  {
  width: 100%;
    background-color: var(--app-primary-color);
  display: flex;
  align-items: center;
    box-sizing: border-box;
    padding: var(--app-desktop-padding);
}

#news > div {
  width: var(--app-content-wdith);
  margin: 0 auto;

}

#news > div > div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 112px;
}
#news > div > div div:first-child {
  width: 51.425%;
  padding-top: 51.425%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 0;
  position: relative;
}
#news > div > div div:last-child {
  width: 40%; 
}

iron-image {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}


#news > div > div:nth-of-type(even) div{
  order: 2;
}
#news > div > div:nth-of-type(even) div:last-child {
  order: 1;
}



#news h5 {
  background-color: #fff;
  color: var(--app-primary-color);
  margin: 0;
  position: relative;
}

#news h1 {
  color: #fff;
  font-size: 44px;
  margin-bottom: 160px;
}

#news h2 {
    font-size: calc(2.58vw + 24px);
    color: #fff;
    margin: 0;
    line-height: 1.25em;
        padding-right: 200px;
        margin-bottom: 80px;
}
#news h3 {
  color: #fff;
  font-size: 44px;
  margin-bottom: 20px;
}

#news p {
  color: #fff;
  font-size: 20px;
  padding-right: 0;
  margin-top: 0;
  margin-bottom: 40px;
}


 @media only screen and (max-width: 1120px) {

  #news h3 {
     font-size: calc(4vw);
}
  #news p {
     font-size: 16px;
}

}


 @media only screen and (max-width: 768px) {
#news {
      padding: var(--app-tablet-padding);
}

#news h2 {
  padding-right: 0px;

}

#news h3 {
  font-size: var(--app-large-headline);
  margin-bottom: 24px;

}
#news h5 {
      padding: 10px 0 9px 0;

}

.button {
    padding: 9px 40px;
}
}


 @media only screen and (max-width: 640px) {

#news > div > div {
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
}

#news h5 {
  position: absolute;
    top: -20px;
  left: auto;
}

#news > div > div div:first-child {
width: 100%;
    padding-top: 66.75%;
}

#news > div > div div:last-child {
    width: 100%;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
#news > div > div:nth-of-type(even) div{
  order: 1;
}



#news h1 ,#news h3, #news p {
  text-align: center;
  padding: 8px;
}
  #news h3 {
     font-size: var(--app-large-headline);
     padding: 0 16px 4px 0;
       margin-bottom: 0;
}
  #news p {
     font-size: 14px;
         margin-bottom: 20px;
}
.button {
    padding: 7px 40px 6px 40px;
}
 }
 @media only screen and (max-width: 480px) {
#news {
      padding: var(--app-mobile-padding);
}
}

 @media only screen and (max-width: 375px) {
#news {
      padding: var(--app-mobile-small-padding);
}
}




   /* END NEWS  */


      </style>


          <h1>{{item.name}} {{item.city}}</h2>

  
 <div id="news">


 <div>
      <h2 class="accent">LET’S Take action now to save the future.</h2>

      <dom-repeat items="{{articles}}">
          <template>

      <div>
      <div>
        <iron-image sizing="cover" preload placeholder="" fade src="{{item.img}}"></iron-image>
        </div>
        <div>
          <h5>News</h5>
          <h3 class="large-headline">{{item.title}}</h3>
          <p class="headline-body-large">{{item.summary}}</p>
          <a name="view4" href="[[rootPath]]view4" class="button">Read More</a>
        </div>
      </div>
    </template>
</dom-repeat>

  
</div>
</div>



  


    `;
  }

  
ready() {
  super.ready();
  /*
     db.collection('cafes').get().then((snapshot) => {  
    snapshot.docs.forEach(doc => {
      this.$.text.innerHTML = doc.data().name + ' ' + doc.data().city;        
    })
  });
  */

  db.collection('news').get().then((snapshot) => {  
   this.articles = [];
    snapshot.docs.forEach(doc => {
       this.articles.push(doc.data()); 
       console.log(this.articles);
    })
  });

}
}

window.customElements.define('latest-news', LatestNews);
