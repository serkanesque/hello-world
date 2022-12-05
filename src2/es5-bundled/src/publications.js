define(["../node_modules/@polymer/polymer/polymer-element.js","./shared-styles.js","../node_modules/@polymer/skeleton-carousel/skeleton-carousel.js"],function(_polymerElement,_sharedStyles,_skeletonCarousel){"use strict";function _templateObject_ee8bc0202caa11ea91a843ae9cba1c4a(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n\n\n  /* START HOMEPAGE WHAT WE DO */\n\n\n#publications {\n  width: 100%;\n\n    background-color: var(--app-primary-color);\n  display: flex;\n  align-items: center;\n    box-sizing: border-box;\n\npadding: var(--app-desktop-padding);\npadding-top: 100px;\npadding-bottom: 100px;  \n\n}\n\n#publications > div {\n  width: var(--app-content-wdith);\n  margin: 0 auto;\n   \n\n}\n\n\n\n\n#publications > div h1 {\n  color: #fff;\n  margin: 40px 0 120px 0;\n  padding-right: 96px;\n  line-height: 1.25em;\n}\n\n#publications > div h5 {\n background-color: #fff;\n color: var(--app-primary-color);\n position: relative;\n\n\n}\n\n#publications section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width:calc(100% - 32px);\n}\n\n#publications > div div{\n  display: block;\n\n  background-color: #fff;\n      padding-bottom: 76px;\n          position: relative;\n    width: calc(31.18% - 20px);\n            \n          \n\n}\n\n#publications > div div div {\nmargin-top: 0;\n}\n\n#publications > div div div:first-child{\n    position: relative;\n    top: -32px;\n    width: 100%;\n    padding-top: 65.27%;\n    margin: 0 0 0 10.3%;\n      background-color: transparent;\n\n}\n\n#publications > div div div {\n    width: 100%;\n    box-sizing: border-box;    \n    padding: 0 32px 8px;\n}\n\n#publications > div div div p {\n  margin-bottom: 32px;\n  padding-right: 0;\n    margin-bottom: 32px;\n}\n\n#publications h2 {\n    color: var(--app-primary-color);\n    margin-top: 0;\n    margin-bottom: 16px;\n    line-height: 1.25em;    \n}\n#publications p {\n    font-size: 16px;\n}\n#publications .button {\n    font-size: 18px;\n}\n\n.more {\n      position: absolute !important;\n  \n        background-color: transparent !important;\n}\n\n\niron-image {\n  width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n\n @media only screen and (max-width: 1120px) and (min-width: 768px)  {\n\n#publications > div h1 {\n  font-size: calc(2.58vw + 12px);\n }\n\n}\n\n\n @media only screen and (max-width: 1024px) {\n\n#publications section {\n  width: 100%;\n}\n\n#publications > div h1 {\n  padding-right: 64px;\n }\n\n#publications section {\n    flex-direction: column;\n  }\n\n  #publications > div {\n      padding-right: 0;\n\n  }\n#publications > div div{\n    width: 100%;    \n      display: block; \n      margin-bottom: 64px;\n    padding-bottom: 0;\n         \n}\n#publications > div div div p {\n  \n    padding-right: 16px;\n \n}\n\n\n\n.more {\n\n \n    bottom: -5px;\n     padding-right: 0 !important;\n\n}\n\n\n#publications > div div div p {\n  margin-bottom: 0;\n}\n\n\n#publications > div div div:first-child{\n    position: relative;\n    width: 43.25%;\n\n    margin:0;\n\n    float: left;\n    padding-top: 30.2%;\n    margin-left: 4.5%;\n    top: -32px;\n\n  }\n\n#publications > div div div:nth-child(2) {\n    width: 50%;\n    padding: 38px 28px 0 16px;\n       float: right\n}\n\n#publications > div div div:last-child {\n    width: 48.5%;\n    height: 40px;\n    float: right;\n    clear: left;\n    text-align: right;\n }\n\n\n#publications h2 {\n      font-size: 25px;\n    margin-bottom: 20px;\n}\n#publications p {\n    font-size: 16px;\n}\n#publications .button {\n    font-size: 18px;\n}\n}\n\n\n\n @media only screen and (max-width: 1024px) and (min-width: 769px) {\n\n\n#publications > div div div:nth-child(2){\nmargin-bottom: 0;\n}\n\n.more {\n      position: relative !important;\n  float: right;\n        background-color: transparent !important;\n}\n\n\n.small-headline {\n    font-size: 24px;\n  }\n\n#publications > div div div:last-child {\n    width: 48.5%;\n    height: auto;\n    float: right;\n    text-align: left;\n    padding: 0;\n    clear: right;\n    margin-top: 32px;\n\n \n}\n\n}\n\n\n\n\n  @media only screen and (max-width: 768px) {\n\n#publications {\n\npadding: var(--app-tablet-padding);\npadding-top: 100px;\npadding-bottom: 100px;\n}\n\n#publications h2 { \n    margin-bottom: 16px;\n      font-size: 22px;\n\n}\n\n.more {\n margin-top: 31% !important;\n bottom: auto;\n}\n\n}\n\n\n  @media only screen and (max-width: 660px) {\n#publications {\n\n}\n\n#publications > div h1 {\n    padding-right: 0;\n}\n\n#publications > div div{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n        justify-content: flex-end;\n    align-items: center;\n    padding-bottom: 40px;\n}\n\n#publications > div div div:first-child{\n \n    width: 80% !important;\n    padding-top: 53.25% !important;\n    float: none;\n    margin-left: 0;\n\n  }\n\n#publications > div div div{\n    width: 100% !important;\n    float: none;\n    padding: 0 32px !important;\n\n  }\n#publications > div div div:last-child {\n\n height: auto;\n }\n#publications h2 {\n    text-align: center;\n    font-size: 24px;\n}\n#publications p {\n    text-align: center;\n    font-size: 14px;\n}\n\n#publications .button {\n    font-size: 16px;\n}\n.more { \n    bottom: 32px;   \n      margin-bottom: 0 !important;\n\n}\n\n\n}\n\n\n  @media only screen and (max-width: 480px) {\n#publications {\n      padding: var(--app-mobile-padding);\n    padding-top: 64px;\n    padding-bottom: 0;\n}\n#publications h2 {\n  font-size: 20px;\n    margin-bottom: 8px;\n}\n#publications > div h1 {\n\n    margin: 40px 0 100px 0;\n\n}\n\n}\n\n  @media only screen and (max-width: 375px) {\n#publications {\n      padding: var(--app-mobile-small-padding);\n    padding-top: 64px;\n    padding-bottom: 0;\n}\n\n\n\n\n      </style>\n  \n\n\n<div id=\"publications\">\n            <div>     \n           \n            <h5>What we do</h5>\n             <h1 class=\"large-headline\">Our mission dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, nsectetur adipiscing</h1>\n\n              <section>\n\n\n\n     <div>\n              <div>\n             <iron-image sizing=\"cover\" preload placeholder=\"\" fade src=\"./src/images/advocacy.png\"></iron-image>\n\n              </div>\n              <div>\n               <h2 class=\"small-headline\">Advocacy and Campaigning</h2>\n                <p class=\"headline-body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor. Nam pellentesque euismod laoreet.</p>\n               </div>\n               <div class=\"more\"><a name=\"view4\" href=\"[[rootPath]]view4\" class=\"button\">Read more</a></div>\n              </div>\n\n     <div>\n              <div>\n             <iron-image sizing=\"cover\" preload placeholder=\"\" fade src=\"./src/images/education.png\"></iron-image>\n              </div>\n              <div>\n               <h2 class=\"small-headline\">Advocacy and Campaigning</h2>\n                <p class=\"headline-body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor. Nam pellentesque euismod laoreet.</p>\n               </div>\n               <div class=\"more\"><a name=\"view4\" href=\"[[rootPath]]view4\" class=\"button\">Read more</a></div>\n              </div>\n\n\n     <div>\n              <div>\n             <iron-image sizing=\"cover\" preload placeholder=\"\" fade src=\"./src/images/tree.png\"></iron-image>\n\n              </div>\n              <div>\n               <h2 class=\"small-headline\">Advocacy and Campaigning</h2>\n                <p class=\"headline-body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor. Nam pellentesque euismod laoreet.</p>\n               </div>\n               <div class=\"more\"><a name=\"view4\" href=\"[[rootPath]]view4\" class=\"button\">Read more</a></div>\n              </div>\n\n\n\n\n\n\n       </section>\n            </div>\n            </div>\n\n\n\n  \n\n\n    "]);_templateObject_ee8bc0202caa11ea91a843ae9cba1c4a=function _templateObject_ee8bc0202caa11ea91a843ae9cba1c4a(){return data};return data}var Publications=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(Publications,_PolymerElement);function Publications(){babelHelpers.classCallCheck(this,Publications);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Publications).apply(this,arguments))}babelHelpers.createClass(Publications,null,[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_ee8bc0202caa11ea91a843ae9cba1c4a())}}]);return Publications}(_polymerElement.PolymerElement);window.customElements.define("publications",Publications)});