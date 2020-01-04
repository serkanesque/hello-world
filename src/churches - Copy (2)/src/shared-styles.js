/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
     :host {
              --app-primary-color: #354463;
              --app-secondary-color: black;
              --app-button-color: #C1F7D5;
              --app-content-wdith: 1200px;

              --app-desktop-padding: 0 40px;
              --app-tablet-padding: 0 64px;
              --app-mobile-padding: 0 32px;
               -app-mobile-medium-padding: 0 24px;
              --app-mobile-small-padding: 0 16px;

              --app-320-padding: 0 40px;
              --app-375-padding: 0 40px;   
              --app-425-padding: 0 40px; 
              --app-768-padding: 0 40px; 
              --app-1024-padding: 0 40px; 
              --app-1440-padding: 0 40px;                                            

              --app-tablet-padding: 0 64px;
              --app-mobile-padding: 0 32px; 

              --app-large-headline:  28px;
              --app-medium-headline:  22px;       
              --app-small-headline:  18px;      
              --app-grid-column:  64px; 
              --app-grid-gutter:  32px;               
               display: block;
            }

     .button {
        padding: 12px 40px;
        border-radius: 100px;
        background-color: var(--app-button-color);
      }    

h2 {
  font-family: poynter-oldstyle-display, serif;
  font-weight: 700;
}

.accent {
  font-family: flood-std, sans-serif;
font-weight: 400;
font-style: normal;
color: #fff;
    line-height: 1.1em;
}

.accent-small {
  font-family: flood-std, sans-serif;
font-weight: 400;
font-style: normal;
    color: var(--app-primary-color);
font-size: 32px;
text-align: right;
    line-height: 1.2em;
}

.large-headline {
  font-size: 44px;
  font-family: poynter-oldstyle-display, serif;
  font-weight: 700;
      line-height: 1.22em;
        color: var(--app-primary-color);
}

.small-headline {
  font-size: 28px;
  font-family: poynter-oldstyle-display, serif;
  font-weight: 700;  
}
.headline-body-large {
    color: var(--app-primary-color);
   font-family: komet, sans-serif;
   font-weight: 300;
   font-size: 20px;
     margin-top: 4px;
     padding-right: 40px;
     letter-spacing: -.25px;
}

.headline-body {
    color: var(--app-primary-color);
   font-family: komet, sans-serif;
   font-weight: 300;
   font-size: 16px;
     margin-top: 4px;
     padding-right: 40px;
}

.caption {
     font-family: komet, sans-serif;
   font-weight: 300;
   font-size: 14px;
   text-transform: uppercase;
   letter-spacing: .5px; 
}

.capitalize {
    text-transform: capitalize;
       letter-spacing: 0; 
}

.button {
    font-size: 18px;
  font-family: poynter-oldstyle-display, serif;
  font-weight: 700; 
   text-decoration: none;
    color: var(--app-primary-color);   
}


           h5 {
                 background-color: var(--app-primary-color);
                 font-family: komet, sans-serif;
                  font-weight: 400;
                  font-size: 14px;
                 color: white;
                 box-sizing: border-box;
                display: inline-block;
    padding: 10px 20px 9px;
                min-width: 160px;
                position: absolute;
                margin: -21px 0 0 0;
                text-transform: uppercase;
                text-align: center;
                letter-spacing: 1px;
          }

          a {
               font-family: komet, sans-serif;
                 font-weight: 300;
                 font-size: 16px;
                 color:  var(--app-primary-color);
                    letter-spacing: -.015em;
          }




 @media only screen and (max-width: 768px) {

.accent {
  font-size: 44px;
}

.large-headline {
  font-size:  36px;
    font-family: poynter-oldstyle-display, serif;
  font-weight: 700;
  font-style: normal;
  color: var(--app-primary-color);  
}

.small-headline {
  font-size: 22px; 
}

.headline-body {
     padding-right: 0px;
}


h5 {
      padding: 10px 14px 9px 14px;
}
 }


 @media only screen and (max-width: 480px) {


.large-headline {
  font-size:  22px;
}

 }

    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
