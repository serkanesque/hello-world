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

class ResourcesHero extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">


  /* START HOMEPAGE WHAT WE DO */


#resources-hero {
  width: 100%;

    background-color: var(--app-primary-color);
  display: flex;
  align-items: center;
    box-sizing: border-box;

padding: var(--app-desktop-padding);
padding-top: 100px;
padding-bottom: 100px;  

}

#resources-hero > div {
  width: var(--app-content-wdith);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

#resources-hero > div div:first-child {
  width: 65%;
}
#resources-hero > div div:last-child {
  width: 29.4%;
}

h1 {
  color: #fff;
    font-size: 60px;
    display: block;
    margin: 0 0 16px 0;

}
p.headline-body {
  color: #fff;
      padding-right: 128px;
}
ul {
  list-style-type: none;
  color: #fff;
      font-family: komet, sans-serif;
    font-weight: 300;

    margin: 0;
    padding: 0;
}
ul li {
  padding: 2px 0;
}
ul li:first-child {
text-transform: uppercase;
font-size: 13px;
color: #bebebe;
}

ul li a {
    color: #fff;
        font-size: 18px;
}
      </style>
  

<div id="resources-hero">
<div>
            <div>  
            <h1 class="accent">Resources</h1>
            <p class="headline-body">
            A range of resources to help you achieve law reform and support
            campaigning for prohibition of corporal punishment.</p>
            </div>
            <div>
              <ul>
                <li>On this page</li>
                <li><a href="#charter">Charter</a></li>
                <li><a href="#pulbications">Pulbications</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#discipline">Positive Discipline</a></li>
              </ul>
            </div>
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





window.customElements.define('resources-hero', ResourcesHero);
