

const styles = document.createElement('dom-module');
console.log(styles);
styles.innerHTML = 
  `<template>
    <style>

    .blockquote {
  background-colour: #ddd;
}


   .w-layout-grid {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
}

.section {
  width: 100%;
  max-width: 1920px;
}

.top {
  margin-top: 61px;
}
.div-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 740px;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  background-color: #005eb8;

}

.div-block.switch {
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  background-color: #005eb8;
}

.div-block.short {
  height: 370px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 61px;
  background-color:#8e24aa;
}

.div-block-2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 40%;
  padding-right: 5%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
      z-index: 10;
}

.div-block-2.right {
  width: 40%;
  padding-right: 0%;
  padding-left: 6%;
}

.div-block-2.narrow {
  width: 730px;
  padding-right: 0%;
  text-align: center;
}

.div-block-3 {
  width: 50%;
 /* background-image: url('src/images/image-102.png');
  background-position: 0px 0px;
  background-size: cover; */
}

.div-block-3.tile-2 {
 /* background-image: url('src/images/123.png');*/
}

.div-block-3.tile-3 {
 /* background-image: url('src/images/124.png');*/
}

.heading {
  margin: 0px 0px 32px;
  border: 0px none transparent;
  font-family: Mikado, sans-serif;
  color: #fff;
  font-size: 60px;
  line-height: 1;
  letter-spacing: 0.01em;
}

.heading._64px {
  font-size: 64px;
}

.heading.no-margin {
  margin-bottom: 20px;
}

.paragraph {
  font-family: Mikado, sans-serif;
  color: #fff;
  font-size: 23px;
  line-height: 1.45;
  font-weight: 400;
  letter-spacing: 0.01em;
}

.paragraph.hero-subtitle {
  margin-bottom: 15px;
}

.div-block-4 {
  width: 1198px;
}

.div-block-4.narrow {
  width: 730px;
}

.section-2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  padding-top: 160px;
  padding-bottom: 220px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: #f4f4f4;
}

.section-2.white {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  background-color: #fff;
}

.section-2.white.issue {
  padding-top: 100px;
}

.section-2.white.reduced-margin-top {
  padding-top: 100px;
}

.heading-2 {
  margin-top: 0px;
  margin-bottom: 70px;
  font-family: Mikado, sans-serif;
  color: #1c1c1c;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
}

.heading-2.page-ttile {
  margin-bottom: 100px;
  font-size: 48px;
}

.div-block-5 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 48.5%;
  height: 500px;
  min-height: auto;
  padding: 35px 40px 40px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 4px solid rgba(0, 0, 0, 0.11);
  background-color: #fff;
}

.div-block-5.publication {
  width: 50%;
}

.div-block-6 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: auto;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: transparent;
}

.heading-3 {
  margin-top: 0px;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-top: 0px solid #000;
  border-bottom: 4px solid #2c2c2c;
  font-family: Mikado, sans-serif;
  color: #2c2c2c;
  font-weight: 500;
  text-align: left;
}

.link {
  display: inline-block;
  width: 100%;
  margin-bottom: 2px;
  padding: 16px 20px;
  background-color: #005eb8;
  font-family: Mikado, sans-serif;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
}
.link:hover {
text-decoration: underline;
}
.paragraph-2 {
  font-family: Adobeclean, sans-serif;
  color: #5b5b5b;
  font-size: 20px;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: 0.01em;
}

.paragraph-3 {
  margin-bottom: 30px;
  font-family: Adobeclean, sans-serif;
  color: #7c7c7c;
  font-size: 16px;
  letter-spacing: 0.02em;
}

.grid {
  width: 100%;
  height: auto;
  justify-items: stretch;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  grid-column-gap: 40px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}

.grid.issue {
  margin-top: 50px;
  grid-row-gap: 40px;
}

.grid.issue.double {
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}

.div-block-7 {
  height: auto;
}

.div-block-8 {
  height: 208px;
  background-image: url('src/images/123.png');
  background-position: 0px 0px;
  background-size: contain;
}

.div-block-9 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 208px;
  padding: 20px 30px 15px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: #005eb8;
}

.heading-4 {
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: Mikado, sans-serif;
  color: #fff;
  font-size: 22px;
  line-height: 28px;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.paragraph-4 {
  color: #fff;
    font-family: Adobeclean, sans-serif;
}

.link-block {
  text-decoration: none;
}
  .chevron {
    filter: invert(1);
  }

  .back {
    transform: rotate(180deg);
  }
.div-block-10 {
  width: 100%;
  height: auto;
  margin-bottom: 50px;
  padding-bottom: 0px;
  border-bottom: 0px solid #1c1c1c;
}

.div-block-10.accordion {
  border-bottom-width: 4px;
}

.heading-5 {
  position: relative;
    margin-top: 80px;
    margin-bottom: 20px;
  font-family: Mikado, sans-serif;
  color: #2c2c2c;
  font-size: 28px;
  font-weight: 700;
}

.paragraph-5 {
  margin-bottom: 30px;
  font-family: Adobeclean, sans-serif;
  color: #4b4b4b;
  font-size: 20px;
  line-height: 1.7;
}

.paragraph-5.margin-bottom-40px {
  margin-bottom: 45px;
}

.arrow-placeholder {
  position: absolute;
  right: 0px;
}

.social {
  margin-top: 100px;
  margin-bottom: 100px;
}

.back-button {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 70px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;

}

.back-button.tall {
  height: 270px;
  margin-bottom: 0px;
  padding: 20px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-width: 0px;
  background-color: #0288d1;
}
.link-block-2:hover h5 {
  text-decoration: underline;
} 

.back-button.tall.right {
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  border-width: 2px;
  text-align: left;
}

.back-text {
  position: relative;
  display: inline;
  width: 100%;
  font-family: Mikado, sans-serif;
  color: #6A1B9A;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
}

.back-text.left {
  display: block;
  width: 90%;
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 1.3;
  text-align: left;
}

.back-text.left.right {
  width: 85%;
  text-align: right;
}

.back-text.left.white {
  color: #fff;
}

.text-span {
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  margin-left: 20px;
}

.issue-blocks {
  width: 100%;
  margin-top: 100px;
}

._1120px {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 1120px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.div-block-11 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 270px;
  padding-right: 30px;
  padding-left: 30px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #0288d1;
}

.link-block-2 {
  display: block;
  width: 100%;
  text-decoration: none;
}

.heading-6 {
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 15px;
  font-family: Mikado, sans-serif;
  color: #fff;
  font-size: 26px;
  line-height: 1.25;
  font-weight: 500;
text-align: center;
  letter-spacing: 0.01em;
}

.link-block-3 {
  text-decoration: none;
}

.div-block-12 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 100px;
  border-top: 4px solid #000;
}

.paragraph-6 {
  font-family: Mikado, sans-serif;
  color: #005eb8;
  font-size: 17px;
}

.paragraph-6.white {
  color: #fff;
}

.list-item {
  margin-bottom: 40px;
  font-family: Adobeclean, sans-serif;
  color: #4b4b4b;
  font-size: 21px;
  line-height: 1.6;
}

.link-2 {
  color: #005eb8;
}

.div-block-13 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 500px;
  margin-bottom: 40px;
  background-color: #fff;
}

.div-block-14 {
  width: 50%;
  background-image: url('src/images/image-106.png');
  background-position: 50% 50%;
  background-size: auto;
  background-repeat: no-repeat;
}

.div-block-14.description {
  background-image: none;
}

.div-block-15 {
  margin-bottom: 30px;
}

.white {
  color: #fff;
}

@media (max-width: 991px) {
  .top {
  margin-top: 56px;
}


plastic-image.large {
    width: 100%;
    height: 520px !important;
    background-color: #f5f5f5;
}

  .div-block {
    height: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #f5f5f5;
  }
  .div-block.switch {
    background-color: #f5f5f5;
  }
  .div-block-2 {
    position: relative;
    top: -110px;
    width: 90%;
    height: 400px;
    padding-right: 60px;
    padding-left: 60px;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
    background-color: #005eb8;
    text-align: center;
  }
  .div-block-2.right {
    width: 90%;
    padding-right: 60px;
    padding-left: 60px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .div-block-2.narrow {
    width: 100%;
    padding-right: 60px;
    padding-left: 60px;
  }
  .div-block-2.narrow.no-negative-margin {
    top: 0px;
  }
  .div-block-3 {
    width: 100%;
    height: 500px;
  }
  .div-block-3.tile-2 {
    height: 500px;
    background-color: transparent;
  }
  .heading {
    font-size: 48px;
  }
  .heading._64px {
    font-size: 55px;
  }
  .heading.no-margin {
    line-height: 1.2;
  }
  .paragraph {
    font-size: 21px;
  }
  .div-block-4.narrow {
    width: 90%;
  }
  .div-block-4.negative {
    margin-top: -30px;
  }
  .section-2 {
    padding-top: 40px;
    padding-bottom: 80px;
  }
  .section-2.white {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .heading-2 {
    text-align: center;
  }
  .heading-2.news {
    margin-top: 40px;
  }
  .div-block-5 {
    width: 90%;
    margin-bottom: 40px;
  }
  .div-block-5.publication {
    width: 90%;
    height: auto;
    padding-right: 0px;
    padding-left: 0px;
  }
  .div-block-6 {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .heading-3 {
    font-size: 24px;
    font-weight: 700;
  }
  .paragraph-2 {
    padding-right: 20px;
  }
  .paragraph-2.publciation {
    margin-bottom: 40px;
  }
  .grid {
    width: 100%;
    justify-items: center;
    grid-row-gap: 40px;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }
  .grid.issue {
    grid-row-gap: 10px;
  }
  .div-block-7 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 90%;
    height: 250px;
  }
  .div-block-8 {
    width: 50%;
    height: 100%;
    background-size: cover;
  }
  .div-block-9 {
    width: 50%;
    height: 100%;
    padding-top: 30px;
  }


  .link-block {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
  }


  .div-block-10 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .div-block-10.accordion {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .back-button.tall {
    height: 210px;
  }
  .back-button.tall.right {
    text-align: right;
  }
  .back-text.left.right.white {
    width: 97%;
    font-size: 23px;
  }
  .back-text.left.white {
    width: 95%;
    font-size: 23px;
  }
  .issue-blocks {
    width: 90%;
  }
  .div-block-11 {
    height: auto;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .heading-6 {
    margin-bottom: 0px;
    padding-top: 18px;
    padding-bottom: 20px;
    font-size: 21px;
    font-weight: 500;
  }
  .link-block-3 {
    width: 100%;
  }
  .paragraph-6.white {
    font-size: 15px;
  }
  .div-block-13 {
    height: auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .div-block-13.paddinf-bottom-0 {
    margin-bottom: 40px;
    padding-top: 20px;
    padding-bottom: 0px;
  }
  .div-block-14 {
    width: 100%;
    height: 400px;
    padding-top: 0px;
  }
}

@media (max-width: 767px) {
  .heading {
    margin-bottom: 20px;
    font-size: 40px;
    line-height: 1.1;
  }
  .heading._64px {
    font-size: 45px;
  }
  .paragraph {
    font-size: 19px;
  }
  .section-2 {
    padding-top: 0px;
  }
  .div-block-5 {
    height: auto;
  }
  .paragraph-2 {
    margin-bottom: 40px;
  }
  .div-block-9 {
    padding-right: 20px;
    padding-left: 20px;
  }
  .heading-4 {
    font-size: 20px;
  }
}

@media (max-width: 479px) {
  .div-block-2 {
    top: 0px;
    width: 100%;
    height: auto;
    padding: 40px 20px;
  }
  .div-block-2.right {
    top: 0px;
    width: 100%;
    height: auto;
    padding-right: 20px;
    padding-left: 20px;
  }
  .div-block-3 {
    height: 300px;
  }
  .heading {
    font-size: 34px;
    line-height: 1.1;
  }
  .heading._64px {
    margin-bottom: 20px;
    font-size: 36px;
  }
  .paragraph {
    padding-right: 10px;
    padding-left: 10px;
    font-size: 17px;
  }
  .div-block-4 {
    margin-top: 40px;
  }
  .div-block-4.negative {
    margin-top: 40px;
  }
  .section-2 {
    padding-top: 0px;
  }
  .heading-2 {
    margin-top: 5px;
    margin-bottom: 40px;
    font-size: 24px;
  }
  .heading-2.page-ttile {
    font-size: 30px;
  }
  .div-block-5 {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    padding: 30px 20px 60px;
  }
  .heading-3 {
    font-size: 20px;
    line-height: 1.3;
    font-weight: 500;
    text-align: left;
  }
  .link {
    font-size: 18px;
    line-height: 1.3;
  }
  .paragraph-2 {
    margin-bottom: 40px;
    padding-right: 0px;
    font-size: 17px;
    text-align: left;
  }
  .grid {
    grid-row-gap: 20px;
  }
  .grid.issue.double {
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }
  .div-block-7 {
    height: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .div-block-8 {
    width: 100%;
    height: 180px;
  }
  .div-block-9 {
    width: 100%;
    height: 190px;
    padding-top: 20px;
    padding-right: 20px;
    padding-left: 20px;
  }
  .heading-4 {
    font-size: 19px;
  }
  .link-block {
    display: block;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .heading-5 {
    font-size: 26px;
    margin-top: 80px;
    margin-bottom: 20px;
  }
  .paragraph-5 {
    font-size: 18px;
  }
  .paragraph-5.margin-bottom-40px {
    font-size: 17px;
  }
  .back-button.tall {
    height: auto;
  }
  .back-text {
    font-size: 17px;
  }
  .back-text.left.right.white {
    font-size: 20px;
  }
  .back-text.left.white {
    margin-bottom: 20px;
    font-size: 20px;
  }
  .div-block-11 {
    padding-left: 20px;
  }
  .heading-6 {
    font-size: 18px;
    line-height: 1.3;
  }
  .list-item {
    font-size: 18px;
  }
}

@font-face {
  font-family: 'Mikado';
  src: url('./src/fonts/hvd_fonts_-_mikadoregular-webfont.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Mikado';
  src: url('./src/fonts/hvd_fonts_-_mikadobold-webfont.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'Mikado';
  src: url('./src/fonts/hvd_fonts_-_mikadomedium-webfont.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'Adobeclean';
  src: url('./src/fonts/AdobeClean-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}
  </style>
  </template>`;
styles.register('styles');
console.log(styles.id);
