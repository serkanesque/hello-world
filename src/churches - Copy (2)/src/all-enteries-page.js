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
import '@polymer/app-layout/app-grid/app-grid-style.js';



class AllEnteriesPage extends PolymerElement {
  static get template() {
    return html`
   <style include="normalize webflow styles">



.grid {
  grid-row-gap: 40px;
}

#date {
  font-size: 18px;
}

.link-block:hover .heading-4 {
  text-decoration: underline;
  color: #fff;
}
.paragraph-4 {
 
    font-family: Adobeclean, sans-serif;
    color: rgba(255,255,255,0.95);
}
  .div-block, .div-block-9 {

   background-color: #6A1B9A;
}
plastic-image.large {
  width: 100%;
    height: 740px;
      background-color: #f5f5f5;
}
plastic-image {
  width: 100%;
    height: 208px;
      background-color: #f5f5f5;
}
      </style>

<div class="section top">
    <div class="div-block">
      <div class="div-block-2">
      <p id="date" class="paragraph hero-subtitle"></p>
        <h1 id="headline" class="heading _64px"></h1>
        <p id="blurb" class="paragraph"></p>
      </div>
      <div class="div-block-3">
       <plastic-image class="large" id="plastic" fade sizing="cover" placeholder="/src/images/placeholder-m.png" preload srcset=""></plastic-image>

      </div>
    </div>
  </div>


<div class="section-2 white">
    <div class="div-block-4">
      <h2 class="heading-2 news">Recent news &amp; events</h2>
      <div class="div-block-10">
        <div class="w-layout-grid grid">

  <dom-repeat items="{{articles}}">
    <template>   


          <div class="div-block-7">
            <a href="view3/post/{{item.id}}" class="link-block w-inline-block">
              <div class="div-block-8">
              <plastic-image id="plastic" fade sizing="cover" placeholder="/src/images/placeholder-m.png" preload srcset="{{item.thumb}}"></plastic-image>
              </div>
              <div class="div-block-9">
                <h3 class="heading-4">{{item.title}}</h3>
                <p class="paragraph-4">{{item.date}}</p>
              </div>
            </a>
          </div>

                </template>
  </dom-repeat>
        </div>
      </div>
    </div>
  </div>


  


    `;
  }

ready() {
  super.ready();

  db.collection('news').orderBy("id", "desc")
  .limit(1)
  .get().then((snapshot) => {   

    snapshot.docs.forEach(doc => {
    //this.$.ironImage.setAttribute('src', doc.data().img);     
    this.$.headline.innerHTML = doc.data().title;
    this.$.blurb.innerHTML = doc.data().blurb;
    this.$.date.innerHTML = doc.data().date;
    this.$.plastic.setAttribute('srcset', doc.data().img);

    })
   
  });


  db.collection('news').orderBy("id", "desc")
  .get().then((snapshot) => {   
   this.articles = [];
    snapshot.docs.forEach(doc => {
       this.articles.push(doc.data()); 
    })
      this.articles.shift();
  });



}
}
window.customElements.define('all-enteries-page', AllEnteriesPage);
