<template>
  <router-view />
</template>
<script>
export default {};
</script>

<style>
#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: gotham;
  font-style: normal;
  font-weight: 400;
  src: local("Gotham Rounded"),
    url("https://fonts.cdnfonts.com/s/22255/Gotham Rounded Bold.woff")
      format("woff");
}
@font-face {
  font-family: gotham;
  font-style: normal;
  font-weight: 300;
  src: local("Gotham Rounded"),
    url("https://fonts.cdnfonts.com/s/22255/Gotham Rounded Light.woff")
      format("woff");
}
@font-face {
  font-family: gotham;
  font-style: italic;
  font-weight: 300;
  src: local("Gotham Rounded"),
    url("https://fonts.cdnfonts.com/s/22255/Gotham Rounded Light Italic.woff")
      format("woff");
}
@font-face {
  font-family: gotham;
  font-style: normal;
  font-weight: 350;
  src: local("Gotham Rounded"),
    url("https://fonts.cdnfonts.com/s/22255/Gotham Rounded Medium.woff")
      format("woff");
}
@font-face {
  font-family: gotham;
  font-style: italic;
  font-weight: 350;
  src: local("Gotham Rounded"),
    url("https://fonts.cdnfonts.com/s/22255/Gotham Rounded Medium Italic.woff")
      format("woff");
}

.header {
  width: 100%;
  margin: 0 auto;
  background: #d72c2b;
}
.subheader {
  width: 100%;
  margin-top: 30px;
}
.subheader > div {
  width: 86%;
  max-width: 980px;
  margin: 0 auto;
  padding-bottom: 20px;
}
.header img,
.subheader img {
  width: 100%;
}

.m-nav {
  position: fixed;
  width: 28px;
  height: 28px;
  z-index: 999999999 !important;
  right: 5px;
  top: 20px;
  display: block;
}
.m-nav a {
  font-size: 16px;
  color: #fff;
  background: #d42a29;
  border-radius: 50%;
  line-height: 28px;
  pointer-events: pointer;
  display: block;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  text-align: center;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}

.toTop {
  border: none !important;
  background: none !important;
  position: fixed;
  width: 40px;
  height: 40px;
  z-index: 999999999 !important;
  right: 5px;
  bottom: 15px;
  display: block;
  display: none;
  pointer-events: pointer;
}
.toTop a {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.8) !important;
  background: rgb(0, 0, 255);
  border-radius: 50%;
  cursor: pointer;
  line-height: 40px;
  pointer-events: pointer;
  display: block;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  text-align: center;
  -webkit-transition: 1.5s;
  -moz-transition: 1.5s;
  transition: 1.5s;
}
.toTop a:before {
  color: #fff;
}
.toTop i {
  pointer-events: pointer;
}

.nav {
  background: #2b45d7;
}
.nav p,
.nav .nav-option {
  line-height: 30px;
  padding: 15px 0 0 0;
  font-size: 21px;
  text-align: center;
  font-family: gotham, Arial, sans-serif;
  font-weight: 600;
  width: 100%;
}
.nav .nav-option {
  padding-bottom: 10px;
  padding-top: 10px;
  position: relative;
}
.nav .nav-option > div {
  display: inline-block;
  margin: 0;
  padding: 0;
  position: relative;
}
.nav .nav-option > .nav-hidden-lg {
  display: none;
}
.nav .nav-option > .nav-hidden-xs {
  display: inline-block;
}
.nav p a,
.nav .nav-option a {
  color: #fff;
  text-decoration: none;
  /* border-bottom: #d42a29 2px solid;
    border-top: #d42a29 2px solid; */
  text-transform: uppercase;
  margin: 0 7.5px;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}
.nav p a.icon,
.nav .nav-option a.icon {
  background: #fff;
  color: #2b45d7;
  width: 30px;
  height: 30px;
  display: inline-block;
  font-size: 16px;
  border-radius: 50%;
  vertical-align: middle;
  line-height: 30px;
  border: #fff 2px solid;
  color: #0c86ee;
  line-height: 28px;
}
.nav p a:hover,
.nav p a,
.nav .nav-option a:hover {
  text-decoration: none;
  border-bottom: #fff 2px dotted;
  border-top: #fff 2px dotted;
  color: rgba(255, 255, 255, 0.6);
}
.nav p a.icon:hover,
.nav .nav-option a.icon:hover {
  border: #22428b 2px solid;
  color: #fff;
  background: #22428b;
}
.subnav {
  background: #ffcc05; /*display: none; */
  width: 100%;
}
.subnav p {
  line-height: 20px;
  padding: 10px 0 10px 0;
  margin-bottom: 0;
  font-size: 16px;
  text-align: center;
  font-family: gotham, Arial, sans-serif;
  font-weight: 400;
  width: 100%;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}
