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


import '@polymer/iron-image/iron-image.js';



import './shared-styles.js';
import './hero-hp.js';
import './take-action.js';
import './what-we-do.js';
import './did-you-know.js';
import './child-stories.js';
import './latest-news.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="normalize styles webflow">


plastic-image.large {
  width: 100%;
    height: 740px;
      background-color: #f5f5f5;
}
plastic-image {
  width: 100%;
    height: 208px;
      background-color: #f5f5f5;
}
  .chevron {
    position: absolute;
    right: 15px;
    top: 23px;
    filter: invert(1);
  }
  .external {
        position: absolute;
    right: 15px;
    top: 20px;

  }
  .link {
     position: relative;
  }

  plastic-image {
  width: 100%;
    height: 208px;
      background-color: #f5f5f5;
}

    .link-block:hover .heading-4 {
    text-decoration: underline;
    color: #fff;
}
</style>


 <div class="section top">
    <div class="div-block">
      <div class="div-block-2">
        <h1 class="heading _64px">No child should experience violence</h1>
        <p class="paragraph">The Churches’ Network for non-violence works to end corporal punishment of children and to challenge faith based justification for it.</p>
      </div>
      <div class="div-block-3">
     <plastic-image class="large" sizing="cover" placeholder="/src/images/placeholder-m.png" preload srcset="http://churchesfornon-violence.org/imgs/hero-home.png"></plastic-image>
      </div>
    </div>
  </div>
  <div class="section-2">
    <div class="div-block-4">
      <h2 class="heading-2">Understanding the issue</h2>
      <div class="div-block-6">
        <div class="div-block-5">
          <div>
            <h3 class="heading-3">What is corporal punishment?</h3>
            <p class="paragraph-2">Corporal punishment is the most common form of violence against children worldwide. It includes any punishment in which physical force is used and intended to cause some degree of pain or discomfort, however light, as well as non-physical forms of punishment that are cruel and degrading.</p>
          </div>
          <div>
            <a href="/view8/what-is-corporal-punishment" class="link">Learn more<img class="chevron" src="/src/images/ChevronRightMedium.svg" /></a>
            </div>
        </div>
        <div class="div-block-5">
          <div>
            <h3 class="heading-3">Why prohibit corporal punishment?</h3>
            <p class="paragraph-2">Prohibiting corporal punishment is about ensuring children are equally protected under the law on assault. As the smallest and most vulnerable members of society, children deserve more, not less, protection from assault.</p>
          </div>
          <div>
            <a href="view8/why-prohibit-corporal-punishment" class="link">Learn more<img class="chevron" src="/src/images/ChevronRightMedium.svg" /></a>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="div-block switch">
      <div class="div-block-3 tile-2">
       <plastic-image class="large" sizing="cover" placeholder="/src/images/placeholder-m.png" preload srcset="http://churchesfornon-violence.org/imgs/tile2-home.png"></plastic-image>
