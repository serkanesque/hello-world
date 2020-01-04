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
import { DomModule } from '@polymer/polymer/lib/elements/dom-module.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/polymer/lib/legacy/polymer.dom.js';

import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/plastic-image/plastic-image.js'; 
import './my-icons.js';
import '../src/css/styles.js';
import '../src/css/normalize.js';
import '../src/css/webflow.js';








// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`





      <style include="normalize styles webflow">

.navbar {
    z-index: 100;
background-color: #fff;
    width: 100%;
    position: fixed;
    top: 0;
    left:0;
   
    margin-bottom: 60px;
}

/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: #333;
  text-align: center;
    padding: 20px 12px 15px 8px;
    text-decoration: none;
    margin: 0 8px;
    border-color: #fff;
    border-bottom-style: solid;
    border-bottom-width: 6px;
      font-family: Adobeclean, sans-serif;
  font-size: 16px;

}
.navbar a:hover {
      border-color:  #ddd;
  text-decoration: none;
}

/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
        font-family: Adobeclean, sans-serif;
  font-size: 16px;
  border-color: #fff;
    border-bottom-style: solid;
    border-bottom-width: 5px;
}

/* Dropdown button */
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: #333;
    padding: 20px 12px 15px 8px;

    margin: 0 8px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
 /* Important for vertical align on mobile phones */
}

/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover .dropbtn {
  text-decoration: none;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  margin: 0;
  text-align: left;

}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
.fa {
    display: inline-block;
  transform: scaleY(.7);
}
.fa-caret-down:before {
  content: "▼";

}

.navbar .container > div:first-child {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
      align-items: center;
}

 



a.iron-selected.about {
   border-color: #4CAF50;
}
a.iron-selected.issue {
   border-color: #0088d1;
}
a.iron-selected.resources {
   border-color: orange;
}
a.iron-selected.news {
   border-color: #6a1b99;
}
a.iron-selected.action {
   border-color: darkslategrey;
}

  a.iron-selected:hover {
  border-color: ;
 }


 a.logo {
font-family: Druk;
font-size: 24px;
    padding: 12px 0 8px 0;
color: #005eb8;
    margin: 0;
letter-spacing: 0.02em;
text-decoration: none;}
 a.logo:hover {

text-decoration: none;}

 a.logo:hover {
  border-color: #fff;
}
 .hide {
  display: none !important;
}
  body {
text-rendering: geometricPrecision;
background-color: #f5f5f5;
}

#section-3 {
  display: none;
}   

#mobileNav {
    display: none;
  }
#mobileNav:hover {
    cursor: pointer;
  }

.list-item-2 a {
  text-decoration: none;
  color: #005eb8;
}
.list-item-2 a:hover {
  text-decoration: underline;
}
#mobileNav img {
  height: 17px;
}



@media (max-width: 991px) {
  #nav {
    display: none;
  }
    #mobileNav {
    display: block;
  }
#section-3.show {
    display: block;

}



  #section-3 {
    position: fixed;
    top: 56px;
    z-index: 99;

    width: 100%;
    height: 100vh;
    background-color: #fff;
  }

  .hide {
    display: none;
  }
 .div-block-16 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 40px;
  }
  .list-item-2 {
    display: block;
    margin-bottom: 40px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    font-family: Mikado, sans-serif;
    color: #2c2c2c;
    font-size: 24px;
  }
  .list-item-2.subnav {
    margin-left: 20px;
    color: #2c2c2c;
  }
  .list-item-2.title {
    color: #7c7c7c;
  }
  .list {
    width: auto;
    margin-top: 60px;
  }
}
      </style>




      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route
        route="{{route}}"
        pattern="[[rootPath]]:page" 
        data="{{routeData}}" 
        tail="{{subroute}}">
      </app-route>


<!--

 <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar w-nav">
    <div class="container">

      <a href="#" class="w-nav-brand">
        <h1 class="logo" >CNNV</h1>
      </a>
-->
       

<div class="navbar">
<div class="container">
<div>
<div><a on-click="handleClick2" name="view8" class="logo" href="[[rootPath]]view1">CNNV</a>
</div>
<div id="mobileNav" on-click="handleClick"><img src="/src/images/TripleGripper.svg" /></div>
<div id="nav">




 <iron-selector id="ir" selected="[[page]]" attr-for-selected="name" role="navigation">
        <a class="about" name="view10" href="[[rootPath]]view10">About us</a>
         <a class="issue" name="view8" href="[[rootPath]]view8/">The Issue</a> 
       <div id="resources" class="dropdown">  
              <button class="dropbtn">Resources
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
        <a class="resources dropdown-link" name="view9" href="[[rootPath]]view9/publications">Publications</a>
        <a class="resources dropdown-link" name="view9" href="[[rootPath]]view9/faqs">FAQs</a>
          </div>
        </div>
        <a class="news" name="view3" href="[[rootPath]]view3/list" >News &amp; events</a>
       <a class="action" name="view11" href="[[rootPath]]view11" >Take Action</a>
        <a class="contact" name="view7" href="[[rootPath]]view7" >Contact us</a>
        </div>
        </div>
          </iron-selector> 
 </div>