.subnav p a {
  color: #434343;
  text-decoration: none;
  border-bottom: #ffcc05 2px solid;
  border-top: #ffcc05 2px solid;
  text-transform: uppercase;
  margin: 0 8px;
  display: inline-block;
}
.subnav p a:hover,
.subnav p a:focus,
.subnav p a:active {
  color: #434343;
  text-decoration: none;
  border-bottom: #434343 2px dotted;
  border-top: #434343 2px dotted;
}
.subnav3 {
  width: 100%;
  z-index: 999;
  padding-bottom: 15px;
  position: absolute;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80000000', endColorstr='#00000000',GradientType=0 );
}
.subnav3 p {
  color: #fff;
  line-height: 10px;
  padding: 2.5px 0 2.5px 0;
  margin: 0 auto;
  font-size: 10px;
  text-align: right;
  padding-right: 25px;
  font-family: gotham, Arial, sans-serif;
  font-weight: 100;
  width: 100%;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}
.subnav3 p a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 0 0 8px;
  display: inline-block;
}
.subnav3 p a:hover,
.subnav3 p a:focus,
.subnav3 p a:active {
  color: #fff;
  text-decoration: none;
}
.nav .subnav2 {
  background: #22418d;
  display: none;
  width: 300px;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 9;
}
.nav .subnav2:before {
  content: " ";
  position: absolute;
  top: -7.5px;
  left: 25%;
  width: 0;
  height: 0;
  border-left: 7.5px solid transparent;
  border-right: 7.5px solid transparent;
  border-bottom: 7.5px solid #22418d;
}
.nav .subnav2 p {
  line-height: 20px;
  padding: 10px 0 10px 0;
  margin-bottom: 0;
  font-size: 14px;
  text-align: left;
  font-family: gotham, Arial, sans-serif;
  font-weight: 400;
  width: 100%;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}
.nav .subnav2 p a {
  color: #fff;
  text-decoration: none;
  border-bottom: #22418d 2px solid;
  border-top: #22418d 2px solid;
  text-transform: uppercase;
  margin: 0 15px;
  display: block;
  min-width: 80%;
}
.nav .subnav2 p a:hover,
.nav .subnav2 p a:focus,
.nav .subnav2 p a:active {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  border-bottom: #22418d 2px dotted;
  border-top: #22418d 2px dotted;
}

nav.otso {
  background: #d72c2b;
}

.candidates {
  width: 90%;
  max-width: 1524px;
  text-align: center;
  margin: 0 auto;
  position: relative;
}
.candidates .candidate img,
.candidate img {
  width: 100%;
  display: block;
}
.candidates .candidate a,
.candidate a {
  display: block;
  padding: 0;
  margin: 0;
}
.candidates .candidate,
.candidate {
  display: inline-block;
  margin: 0;
  padding: 0;
  font-size: 0;
}
.candidates .w-270 {
  width: 46%;
}
.candidates .w-custom {
  width: 80%;
}
.candidates .w-325,
.w-325 {
  width: 35%;
}
.w-custom-size {
  width: 80%;
}
.w-custom-size1 {
  width: 60%;
}
.w-custom-size2 {
  width: 70%;
}
.candidates .w-224,
.w-224 {
  width: 22%;
}
w-custom2 {
  width: 70%;
}
.candidates .m-negmargin-5,
.m-negmargin-5 {
  margin-top: 0;
}
.custom-padding {
  margin-top: 100px;
}
.candidates .negmargin-5,
.negmargin-5 {
  margin-top: -5%;
}

.candidate-holder {
  width: 100%;
  background: url("./assets/images/bg-grey.html") center no-repeat;
  background-size: 100%;
}
.candidate-holder .candidate {
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 3% 0 7% 0;
  display: block;
}
.candidate-holder .candidate img {
  width: 100%;
  max-width: 650px;
  display: inline-block;
}

.platform {
  width: 80%;
  max-width: 980px;
  margin: 0 auto;
  padding: 20px 0;
}
.platform .ico {
  width: 45%;
  margin: 0 auto;
  text-align: center;
}
.platform .ico img {
  width: 100%;
  display: inline-block;
  max-width: 250px;
  margin: 0 auto;
}
.platform ul,
.platform li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.platform li p {
  font-size: 20px;
  text-align: center;
  color: #434343;
  font-family: gotham, Arial, sans-serif;
  font-weight: 400;
}

