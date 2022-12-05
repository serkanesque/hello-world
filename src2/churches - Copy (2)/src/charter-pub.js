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
import '@polymer/skeleton-carousel/skeleton-carousel.js'; 

class CharterPub extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">


  /* START HOMEPAGE WHAT WE DO */


#charter-pub {
  width: 100%;

    background-color: #fff;
  display: flex;
  align-items: center;
    box-sizing: border-box;

padding: var(--app-desktop-padding);
padding-top: 100px;
padding-bottom: 100px;  

}

#charter-pub > div {
   width: 1216px;
  margin: 0 auto;
   

}
#charter-pub section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width:100%;
  margin-top: 64px;
}

#charter-pub section div:first-child{
    order: 2;
    width: calc(47.29% );  

}
#charter-pub section div:last-child{

    width: calc(47.29% );  

padding-top: 31.5%;
position: relative;

}

iron-image {
  width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.headline-body {
    padding-right: 128px;
  }

.more {
  margin-top: 64px;
}
      </style>
  


<div id="charter-pub">
            <div>     
           
     
             <h1 class="large-headline">Charter for Religious Communities</h1>
              <section>



<div><p class="headline-body">This Charter, which was first launched at an ecumenical
 service at Coventry Cathedral in 2006, can be adapted and
  used by groups wishing to make a commitment to ending violence against children.
 </p> <p class="headline-body"> It was developed in collaboration with religious groups and organisations  to address the recommendations in the United Nations Secretary General’s Global Study on Violence against Children.
<div class="more"><a name="view4" class="button" href="/view4">Download</a></div>
</p></div>
<div><iron-image sizing="cover" preload placeholder="" fade src="https://firebasestorage.googleapis.com/v0/b/churches-6a317.appspot.com/o/meeting.png?alt=media&token=b35cf60e-33fd-4e50-b4b9-b20a665401b1"></iron-image>
</div>

    
 










       </section>
            </div>
            </div>



  


    `;
  }

ready() {
  super.ready();
  db.collection('publications').orderBy("id", "asc")
  .get().then((snapshot) => {   
   this.articles = [];
    snapshot.docs.forEach(doc => {
       this.articles.push(doc.data()); 
    })     
  });

}
}





window.customElements.define('charter-pub', CharterPub);
