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


class MyView11 extends PolymerElement {
  static get template() {
    return html`
   <style include="normalize styles webflow ">
li::before {content: "•"; color: #2f4e4f;
  display: inline-block; width: 1em;
  margin-left: -1em;
  font-size: 2em;
    position: relative;
    top: 4px;
}.list-item {
    margin-bottom: 20px;
  }
   .div-block {

   background-color: darkslategrey;
}
plastic-image {
  width: 100%;
    height: 740px;
      background-color: #f5f5f5;
}


      </style>

 <div class="section top">
    <div class="div-block">
      <div class="div-block-2">
        <h1 class="heading _64px">We need your help to empower and grow our global movement</h1>
        <p class="paragraph">Help us promote progress towards universal prohibition and elimination of all corporal punishment of children.</p>
      </div>
      <div class="div-block-3">
<plastic-image fade sizing="cover" placeholder="/src/images/placeholder-m.png" preload srcset="http://churchesfornon-violence.org/imgs/take-action-hero.png"></plastic-image>

      </div>
    </div>
  </div>
<div class="section-2 white">
    <div class="_1120px">
      <div class="div-block-4 narrow">
        <h2 class="heading-2 page-ttile">What you can do</h2>
        <div class="div-block-10">
          <ul class="w-list-unstyled">
            <li class="list-item">Model and promote positive, non-violent parenting.</li>
            <li class="list-item">Promote the meaning of “discipline” as teaching and guidance, not as physical punishment; offer support and resources for parents.</li>
            <li class="list-item">Speak out about the harmful effects of corporal punishment.</li>
            <li class="list-item">Explain why the legality and practice of corporal punishment is incompatible with universal religious values of compassion, equality, justice, equity and non-violence.</li>
            <li class="list-item">Place children at the heart of the community. Enable the meaningful participation of children and make provision for their voices and opinions to be heard.</li>
            <li class="list-item">Ensure religious texts, scriptures, teachings and traditional ceremonies and practices are used to promote respect for children – not to condone or perpetrate violence against children.</li>
            <li class="list-item">Hold vigils and events dedicated to ending legalised violence against children.</li>
            <li class="list-item">Use opportunities in the life of the religious community such as marriage preparation and the birth of a baby, to highlight the dangers of corporal punishment and promote positive non-violent parenting.</li>
            <li class="list-item">Link the issue of corporal punishment and the urgent need to prohibit it with campaigns to end violence against women and girls.</li>
            <li class="list-item">Identify child protection risks in the religious community; ensure accountability and reporting mechanisms are in place.</li>
            <li class="list-item">Ensure child protection and safeguarding policies explicitly denounce corporal<br>punishment.</li>
            <li class="list-item">Encourage the religious community to actively support law reform at<br><a href="http://www.endcorporalpunishment.org" target="_blank" class="link-2">www.endcorporalpunishment.org</a></li>
            <li class="list-item">Work with others, including governments, NGOs and interfaith councils towards<br>prohibition and elimination of all corporal punishment of children.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>


    `;
  }


ready() {
  super.ready();


}
}
window.customElements.define('my-view11', MyView11);
