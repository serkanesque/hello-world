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

import './what-is-corporal-punishment.js';
import './why-prohibit-corporal-punishment.js';
import './religion-and-corporal-punishment-of-children.js';
import './laws-on-corporal-punishment-and-the-importance-of-reform.js';
import './the-impact-of-corporal-punishment-of-children.js';
import './childrens-perspectives.js';
import './the-religious-context.js';
import './working-with-religious-communities.js';
import './working-with-religious-leaders-towards-reform.js';






class MyView8 extends PolymerElement {
  static get template() {
    return html`
   <style include="normalize styles webflow">

.link-block-3:hover {
   text-decoration: underline;
    color: #fff;

}
.heading._64px {
    font-size: 58px;
}
.div-block,.div-block.short{

   background-color: #0288d1;
}

plastic-image {
  width: 100%;
    height: 740px;
      background-color: #f5f5f5;
}


 </style>











   
<app-route 
route="{{route}}" pattern="/:page" data="{{routeData}}">
</app-route>

<app-route 
route="{{route}}" pattern="/" active="{{list-active}}">
</app-route>

<app-route 
route="{{route}}" pattern="/what-is-corporal-punishment" active="{{what-is-corporal-punishment-active}}">
</app-route>
<app-route 
route="{{route}}" pattern="/why-prohibit-corporal-punishment" active="{{why-prohibit-corporal-punishment-active}}">
</app-route>
<app-route 
route="{{route}}" pattern="/religion-and-corporal-punishment-of-children" active="{{religion-and-corporal-punishment-of-children-active}}">
</app-route>
<app-route 
route="{{route}}" pattern="/laws-on-corporal-punishment-and-the-importance-of-reform" active="{{laws-on-corporal-punishment-and-the-importance-of-reform-active}}">
</app-route>
<app-route 
route="{{route}}" pattern="/the-impact-of-corporal-punishment-of-children" active="{{the-impact-of-corporal-punishment-of-children-active}}">
</app-route>
<app-route 
route="{{route}}" pattern="/childrens-perspectives" active="{{childrens-perspectives-active}}">
</app-route>
<app-route 
route="{{route}}" pattern="/the-religious-context" active="{{the-religious-context-active}}">
</app-route>
<app-route 
route="{{route}}" pattern="/working-with-religious-communities" active="{{working-with-religious-communities-active}}">
</app-route>
<app-route 
route="{{route}}" pattern="/working-with-religious-leaders-towards-reform" active="{{working-with-religious-leaders-towards-reform-active}}">
</app-route>


<dom-if if="[[list-active]]">
  <template>


 <div class="section top">
    <div class="div-block">
      <div class="div-block-2">
        <h1 class="heading _64px">Corporal punishment is the most common form of violence against children worldwide.</h1>
        <p class="paragraph">We believe that positive, non-violent discipline best models Christ’s teachings.</p>
      </div>
      <div class="div-block-3">
<plastic-image sizing="cover" placeholder="/src/images/placeholder-m.png" preload srcset="http://churchesfornon-violence.org/imgs/issue-hero.png"></plastic-image>

      </div>
    </div>
  </div>
  <div class="section-2 white">
    <div class="_1120px">
      <div class="div-block-4 narrow">
        <h2 class="heading-2 page-ttile">The Issue</h2>
        <div class="div-block-10">
          <p class="paragraph-5 margin-bottom-40px">Corporal punishment has for too long been a common part of tradition and culture in all societies worldwide. The mistaken belief that it is an effective form of discipline for children is widespread and many people do not view it as the act of violence that it is. <br></p>
          <p class="paragraph-5 margin-bottom-40px">This attitude is not only held by individuals but is endorsed at state level. In some religious traditions it is condoned through different interpretations of sacred texts and religious teachings.<br></p>
        </div>
      </div>
      <div class="issue-blocks">
        <h3 class="heading-3">Understanding the issue</h3>
        <div class="w-layout-grid grid issue">
          <a href="[[rootPath]]view8/what-is-corporal-punishment" class="link-block-3 w-inline-block">
            <div class="div-block-11">
              <h5 class="heading-6">What is corporal punishment?</h5>
            </div>
          </a>
          <a href="[[rootPath]]view8/why-prohibit-corporal-punishment" class="link-block-3 w-inline-block">
            <div class="div-block-11">
              <h5 class="heading-6">Why prohibit corporal punishment?</h5>
            </div>
          </a>
          <a href="[[rootPath]]view8/religion-and-corporal-punishment-of-children" class="link-block-3 w-inline-block">
            <div class="div-block-11">
              <h5 class="heading-6">Religion and corporal punishment of children</h5>
            </div>
          </a>
        </div>
      </div>
      <div class="issue-blocks">
        <h3 class="heading-3">Law, prevalence and impact</h3>
        <div class="w-layout-grid grid issue">
          <a href="[[rootPath]]view8/laws-on-corporal-punishment-and-the-importance-of-reform" class="link-block-3 w-inline-block">
            <div class="div-block-11">
              <h5 class="heading-6">Laws on corporal punishment and the importance of reform</h5>
            </div>
          </a>
          <a href="[[rootPath]]view8/the-impact-of-corporal-punishment-of-children" class="link-block-3 w-inline-block">
            <div class="div-block-11">
              <h5 class="heading-6">The impact of corporal punishment of children</h5>
            </div>
          </a>
          <a href="[[rootPath]]view8/childrens-perspectives" class="link-block-3 w-inline-block">
            <div class="div-block-11">
              <h5 class="heading-6"> Children’s perspectives</h5>
            </div>
          </a>
        </div>
      </div>
           <div class="issue-blocks">
        <h3 class="heading-3">Working towards reform</h3>
        <div class="w-layout-grid grid issue">
          <a href="[[rootPath]]view8/the-religious-context" class="link-block-3 w-inline-block">
            <div class="div-block-11">
              <h5 class="heading-6">The religious context</h5>
            </div>
          </a>
          <a href="[[rootPath]]view8/working-with-religious-communities" class="link-block-3 w-inline-block">
            <div class="div-block-11">
              <h5 class="heading-6">Working with religious communities</h5>
            </div>
          </a>
          <a href="[[rootPath]]view8/working-with-religious-leaders-towards-reform" class="link-block-3 w-inline-block">
            <div class="div-block-11">
              <h5 class="heading-6">Working with religious leaders towards reform</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
    </template>
</dom-if>


<dom-if if="[[what-is-corporal-punishment-active]]">
  <template>
    <div class="_75 panel auto-height">
      <what-is-corporal-punishment></what-is-corporal-punishment>
    </div>
  </template>
</dom-if>
<dom-if if="[[why-prohibit-corporal-punishment-active]]">
  <template>
    <div class="_75 panel auto-height">
      <why-prohibit-corporal-punishment></why-prohibit-corporal-punishment>
    </div>
  </template>
</dom-if>
<dom-if if="[[religion-and-corporal-punishment-of-children-active]]">
  <template>
    <div class="_75 panel auto-height">
      <religion-and-corporal-punishment-of-children></religion-and-corporal-punishment-of-children>
    </div>
  </template>
</dom-if>
<dom-if if="[[laws-on-corporal-punishment-and-the-importance-of-reform-active]]">
  <template>
    <div class="_75 panel auto-height">
      <laws-on-corporal-punishment-and-the-importance-of-reform></laws-on-corporal-punishment-and-the-importance-of-reform>
    </div>
  </template>
</dom-if>
<dom-if if="[[the-impact-of-corporal-punishment-of-children-active]]">
  <template>
    <div class="_75 panel auto-height">
      <the-impact-of-corporal-punishment-of-children></the-impact-of-corporal-punishment-of-children>
    </div>
  </template>
</dom-if>

<dom-if if="[[childrens-perspectives-active]]">
  <template>
    <div class="_75 panel auto-height">
      <childrens-perspectives></childrens-perspectives>
    </div>
  </template>
</dom-if>

<dom-if if="[[the-religious-context-active]]">
  <template>
    <div class="_75 panel auto-height">
      <the-religious-context></the-religious-context>
    </div>
  </template>
</dom-if>

<dom-if if="[[working-with-religious-communities-active]]">
  <template>
    <div class="_75 panel auto-height">
      <working-with-religious-communities></working-with-religious-communities>
    </div>
  </template>
</dom-if>

<dom-if if="[[working-with-religious-leaders-towards-reform-active]]">
  <template>
    <div class="_75 panel auto-height">
      <working-with-religious-leaders-towards-reform></working-with-religious-leaders-towards-reform>
    </div>
  </template>
</dom-if>


      </div>
    </div>
  </div>

















    `;
  }
  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
  console.log(this.route.path);
    this.page =  this.route.path;
  }

  _pageChanged(page) {
 
    
  }




  ready() {
  super.ready(); 
  this.page =  this.route.path;

}


}
window.customElements.define('my-view8', MyView8);