.candidate-description {
  position: relative;
  width: 100%;
}
.candidate-description .desc {
  width: 80%;
  max-width: 900px;
  margin: -30px auto 0 auto;
  position: relative;
  font-size: 16px;
}
.candidate-description .desc:before {
  content: "“";
  color: #898989;
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 100px;
  line-height: 1em;
  font-family: Georgia, "Times New Roman", serif;
}
.candidate-description .desc:after {
  content: "”";
  color: #898989;
  position: absolute;
  right: 0;
  top: 0px;
  font-size: 100px;
  line-height: 2em;
  font-family: Georgia, "Times New Roman", serif;
}
.candidate-description .desc p {
  padding: 0 10%;
  font-size: 24px;
  font-style: italic;
  color: #434343;
  font-weight: 400;
  font-family: gotham, Arial, sans-serif;
  text-align: center;
}
.candidate-description .resume {
  width: 80%;
  max-width: 900px;
  margin: 0 auto 0 auto;
  position: relative;
  font-size: 16px;
  padding: 30px 0;
}
.candidate-description .resume h1 {
  font-size: 24px;
  text-align: center;
  padding-bottom: 20px;
}
.candidate-description .resume p {
  font-size: 18px;
  font-family: gotham, Arial, sans-serif;
  color: #fff;
  padding: 0;
  font-weight: 100;
  margin: 0;
}
.candidate-description .resume p span {
  display: inline-block;
  vertical-align: top;
}
.candidate-description .resume p span:first-child {
  width: 40%;
  font-weight: 400;
  text-align: right;
  padding-right: 20px;
}
.candidate-description .resume p span:last-child {
  width: 57%;
  text-align: left;
}
.candidate-description .resume ul {
  margin-left: 20px;
}
.candidate-description .resume .cv {
  width: 46%;
  float: left;
  display: block;
}
.candidate-description .resume .cv:first-child {
  margin-right: 5%;
}
.candidate-description .resume .cv p {
  text-align: justify;
  color: #434343;
}
.candidate-description .resume li p {
  color: #434343;
}
.candidate-description .resume .cv li li p {
  font-size: 16px;
  line-height: 20px;
  color: #606060;
}

.candidate-platform {
  position: relative;
}
.candidate-platform > .platform .ico {
  width: 31%;
  max-width: auto !important;
  float: left;
  padding-top: 30px;
}
.candidate-platform > .platform .desc {
  width: 63%;
  float: left;
  margin-left: 3%;
  text-align: left;
  padding-top: 30px;
}
.candidate-platform > .platform .ico img {
  max-width: 250px;
  width: 100%;
}
.candidate-platform > .platform .desc p {
  text-align: left;
}
.candidate-platform > .platform .desc h1 {
  text-align: left;
  padding-bottom: 20px;
  font-size: 24px;
}
.candidate-platform > .platform li p {
  font-size: 20px;
  text-align: center;
  color: #434343;
  font-family: gotham, Arial, sans-serif;
  font-weight: 100;
}

.candidate-desc {
  width: 86%;
  max-width: 980px;
  margin: 0 auto;
}
.inner-cand {
  /*padding-bottom: 30px;*/
}
.candidate-description .platform {
  width: 80%;
  max-width: 650px;
  margin: 0 auto 0 auto;
  padding-top: 25px;
  position: relative;
  font-size: 16px;
  z-index: 9;
}
.candidate-description .platform ul,
.candidate-description .platform li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.candidate-description .platform ul {
  margin-top: 20px;
}
.candidate-description .platform li:before {
  content: "â€¢";
  position: absolute;
  top: -55px;
  color: #434343;
  right: 50%;
  font-size: 3em;
}
.candidate-description .platform li:first-child::before {
  content: " ";
}
.candidate-description .platform li {
  margin: 30px 0;
  position: relative;
}
.candidate-description .platform li p {
  font-size: 20px;
  line-height: 1.4em;
  text-align: center;
  color: #434343;
  font-family: gotham, Arial, sans-serif;
  font-weight: 100;
}

