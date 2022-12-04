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

class PostPage extends PolymerElement {
  static get template() {
    return html`
     <style include="normalize styles webflow">
  .div-block {

   background-color: #6A1B9A;
}

    #mask {
                display: block;
                height: calc(100vh - 60px);
                width: 100vw;
                position: absolute;
                background-color: #fff;
                top: 60px;
                left:0;
                z-index: 10;

              }
 
plastic-image {
  width: 100%;
    height: 740px;
      background-color: #f5f5f5;
}


.back-button {
  border: 2px solid #6a1a9a;

}

p {

    font-family: Adobeclean, sans-serif;
    color: #4b4b4b;
    font-size: 20px;
    line-height: 1.7;
        margin-bottom: 45px;
}      

@media (max-width: 479px){

p {
    font-size: 17px;
}
}
</style>

<iron-selector selected="[[post]]">
<div id="mask"></div>
<div class="section top">
    <div class="div-block">
      <div class="div-block-2">
      <p id="date" class="paragraph hero-subtitle"></p>
        <h1 id="headline" class="heading _64px"></h1>
       <!-- <p id="blurb" class="paragraph"></p> -->
      </div>
      <div class="div-block-3">
       <plastic-image id="plastic" fade sizing="cover" placeholder="/src/images/placeholder-m.png" preload srcset=""></plastic-image>

      </div>
    </div>
  </div>

  <div class="section-2 white" style="padding-top: 85px;">
    <div class="div-block-4 narrow">
      <div id="body" class="div-block-10">
      </div>
      <div class="social">
        <h3 class="heading-3">Share this</h3>
        <div class="w-widget w-widget-twitter"><iframe src="https://platform.twitter.com/widgets/tweet_button.html#url=http%3A%2F%2Fwebflow.com&amp;counturl=webflow.com&amp;text=Check%20out%20this%20site&amp;count=none&amp;size=l&amp;dnt=true" scrolling="no" frameborder="0" allowtransparency="true" style="border: none; overflow: hidden; width: 76px; height: 28px;"></iframe></div>
      </div>
      <a href="view3/list" class="link-block-2 w-inline-block">
        <div class="back-button">
          <h5 class="back-text"><span class="text-span"><img class="chevron back" src="/src/images/ChevronRightMedium.svg"></span>Back to news and events</h5>
        </div>
      </a>
    </div>
  </div>



    `;
  }

  static get properties() {
    return {
      post: {
        type: String,
        reflectToAttribute: true
      }
    }
  }

  static get observers() {
    return [
      '_routePageChanged(post)'
    ];
  }

 _routePageChanged(post) {

     document.documentElement.scrollTop = 0;
      this.$.mask.style.display = "block";
     console.log("changed");

  db.collection('news').where('id','==', this.post).get().then((snapshot) => {  
    snapshot.docs.forEach(doc => {    
    this.$.plastic.setAttribute('srcset', doc.data().img);     
            this.$.headline.innerHTML = doc.data().title;
            this.$.date.innerHTML = doc.data().date;            
            this.$.body.innerHTML = doc.data().body;
            //this.$.blurb.innerHTML = doc.data().blurb;
             this.$.mask.style.display = "none";
           
    })    
 
  });
   
  }




ready() {
  super.ready();





}

}

window.customElements.define('post-page', PostPage);
