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


class IssueResources extends PolymerElement {
  static get template() {
    return html`
<style include="normalize webflow styles">
h2 {
  padding-top: 100px;
}
.list-item-4 {
    display: inline-block;
    margin-bottom: 20px;
}
.div-block-19 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
}
.lleft-hand-nav {
    width: 25%;
}
.list-item-6 {
    margin-left: 20px;
    display: inline-block;
        float: left;
        clear: left;


  }
}link-3 {
    display: inline-block;
    margin-bottom: 15px;
    margin-left: 0px;
    color: #007e8a;
    text-decoration: none;
}.list {
    margin-bottom: 0px;
    padding-left: 0px;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
}.auto-height {
    display: block;
    height: auto;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
}._75 {
    width: 75%;
}

iron-selector a {
  color: #007e8a;
  display: block;
  text-decoration: none;
    padding-left: 10px;
  margin-bottom: 8px;
      border-left: 3px solid #e5e5e5; 
}
iron-selector a:hover {

  text-decoration: underline;
}
.iron-selected a{
  color: #121212;
    border-left: 3px solid #007e8a; 
}
.title {


  margin-bottom: 16px;
  
}
 </style>

      
        
            <h1 class="heading-8">Resources</h1>
            <ul class="list-2">
<li class="list-item-4" style="margin-left: -20px;">Visit our resources page for a comprehensive list of reading materials. </li>

 </ul>
       

 <div>

               

</div>


    `;
  
  }


ready() {

  super.ready();


}
scrollIntoView(e) {
   var sectionId = e.target.getAttribute('section-id');
  this.shadowRoot.querySelector('#' + sectionId + '').scrollIntoView();
}
}



window.customElements.define('issue-resources', IssueResources);