.candidate-desc p {
  padding: 30px 10% 0 10%;
  font-size: 20px;
  color: #434343;
  font-weight: 400;
  font-family: gotham, Arial, sans-serif;
  text-align: center;
}
.candidate-desc h3 {
  font-family: gotham, Arial, sans-serif;
  font-weight: normal;
  font-size: 22px;
  text-align: center;
  font-style: italic;
  padding-top: 10px;
}
.candidate-desc .ico {
  width: 45%;
  max-width: 200px;
  margin: 0 auto;
}
.candidate-desc .ico img {
  width: 100%;
}
.candidate-desc h1 {
  font-family: gotham, Arial, sans-serif;
  font-style: italic;
  font-size: 36px;
  padding: 0;
  margin: 0;
  text-align: center;
  font-weight: 600;
}
.candidate-desc h1 span {
  font-size: 26px;
  font-weight: 600;
  display: block;
}

.section {
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
}

.makinig {
  padding: 10% 0 5% 0;
}

.makinig-main {
  padding: 50px 0;
}
.makinig-holder {
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  border-top: #434343 2px solid;
  border-bottom: #434343 2px solid;
  padding: 35px 0 0 0;
  text-align: center;
}
.makinig-holder::before {
  content: " ";
  width: 100%;
  height: 100px;
  background: url("./assets/images/insight-ico.gif") top center no-repeat;
  background-size: 125px;
  display: block;
  text-align: center;
  position: absolute;
  top: -50px;
  z-index: 999;
}
.makinig-holder > div {
  padding: 10px 0;
  position: relative;
  width: 32%;
  display: inline-block;
  vertical-align: top;
}
.makinig-holder > div:last-child {
  width: 100%;
  float: none;
}
.makinig-holder h2 {
  font-family: gotham, Arial, sans-serif;
  font-weight: 400;
  color: #434343;
  font-size: 22px;
  text-align: center;
  padding: 5px 3%;
}
.makinig-holder h2:before {
  content: "â€œ";
}
.makinig-holder h2:after {
}
.makinig-holder h3 {
  font-family: gotham, Arial, sans-serif;
  font-weight: 100;
  color: #434343;
  font-size: 16px;
  text-align: center;
  font-style: italic;
  padding: 5px 2%;
  padding-top: 10px;
}
.makinig-holder h3:before {
  content: "~";
}
.makinig-holder h4 {
  font-family: gotham, Arial, sans-serif;
  font-weight: normal;
  color: #434343;
  font-size: 20px;
  text-align: center;
  padding-top: 10px;
  padding: 5px 2%;
}

.makinig-featured {
  position: relative;
}
.makinig-featured .h4 {
  position: absolute;
  bottom: 20%;
  width: 100%;
  opacity: 0.9;
  z-index: 9;
}
.makinig-featured .grad_overlay {
  content: " ";
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#b3000000',GradientType=0 );
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 50%;
  z-index: 1;
}
.makinig-featured h4 {
  display: block;
  width: 70%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  font-size: 24px;
  font-family: gotham, Arial, sans-serif;
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 0 5px #434343;
}
.makinig-featured h4:before {
  content: "â€œ";
  font-size: 1em;
  top: -5%;
  left: -3%;
  font-weight: 600;
}
.makinig-featured h4:after {
  font-size: 1em;
  bottom: -15%;
  right: -7%;
  font-weight: 600;
}

.makinig-holder2 {
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding-top: 20px;
}
.makinig-holder2 h4 {
  font-family: gotham, Arial, sans-serif;
  font-weight: normal;
  color: #434343;
  font-size: 22px;
  text-align: center;
  padding-top: 10px;
  padding: 5px 2%;
}
.makinig-holder2 p {
  font-family: gotham, Arial, sans-serif;
  font-size: 16px;
  color: #434343;
  padding: 15px 0 0 0;
  font-weight: 100;
  text-align: justify;
}

.matuto {
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0;
}
.matuto-holder {
}
.matuto-content {
  float: left;
  width: 24%;
  padding: 15px 0 15px 1%;
}
.matuto-content > .img {
  width: 100%;
  text-align: center;
}
.matuto-content > .img img {
  width: 80%;
  display: inline-block;
}
.matuto-content > .desc {
  position: relative;
}
.matuto-content > .desc p {
  font-family: gotham, Arial, sans-serif;
  line-height: 30px;
  color: #4e4e4e;
  font-size: 18px;
  text-align: center;
  padding: 5px 10px;
  font-weight: 400;
}
.matuto-content > .desc p a {
  font-weight: 100;
  text-decoration: none;
  border-bottom: #9c9c9c 1px solid;
  color: #9c9c9c;
}

