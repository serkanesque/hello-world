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
import './latest-post.js';
import './all-enteries-page.js';
import './news-enteries-page.js';
import './events-enteries-page.js';
import './post-page.js';

  import '@polymer/iron-icon/iron-icon.js';
      import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-collapse/simple-expand-collapse.js'; 
import '@polymer/iron-collapse/iron-collapse.js'; 

class MyView10 extends PolymerElement {
  static get template() {
    return html`
   <style include="normalize styles webflow ">

plastic-image {
  width: 100%;
    height: 740px;
      background-color: #f5f5f5;
}

.div-block {

   background-color:#4CAF50;
}


      </style>



 <div class="section top">
    <div class="div-block">
      <div class="div-block-2">
        <h1 class="heading _64px">We challenge the view that corporal punishment is a Biblical doctrine</h1>
        <p class="paragraph">We believe that positive, non-violent discipline best models Christ’s teachings.</p>
      </div>
      <div class="div-block-3">
<plastic-image sizing="cover" placeholder="/src/images/placeholder-m.png" preload srcset="http://churchesfornon-violence.org/imgs/about-us-hero.png"></plastic-image>

      </div>
    </div>
  </div>


  <div class="section-2 white">
    <div class="div-block-4 narrow">
      <h2 class="heading-2 page-ttile">About us</h2>

          <dom-repeat items="{{articles}}">
           <template>
 <div style="padding: 40px 0; border-bottom: 1px solid #eee;">
             <simple-expand-collapse opened="{{item.state}}" question="{{item.title}}" answer="{{item.content}}">
           </simple-expand-collapse>
          </div>
       
          </template>
          </dom-repeat>

      </div>
      </div>








    `;
  }


ready() {
  super.ready();
  db.collection('about').orderBy("id", "asc")
  .get().then((snapshot) => {   
   this.articles = [];
    snapshot.docs.forEach(doc => {
       this.articles.push(doc.data()); 
    })     
  });

}
}
window.customElements.define('my-view10', MyView10);