</div>

  <div id="section-3">
    <div class="div-block-16">
      <ul class="list w-list-unstyled">
      <iron-selector id="ir" selected="[[page]]" attr-for-selected="name" role="navigation">
        <li class="list-item-2"><a on-click="handleClick" name="view10" href="[[rootPath]]view10">About us</a></li>
        <li class="list-item-2"><a on-click="handleClick" name="view10" href="[[rootPath]]view8/">The Issue</a></li>
        <li class="list-item-2 title">Resources</li>
        <li class="list-item-2 subnav"><a on-click="handleClick" class="dropdown-link" name="view9" href="[[rootPath]]view9/publications">Publications</a></li>
        <li class="list-item-2 subnav"><a  on-click="handleClick" class="dropdown-link" name="view9" href="[[rootPath]]view9/faqs">FAQs</a></li>
        <li class="list-item-2"><a on-click="handleClick" name="view3" href="[[rootPath]]view3/list >News &amp; events</a></li>
        <li class="list-item-2"><a on-click="handleClick" name="view11" href="[[rootPath]]view11">Take Action</a></li>
        <li class="list-item-2"><a on-click="handleClick" name="view7" href="[[rootPath]]view7">Contact us</a></li>
     </iron-selector> 
      </ul>
    </div>
  </div>




     
       
          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
       
            <my-view1 name="view1"></my-view1>
            <my-view2 name="view2"></my-view2>
            <my-view3 route="{{subroute}}" name="view3"></my-view3>
            <my-view4 name="view4"></my-view4>  
            <my-view5 name="view5"></my-view5>   
            <my-view6 name="view6"></my-view6>    
            <my-view7 name="view7"></my-view7> 
            <my-view8 route="{{subroute}}" name="view8"></my-view8> 
            <my-view9 route="{{subroute}}" name="view9"></my-view9> 
            <my-view10 name="view10"></my-view10> 
            <my-view11 name="view11"></my-view11>             
            <my-view404 name="view404"></my-view404>
          
          </iron-pages>







   
    `;
  } 

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      opened: {
        type: Boolean,
        value: false
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

 // this.shadowRoot.querySelector("#section-3").classList.toggle("show");
 //this.shadowRoot.querySelector('#dd1').classList.remove('hide');


     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'view1';
    } else if (['view1', 'view2', 'view3', 'view4', 'view5', 'view6', 'view7', 'view8','view9','view10','view11'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    if(this.page == 'view9') {
     this.$.resources.style.borderColor = "red";
   } else {
    this.$.resources.style.borderColor = "white";
   }


/*
    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
    */
  }

  _pageChanged(page) {

  //  console.log(this.$.ir.items)
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'view1':
        import('./my-view1.js');
        break;
      case 'view2':
        import('./my-view2.js');
        break;
      case 'view3':
        import('./my-view3.js');
        break;
      case 'view4':
        import('./my-view4.js');
        break;                
      case 'view5':
        import('./my-view5.js');
        break;
      case 'view6':
        import('./my-view6.js');
        break;
      case 'view7':
        import('./my-view7.js');
        break;
      case 'view8':
        import('./my-view8.js');
        break;
      case 'view9':
        import('./my-view9.js');
        break;
       case 'view10':
        import('./my-view10.js');
        break;
       case 'view11':
        import('./my-view11.js');
        break;

       case 'view404':
        import('./my-view404.js');
        break;
    }
  }


ready() {
  super.ready();
 }

   handleClick() {
   this.shadowRoot.querySelector("#section-3").classList.toggle("show");
   this.opened = !this.opened;

  }

     handleClick2() {
      if(this.opened == true) {
   this.shadowRoot.querySelector("#section-3").classList.toggle("show");
   this.opened = !this.opened;
 }

  }
  
 connectedCallback() {
    super.connectedCallback();
    this._onResize = this.onResize.bind(this);
    window.addEventListener("resize", this._onResize);
 }

 onResize(e) {
    //console.log('width', e.currentTarget.innerWidth);
    console.log(e.currentTarget.innerWidth);
     console.log(this.opened);
    if(this.opened == true && e.currentTarget.innerWidth > 991) {
       this.shadowRoot.querySelector("#section-3").classList.toggle("show");
   this.opened = !this.opened;
     }
 }

 disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this._onResize);
 }



  /*
var links = this.shadowRoot.querySelector('.dropdown-link');
//var dropdown = this.shadowRoot.querySelector('.dropbtn');
//dropdown.addEventListener('mouseover', show);
//dropdown.addEventListener('mouseout', hideDropdown);
links.addEventListener('click', hide);

 function hideDropdown (e) {
console.log(e.currentTarget);    
  }


 function show (e) {
e.currentTarget.nextElementSibling.style.display = "block";    
  }


 function hide (e) {
console.log(e.currentTarget.parentNode)
    e.currentTarget.parentNode.classList.toggle('hide')
  }
  
*/


}

window.customElements.define('my-app', MyApp);