.matuto-content > .desc p a:hover {
  color: #1b3a8d;
  border-bottom: #1b3a8d 1px dotted;
}

.watcher {
  width: 80%;
  max-width: 980px;
  margin: 0 auto;
}
.watcher h1 {
  font-family: gotham, Arial, sans-serif;
  color: #434343;
  font-size: 36px;
  font-weight: 600;
  text-align: center;
}
.watcher h2 {
  font-family: gotham, Arial, sans-serif;
  color: #434343;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  padding-bottom: 20px;
}
.watcher h3 {
  font-family: gotham, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
}
.watcher ul,
.watcher li,
.watcher p {
  padding: 0;
  margin: 0;
}
.watcher ul {
  margin: 0 0 0 25px;
  padding: 20px 0;
}
.watcher p {
  padding: 5px 0;
}

.footer-kumilos {
  background: #fff url("./assets/images/kumilos-bg.jpg") bottom no-repeat !important;
  background-size: 100%;
}
.kumilos {
  width: 80%;
  max-width: 980px;
  padding: 15% 0;
  margin: 0 auto;
}
.kumilos div > .img {
  width: 46%;
  float: left;
}
.kumilos div > .img img {
  width: 100%;
}
.kumilos div > .desc {
  width: 80%;
  max-width: 800px;
  float: right;
  text-align: left;
  padding-top: 20px;
}
.kumilos div > .desc p {
  font-family: gotham, Arial, sans-serif;
  line-height: 30px;
  color: #434343;
  font-size: 20px;
  text-align: left;
  padding: 5px 10px;
  font-weight: 600;
}
.kumilos > .desc {
  text-align: left;
  font-family: gotham, Arial, sans-serif;
  font-size: 18px;
  color: #434343;
  width: 80%;
  max-width: 800px;
}
.kumilos > .desc a {
  background: #22418d;
  color: #fff;
  display: inline-block;
  padding: 7.5px 25px;
  border-radius: 7.5px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 100;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}
.kumilos > .desc a:hover {
  background: #d42c29;
}
.kumilos .desc > div {
  width: 31%;
  float: left;
  display: block;
  margin-right: 2%;
}
.kumilos .desc > div p {
  font-size: 15px;
}

.top-pad {
  padding-top: 10%;
}
.bot-pad {
  padding-bottom: 10%;
}
.top-pad5 {
  padding-top: 2.5%;
}
.bot-pad5 {
  padding-bottom: 2.5%;
}

.carousel {
  margin: 0;
  padding: 0;
  display: block;
}
.carousel div img {
  width: 100%;
  display: block;
}
.carousel-indicators li {
  background-color: #434343;
  width: 15px;
}

.diagonal-divider-top {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99 !important;
}
.diagonal-divider-bottom {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99 !important;
}
.diagonal-divider-top img,
.diagonal-divider-bottom img {
  width: 100%;
  display: block;
}

.videoWrapper {
  position: relative;
  padding-bottom: 39.2%;
  padding-top: 25px;
  height: 0;
  width: 86%;
  max-width: 1024px;
  margin: 0 auto;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 2%;
  width: 96%;
  height: 100%;
}

.social {
  padding: 20px 0;
  text-align: center;
}
.social a {
  font-size: 50px;
  color: #434343;
  background: #fff;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  line-height: 75px;
  vertical-align: middle;
  display: inline-block;
  margin: 10px;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}
.social a:hover {
  opacity: 0.8;
}
.social img {
  display: block;
  width: 100%;
}

