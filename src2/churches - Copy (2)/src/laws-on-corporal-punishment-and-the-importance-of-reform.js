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


class LawsOnCorporalPunishmentAndTheImportanceOfReform extends PolymerElement {
  static get template() {
    return html`
<style include="normalize styles webflow">
#wrapper {
  display: none;
}
 </style>
 <div id="wrapper">

 <div>
    <div class="div-block short">
      <div class="div-block-2 narrow no-negative-margin">
        <p class="paragraph hero-subtitle">The issue</p>
        <h1 id="title" class="heading no-margin">{{item.title}}</h1>
      </div>
    </div>
  </div>
  <div class="section-2 white reduced-margin-top">
    <div class="div-block-4 narrow">
      <div id="body" class="div-block-10">

      </div>
      <div class="div-block-12">
        <div class="w-layout-grid grid issue double">
          <a href="view8/religion-and-corporal-punishment-of-children" class="link-block-2 w-inline-block">
            <div class="back-button tall">
              <p class="paragraph-6 white">Previous theme</p>
              <h5 class="back-text left white">Religion and corporal punishment of children</h5>
              <p class="white"><img class="chevron back" src="/src/images/ChevronRightMedium.svg" /></p>
            </div>
          </a>
          <a href="[[rootPath]]view8/the-impact-of-corporal-punishment-of-children" class="link-block-2 w-inline-block">
            <div class="back-button tall right">
              <p class="paragraph-6 white">Next theme</p>
              <h5 class="back-text left right white">The impact of corporal punishment of children</h5>
              <p class="white"><img class="chevron" src="/src/images/ChevronRightMedium.svg" /></p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
       </div>    






    `;
  
  }


ready() {

  super.ready();
db.collection("issue").where("title", "==", "laws-on-corporal-punishment-and-the-importance-of-reform").get().then((snapshot) => {  

    snapshot.docs.forEach(doc => {
      this.$.title.innerHTML = doc.data().heading;
  this.$.body.innerHTML = doc.data().body;   
  this.$.wrapper.style.display = "block"

    })
  });


}
scrollIntoView(e) {
   var sectionId = e.target.getAttribute('section-id');
  this.shadowRoot.querySelector('#' + sectionId + '').scrollIntoView();
}
}



window.customElements.define('laws-on-corporal-punishment-and-the-importance-of-reform', LawsOnCorporalPunishmentAndTheImportanceOfReform);
