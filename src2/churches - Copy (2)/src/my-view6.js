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



class MyView6 extends PolymerElement {
  static get template() {
    return html`
   <style include="normalize webflow styles">
iron-image {
  width: 100%;
    height: 0;
    padding-top: 333px;
      background-color: #f5f5f5;
}
.full-width.split {
    margin-bottom: 40px;

}
      </style>
 

<div class="section">
    <div class="container">
      <div class="div-block-18">
        <h1 class="heading">Publications</h1>
        <p class="paragraph">Explore our community features, case studies, opinion pieces, and more</p>
      </div>

       <dom-repeat items="{{articles}}">
    <template>

      <div class="div-block-5 panel full-width split">
        <div class="w-layout-grid grid-2">
          <div class="div-block-10 white">
            <div class="div-block-11">
                  <iron-image sizing="cover" placeholder="/src/images/placeholder-m.png" preload src="{{item.img}}"></iron-image>

            </div>
          </div>
          <div class="div-block-12">
            <h2 class="heading-3">{{item.title}}</h2>
            <p class="paragraph">{{item.desc}}</p>
            <a href="#" class="link">Download</a></div>
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
  db.collection('publications').orderBy("id", "desc")
  .get().then((snapshot) => {   
   this.articles = [];

    snapshot.docs.forEach(doc => {
       this.articles.push(doc.data());           
    })
    
  });

}
}
window.customElements.define('my-view6', MyView6);