.follow-social {
  padding: 20px 0;
  text-align: center;
}
.follow-social a {
  width: 20%;
  max-width: 180px;
  display: inline-block;
  margin: 10px;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
  position: relative;
}
.follow-social a:before {
  content: " ";
  background: url("./assets/images/social-fg.png") no-repeat;
  background-size: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
}
.follow-social a:hover {
  opacity: 0.8;
}
.follow-social img {
  display: block;
  width: 100%;
  border-radius: 50%;
  border: #fff 3px solid;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}
.follow-social img:hover {
  border: #ffcc06 3px solid;
}
.follow-social a:after {
  content: " ";
  font-family: fontAwesome;
  font-size: 30px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: block;
  border-radius: 50%;
  color: #434343;
  background: none;
  vertical-align: middle;
  text-align: center;
  position: absolute;
  bottom: 15px;
  right: 15px;
  pointer-events: none;
  z-index: 9;
  background: #fff;
}
.follow-social a.fb-ico:after {
  content: "\f09a";
}
.follow-social a.ig-ico:after {
  content: "\f16d";
  border-radius: 15px;
}
.follow-social a.twtr-ico:after {
  content: "\f099";
}
.follow-social a.web-ico:after {
  content: "\f108";
  border-radius: 5px;
}

.footer-links {
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 30px;
}
.footer-links p,
.footer-links a {
  font-family: gotham, Arial, sans-serif;
  font-size: 14px;
  color: #fff;
  font-weight: 100;
}
.footer-links .privacy {
  width: 25%;
  float: right;
  text-align: right;
}

#calltext,
#donate-now {
  display: none;
}
.phone-holder {
  width: 50%;
  max-width: 800px;
  margin: 25vh auto 0 auto;
  text-align: center;
  top: 0;
  background: #22418d;
  padding: 3.5% 2.5%;
  border-radius: 20px;
  border: #fff 10px solid;
  position: relative;
}
.phone-holder > .close-btn {
  position: absolute;
  top: -20px;
  right: -25px;
}
.phone-holder > .close-btn a {
  width: 50px;
  height: 50px;
  line-height: 50px;
  display: block;
  background: #d42a29;
  color: #fff;
  border-radius: 50%;
  font-size: 24px;
  vertical-align: middle;
  text-align: center;
}
.phone-holder h2 {
  font-family: gotham, Arial, sans-serif;
  font-size: 25px;
  font-weight: 600;
  color: #fff;
  border-bottom: #fff 2px dotted;
  padding-bottom: 10px;
}
.phone-holder h3 {
  font-family: gotham, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
}
.phone-holder h4 {
  font-family: gotham, Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
}
.phone-holder h3 b {
  font-weight: 600;
  color: #ffcc05;
}
.phone-holder h4 b {
  font-weight: 400;
  color: #ffcc05;
  font-size: 16px;
}
.phone-holder h4 a {
  text-decoration: none;
}
.phone-holder p {
  font-family: gotham, Arial, sans-serif;
  font-size: 12px;
  color: #fff;
  font-weight: 100;
  padding-top: 15px;
}
.phone-holder a.button {
  display: inline-block;
  padding: 15px 30px;
  border-radius: 15px;
  background: #ffcc05;
  color: #fff;
  font-size: 20px;
  font-weight: 600px;
  font-family: gotham, Arial, sans-serif;
  text-decoration: none;
  margin-top: 2.5%;
}

.plataporma_header {
  margin-top: 20px;
}
.plataporma_header div.xs-hidden a {
  display: inline-block;
  margin: 0 0 0 0;
  padding: 0;
  width: 12.5%;
}
.plataporma_header div a img {
  width: 100%;
}

.clear {
  clear: both;
  padding: 0;
  margin: 0;
  height: 0;
  line-height: 0;
}

/** Big Buttons **/
.big-btn {
  text-align: center;
  padding: 20px;
}
.big-btn a {
  font-family: gotham, Arial, sans-serif;
  font-style: italic;
  font-size: 48px;
  text-align: center;
  font-weight: 600;
  padding: 15px 50px;
  border-radius: 25px;
  border: #fff 10px solid;
  color: #fff;
  display: inline-block;
  text-decoration: none;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}
.big-btn a:hover,
.big-btn a:focus,
.big-btn a:active {
  background: #fff;
  color: #4e4e4e;
  border: #4e4e4e 10px solid;
}

.big-btn-rev {
  text-align: center;
  padding: 20px;
}
.big-btn-rev a {
  font-family: gotham, Arial, sans-serif;
  font-style: italic;
  font-size: 48px;
  text-align: center;
  font-weight: 600;
  padding: 15px 50px;
  border-radius: 25px;
  border: #4e4e4e 10px solid;
  color: #4e4e4e;
  display: inline-block;
  text-decoration: none;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}
.big-btn-rev a:hover,
.big-btn-rev a:focus,
.big-btn-rev a:active {
  background: #4e4e4e;
  color: #fff;
  border: #fff 10px solid;
}

.big-button {
  text-align: center;
  padding: 20px;
}
.big-button a {
  font-family: gotham, Arial, sans-serif;
  font-style: italic;
  font-size: 48px;
  text-align: center;
  font-weight: 600;
  padding: 15px 50px;
  border-radius: 25px;
  border: white 10px solid;
  color: white;
  display: inline-block;
  text-decoration: none;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}