</div>
      <div class="div-block-2 right">
        <h1 class="heading">All children have the right to speak out and be listened to.</h1>
        <p class="paragraph">Working actively towards a culture of respect for all children is a key towards ending violence against children. We will in cooperation with others foster respect for all children.</p>
      </div>
    </div>
  </div>
  <div class="section-2">
    <div class="div-block-4">
      <h2 class="heading-2">What we do</h2>
      <div class="div-block-6">
        <div class="div-block-5">
          <div>
            <h3 class="heading-3">About us</h3>
            <p class="paragraph-2">The Churches ’ Network for non-violence was formed to broaden religious support for law reform to end corporal punishment of children and other cruel and humiliating forms of violence against children and to challenge faith-based justification for it</p>
          </div>
          <div>
            <a href="/view10" class="link">Learn more<img class="chevron" src="/src/images/ChevronRightMedium.svg" /></a>
           </div>
        </div>
        <div class="div-block-5">
          <div>
            <h3 class="heading-3">Our principles</h3>
            <p class="paragraph-2">CNNV rejects all forms of violence against children including corporal punishment in all its forms. We believe positive, non-violent discipline best models the example set by Jesus. All the recorded encounters between Jesus and children were gentle, respectful and compassionate.</p>
          </div>
          <div>
            <a href="/view10" class="link">Learn more<img class="chevron" src="/src/images/ChevronRightMedium.svg" /></a>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="div-block">
      <div class="div-block-2">
        <h1 class="heading">Making progress</h1>
        <p class="paragraph">53 states and seven territories have achieved full prohibition and 56 more states have committed to law reform – but we know that there is still much to do.</p>
      </div>
      <div class="div-block-3 tile-3">
       <plastic-image class="large" sizing="cover" placeholder="/src/images/placeholder-m.png" preload srcset="http://churchesfornon-violence.org/imgs/tile3-home.png"></plastic-image>

      </div>
    </div>
  </div>
  <div class="section-2">
    <div class="div-block-4">
      <h2 class="heading-2">Helpful resources</h2>
      <div class="div-block-6">
        <div class="div-block-5">
          <div>
            <h3 class="heading-3">Publications</h3>
            <p class="paragraph-2">The UN Committee on the Rights of the Child, in its General Comment No. 8 (2006), defines corporal or physical punishment as “any punishment in which physical force is used and intended to cause some degree of pain or discomfort, however light”.</p>
          </div>
          <div>
            <a href="/view9/publications" class="link">Learn more<img class="chevron" src="/src/images/ChevronRightMedium.svg" /></a>
            </div>
        </div>
        <div class="div-block-5">
          <div>
            <h3 class="heading-3">FAQs</h3>
            <p class="paragraph-2">Prohibiting corporal punishment is about ensuring children are equally protected under the law on assault. As the smallest and most vulnerable members of society, children deserve more, not less, protection from assault.</p>
          </div>
          <div>
            <a href="/view9/faqs" class="link">Learn more<img class="chevron" src="/src/images/ChevronRightMedium.svg" /></a>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="div-block switch">
      <div class="div-block-3 tile-2">
       <plastic-image class="large" sizing="cover" placeholder="/src/images/placeholder-m.png" preload srcset="http://churchesfornon-violence.org/imgs/tile4-home.png"></plastic-image>
      </div>
      <div class="div-block-2 right">
        <h1 class="heading">Universal regard for children transcends religious differences.</h1>
        <p class="paragraph">There is strong consensus across religious traditions about the inherent dignity of every child and a growing movement  who are committed to eliminate all corporal punishment of children.</p>
      </div>
    </div>
  </div>
  <div class="section-2">
    <div class="div-block-4 negative">
      <h2 class="heading-2">What you can do</h2>
      <div class="div-block-6">
        <div class="div-block-5">
          <div>
            <h3 class="heading-3">Getting involved</h3>
            <p class="paragraph-2">Help us promote progress towards universal prohibition and elimination of all corporal punishment of children.</p>
          </div>
          <div>
            <a href="/view11" class="link">Learn more<img class="chevron" src="/src/images/ChevronRightMedium.svg" /></a>
            </div>
        </div>
        <div class="div-block-5">
          <div>
            <h3 class="heading-3">Support the Global Initiative to End all Corporal Punishment of Children</h3>
            <p class="paragraph-2">
Launched in Geneva in 2001, the Global Initiative aims to act as a catalyst to encourage more action and progress towards ending all corporal punishment in all continents.</p>
          </div>
          <div>
            <a href="https://endcorporalpunishment.org/" target="_blank" class="link">Learn more<img class="external" src="/src/images/Smock_OpenIn_18_N.svg" /></a>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section-2 white">
    <div class="div-block-4">
      <h2 class="heading-2 news">Latest news &amp; events</h2>
      <div class="div-block-10">

        <div class="w-layout-grid grid">

  <dom-repeat items="{{articles}}">
    <template>   


          <div class="div-block-7">
            <a href="view3/post/{{item.id}}" class="link-block w-inline-block">
              <div class="div-block-8">
              <plastic-image id="plastic" fade sizing="cover" placeholder="/src/images/placeholder-m.png" preload srcset="{{item.thumb}}"></plastic-image>
              </div>
              <div class="div-block-9">
                <h3 class="heading-4">{{item.title}}</h3>
                <p class="paragraph-4">{{item.date}}</p>
              </div>
            </a>
          </div>

                </template>
  </dom-repeat>
         

        </div>

      </div>
    </div>
  </div>


  


    `;
  }



  ready() {
    super.ready();

  db.collection('news').orderBy("id", "desc").limit(3)
  .get().then((snapshot) => {   
   this.articles = [];
    snapshot.docs.forEach(doc => {
       this.articles.push(doc.data()); 
    })
  });

  }
}
window.customElements.define('my-view1', MyView1);
