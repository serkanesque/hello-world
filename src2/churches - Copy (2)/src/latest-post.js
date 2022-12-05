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


class LatestPost extends PolymerElement {
  static get template() {
    return html`
<style include="normalize webflow styles">

  iron-image {
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
  }

  .image-panel {
    background-image: none;
}
.hero-panel {
      z-index: 1;
}

 </style>

      <div class="div-block-2 left">
        <div class="hero-panel align-right top-story">
          <div class="panel medium">
            <div>
              <h2 id="headline" class="heading-3"></h2>
              <p id="body" class="paragraph"></p>
              <a href="#" class="link">Read more</a></div>
              <div class="div-block-13">
                <h6 id="timestamp" class="heading-6"></h6>
                <h6 class="heading-6">News</h6>
              </div>
          </div>
        </div>
        <div class="image-panel medium">
              <iron-image id="ironImage" sizing="cover" preload placeholder="/src/images/placeholder-m.png" fade src=""></iron-image>

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
    this.$.ironImage.setAttribute('src', doc.data().img);     
    this.$.headline.innerHTML = doc.data().title;
    this.$.body.innerHTML = doc.data().blurb;
    this.$.timestamp.innerHTML = doc.data().date;
    })
   
  });

}
}



window.customElements.define('latest-post', LatestPost);