.big-button a:hover,
.big-button a:focus,
.big-button a:active {
  background: white;
  color: black;
  border: black 10px solid;
}

/** Backgrounds **/
.blue {
  background: #22418d;
}
.yellow {
  background: #ffcc05;
}
.red {
  background: #d42a29;
}
.darkgrey {
  background: #434343;
}
.grey {
  background: #e5e5e5;
}
.white {
  background: #ffffff;
}
.black-alpha {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 9999999999999 !important;
  top: 0;
  left: 0;
}

/** Font Color **/
.fblue {
  color: #22418d;
}
.fblue a {
  color: #22418d;
}
.fyellow {
  color: #ffcc05;
}
.fyellow a {
  color: #ffcc05;
}
.fred {
  color: #d42a29;
}
.fred a {
  color: #d42a29;
}
.fgrey {
  color: #434343;
}
.fgrey a {
  color: #434343;
}
.fwhite {
  color: #ffffff;
}
.fwhite a {
  color: #ffffff;
}
.fblack {
  color: #000000;
}
.fblack a {
  color: #000000;
}

.xs-hidden {
  display: block !important;
}
.cxs-hidden {
  display: inline-block !important;
}
.clg-hidden,
.lg-hidden {
  display: none !important;
}
.carousel-indicators {
  display: auto;
}

h1 {
  font-family: gotham, Arial, sans-serif;
  font-style: italic;
  font-size: 40px;
  padding: 0;
  margin: 0;
  text-align: center;
  font-weight: 600;
}
h1 span {
  font-size: 34px;
}

@media screen and (max-width: 980px) {
  .makinig-featured h4 {
    width: 96%;
    font-size: 18px;
  }
  .makinig-holder {
    width: 94%;
  }
}

