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

  import '@polymer/iron-icon/iron-icon.js';
      import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-collapse/simple-expand-collapse.js'; 

class CnnvQuestions extends PolymerElement {
  static get template() {
    return html`
   <style include="normalize webflow styles">















      </style>
  


<div id="cnnv-questions">
            <div>     
           
     
            
<section>
  <dom-repeat items="{{articles}}">
    <template>
         <div style="padding: 50px 0; border-bottom: 1px solid #eee;">
      <simple-expand-collapse question="{{item.question}}" answer="{{item.answer}}" opened="{{item.state}}">
      </div>

      </simple-expand-collapse>
   </template>
  </dom-repeat>
 
</section>


            </div>
            </div>



  




    `;
  }

ready() {
  super.ready();
  db.collection('qanda').orderBy("id", "asc")
  .get().then((snapshot) => {   
   this.articles = [];
    snapshot.docs.forEach(doc => {
       this.articles.push(doc.data()); 
    })     
  });

}
}

window.customElements.define('cnnv-questions', CnnvQuestions);
