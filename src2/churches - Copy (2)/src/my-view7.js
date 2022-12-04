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

import '@polymer/iron-form/iron-form.js';
    import '@polymer/paper-input/paper-input.js';
        import '@polymer/paper-input/paper-textarea.js';
    import '@polymer/paper-button/paper-button.js';


class MyView7 extends PolymerElement {
  static get template() {
    return html`
   <style include="normalize webflow styles">
iron-image {
  width: 100%;
    height: 0;
    padding-top: 333px;
      background-color: #f5f5f5;
}
.full-width {
display: flex;
    align-items: center !important;
    height: auto !important;
}
iron-form {
  width: 100%;
  margin: 60px 0;
}

paper-input {
      margin-bottom: 16px;
}
input {
  display: inline-block;
    width: 100%;
    margin-bottom: 2px;
    padding: 16px 20px;
    background-color: #005eb8;
    font-family: Mikado, sans-serif;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
        border: none;
        margin-top: 50px;
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
        <h1 class="heading _64px">Work with us to end corporal punishment of children</h1>
        <p class="paragraph">If you are working to end corporal punishment in your country, or if you would like to, get in touch to see how we can help.</p>
      </div>
      <div class="div-block-3">
<plastic-image fade sizing="cover" placeholder="/src/images/placeholder-m.png" preload srcset="http://churchesfornon-violence.org/imgs/contact-us-hero.png"></plastic-image>

      </div>
    </div>
  </div>
<div class="section-2 white">
    <div class="_1120px">
      <div class="div-block-4 narrow">
        <h2 class="heading-2 page-ttile">Contact us</h2>
          <iron-form id="form4">
      <form method="get" action="/form/handler">


<paper-input required label="Your name *"></paper-input>
<paper-input required label="Your email address *"></paper-input>
<paper-input required label="Subject *"></paper-input>
<paper-textarea required label="Your message *" rows="7"></paper-textarea>
  <input onclick="validate" type="submit" value="Submit">


      </form>
    </iron-form>
      </div>
    </div>
  </div>
 








   











    `;
  }

ready() {
  super.ready();

}


   validate() {
    document.getElementById('form4').validate();
  }

}





window.customElements.define('my-view7', MyView7);
