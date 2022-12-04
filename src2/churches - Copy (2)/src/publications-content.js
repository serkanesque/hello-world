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


class PublicationsContent extends PolymerElement {
  static get template() {
    return html`
<style include="normalize webflow styles">

iron-image {
  width: 100%;
    height: 0;
    padding-top: 333px;
      background-color: #f5f5f5;
}
  .download {
    position: absolute;
    right: 15px;
    top: 20px;

  }
  .link {
    position: relative;
  }

  .div-block {

   background-color: #8e24aa;
}

 </style>


<div>
    <div class="div-block short">
      <div class="div-block-2 narrow no-negative-margin">
        <h1 class="heading no-margin">Publications</h1>
      </div>
    </div>
  </div>
  <div class="section-2">
    <div class="_1120px">

  <dom-repeat items="{{articles}}">
    <template>

      <div class="div-block-13 paddinf-bottom-0">
        <div class="div-block-14"></div>
        <div class="div-block-5 publication">
          <div>
            <h3 class="heading-3">{{item.title}}</h3>
            <p class="paragraph-2 publciation">{{item.desc}}</p>
          </div>
          <div class="div-block-15"><a href="#" class="link">Download<img class="download" src="/src/images/Smock_Download_18_N.svg" /></a></div>
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
scrollIntoView(e) {
   var sectionId = e.target.getAttribute('section-id');
  this.shadowRoot.querySelector('#' + sectionId + '').scrollIntoView();
}
}



window.customElements.define('publications-content', PublicationsContent);