@media screen and (max-width: 767px) {
  .candidates .m-negmargin-5 {
    margin-bottom: -15%;
  }
  .candidates .negmargin-5 {
    margin-top: 0%;
  }
  .candidates .w-325 {
    width: 56% !important;
  }
  .candidates .w-270 {
    width: 46% !important;
    display: inline-block;
  }
  .candidates .w-224 {
    width: 38.6% !important;
  }
  .candidates .clear {
    display: none;
  }
  .nav {
    display: none;
  }
  .nav .nav-option > .nav-hidden-xs {
    display: none;
  }
  .nav .nav-option > .nav-hidden-lg {
    display: inline-block;
  }
  h1 {
    font-size: 24px;
    padding: 10px 0;
  }
  .big-btn a {
    font-size: 26px;
    line-height: 26px;
    border: #fff 5px solid;
    padding: 15px;
    border-radius: 20px;
    text-transform: uppercase;
  }
  .big-btn a:hover,
  .big-btn a:focus,
  .big-btn a:active {
    border: #4e4e4e 5px solid;
  }
  .big-btn-rev a {
    font-size: 26px;
    line-height: 26px;
    border: #434343 5px solid;
    padding: 15px;
    border-radius: 20px;
    text-transform: uppercase;
  }
  .big-btn-rev a:hover,
  .big-btn-rev a:focus,
  .big-btn-rev a:active {
    border: #fff 5px solid;
  }
  .kumilos div > .img,
  .kumilos div > .desc {
    width: 96%;
    float: none;
  }
  .kumilos div > .desc p {
    text-align: center;
  }
  .kumilos div > .desc p br {
    display: none;
  }

  .matuto {
    width: 90%;
  }
  .matuto-content {
    width: 100%;
    float: none;
    margin: 0 auto;
    padding: 10px 0;
  }
  .matuto-content > .img {
    width: 30%;
    float: left;
  }
  .matuto-content > .desc {
    width: 68%;
    float: left;
  }
  .matuto-content > .desc p {
    text-align: left;
    font-size: 16px;
    line-height: 24px;
  }
  .candidate-desc {
    width: 96%;
  }
  .candidate-desc p {
    font-size: 14px;
    line-height: 24px;
    padding: 20px 0;
  }

  .platform li p {
    font-size: 16px;
  }
  .platform .ico {
    width: 60%;
  }

  .kumilos > .desc {
    width: 96%;
  }
  .kumilos .desc > div {
    width: 90%;
    float: none;
    margin: 0 auto;
    display: block;
    text-align: center;
  }

  .candidate-platform > .platform .ico {
    width: 90%;
    float: none;
    padding-top: 30px;
  }
  .candidate-platform > .platform .desc {
    width: 96%;
    float: none;
    padding-top: 30px;
  }
  .candidate-platform > .platform .desc p {
    text-align: center;
  }
  .candidate-platform > .platform .desc h1 {
    text-align: center;
  }

  .candidate-description .resume .cv {
    width: 96%;
    float: none;
    display: block;
  }
  .candidate-description .resume .cv li p {
    text-align: left;
  }

  .xs-hidden,
  .cxs-hidden {
    display: none !important;
  }
  .lg-hidden {
    display: block !important;
  }
  .clg-hidden {
    display: inline-block !important;
  }

  .nav {
    width: 100%;
    height: 100vh;
    position: fixed;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    transition: 0.5s;
    background: rgba(211, 42, 39, 0.96);
  }
  .nav .nav-option {
    width: 100%;
  }
  .nav .nav-option > div {
    display: block;
  }
  .nav .nav-option .subnav p a {
    display: block;
  }
  .nav > div {
    margin-top: 10vh;
  }
  .nav > div a {
    margin: 2% 0;
    display: block;
    clear: both;
  }
  .nav .subnav2 {
    width: 96%;
    margin: 0 auto;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    transition: 0.5s;
    background: #22418d;
    position: relative;
    top: 0;
  }
  .nav .subnav2:before {
    left: 50%;
  }
  .nav .subnav2 p {
    padding-top: 0;
  }
  .nav .subnav2 > p > a {
    padding: 2% 0;
    color: #fff;
    display: block;
    clear: both;
    border: #22418d 2px solid;
  }
  .nav .subnav2 > p > a:first-child {
    padding-top: 5%;
  }
  .nav .subnav2 > p > a:last-child {
    padding-bottom: 5%;
  }
  .follow-social a {
    width: 40%;
    max-width: 180px;
    display: inline-block;
    margin: 10px;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    transition: 0.5s;
    position: relative;
  }
  .follow-social a:after {
    font-size: 20px;
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .candidate-description .platform li p {
    font-size: 20px;
  }
  .candidate-desc p {
    padding: 20px 10% 0 10%;
    font-size: 15px;
    font-weight: 100;
  }
  .candidate-description .desc p {
    font-size: 20px;
    padding-top: 30px;
  }
  .candidate-description .desc:before {
    content: "â€œ";
    left: -20px;
    bottom: auto;
    top: 0;
    font-size: 5em;
    line-height: 1.5em;
    font-family: Georgia, "Times New Roman", serif;
  }
  .candidate-description .desc:after {
    right: -20px;
    top: auto;
    bottom: -20px;
    font-size: 5em;
    line-height: 0.5em;
    font-family: Georgia, "Times New Roman", serif;
  }
  .candidate-description .platform li {
    margin: 20px 0;
  }
  .candidate-description .platform li:before {
    content: "â€¢";
    position: absolute;
    top: -35px;
    color: #434343;
    right: 50%;
    font-size: 2em;
  }
  .nav .subnav {
    display: none;
  }
  .phone-holder {
    width: 90%;
  }

  .makinig-holder h2 {
    font-size: 20px;
  }
  .makinig-holder h3 {
    font-size: 16px;
  }
  .makinig-holder h4 {
    font-size: 20px;
  }
  .candidate-desc h3 {
    font-size: 18px;
  }
  .makinig-holder > div {
    width: 96%;
  }
  .candidate-description .platform li p {
    font-size: 18px;
  }
  .makinig-holder > div:first-child::before {
    height: 120px;
  }

  .candidate-desc h1 {
    font-size: 26px;
  }
  .candidate-desc h1 span {
    font-size: 18px;
    font-weight: normal;
  }
  .candidate-desc h3 {
    font-size: 15px;
    font-weight: 100;
  }

  .makinig-featured h4 {
    display: none;
  }
  .makinig-featured .grad-overlay {
    display: none;
  }
  .footer-links p {
    text-align: center;
  }
  .footer-links p br {
    display: none;
  }
  .footer-links .privacy {
    width: 60%;
    text-align: center;
    float: none;
    margin: 0 auto;
    padding-bottom: 10px;
    margin-bottom: 10px;
    display: block;
    border-bottom: #fff 1px dotted;
  }
  .subnav3 p {
    padding-right: 0;
    text-align: center;
  }
  .subnav3 p strong {
    display: block;
  }
  .carousel-indicators {
    display: none !important;
  }
  .subnav3 {
    padding-bottom: 10px;
  }
}

@media screen and (max-width: 325px) {
}
</style>
