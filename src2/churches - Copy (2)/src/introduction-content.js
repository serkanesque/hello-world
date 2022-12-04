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


class WhatIsCorporalPunishment extends PolymerElement {
  static get template() {
    return html`
<style include="normalize webflow styles">

 </style>
 
 <div>
    <div class="div-block short">
      <div class="div-block-2 narrow no-negative-margin">
        <p class="paragraph hero-subtitle">{{item.title}}</p>
        <h1 class="heading no-margin">What is corporal punishment?</h1>
      </div>
    </div>
  </div>
  <div class="section-2 white reduced-margin-top">
    <div class="div-block-4 narrow">
      <div class="div-block-10">
        <p class="paragraph-5 margin-bottom-40px">The Churches’ Network for non-violence was formed to broaden religious support for law reform to end corporal punishment of children and other cruel and humiliating forms of violence against children and to challenge faith-based justification for it. CNNV aims to work with others towards developing a network of support, practical resources and information and to encourage religious communities to play an active role in the movement for reform. We challenge the view that corporal punishment is a Biblical doctrine and believe that positive, non-violent discipline best models Christ’s teachings.<br></p>
      </div>
      <div class="div-block-12">
        <div class="w-layout-grid grid issue double">
          <a href="#" class="link-block-2 w-inline-block">
            <div class="back-button tall">
              <p class="paragraph-6 white">Previous theme</p>
              <h5 class="back-text left white">What is corporal punishment?</h5>
              <p class="white">&lt;</p>
            </div>
          </a>
          <a href="#" class="link-block-2 w-inline-block">
            <div class="back-button tall right">
              <p class="paragraph-6 white">Next theme</p>
              <h5 class="back-text left right white">Religion and corporal punishment of children</h5>
              <p class="white">&gt;</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
           






    `;
  
  }


ready() {

  super.ready();

    db.collection('issue').get().then((snapshot) => {  
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



window.customElements.define('introduction-content', IntroductionContent);
