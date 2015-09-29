/* Begin Normalize Styling*/
@import url('https://fonts.googleapis.com/css?family=Dosis');
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

article, aside, details, figcaption, figure, footer, header, hgroup, nav, section {
  display: block;
}

audio, canvas, video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}

audio:not([controls]) {
  display: none;
}

[hidden] {
  display: none;
}

html {
  font-size: 100%;
  overflow-y: scroll;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

body {
  margin: 0;
  line-height: 1.231;
}

body, button, input, select, textarea {
  font-family: sans-serif;
  color: #222;
}

a {
  color: #00e;
}

a:visited {
  color: #551a8b;
}

a:hover {
  color: #06e;
}

a:focus {
  outline: thin dotted;
}

a:hover, a:active {
  outline: 0;
}

abbr[title] {
  border-bottom: 1px dotted;
}

b, strong {
  font-weight: bold;
}

blockquote {
  margin: 1em 40px;
}

dfn {
  font-style: italic;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}

ins {
  background: #ff9;
  color: #000;
  text-decoration: none;
}

mark {
  background: #ff0;
  color: #000;
  font-style: italic;
  font-weight: bold;
}

pre, code, kbd, samp {
  font-family: monospace, monospace;
  _font-family: 'courier new', monospace;
  font-size: 1em;
}

pre {
  white-space: pre;
  white-space: pre-wrap;
  word-wrap: break-word;
}

q {
  quotes: none;
}

q:before, q:after {
  content: "";
  content: none;
}

small {
  font-size: 85%;
}

sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

ul, ol {
  margin: 1em 0;
  padding: 0 0 0 40px;
}

dd {
  margin: 0 0 0 40px;
}

nav ul, nav ol {
  list-style: none;
  list-style-image: none;
  margin: 0;
  padding: 0;
}

img {
  border: 0;
  -ms-interpolation-mode: bicubic;
  vertical-align: middle;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 0;
}

form {
  margin: 0;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

label {
  cursor: pointer;
}

legend {
  border: 0;
  *margin-left: -7px;
  padding: 0;
}

button, input, select, textarea {
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;
  *vertical-align: middle;
}

button, input {
  line-height: normal;
  *overflow: visible;
}

table button, table input {
  *overflow: auto;
}

button, input[type="button"], input[type="reset"], input[type="submit"] {
  cursor: pointer;
  -webkit-appearance: button;
}

input[type="checkbox"], input[type="radio"] {
  box-sizing: border-box;
}

input[type="search"] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

button::-moz-focus-inner, input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical;
}

input:invalid, textarea:invalid {
  background-color: #f0dddd;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td {
  vertical-align: top;
}

.placeholder {
  color: #8c8c8c !important;
}

/* End Normalize Styling*/
/* Begin Site Icons */
/* End Site Icons */
/* Begin Fontface Styling */
@font-face {
  font-family: 'IcoMoon';
  src: url("/assets/fonts/IcoMoon/icomoon.woff?-tn0vt8");
  src: url("/assets/fonts/IcoMoon/icomoon.eot?#iefix-tn0vt8") format("embedded-opentype"), url("/assets/fonts/IcoMoon/icomoon.ttf?-tn0vt8") format("truetype"), url("/assets/fonts/IcoMoon/icomoon.woff?-tn0vt8") format("woff"), url("/assets/fonts/IcoMoon/icomoon.svg?-tn0vt8#IcoMoon") format("svg");
  font-weight: normal;
  font-style: normal;
}
[class^="icon-"], [class*=" icon-"] {
  font-family: 'IcoMoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-video-24:before {
  content: "\e622";
}

.icon-Microphone:before {
  content: "\e623";
}

.icon-pause:before {
  content: "\e628";
}

.icon-disk:before {
  content: "\e621";
}

.icon-pencil:before {
  content: "\e620";
}

.icon-list:before {
  content: "\e61f";
}

.icon-logout:before {
  content: "\e624";
}

.icon-chat:before {
  content: "\e61c";
}

.icon-chat2:before {
  content: "\e625";
}

.icon-close:before {
  content: "\e627";
}

.icon-arrow-up:before {
  content: "\e606";
}

.icon-arrow-down:before {
  content: "\e607";
}

.icon-play2:before {
  content: "\e608";
}

.icon-history:before {
  content: "\e60c";
}

.icon-soundcloud:before {
  content: "\e612";
}

.icon-arrow-down2:before {
  content: "\e61a";
}

.icon-dot:before {
  content: "\e61b";
}

.icon-camera:before {
  content: "\e61d";
}

.icon-arrow-right:before {
  content: "\e600";
}

.icon-menu:before {
  content: "\e601";
}

.icon-search:before {
  content: "\e602";
}

.icon-plus-alt:before {
  content: "\e603";
}

.icon-headphones:before {
  content: "\e605";
}

.icon-play:before,
.icon-play-circle:before {
  content: "\e615";
}

.icon-plus:before {
  content: "\e618";
}

.icon-flag:before {
  content: "\e61e";
}

.icon-users:before {
  content: "\e604";
}

.icon-trashcan:before {
  content: "\e619";
}

.icon-chat:before {
  content: "\e61c";
}

.icon-volume-off:before {
  content: "\e609";
}

.icon-volume-down:before {
  content: "\e60a";
}

.icon-volume-up:before {
  content: "\e60b";
}

.icon-star-empty:before {
  content: "\e60d";
}

.icon-star:before {
  content: "\e60e";
}

.icon-heart-empty:before {
  content: "\e60f";
}

.icon-heart:before {
  content: "\e610";
}

.icon-arrow-right2:before {
  content: "\e611";
}

.icon-remove-circle:before {
  content: "\e613";
}

.icon-youtube:before {
  content: "\e614";
}

.icon-facebook:before {
  content: "\e616";
}

.icon-twitter:before {
  content: "\e617";
}

/* Begin Main Styling */
/* GLOBAL ===================================================== */
/*-moz-user-select: -moz-none;-khtml-user-select: none;-webkit-user-select: none;-ms-user-select: none;user-select: none;
*/
html {
  overflow-x: hidden;
}

body, html {
  font-size: 100%;
}

body {
  font-smooth: always;
  font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.01);
  -webkit-text-stroke: 1px transparent;
  background: #000;
  background-image: url("https://mediadubtrackfm.s3.amazonaws.com/assets/images/backgrounds/mainbg.png");
  background-color: #000;
  font: 1em/1.25em "proxima-nova", sans-serif;
  color: #CCCCCC;
  width: 100%;
  padding: 0;
  overflow-x: hidden;
}
body.videoActive .main-page-container {
  padding-bottom: 14em;
}

.backstretch:before {
  content: url(https://i.imgur.com/zYvDb7O.png);
}

.backstretch {
  content: url(https://i.imgur.com/zYvDb7O.png);
  -moz-transition: left 0.2s ease-in-out;
  -o-transition: left 0.2s ease-in-out;
  -webkit-transition: left 0.2s ease-in-out;
  transition: left 0.2s ease-in-out;
}

.main-page-container {
  height: 100%;
  padding: 0.7em 0 3em 0;
  position: relative;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  overflow-x: hidden;
}

#warning {
  position: fixed;
  background: magenta;
  color: #000;
  padding: 1.25em;
  top: 30%;
  width: 31.25em;
  left: 50%;
  margin-left: -16.875em;
  z-index: 999999;
}
#warning:after {
  background: white;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
  opacity: 0.5;
  -moz-border-radius: 0.188em;
  -webkit-border-radius: 0.188em;
  border-radius: 0.188em;
  border: 0.375em solid white;
  top: -0.375em;
  left: -0.375em;
  z-index: -1;
}
#warning h3 {
  font-size: 1.4em;
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;
}
#warning p {
  margin: 0.625em 0;
  font-size: 0.8em;
  font-weight: bold;
}
#warning button {
  display: inline-block;
  text-transform: uppercase;
  margin: 1em 0.625em 0 0;
  color: magenta;
  background: #000;
  padding: 0.45em 1em;
}

body.login {
  background-image: url(../images/px_by_Gre3g.png);
}

body.roomview {
  /*background:url(../images/black_linen_v2.png) repeat;*/
  background: url(../images/dt_mainbg.png) repeat;
  height: 100%;
}

body.roomview .dark-overlay {
  background: none !important;
}

ul, ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*::-webkit-scrollbar {
	width: 0.45em;
	position: relative;
	right: 0;
	z-index: 9999999;
}

::-webkit-scrollbar-track {
	background: #000;
}

::-webkit-scrollbar-thumb {
	background: #333
}
::-webkit-scrollbar-thumb:window-inactive {
	background: rgba(0,0,0,0.3);
}
::-webkit-scrollbar-corner{
	display: none;
}*/
/*scrollbar-base-color: #000;
scrollbar-base-color: #000;
scrollbar-3dlight-color: #000;
scrollbar-highlight-color: #000;
scrollbar-track-color: #333;
scrollbar-arrow-color: #333;
scrollbar-shadow-color: #111;
scrollbar-dark-shadow-color: #111;*/
@-moz-document url-prefix(http://),url-prefix(https://) {
  scrollbar {
    -moz-appearance: none !important;
    background: #000 !important;
  }

  thumb, scrollbarbutton {
    -moz-appearance: none !important;
    background-color: #333 !important;
  }

  thumb:hover, scrollbarbutton:hover {
    -moz-appearance: none !important;
    background-color: #333 !important;
  }

  scrollbarbutton {
    display: none !important;
  }

  scrollbar[orient="vertical"] {
    min-width: 0.45em !important;
  }
}
.no-fontface {
  font-family: Arial, Helvetica, sans-serif;
}

.clearfix {
  *zoom: 1;
}
.clearfix:after, .clearfix:before {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

a {
  text-decoration: none;
}
a:hover, a:visited {
  text-decoration: none;
  color: magenta;
}

select, textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"], .uneditable-input {
  font: 0.75em/1.25em "proxima-nova", sans-serif;
}

section#main {
  height: 100%;
}
section#main.roomActive .dt_section {
  padding-right: 20em;
}

b {
  font-weight: bold;
}

.clear {
  clear: both;
}

.right {
  float: right;
}

.left {
  float: left;
}

.white {
  color: white;
}

.darkgrey {
  color: #808080;
}

.cyan {
  color: cyan;
}

.grey {
  color: #CCCCCC;
}

.inline-block {
  display: inline-block;
}

.logo {
  font-size: 1.250em;
  font-family: "futura-pt", sans-serif;
  color: #ff00ff;
}

div.mousescroll {
  overflow: hidden;
}
div.mousescroll:hover {
  overflow-y: scroll;
}

.dark-overlay {
  background: url(../images/bg-dark-trans.png) repeat;
}

.hidden {
  display: none;
}

.no-bg {
  background: none !important;
}

.wrapper {
  width: 48.75em;
  margin: 1.875em auto 0 auto;
}
.wrapper.no-margin {
  margin-top: 0 !important;
  width: 37.5em;
}

.loading {
  display: none;
  top: 0;
  left: 35%;
  position: absolute;
  z-index: 999999;
  padding: 0.625em 1.250em;
  font-family: "proxima-nova", sans-serif;
  font-size: 1.125em;
  color: #000;
  background: cyan;
  zoom: 1;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  font-weight: bold;
}

span.comingSonn {
  font-family: "proxima-nova", sans-serif;
  font-size: 0.625em;
  font-weight: bold;
  color: red;
  text-transform: none;
  padding-left: 0.313em;
}

#ajax-content {
  width: 100%;
  position: absolute;
  z-index: 99;
  top: 20%;
}
#ajax-content a.close {
  background: url(../images/create_newroom_closebutton.png) no-repeat 0 0;
  width: 28px;
  height: 28px;
  top: 0.313em;
  right: 0.313em;
  position: absolute;
}
#ajax-content .ajax-loader {
  width: 16.250em;
  margin: 0 auto;
  position: relative;
}

.share_btns {
  position: fixed;
  top: 12.188em;
  left: inherit;
  margin: 0 0 0 -3.750em;
}
.share_btns.bottom {
  top: 16.563em;
}

div.image {
  cursor: pointer;
}

.padding_10 {
  padding: 1.875em 1.563em 3.125em 0;
}

a.button_full {
  width: 100%;
  text-align: center;
  padding: 0.188em 0;
  color: #0085EA;
  margin-bottom: 0.313em;
}

a.button_comments_more {
  width: 32.813em;
}

#bg_color {
  display: inline-block;
  width: 100px !important;
  vertical-align: middle;
}

.roomview .main_content, #main-ajax-user .main_content {
  background: none !important;
  border: 0 !important;
}

.avatar_bg {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}
.avatar_bg .tabsContainer {
  width: 400%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
.avatar_bg .tabsContainer .tabItem {
  padding-top: 1.875em;
  width: 20em;
  display: block;
  float: left;
  position: relative;
  height: 100%;
  overflow-y: scroll;
}

.emoji {
  width: 1.5em !important;
  height: 1.5em !important;
  display: inline-block !important;
  margin: 0 0 -0.25em 0 !important;
  background-size: contain !important;
}

.avatar_cont {
  padding: 0 0 0 0;
}

.cursor-pointer {
  cursor: pointer;
}

/* FRIENDS LOADER ============================================= */
ul, ol {
  margin: 0;
  padding: 0;
}

#friends_list {
  -moz-box-shadow: 0 0 0.313em 0.438em rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 0.313em 0.438em rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 0.313em 0.438em rgba(0, 0, 0, 0.2);
  height: 25em;
  overflow-y: scroll;
}
#friends_list a.close {
  background: url(../images/close_icon.png) right center no-repeat;
  padding: 0 1em 0 0;
  font-size: 1em;
  position: absolute;
  right: 0.313em;
  top: 0.313em;
  color: #333;
  font-weight: normal;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=90);
  opacity: 0.9;
  z-index: 99;
  text-shadow: none;
}
#friends_list li {
  border-bottom: 1px #202020 solid;
  padding: 0.438em 0.625em;
  margin: 0;
  cursor: pointer;
}
#friends_list li:hover {
  background: #333;
}
#friends_list li.cyan {
  color: cyan;
}
#friends_list li.cyan:hover {
  background: none;
}
#friends_list div.des {
  display: inline-block;
  vertical-align: top;
}
#friends_list div.des a {
  color: white;
}
#friends_list div.des a:hover {
  text-decoration: underline;
}
#friends_list div.image {
  width: 1.5em;
  max-height: 1.5em;
  margin-right: 0.5em;
  overflow: hidden;
  vertical-align: top;
  display: inline-block;
}
#friends_list div.image img {
  height: 1.5em;
}

.dubtrack_overlay {
  z-index: 999;
  background: #000;
  width: 100%;
  height: 100%;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
}

/* ============================================================ */
/* USERNAME SELECTION ===================================================== */
#at-username-autocomplete {
  z-index: 99;
  border: 1px #202020 solid;
  color: white;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
}
#at-username-autocomplete li {
  background-color: #000;
  cursor: pointer;
  margin: 0;
  min-width: 9.375em;
  padding: 0.125em 0.313em !important;
}
#at-username-autocomplete li:hover {
  color: #999;
}
#at-username-autocomplete li.active {
  color: #333;
  background: #FFFF00;
}

/* ============================================================ */
/* AJAX ROOM LOADER ===================================================== */
#ajaxloader_window {
  position: relative;
  width: 31.250em;
  margin: 8.125em auto 0 auto;
  min-height: 18.750em;
  background: white;
  padding: 1em;
  -moz-border-radius: 0.625em;
  -webkit-border-radius: 0.625em;
  border-radius: 0.625em;
}
#ajaxloader_window form {
  position: relative;
}
#ajaxloader_window textarea {
  width: 31.250em;
  height: 31.250em;
  margin: 0.313em 0;
}
#ajaxloader_window .message {
  color: red;
}
#ajaxloader_window .message span.success {
  color: green;
}
#ajaxloader_window a.remove {
  right: 0.313em;
  top: 0.313em;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  z-index: 99;
}
#ajaxloader_window input {
  width: 31.250em;
  margin: #000 0;
}
#ajaxloader_window input.submit {
  color: magenta;
  padding: 0.188em 0.438em;
  float: right;
  width: auto;
  margin: 0.625em 3.125em 0.625em 0.625em;
  display: block;
  font-family: "futura-pt", sans-serif;
  font-size: 0.875em;
  background: url(../images/blackopacity_roomlist.png) repeat;
}
#ajaxloader_window h2 {
  font-family: "bebas-neue", Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  color: cyan;
  clear: both;
}

.ajax_container {
  position: absolute;
  z-index: 99999;
  width: 18.750em;
  background: #000;
  padding: 0.313em 1em 1em 1em;
  margin: 0;
  font-family: "futura-pt", sans-serif;
  font-size: 0.875em;
}
.ajax_container a.edit {
  color: white;
  display: block;
  position: absolute;
  bottom: 0.313em;
  right: 0.625em;
}
.ajax_container li {
  display: block;
  margin: 0.313em 0;
}
.ajax_container li b {
  color: white;
}
.ajax_container li.cyan {
  color: cyan;
}
.ajax_container h2 {
  color: cyan;
  font-size: 1.125em;
}

#ajaxloader_cont {
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  background: url("../images/bg_darktrans.png");
  z-index: 299;
  width: 100%;
  height: 100%;
}

#ajax_tmp_loader {
  display: none;
}

#ajax-load-user {
  float: right;
}

.spinner {
  margin: 0;
  width: 3em;
  text-align: center;
}
.spinner > div {
  width: 0.5em;
  height: 0.5em;
  background-color: #333;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
  animation: bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
/* ============================================================ */
.autocomplete-w1 {
  background: url(../images/shadow.png) no-repeat bottom right;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  /* IE6 fix: */
  _background: none;
  _margin: 0;
  overflow-x: hidden;
}

.autocomplete {
  background: white;
  padding: 0.625em;
  cursor: default;
  text-align: left;
  max-height: 9.375em;
  overflow-y: auto;
  overflow-x: hidden;
  margin: -0.375em 0.375em 0.375em -0.375em;
  _height: 21.875em;
  _margin: 0;
  _overflow-x: hidden;
}
.autocomplete strong {
  font-weight: normal;
  color: #3399FF;
}
.autocomplete div {
  padding: 0.125em 0.125em;
  white-space: nowrap;
  color: #333;
}
.autocomplete .selected {
  background: #F0F0F0;
}

#main-loading {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  -moz-border-radius: 0.5em;
  -webkit-border-radius: 0.5em;
  border-radius: 0.5em;
  padding: 3.5em 1em 1em 1em;
  text-align: center;
  display: block;
  position: fixed;
  background: cyan;
  color: #000;
  font-weight: bold;
  font-size: 0.95em;
  top: 2.5em;
  left: 50%;
  width: 18em;
  margin-left: -9em;
  overflow: hidden;
  text-transform: uppercase;
  z-index: 999;
}
#main-loading .spinner {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
  opacity: 0.5;
  position: absolute;
  bottom: -5em;
  margin-left: -10em;
  left: 50%;
  width: 20em;
  height: 20em;
  background-color: #000;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  border-radius: 100%;
  -webkit-animation: scaleout 1.0s infinite ease-in-out;
  animation: scaleout 1.0s infinite ease-in-out;
  z-index: 1;
}
#main-loading .loading-text {
  position: relative;
  z-index: 2;
}

ul.avatar-list {
  margin: 0;
  padding: 0 0 1em 0;
  *zoom: 1;
}
ul.avatar-list:before, ul.avatar-list:after {
  content: " ";
  display: table;
}
ul.avatar-list:after {
  clear: both;
}
ul.avatar-list li {
  cursor: pointer;
  border: 1px solid #000;
  display: inline-block;
  background: #000;
  font-family: "futura-pt", sans-serif;
  color: #CCCCCC;
  text-align: center;
  width: 4em;
  overflow: hidden;
  position: relative;
}
ul.avatar-list li.mod:after, ul.avatar-list li.creator:after, ul.avatar-list li.admin:after, ul.avatar-list li.currentDJ:after {
  content: "MOD";
  background: magenta;
  color: #000;
  font-weight: bold;
  font-size: 0.65em;
  position: absolute;
  top: 4.8em;
  left: 0;
  width: 100%;
  text-align: center;
}
ul.avatar-list li.admin:after {
  content: "ADMIN";
}
ul.avatar-list li.creator:after {
  content: "CREATOR";
}
ul.avatar-list li.currentDJ:after {
  content: "DJ";
  background: cyan;
}
ul.avatar-list li .dubDisplay {
  position: absolute;
  z-index: 99;
  font-weight: bold;
  color: #000;
  background: cyan;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
}
ul.avatar-list li .dubDisplay b {
  display: block;
  text-align: center;
  margin-top: 1.5em;
  color: #111;
}
ul.avatar-list li .dubDisplay span {
  font-size: 0.75em;
  display: block;
  text-align: center;
}
ul.avatar-list li.downdub {
  border: 1px solid magenta;
}
ul.avatar-list li.updub {
  border: 1px solid cyan;
}
ul.avatar-list li.avatar-mod {
  background: cyan;
  color: #000;
}
ul.avatar-list li.avatar-mod p.username {
  color: #000;
}
ul.avatar-list li.owner-mod {
  background: yellow;
  color: #000;
}
ul.avatar-list li.owner-mod p.username {
  color: #000;
}
ul.avatar-list li.inactive {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
  opacity: 0.5;
}
ul.avatar-list li p.username {
  color: #999;
  font-size: 0.65em;
  display: none;
}
ul.avatar-list li .picture {
  width: 100%;
  height: 4em;
  overflow: hidden;
}
ul.avatar-list li .picture img {
  width: 100%;
}
ul.avatar-list li .offline {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2px 0;
  text-align: center;
  background: magenta;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  color: #000;
  width: 100%;
}
ul.avatar-list li p.dubs {
  display: block;
  color: #999;
  font-size: 0.65em;
  text-transform: uppercase;
  margin: 0;
  padding: 0.5em 0;
}
ul.avatar-list li p.dubs span {
  font-weight: bold;
  color: white;
}

@-webkit-keyframes scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}
@keyframes scaleout {
  0% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    opacity: 0;
  }
}
/* BUTTONS ==================================================== */
a.button_dark {
  background: #242424;
  display: inline-block;
  border: 1px #080808 solid;
  width: auto;
  -moz-border-radius: 0.313em;
  -webkit-border-radius: 0.313em;
  border-radius: 0.313em;
  vertical-align: top;
}
a.button_dark span {
  color: white;
  border: 1px white solid;
  font-family: "proxima-nova", sans-serif;
  font-size: 0.75em;
  display: block;
  padding: 0.438em 0.625em;
  -moz-border-radius: 0.313em;
  -webkit-border-radius: 0.313em;
  border-radius: 0.313em;
  width: inherit;
  height: inherit;
}

button {
  line-height: 1;
  font-family: "proxima-nova", sans-serif;
  text-transform: uppercase;
  background-color: #333;
  color: #CCCCCC;
  padding: .5em .75em;
  padding-top: .5em;
  border: 0;
  outline: 0;
  -moz-border-radius: 0.1875em;
  -webkit-border-radius: 0.1875em;
  border-radius: 0.1875em;
  -moz-box-shadow: inset 0 -2px #333;
  -webkit-box-shadow: inset 0 -2px #333;
  box-shadow: inset 0 -2px #333;
}
button:hover {
  -moz-box-shadow: inset 0 -2px magenta;
  -webkit-box-shadow: inset 0 -2px magenta;
  box-shadow: inset 0 -2px magenta;
}

/* ============================================================ */
.dubtrack-section {
  display: none;
}

.main-col {
  width: 37.500em;
  display: inline-block;
}
.main-col span.room_name {
  font-size: 1.125em;
  color: white;
  display: block;
}
.main-col span.slash {
  display: inline;
  color: #797979;
}
.main-col .info {
  display: block;
  font-size: 0.75em;
  color: #959595;
  padding: 1.250em 0 1.250em 8.750em;
  font-family: "futura-pt", sans-serif;
}
.main-col .loading {
  margin: 0 0 0 10.625em;
  top: 25em;
}
.main-col .col-left {
  float: left;
  width: 9.375em;
  margin: -1.250em 1.250em 0 0;
  text-align: center;
  min-width: 9.375em;
}
.main-col .col-left .profile-pic {
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
  border: 0.625em solid white;
  display: inline-block;
  margin: 0 0 1.250em 0;
}

.content-header {
  padding: 0.5em 0 0 0;
}

.dt_section {
  display: block;
  padding-bottom: 5em;
  padding-top: 2.5em;
}
.dt_section.inactive {
  display: none;
}
.dt_section.inactive #main_avatar_room {
  display: none !important;
}

#dt_mainplayer {
  display: block;
  margin-right: 0 !important;
  padding-right: 0 !important;
  height: 100%;
  padding-top: 1.250em !important;
}
#dt_mainplayer.inactive {
  display: block !important;
  position: absolute;
  top: -106.250em;
  width: 93.750em;
  height: 75em;
  overflow: hidden;
}

/* FOOTER ===================================================== */
footer#footer_global {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #111;
  text-align: left;
  text-transform: uppercase;
  z-index: 99;
}
footer#footer_global a {
  color: cyan;
  padding: 1em;
  display: inline-block;
  border-right: 1px #303030 solid;
}
footer#footer_global a:hover {
  background: magenta;
  color: #000;
}
footer#footer_global a .social {
  position: relative;
  text-indent: -99999px;
  width: 1em;
}
footer#footer_global a .social:before {
  content: "";
  position: absolute;
  background: url(../images/loginDubtrack.png) no-repeat;
  height: 17px;
  width: 16px;
  overflow: hidden;
  top: 1em;
  left: 1em;
}
footer#footer_global a .social:hover:before {
  background-position: 0 -1em;
}
footer#footer_global a.facebook:before {
  background-position: -16px 0;
}
footer#footer_global a.facebook:hover:before {
  background-position: -16px -17px;
}
footer#footer_global .container-fluid {
  float: left;
  padding: 0;
}
footer#footer_global .nav-collapse {
  float: right;
  color: magenta;
}

#footer {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.875em;
  color: cyan;
  background: url(../images/denim-dark.png) repeat;
  padding: 1.250em 0 1.250em 0;
}
#footer.no-padding {
  padding: 0px;
}
#footer a {
  color: inherit;
}
#footer a a:hover {
  color: inherit;
}
#footer ul {
  padding: 0 0 0 0.850em;
}
#footer li {
  display: inline-block;
  padding: 0 0.625em;
}
#footer li.logo {
  font-size: 0.750em;
}

.footer_dark {
  padding: 1.250em 0;
}

body.roomview #footer {
  background: none;
}
body.roomview #footer ul {
  padding: 0 !important;
}

/* ============================================================ */
/* HEADER ===================================================== */

@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
  #header-global h1 span {
   }
}
#header-global {
  position: fixed;
  top: 0;
  width: 100%;
  background: #111;
  text-align: left;
  text-transform: uppercase;
  z-index: 1001;
  height: 3em;
  *zoom: 1;
  	/*& a{
  		color: $bgOtherAccentColor;
  		float: left;
  		padding: 1em;
  		display: block;
  		border-right: $standardBorder;
  		position: relative;
  		font-size: 0.75em;
  
  		&:hover{
  			background: $bgAccentColor;
  			color: $bgColor;
  		}
  
  		&.roomTabInfo{
  			padding-right: 1.875em;
  
  			& span.roomCount{
  				background: $bgAccentColor;
  				padding: 0.313em;
  				display: block;
  				content: "";
  				font-size: 0.688em;
  				color: white;
  				position: absolute;
  				width: 1.250em;
  				text-align: center;
  				z-index: 10;
  				right: 0;
  				top: 0;
  			}
  		}
  
  		&.friends,&.notifications{
  			padding-right: 1.875em;
  		}
  
  		&.notifications:before{
  			background: url(../images/icon_notification_white.png) no-repeat;
  			height: 15px;
  			width: 15px;
  			position: absolute;
  			content: "";
  		}
  
  		&.friends:before{
  			background: url(../images/firends_24.png) no-repeat;
  			height: 15px;
  			width: 15px;
  			position: absolute;
  			content: "";
  		}
  
  		& span.counter{
  			background: $bgAccentColor;
  			padding: 0.313em;
  			display: inline-block;
  			content: "";
  			font-size: 0.625em;
  			color: white;
  			position: absolute;
  			z-index: 10;
  			right: 0;
  			top: 0;
  		}
  	}
  
  	& .container-fluid{
  		float: left;
  	}
  
  	& .nav-collapse{
  		float: right;
  		color: $bgAccentColor;
  		padding-right: 1.250em;
  	}
  
  	& a.username{
  		padding: 0.625em 1em;
  		border-left: $standardBorder;
  
  		& span{
  			margin-top: 0.313em;
  			display: inline-block;
  
  			&.image{
  				width: 1.5em;
  				overflow: hidden;
  				margin-right: 0.625em;
  				margin-top: 0;
  			}
  		}
  
  		img{
  			height: 1.5em;
  		}
  	}
  
  	.headerSocial{
  		float: right;
  		display: block;
  
  		& li{
  			padding: 0.625em 0 0 0.625em;
  			display: inline-block;
  		}
  	}*/
}
#header-global:before {
  content: " ";
  display: table;
}

#header-global:after {
  clear: both;
  position: absolute;
  top: .6em;
  left: 45%;
  content: "Just a chill room...";
  font-size: 24px;
  font-family: 'Dosis', sans-serif;
}
#header-global h1 {
  background: #111;
  position: absolute;
}
#header-global h1 span {
  display: block;
  overflow: hidden;
  text-indent: -999em;
  margin: 0 0 0 0.1em;
}
#header-global button {
  height: 2em;
}
#header-global .main-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  float: left;
  *zoom: 1;
}
#header-global .main-menu:before, #header-global .main-menu:after {
  content: " ";
  display: table;
}
#header-global .main-menu:after {
  clear: both;
}
#header-global .main-menu li {
  margin: 0.5em;
  position: relative;
  float: left;
}
#header-global .main-menu li i {
  position: absolute;
  top: 0.4em;
  left: 0.5em;
}
#header-global .main-menu li input {
  background: #333;
  color: #CCCCCC;
  width: 20em;
  margin: 0.2em 0 0 0;
  padding: 0.5em 0.5em 0.5em 3em;
  min-height: 1.5em;
  border: 0;
  outline: 0;
  -moz-border-radius: 0.1875em;
  -webkit-border-radius: 0.1875em;
  border-radius: 0.1875em;
}
#header-global .main-menu li .room-user {
  *zoom: 1;
}
#header-global .main-menu li .room-user:before, #header-global .main-menu li .room-user:after {
  content: " ";
  display: table;
}
#header-global .main-menu li .room-user:after {
  clear: both;
}
#header-global .main-menu li .room-user span {
  display: block;
  float: left;
}
#header-global .main-menu li .room-user .edit-room,
#header-global .main-menu li .room-user .create-room {
  margin: 0.15em 0.7em 0 0;
  font-size: 0.75em;
  display: none;
}
@media only screen and (min-width: 34.375em) {
  #header-global .main-menu li .room-user .edit-room,
  #header-global .main-menu li .room-user .create-room {
    display: block;
  }
}
#header-global .main-menu li #edit-room-div {
  display: none;
}
#header-global .main-menu li.menu-expand.active menu {
  display: block;
}
#header-global .main-menu li.menu-expand menu {
  background: none;
  position: absolute;
  top: -2em;
  left: -0.5em;
  width: 10em;
  padding: 3.5em 1em 1.5em 0;
  display: none;
}
#header-global .main-menu li.menu-expand menu .mainbg {
  background: #111;
  padding: 0 0 0.5em 0;
}
#header-global .main-menu li.menu-expand menu .mainbg > a,
#header-global .main-menu li.menu-expand menu .mainbg > span {
  margin: 0;
  display: block;
  text-align: left;
  padding: 0.7em 1em;
  font-size: 0.74em;
  color: #CCCCCC;
}
#header-global .main-menu li.menu-expand menu .mainbg > a span,
#header-global .main-menu li.menu-expand menu .mainbg > span span {
  color: #CCCCCC;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
}
#header-global .main-menu li.menu-expand menu .mainbg > a:hover span,
#header-global .main-menu li.menu-expand menu .mainbg > span:hover span {
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}
#header-global .main-menu li.menu-expand menu .mainbg a {
  border-bottom: 1px #202020 solid;
}
#header-global .main-menu li.menu-expand menu .mainbg span {
  color: #333;
}
#header-global .user-info {
  float: right;
}
#header-global .user-info .user-header-menu {
  list-style: none;
  margin-right: 0.5em;
  *zoom: 1;
}
#header-global .user-info .user-header-menu:before, #header-global .user-info .user-header-menu:after {
  content: " ";
  display: table;
}
#header-global .user-info .user-header-menu:after {
  clear: both;
}
#header-global .user-info .user-header-menu li {
  margin: 0.5em 0;
  float: left;
}
#header-global .user-info .user-header-menu li button {
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  border-right: 1px solid #111;
}
#header-global .user-info .user-header-menu li span {
  font-size: 0.75em;
}
#header-global .user-info .user-header-menu li.user-messages {
  position: relative;
}
#header-global .user-info .user-header-menu li.user-messages span.message-counter {
  display: block;
  font-size: 0.75em;
  line-height: 0.85em;
  color: #000;
  font-weight: bold;
  right: 0;
  top: 0;
  position: absolute;
  background: magenta;
  padding: 0.3em;
  display: none;
}
#header-global .user-info .user-header-menu li.logout {
  display: none;
}
@media only screen and (min-width: 50em) {
  #header-global .user-info .user-header-menu li.logout {
    display: block;
  }
}
#header-global .user-info .user-header-menu li .user-messages-button {
  -moz-border-radius-topleft: 0.1875em;
  -webkit-border-top-left-radius: 0.1875em;
  border-top-left-radius: 0.1875em;
  -moz-border-radius-bottomleft: 0.1875em;
  -webkit-border-bottom-left-radius: 0.1875em;
  border-bottom-left-radius: 0.1875em;
}
#header-global .user-info .user-header-menu li .user-info-button {
  position: relative;
  padding: 0;
}
@media only screen and (min-width: 37.5em) {
  #header-global .user-info .user-header-menu li .user-info-button {
    padding-right: 2.5em;
    padding-left: 1em;
  }
}
#header-global .user-info .user-header-menu li .user-info-button figure {
  width: 2em;
  height: 100%;
  overflow: hidden;
  top: 0;
  right: 0;
}
#header-global .user-info .user-header-menu li .user-info-button figure img {
  height: 100%;
}
@media only screen and (min-width: 37.5em) {
  #header-global .user-info .user-header-menu li .user-info-button figure {
    position: absolute;
  }
}
#header-global .user-info .user-header-menu li .user-info-button span {
  display: none;
}
@media only screen and (min-width: 37.5em) {
  #header-global .user-info .user-header-menu li .user-info-button span {
    display: inline;
  }
}
#header-global .user-info .user-header-menu li .friends {
  -moz-border-radius-topright: 0.1875em;
  -webkit-border-top-right-radius: 0.1875em;
  border-top-right-radius: 0.1875em;
  -moz-border-radius-bottomright: 0.1875em;
  -webkit-border-bottom-right-radius: 0.1875em;
  border-bottom-right-radius: 0.1875em;
}
#header-global .global-search-header {
  display: none;
}
@media only screen and (min-width: 65.625em) {
  #header-global .global-search-header {
    display: block;
  }
}
#header-global .global-search-header .search-results {
  width: 100%;
  top: 2.5em;
  left: 0;
  position: absolute;
  color: #CCCCCC;
  background: #111;
  -moz-border-radius-bottomright: 0.1875em;
  -webkit-border-bottom-right-radius: 0.1875em;
  border-bottom-right-radius: 0.1875em;
  -moz-border-radius-bottomleft: 0.1875em;
  -webkit-border-bottom-left-radius: 0.1875em;
  border-bottom-left-radius: 0.1875em;
  display: none;
}
#header-global .global-search-header .search-results h3 {
  padding: 0.2em 0.5em;
  margin: 0;
  font-size: 0.75em;
  text-transform: uppercase;
}
#header-global .global-search-header .search-results .search-results-rooms,
#header-global .global-search-header .search-results .search-results-users {
  padding: 0.2em 0.5em;
  background: #000;
}
#header-global .global-search-header .search-results .search-results-rooms .result-item,
#header-global .global-search-header .search-results .search-results-users .result-item {
  cursor: pointer;
  border-bottom: 1px #202020 solid;
  *zoom: 1;
  padding: 0.2em 0;
}
#header-global .global-search-header .search-results .search-results-rooms .result-item:before, #header-global .global-search-header .search-results .search-results-rooms .result-item:after,
#header-global .global-search-header .search-results .search-results-users .result-item:before,
#header-global .global-search-header .search-results .search-results-users .result-item:after {
  content: " ";
  display: table;
}
#header-global .global-search-header .search-results .search-results-rooms .result-item:after,
#header-global .global-search-header .search-results .search-results-users .result-item:after {
  clear: both;
}
#header-global .global-search-header .search-results .search-results-rooms .result-item:last-child,
#header-global .global-search-header .search-results .search-results-users .result-item:last-child {
  border-bottom: 0;
}
#header-global .global-search-header .search-results .search-results-rooms .result-item img,
#header-global .global-search-header .search-results .search-results-users .result-item img {
  float: left;
  width: 3em;
  margin-right: 0.5em;
}
#header-global .global-search-header .search-results .search-results-rooms .result-item span,
#header-global .global-search-header .search-results .search-results-users .result-item span {
  display: block;
  font-size: 0.75em;
  line-height: 1.5em;
  max-width: 14em;
  overflow: hidden;
  word-break: break-all;
}
#header-global .global-search-header .search-results .search-results-rooms .result-item span.count,
#header-global .global-search-header .search-results .search-results-users .result-item span.count {
  color: #333;
  font-size: 0.5em;
  font-style: italic;
}

#mobile-login {
  float: right;
  display: none;
  font-size: 0.85em;
  margin: 0.6em 0.5em 0 0;
}

#header_login {
  position: fixed;
  left: 50%;
  top: 3em;
  z-index: 98;
  text-transform: uppercase;
  background: white;
  z-index: -1;
  padding: 1.5em 1em 1em 1em;
  width: 20rem;
  margin-left: -10rem;
  text-align: center;
  font-weight: bold;
  display: none;
}
@media only screen and (max-width: 71.875em) {
  #header_login {
    bottom: 2.5em;
    top: auto !important;
    padding: 1em 1em 1em 1em;
  }
}
#header_login a {
  position: relative;
  margin: 0 1em;
  color: #000;
  font-size: 1em;
}
#header_login a i {
  display: inline-block;
  vertical-align: middle;
  font-size: 1.2em;
  margin: 0em 0.8em 0 0;
}
#header_login a span {
  display: none;
}
@media only screen and (min-width: 31.25em) {
  #header_login a span {
    display: inline;
  }
}

.home-header {
  margin: 0 0 0 11.250em;
  padding: 0 0 0.625em 0;
  position: relative;
}
.home-header h2 {
  font-family: "futura-pt", sans-serif;
  font-size: 1.250em;
  color: white;
  display: inline-block;
  background: none;
}
.home-header a.clear {
  position: absolute;
  right: inherit;
  top: inherit;
  margin: 0.5em 0 0 -1em;
  cursor: pointer;
}

/* ============================================================ */
/* LOGIN ====================================================== */
#login {
  width: 910px;
  margin: 20px auto 20px auto;
  background: url(../images/landing_page_graphic.png) no-repeat 0 80px;
  padding: 100px 0 0 0;
}
#login h1 {
  margin: 0 0 0 30px;
  display: none;
}
#login h2 {
  font-family: "bebas-neue", Arial, Helvetica, sans-serif;
  color: #FF00FF;
  font-size: 68px;
  background: none;
}
#login div.right {
  text-align: right;
  margin: 0 0 0 0;
}
#login .description {
  width: 317px;
  display: inline-block;
  margin: 0 0;
  text-align: left;
}
#login .description p {
  font-family: "futura-pt", sans-serif;
  font-size: 14px;
  color: #B2B2B2;
}
#login .description span.dt {
  font-family: "futura-pt", sans-serif;
  color: cyan;
}
#login .moto {
  margin: 25px 0 0 0;
  color: #fff;
  font-size: 24px;
  text-aign: right;
  font-family: "futura-pt", sans-serif;
}
#login .login {
  display: inline-block;
  background: url(../images/landing_page_arrow_icon.png) no-repeat 0 center;
  padding: 0 0 0 50px;
  text-align: right;
}
#login .login a {
  display: block;
  margin: 8px 0;
  text-align: right;
  padding: 0;
}
#login .footer {
  clear: both;
  font-family: "proxima-nova", sans-serif;
  color: #fff;
  font-size: 11px;
  padding: 150px 0 0 0;
  color: #808080;
}
#login .footer span {
  display: block;
}
#login .footer ul li {
  display: inline-block;
}
#login .footer ul li a {
  color: #808080;
}
#login .footer ul li a:hover {
  color: #fff;
  text-decoration: underline;
}
#login .footer ul li:after {
  content: ' |';
}
#login .footer ul li.last:after {
  content: '';
}

#login-model-window {
  position: absolute;
  z-index: 9999999;
  text-align: center;
  top: 10rem;
  left: 0;
  width: 100%;
  margin: 0 auto;
  display: none;
}
#login-model-window .close-login-window {
  position: absolute;
  top: 0.3rem;
  right: 0.5rem;
  font-size: 2.2rem;
  cursor: pointer;
}
#login-model-window .login-model-container {
  width: 30rem;
  max-width: 100%;
  display: inline-block;
  display: none;
  position: relative;
  text-align: left;
  padding: 2rem;
  background: #000;
}
#login-model-window .login-model-container:after {
  background: white;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
  opacity: 0.5;
  -moz-border-radius: 0.188em;
  -webkit-border-radius: 0.188em;
  border-radius: 0.188em;
  border: 0.375em solid white;
  top: -0.375em;
  left: -0.375em;
  z-index: -1;
}
#login-model-window .login-model-container h1 {
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
#login-model-window .login-model-container input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}
#login-model-window .login-model-container input[type=submit] {
  margin-top: 0.5rem;
  border: none;
  outline: none;
  padding: 0.5rem;
  text-align: center;
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  background: magenta;
}
#login-model-window .login-model-container .err-message,
#login-model-window .login-model-container .success-message {
  display: none;
  border: 1px dashed red;
  color: red;
  font-size: 0.7rem;
  padding: 0.3rem 0.5rem;
  text-transform: uppercase;
  text-align: left;
  font-weight: bold;
  margin-bottom: 1rem;
  width: 100%;
}
#login-model-window .login-model-container .success-message {
  border: 1px dashed green;
  color: green;
}
#login-model-window .login-model-container .captcha-loading {
  font-weight: bold;
  font-size: 0.8rem;
  margin: 0.3rem 0;
}
#login-model-window .login-model-container .twitter-login,
#login-model-window .login-model-container .facebook-login {
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5rem;
  text-align: center;
  width: 100%;
  color: #fff;
  margin-bottom: 0.5rem;
  display: block;
}
#login-model-window .login-model-container .twitter-login i,
#login-model-window .login-model-container .facebook-login i {
  display: inline-block;
  font-size: 0.9rem;
  margin-right: 0.5rem;
}
#login-model-window .login-model-container .account-actions a {
  font-size: 0.8rem;
  font-weight: bold;
  color: magenta;
  display: block;
  margin-top: 0.2rem;
}
#login-model-window .login-model-container .facebook-login {
  background: #3b5998;
}
#login-model-window .login-model-container .twitter-login {
  background: #4099ff;
}
#login-model-window .login-model-container.show-form {
  display: inline-block;
}

/* ============================================================ */
#main-menu {
  margin: 0;
  z-index: 99999;
  position: fixed;
  text-align: center;
  background: url(../images/bg_darktrans.png);
  left: inherit;
  width: 100%;
  height: 37px;
  overflow: hidden;
  -moz-box-shadow: 0px 0px 0.313em 0.438em rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 0px 0.313em 0.438em rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 0.313em 0.438em rgba(0, 0, 0, 0.2);
}
#main-menu h2,
#main-menu a {
  display: inline-block;
  cursor: pointer;
  vertical-align: top;
  font-family: "futura-pt", sans-serif;
  font-size: 14px !important;
  color: #fff;
  width: auto;
  height: 14px !important;
  padding: 10px !important;
  margin: 0 5px 0 0;
}
#main-menu h2 .selected_menu,
#main-menu a .selected_menu {
  border-top: 3px solid cyan;
}
#main-menu a {
  border-top: 3px solid #808080;
  padding: 0;
  border: 0;
  display: inline !important;
  vertical-align: middle;
}
#main-menu a:hover, #main-menu a .selected_menu {
  padding: 0;
  border: 0;
  display: inline !important;
  vertical-align: middle;
}
#main-menu a:hover {
  color: #00ffff;
}
#main-menu h2 {
  border-top: 3px solid #808080;
  padding: 10px 0 10px 10px !important;
}
#main-menu h2:hover {
  color: #00ffff !important;
}
#main-menu .container {
  width: 1160px;
  text-align: left;
  display: inline-block;
}

#main-menu-left {
  padding: 1em 0 0 0;
  background: #111;
  position: fixed;
  height: 100%;
  left: -230px;
  top: 0;
  width: 200px;
  z-index: 999999;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-transition: -moz-transform 0.2s ease-in-out;
  -o-transition: -o-transform 0.2s ease-in-out;
  -webkit-transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
}
#main-menu-left a {
  display: block;
  color: #CCCCCC;
  padding: 0.6em 1em;
  font-size: 0.85em;
  border-bottom: 1px solid black;
}
#main-menu-left a:hover {
  color: #999;
}
#main-menu-left a.close-menu {
  border-bottom: 0;
  font-size: 1em;
  background: #111;
  padding: 0.6em;
  position: absolute;
  right: -2.2em;
  line-height: 0.5em;
  text-align: center;
  top: 0;
}
#main-menu-left a.close-menu span {
  font-size: 1em;
  color: magenta;
}
#main-menu-left a.close-menu:hover {
  color: magenta;
}
#main-menu-left a.topdubs-link {
  color: #666;
}
#main-menu-left a.topdubs-link:hover {
  color: #666;
}
#main-menu-left a.logout-link {
  position: absolute;
  bottom: 0.5em;
  left: 0;
  border-bottom: 0;
  border-top: 1px solid black;
  width: 100%;
  display: none;
}
#main-menu-left a.logout-link span {
  position: absolute;
  right: 1.8em;
  top: 0.8em;
}
#main-menu-left a#main-room-active-link {
  position: relative;
  display: none;
  padding-right: 3.5em;
}
#main-menu-left a#main-room-active-link i {
  position: absolute;
  right: 1.8em;
  top: 0.8em;
}

#main-menu-right {
  background: #111;
  position: fixed;
  height: 100%;
  right: -400px;
  top: 0;
  width: 280px;
  z-index: 1000;
  padding: 3em 0;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-transition: -moz-transform 0.2s ease-in-out;
  -o-transition: -o-transform 0.2s ease-in-out;
  -webkit-transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
}
@media only screen and (min-width: 25em) {
  #main-menu-right {
    width: 325px;
  }
}
#main-menu-right a.close-menu {
  border-bottom: 0;
  font-size: 1em;
  background: #111;
  padding: 0.6em;
  position: absolute;
  left: -2.2em;
  line-height: 0.5em;
  text-align: center;
  top: 3em;
}
#main-menu-right a.close-menu span {
  font-size: 1em;
  color: magenta;
}
#main-menu-right a.close-menu:hover {
  color: magenta;
}
#main-menu-right p {
  padding: 1em;
  color: #fff;
  text-align: center;
}

.menu-left-in #main-menu-left {
  -moz-transform: translateX(230px);
  -ms-transform: translateX(230px);
  -webkit-transform: translateX(230px);
  transform: translateX(230px);
}

.menu-right-in #main-menu-right {
  -moz-transform: translateX(-400px);
  -ms-transform: translateX(-400px);
  -webkit-transform: translateX(-400px);
  transform: translateX(-400px);
}

/* GLOBAL OVERRIDE ============================================ */
.arial {
  font-family: "proxima-nova", sans-serif !important;
  font-size: 0.75em !important;
  font-style: normal !important;
}

.darkgrey {
  color: #808080 !important;
}

.noheight {
  height: 0px !important;
  overflow: hidden !important;
  min-height: 0px !important;
  padding: 0 !important;
}

.floater {
  position: fixed !important;
  top: 2.313em !important;
  z-index: 999 !important;
  margin: 0 !important;
}

.no-padding {
  padding: 0 !important;
}

/* ============================================================ */
/* POLICY ============================================= */
#policy {
  font-family: "proxima-nova", sans-serif;
  font-size: 0.75em;
  text-align: left;
}
#policy h3 {
  font-size: 0.85em;
  font-weight: bold;
  margin: 20px 0 10px 0;
}
#policy p {
  margin: 10px 0;
}
#policy ul, #policy ol {
  list-style: disc;
  margin: 10px 0 10px 20px;
}

/* ============================================================ */
/* CONTACT ============================================= */
#contact_form {
  text-align: left;
  font-size: 12px;
  font-family: "futura-pt", sans-serif;
}
#contact_form label {
  display: block;
  margin: 15px 0 0 0;
}
#contact_form textarea {
  display: block;
  width: 100%;
  height: 100px;
  font-family: "proxima-nova", sans-serif;
  font-size: 12px;
}
#contact_form .message {
  text-align: center;
  padding: 10px 15px;
  border: 1px #ccc dashed;
  font-size: 16px;
  margin: 0 0 10px 0;
  display: block;
}
#contact_form input.submit {
  float: right;
  margin: 10px 0 0 0;
}
#contact_form h2 {
  color: cyan;
  font-family: "bebas-neue", Arial, Helvetica, sans-serif;
  font-size: 22px;
}

/* End Main Styling */
/* Begin Chat Styling */
#chat {
  position: relative;
  margin: 0;
  padding: 2.7em 0 4em 0;
  background: #111;
  z-index: 10;
  width: 100%;
  display: none;
}
@media only screen and (min-width: 71.875em) {
  #chat {
    display: block;
  }
}
#chat .emojify {
  vertical-align: bottom;
}
#chat #new-messages-counter {
  z-index: 99999;
  cursor: pointer;
  display: none;
  position: absolute;
  top: -1.8em;
  padding: 0.2em 0;
  left: 0;
  width: 100%;
  background: magenta;
  color: #000;
  text-align: center;
  font-weight: bold;
  font-size: 0.75em;
  text-transform: uppercase;
}
#chat .chat-commands {
  position: absolute;
  padding: 0.5em 0.8em;
  text-transform: uppercase;
  font-weight: bold;
  color: #000;
  font-size: 1em;
  left: 0;
  top: 0;
  text-align: center;
  background: cyan;
  z-index: 15;
}
#chat select#selectLang {
  width: 100px;
  height: 20px;
  padding: 0;
}
#chat .chatLoading {
  background: magenta;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;
  top: 3em;
  left: 50%;
  margin-left: -7em;
  width: 14em;
  text-align: center;
  padding: 0.5em 0;
  font-size: 0.75em;
  z-index: 5;
  display: none;
}
#chat .col-header {
  padding: 10px 10px 0 10px;
}
#chat .chat_tools {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5em 1em;
  background: #111;
  border-bottom: 1px #202020 solid;
  width: 100%;
  z-index: 10;
}
#chat .chat_tools .room-user-counter {
  cursor: pointer;
  background: 212121;
  color: #ffe;
  padding: 0.5em 0.6em 0.5em 0.5em;
  display: block;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  font-size: 0.75em;
  line-height: 1.7em;
  font-weight: bold;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
  opacity: 0.4;
  display: none;
}
@media only screen and (min-width: 71.875em) {
  #chat .chat_tools .room-user-counter {
    display: block;
  }
}
#chat .chat_tools .room-user-counter:before {
  font-family: 'IcoMoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e604";
  font-size: 1em;
  margin-right: 0.5em;
  vertical-align: middle;
}
#chat .chat_tools a {
  float: right;
  font-size: 0.75em;
  font-weight: bold;
  text-transform: uppercase;
  color: #CCCCCC;
}
#chat .chat_tools a.chatSound:after {
  margin: 0 0 0 0.5em;
  font-family: 'IcoMoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e60b";
  font-size: 0.75em;
}
#chat .chat_tools a.chatSound.mute:after {
  content: "\e609";
}
#chat .chatLogin {
  font-size: 12px;
  display: block;
  width: 320px;
  padding: 10px 20px 5px 20px;
  text-transform: uppercase;
}
#chat .chat-container .pusher-chat-widget-input {
  position: absolute;
  width: 100%;
  bottom: 0;
  border-top: 1px #202020 solid;
  padding: 1em 3em 1em 1em;
  background: #111;
  z-index: 99999;
}
#chat .chat-container .pusher-chat-widget-input p {
  margin: 0;
  font-size: 0.75em;
  font-weight: bold;
}
#chat .chat-container .pusher-chat-widget-input button {
  position: absolute;
  right: 1em;
  bottom: 1em;
  width: 2em;
  height: 2em;
  color: #ffe;
  padding: 0;
  background: 212121;
  text-align: center;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
#chat .chat-container .pusher-chat-widget-input .icon-camera {
  color: 212121;
  position: absolute;
  right: 3.7em;
  top: 1.5em;
  cursor: pointer;
}
#chat .chat-container .pusher-chat-widget-input input {
  border: 1px #202020 solid;
  background: none;
  display: block;
  width: 100%;
  background: none;
  height: 2.6em;
  padding: 0 3em 0 1em;
  color: #CCCCCC;
}
#chat .chat-container .pusher-chat-widget-input input:focus {
  outline: 0;
}
#chat .chat-container .chat-messages {
  position: relative;
  margin: 0;
  padding: 0;
  height: inherit;
  overflow: hidden;
  -moz-transition: height 0.1s;
  -o-transition: height 0.1s;
  -webkit-transition: height 0.1s;
  transition: height 0.1s;
  height: 574px!important;
}
#chat .chat-container .owner-mod {
  color: yellow;
}
#chat .chat-container .currentDJ {
  color: magenta;
}
#chat .chat-container ul.chat-main {
  padding: 0;
  width: 100%;
  overflow: none;
  position: relative;
  z-index: 999;
}
#chat .chat-container ul.chat-main .system-warning {
  color: #000;
  background: magenta;
}
#chat .chat-container ul.chat-main .info-msg {
  color: #000;
  background: cyan;
}
#chat .chat-container ul.chat-main li {
  position: relative;
  padding: 0 0 0 2.2em;
  margin: 0 0.5em 0 0.5em;
  display: block;
  overflow: hidden;
  *zoom: 1;
}
#chat .chat-container ul.chat-main li:before, #chat .chat-container ul.chat-main li:after {
  content: " ";
  display: table;
}
#chat .chat-container ul.chat-main li:after {
  clear: both;
}
#chat .chat-container ul.chat-main li:hover .activity-row .meta-info {
  display: block;
}
#chat .chat-container ul.chat-main li.chat-system-loading {
  text-align: center;
  text-transform: uppercase;
  padding: 0.5em;
  font-size: 0.75em;
  color: #5a5b5c;
  font-weight: bold;
}
#chat .chat-container ul.chat-main li.chat-system-joined {
  text-align: center;
  font-size: 0.75em;
  color: #666;
  padding-right: 0;
}
#chat .chat-container ul.chat-main li.system {
  color: magenta;
  text-transform: uppercase;
  font-size: 0.6em;
  line-height: 1.2em;
  padding: 0.6em 1.5em;
  font-weight: bold;
  text-align: center;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
}
#chat .chat-container ul.chat-main li.system-error {
  color: red;
  text-transform: uppercase;
}
#chat .chat-container ul.chat-main li .activity-row {
  float: left;
  margin: 0;
  padding: 0.5em;
  padding-bottom: 1em;
  min-height: 2.2em;
  position: relative;
  overflow: hidden;
}
@media only screen and (min-width: 71.875em) {
  #chat .chat-container ul.chat-main li .activity-row {
    width: 20.5em;
  }
}
#chat .chat-container ul.chat-main li .activity-row .meta-info {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=30);
  opacity: 0.3;
  position: absolute;
  bottom: 0.2em;
  left: 0.5em;
  display: none;
}
#chat .chat-container ul.chat-main li .activity-row .meta-info .username {
  font-size: 0.6em;
  color: cyan;
  cursor: pointer;
  font-weight: 700;
  display: none;
}
#chat .chat-container ul.chat-main li .activity-row .meta-info .timeinfo {
  font-size: 0.6em;
}
#chat .chat-container ul.chat-main li .activity-row .meta-info .icon-dot {
  display: none;
  vertical-align: text-bottom;
  font-size: 0.7em;
}
#chat .chat-container ul.chat-main li .activity-row .text {
  font-size: 0.75em;
  display: block;
}
#chat .chat-container ul.chat-main li .activity-row .text p {
  word-wrap: break-word;
  line-height: 1.2em;
  margin: 0 0 0.5em 0;
}
#chat .chat-container ul.chat-main li .activity-row .text p a.username,
#chat .chat-container ul.chat-main li .activity-row .text p a.username:hover,
#chat .chat-container ul.chat-main li .activity-row .text p a.username:visited {
  color: #00BCD4;
}
#chat .chat-container ul.chat-main li .activity-row .text p a.autolink {
  word-break: break-all;
  color: #005d99;
}
#chat .chat-container ul.chat-main li .activity-row .text p a.autolink:visited {
  color: #005d99;
}
#chat .chat-container ul.chat-main li .activity-row .text p a.autolink:hover {
  color: #009bff;
}
#chat .chat-container ul.chat-main li .activity-row .text img {
  max-width: 100%;
  margin: 0.5em 0;
  display: block;
}
#chat .chat-container ul.chat-main li .activity-row .text span.username-handle {
  font-weight: 700;
}
#chat .chat-container ul.chat-main li .image_row {
  position: absolute;
  left: 0;
  top: 0.1em;
  height: 2.2em;
  width: 2.2em;
}
#chat .chat-container ul.chat-main li .image_row:after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
  border-top: 0px solid transparent;
  border-bottom: 0.75em solid transparent;
  border-right: 0.75em solid #111;
}
#chat .chat-container ul.chat-main li .image_row img {
  width: 100%;
}
#chat .chat-container span.icon {
  display: inline-block;
  background: url("../images/chat_icon.png") right 1px no-repeat;
  padding: 0 25px 0 0;
}

#dubtrack-video-realtime {
  position: fixed;
  left: 0;
  z-index: 999;
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: visible;
  background: rgba(0, 0, 0, 0.5);
  bottom: -10em;
  -moz-transition: bottom;
  -o-transition: bottom;
  -webkit-transition: bottom;
  transition: bottom;
  -moz-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  display: none;
  overflow: visible;
}
#dubtrack-video-realtime .realtime-videos-container {
  width: 100%;
  text-align: center;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 203px;
}
#dubtrack-video-realtime.active {
  bottom: 2em;
}
#dubtrack-video-realtime .toggle_videos {
  position: absolute;
  width: 16em;
  top: 0;
  left: 50%;
  margin-top: -2.7em;
  margin-left: -8em;
  background-color: magenta;
  color: #fff;
  padding: 0.5em 0em;
  font-size: 0.75em;
  font-weight: bold;
  cursor: pointer;
  display: none;
}
@media only screen and (min-width: 50em) {
  #dubtrack-video-realtime .toggle_videos {
    display: block;
  }
}
#dubtrack-video-realtime .toggle_videos span {
  margin-right: 0.5em;
  display: inline-block;
  vertical-align: middle;
}
#dubtrack-video-realtime .dtrealtime_videuser {
  display: inline-block;
  border: 3px solid #000;
  position: relative;
}
#dubtrack-video-realtime .dtrealtime_videuser.OT_publisher .OT_edge-bar-item, #dubtrack-video-realtime .dtrealtime_videuser.OT_subscriber .OT_edge-bar-item {
  -moz-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
}
#dubtrack-video-realtime .dtrealtime_videuser span.OT_opentok {
  display: none;
}
#dubtrack-video-realtime .dtrealtime_videuser h1.OT_name {
  font-size: 0.75em;
  font-weight: bold;
}
#dubtrack-video-realtime .dtrealtime_videuser button.OT_mute {
  background-size: 9.5px 14px;
  border-left: 0;
  position: absolute;
  right: 0em;
  top: 0.2em;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

#chat_options {
  margin: 0px 0 0 0;
  background: url("../images/bg_darktrans.png");
  display: block;
  width: 100%;
  -moz-border-radius: 0.313em;
  -webkit-border-radius: 0.313em;
  border-radius: 0.313em;
}
#chat_options li {
  color: #fff;
  top: 0;
  right: 0;
  display: inline-block;
  vertical-align: top;
  border-right: 2px #000 solid;
  padding: 3px 5px;
  font-family: "futura-pt", sans-serif;
  font-size: 0.75em;
}
#chat_options li:hover {
  /*background-color:#000;*/
}
#chat_options li a {
  color: #fff;
}
#chat_options li a.enabled {
  color: #999;
}
#chat_options li a.language_btn {
  padding: 2px;
  display: block;
}
#chat_options li.sound {
  width: 100px;
  float: right;
  text-align: right;
  border: 0px;
  overflow: hidden;
  background: url(../images/icon-low-volume-1.png) right center no-repeat;
  padding-right: 18px;
  margin-right: 15px;
}
#chat_options li.sound a {
  color: cyan;
}
#chat_options li.mute {
  background-image: url(../images/icon-mute-1.png);
  color: #999;
}

#language_list {
  display: none;
  position: absolute;
  z-index: 110;
  width: 315px;
  top: 20px;
}
#language_list ul {
  width: 315px;
}
#language_list li {
  color: #fff;
  display: block;
  cursor: pointer;
  font-family: "futura-pt", sans-serif;
  font-size: 14px;
  padding: 5px 10px;
}
#language_list li.title {
  color: cyan;
}
#language_list a.close {
  background: url(../images/close_icon.png) right center no-repeat;
  padding: 0 16px 0 0;
  font-size: 16px;
  position: absolute;
  right: 5px;
  top: 2px;
  color: #444;
  z-index: 99;
}

/* End Chat Styling */
/* Begin Comments Styling */
.comments-main {
  width: 100%;
  position: relative;
  padding: 1em;
}
.comments-main figure {
  width: 3em;
  height: 3em;
  overflow: hidden;
  position: absolute;
  top: 0.5em;
  left: 0;
  -moz-border-radius: 1.5em;
  -webkit-border-radius: 1.5em;
  border-radius: 1.5em;
}
.comments-main figure img {
  width: 100%;
}
.comments-main .icon-dot {
  vertical-align: text-bottom;
}
.comments-main .post-comment-container {
  position: relative;
  margin: 0 0 1.5em 0;
  padding: 0 1em 0 4em;
}
.comments-main .post-comment-container textarea {
  width: 100%;
  border: 1px #202020 solid;
  background: none;
  display: block;
  width: 100%;
  background: none;
  height: 4em;
  padding: 0.5em;
  color: #CCCCCC;
  background: #000;
}
.comments-main .post-comment-container textarea:focus {
  outline: 0;
}
.comments-main .post-comment-container .comments-textarea-container {
  background: #111;
  padding: 0 0 1.6em 0;
  position: relative;
}
.comments-main .post-comment-container .comments-textarea-container button {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #ffe;
  color: #000;
  font-weight: bold;
  font-size: 0.75em;
}
.comments-main .comments-display-all {
  margin: 1em auto 2em auto;
  display: block;
  font-size: 0.65em;
  display: none;
}
.comments-main .comments-list .comment-item {
  position: relative;
  padding: 0 1em 0 4em;
  margin: 0 0 1em 0;
}
.comments-main .comments-list .comment-item .icon-flag {
  display: block;
  right: 1em;
  top: 0.5em;
  position: absolute;
  color: #5a5b5c;
  font-size: 0.65em;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=60);
  opacity: 0.6;
}
.comments-main .comments-list .comment-item .icon-flag:hover {
  color: magenta;
}
.comments-main .comments-list .comment-item header {
  font-size: 0.75em;
  font-weight: bold;
  margin: 0 0 0.5em 0;
  padding: 0;
  color: #5a5b5c;
}
.comments-main .comments-list .comment-item header .timeago {
  font-size: 0.73em;
}
.comments-main .comments-list .comment-item header a {
  color: magenta;
}
.comments-main .comments-list .comment-item .comment-content {
  font-size: 0.75em;
  line-height: 1.2em;
  word-wrap: break-word;
}
.comments-main .comments-list .comment-item .comment-content p {
  margin: 0 0 1em 0;
}
.comments-main .comments-list .comment-item .comment-dub {
  color: #5a5b5c;
  font-weight: bold;
}
.comments-main .comments-list .comment-item .comment-dub .comment-dubs-total {
  font-size: 0.8em;
  line-height: 1.4em;
  margin: 0 0.5em 0 0;
  display: inline-block;
  vertical-align: text-top;
}
.comments-main .comments-list .comment-item .comment-dub .icon-arrow-up,
.comments-main .comments-list .comment-item .comment-dub .icon-arrow-down {
  cursor: pointer;
  vertical-align: text-top;
  padding: 0 0.5em;
}
.comments-main .comments-list .comment-item .comment-dub .icon-arrow-up:hover, .comments-main .comments-list .comment-item .comment-dub .icon-arrow-up.dubvoted,
.comments-main .comments-list .comment-item .comment-dub .icon-arrow-down:hover,
.comments-main .comments-list .comment-item .comment-dub .icon-arrow-down.dubvoted {
  color: magenta;
}
.comments-main .comments-list .comment-item .comment-dub a.delete {
  color: #5a5b5c;
  margin-left: 1.5em;
  font-size: 0.75em;
}
.comments-main .comments-list .comment-item .comment-dub a.delete:hover {
  color: magenta;
}

/* End Comments Styling */
/* Begin Dubs Styling */
.dub_list {
  min-height: 200px;
}
.dub_list b {
  font-weight: bold;
}
.dub_list a.go_back_btn {
  color: #fff;
  display: block;
  margin: 0 0 10px 0;
}
.dub_list li {
  position: relative;
  clear: both;
  font-family: "proxima-nova", sans-serif !important;
  font-size: 0.75em !important;
  color: #000;
  margin: 0 0 5px 0;
  text-align: left !important;
}
.dub_list li:hover {
  background: none !important;
}
.dub_list li li .message {
  max-width: 370px;
}
.dub_list li li .comment_content textarea {
  width: 345px;
}
.dub_list li.cursor {
  cursor: pointer;
}
.dub_list li.handle {
  cursor: pointer;
}
.dub_list li.loadMoreComments {
  background: #ff00ff;
  color: #000;
  padding: 6px 0;
  text-align: center !important;
  cursor: pointer;
  margin: 0 0 10px 0;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.1s;
  -o-transition-duration: 0.1s;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
.dub_list li .image {
  width: 50px;
  height: 50px;
  overflow: hidden;
  display: inline-block;
  margin-right: 20px;
  vertical-align: top;
}
.dub_list li .image img {
  width: 50px;
  vertical-align: middle;
  margin: 0 0 0 0;
}
.dub_list li .notificationsPlayer {
  position: relative;
  width: 500px;
  height: 300px;
  margin: 10px 25px 0 25px;
  overflow: hidden;
}
.dub_list li .notificationsPlayer .playerImage {
  width: 500px;
  height: 300px;
}
.dub_list li div.replyLogin {
  color: magenta;
  text-transform: uppercase;
  text-align: center;
  padding: 6px 0;
  margin: 10px 0 0 0;
}
.dub_list li div.replyLogin a {
  position: relative;
  padding-left: 20px;
  display: inline-block;
  margin: 0 15px;
}
.dub_list li div.replyLogin a:before {
  position: absolute;
  content: "";
  left: 0;
  top: -2px;
  background: url(../images/loginDubtrack.png) no-repeat;
  height: 17px;
  width: 16px;
  overflow: hidden;
}
.dub_list li div.replyLogin a.facebook:before {
  background-position: -16px 0;
}
.dub_list li .message {
  display: inline-block;
  vertical-align: top;
  margin-left: 15px;
  max-width: 380px;
}
.dub_list li .reply_a {
  bottom: 5px;
  right: 5px;
  position: absolute;
}
.dub_list li .reply_a a {
  color: cyan;
}
.dub_list li .links {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 12px;
}
.dub_list li .links a {
  color: #0085ea;
}
.dub_list li .comment_content {
  background: #e5e5e5;
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding: 5px;
  width: 515px;
}
.dub_list li .comment_content textarea {
  width: 420px;
  height: 20px;
  border: 1px #ccc solid;
  font-family: "proxima-nova", sans-serif !important;
  font-size: 0.75em !important;
}
.dub_list li .comment_content button {
  float: right;
}
.dub_list li .comment_content a.submit {
  color: white;
  vertical-align: top;
  border: 1px solid #bfbfbf;
  padding: 3px 7px;
  display: inline-block;
  width: auto;
  margin: 0px 0px 0px 10px;
  font-family: "futura-pt", sans-serif;
  font-size: 0.85em;
  background: #808080;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
}
.dub_list li .bg_comment {
  background: url(../images/bg_comment.png) no-repeat;
  width: 26px;
  height: 24px;
  position: absolute;
  margin: 0 0 0 -26px;
}
.dub_list li .yt_img {
  float: left;
  margin: 0 10px 0 0;
}
.dub_list li .yt_img img {
  width: 60px;
}

.dubpage_player {
  /*display:none*/
}

.play {
  display: none;
  background: url(../images/playbutton_normalstate.png) no-repeat;
  width: 24px;
  height: 26px;
}
.play:hover {
  background-image: url(../images/playbutton_onhover.png);
}

.options {
  text-align: left;
  margin: 0 20px 10px 30px;
}
.options a {
  -moz-border-radius: 0.625em;
  -webkit-border-radius: 0.625em;
  border-radius: 0.625em;
  background: url(../images/blackopacity_roomlist.png) repeat;
  color: #fff;
  display: inline-block;
  padding: 2px 4px;
  font-family: "futura-pt", sans-serif;
  font-size: 0.85em;
}
.options a.active {
  color: cyan;
}
.options .btn-toolbar {
  float: right;
  margin-top: 4px;
}

.top-dubs-content {
  width: 600px;
  margin: 0 auto;
}
.top-dubs-content #main-menu {
  margin-left: -60px;
}
.top-dubs-content a.loadMore {
  display: block;
  background: magenta;
  color: #000;
  font-size: 12px;
  text-transform: uppercase;
  padding: 5px;
  text-align: center;
  margin: 20px 0 0 0;
  font-weight: bold;
}

#post {
  text-align: left;
  margin: 0 0 10px 0;
  width: 540px;
  padding: 8px 15px;
  font-family: "futura-pt", sans-serif;
  -moz-border-radius: 0.625em;
  -webkit-border-radius: 0.625em;
  border-radius: 0.625em;
  background: url(../images/blackopacity_roomlist.png) repeat;
}
#post .header .content {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 0 20px;
  width: 450px;
}
#post .header .content p {
  font-size: 14px;
}
#post .header .content p a {
  color: cyan;
}
#post .header .dubs {
  display: inline-block;
  vertical-align: middle;
  font-size: 24px;
  color: #fff;
  width: 50px;
  text-align: center;
}
#post .header .dubs span {
  display: block;
}
#post .header h2 {
  color: #fff;
  font-size: 18px;
}
#post .post-content {
  margin: 15px 0;
}

#dubs_search {
  float: right;
}
#dubs_search .submit {
  position: absolute;
  z-index: 99;
  right: inherit;
  top: inherit;
  margin: -19px 0 0 135px;
}
#dubs_search .input_text, #dubs_search #search_rooms {
  border: 0;
  -moz-border-radius: 0.625em;
  -webkit-border-radius: 0.625em;
  border-radius: 0.625em;
  padding-right: 40px;
  background: url(../images/blackopacity_roomlist.png) repeat;
  color: #fff;
  display: inline-block;
  margin: 0 10px 0 0;
  padding: 2px 4px;
  font-family: "futura-pt", sans-serif;
  font-size: 0.85em;
}
#dubs_search .input_text:focus, #dubs_search #search_rooms:focus {
  outline: none;
  border: none;
}

ul#top-dubs .comments {
  font-size: 12px;
  display: block;
  background: url(../images/icon_comments_number.png) no-repeat;
  width: 32px;
  height: 28px;
  text-align: center;
  padding: 9px 5px 5px 5px;
  position: absolute;
  right: 10px;
  top: 10px;
}
ul#top-dubs #comments ul li {
  padding: 0 !important;
}
ul#top-dubs ul.comments_main {
  margin: 25px 0 0 0;
}
ul#top-dubs li .loadMoreComments {
  color: #fff;
}
ul#top-dubs li.dub_cont {
  text-align: left;
  margin: 0 0 10px 0;
  width: 620px;
  padding: 10px 15px 5px 15px;
  font-family: "futura-pt", sans-serif;
  -moz-border-radius: 0.625em;
  -webkit-border-radius: 0.625em;
  border-radius: 0.625em;
  background: url(../images/blackopacity_roomlist.png) repeat;
  cursor: pointer;
  position: relative;
}
ul#top-dubs li.dub_cont:hover .buttonsListen {
  display: block;
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}
ul#top-dubs li.dub_cont:hover .buttonsListen a, ul#top-dubs li.dub_cont:hover .buttonsListen img {
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}
ul#top-dubs li.dub_cont h2.title {
  color: #fff;
  font-size: 18px;
}
ul#top-dubs li.dub_cont .replyEl {
  margin-bottom: 30px;
}
ul#top-dubs li.dub_cont .dubslist {
  position: absolute;
  top: 0;
  left: 0;
  background: magenta;
  padding: 5px 10px;
  color: #000;
  font-weight: bold;
}
ul#top-dubs li.dub_cont .dubslist span.total {
  display: inline-block;
  margin-right: 5px;
}
ul#top-dubs li.dub_cont .playedInfo {
  bottom: 5px;
  right: 10px;
  position: absolute;
  z-index: 10;
  color: #fff;
}
ul#top-dubs li.dub_cont .playedInfo a {
  font-weight: bold;
  color: inherit;
}
ul#top-dubs li.dub_cont .content {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 0 20px;
  width: 380px;
}
ul#top-dubs li.dub_cont .content p {
  font-size: 14px;
}
ul#top-dubs li.dub_cont .content p a {
  color: cyan;
}
ul#top-dubs li.dub_cont .img {
  display: inline-block;
  vertical-align: middle;
  width: 103px;
  height: 56px;
  margin: -10px 0 0 -15px;
}
ul#top-dubs li.dub_cont .img span {
  margin: 10px 8px;
  display: inline-block;
}
ul#top-dubs li.dub_cont .img img {
  width: 103px;
  height: 76px;
}
ul#top-dubs li.dub_cont .buttonsListen {
  display: none;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 75px;
  text-align: center;
  overflow: hidden;
  margin: 0;
  padding: 22px 0 0 0;
}
ul#top-dubs li.dub_cont .buttonsListen:after {
  z-index: 19;
  background: #000;
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
  opacity: 0.8;
}
ul#top-dubs li.dub_cont .buttonsListen a, ul#top-dubs li.dub_cont .buttonsListen img {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.1s;
  -o-transition-duration: 0.1s;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  -moz-transition-delay: 0.2s;
  -o-transition-delay: 0.2s;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
ul#top-dubs li.dub_cont .buttonsListen a {
  vertical-align: middle;
  display: inline-block;
  background: url(../images/icon_discuss.png) no-repeat;
  height: 12px;
  padding: 33px 0 0 0;
  font-size: 12px;
  color: #fff;
  position: relative;
  z-index: 22;
}
ul#top-dubs li.dub_cont .buttonsListen a.listen {
  background-image: url(../images/icon_listen.png);
  width: 34px;
}
ul#top-dubs li.dub_cont .buttonsListen img {
  width: auto;
  height: auto;
  position: relative;
  z-index: 22;
}
ul#top-dubs li.dub_cont .loadingComments {
  text-align: center;
  width: 100%;
  color: magenta;
  font-size: 14px;
  text-transform: uppercase;
  margin: 15px 0 10px 0;
}
ul#top-dubs .wall-post-list {
  min-height: 0px;
}

/* End Dubs Styling */
/* Begin Dubtrack Styling */
#dt-upload .uploadbox {
  height: 40px;
  width: 100%;
  border: #333;
  background: #101010;
}
#dt-upload .uploadbox p {
  padding: 10px 20px;
}

/* End Dubtrack Styling */
/* Begin Help Styling */
.popover {
  background: #333;
}
.popover.top .arrow {
  border-top-color: #333;
}
.popover.bottom .arrow {
  border-bottom-color: #333;
}
.popover .popover-content {
  padding-bottom: 40px;
}
.popover button.btn {
  position: absolute;
  right: 10px;
  bottom: 7px;
}
.popover.cornerRight {
  bottom: 40px;
  left: 0;
  position: fixed;
  top: inherit;
}
.popover.cornerRight .arrow {
  left: 25px;
}
.popover.cornerLeft .arrow {
  left: auto;
  right: 25px;
}
.popover.step2, .popover.step3, .popover.step4 {
  top: inherit;
  bottom: 320px;
  left: 50%;
  margin-left: -570px;
}
.popover.step3 {
  margin-left: -490px;
  bottom: 360px;
}
.popover.step4 {
  margin-left: 40px;
  bottom: 200px;
}
.popover.step6 {
  right: 47px;
  left: auto;
}
.popover.step7 {
  right: 72px;
  left: auto;
  top: auto;
  bottom: 40px;
}
.popover.step8, .popover.step9, .popover.step10, .popover.step11, .popover.step12, .popover.step13 {
  top: 35px;
  bottom: auto;
  left: 30px;
}
.popover.step9 {
  left: 10px;
}
.popover.step10, .popover.step11, .popover.step12, .popover.step13 {
  left: auto;
  right: 56px;
}
.popover.step12 {
  right: 7px;
}
.popover.step13 {
  right: 250px;
}
.popover .popover-title {
  color: #fff;
  font-weight: bold;
  background: #000;
  border-bottom-color: #999;
}

.modal.help .chat-mod-help span, .modal.help .chat-mod-help b {
  width: 50%;
  display: block;
  float: left;
}
.modal.help .chat-mod-help p {
  line-height: 17px;
  margin: 0 0 10px;
}

.help-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  background: #000;
  z-index: 9999999;
  top: 0;
  left: 0;
}

.help {
  z-index: 99999999 !important;
}

#maindthelp {
  background: #333;
}
#maindthelp button.close {
  color: #fff;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  text-shadow: 0;
}
#maindthelp h3 {
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
}
#maindthelp .modal-header, #maindthelp .modal-footer {
  background: #000;
  border-color: #666;
}
#maindthelp .modal-footer {
  -moz-box-shadow: inset 0 1px 0 #666;
  -webkit-box-shadow: inset 0 1px 0 #666;
  box-shadow: inset 0 1px 0 #666;
}

/* End Help Styling */
/* Begin Player Styling */
#player-comp {
  display: none;
  background: #000;
  margin: 0;
  border-top: 1px #333 solid;
  position: absolute;
  z-index: 99;
  top: 37px;
  left: inherit;
  width: 100%;
  text-align: center;
  height: 24px;
  font-family: "futura-pt", sans-serif;
  font-size: 0.85em;
  color: #909090;
}
#player-comp .countDownDivmain {
  padding: 4px 0 0 15px;
  font-size: 12px;
  font-style: italic;
}
#player-comp .current_song {
  vertical-align: top;
  padding: 4px 0 0 0;
  font-size: 12px;
  font-style: italic;
  height: 21px;
  min-width: 284px !important;
  position: relative;
  overflow: hidden;
  margin: 0;
}
#player-comp .chat-top {
  float: right;
  padding: 3px 20px 0 0;
  width: 300px;
  height: 21px;
  text-align: right;
}
#player-comp .chat-top a {
  color: inherit;
  font-size: 14px;
}
#player-comp .chat-top .chat-col {
  text-align: left;
  position: absolute;
  display: none;
  z-index: 299;
  left: inherit;
  margin: 0;
  width: 320px;
  -moz-border-radius: 0 0 0.313em 0.313em;
  -webkit-border-radius: 0;
  border-radius: 0 0 0.313em 0.313em;
}
#player-comp div {
  display: inline-block;
}
#player-comp .chat-top.active {
  background: magenta;
  color: black;
}
#player-comp .container {
  width: 1165px;
  text-align: left;
}

#voting-comp {
  display: inline-block;
  vertical-align: top;
  width: 50px;
}
#voting-comp li {
  float: left;
  width: 25px;
  height: 24px;
  vertical-align: top;
  cursor: pointer;
}
#voting-comp li img {
  margin: 0;
  padding: 0;
}
#voting-comp li.up.voted {
  background: cyan;
}
#voting-comp li.down.voted {
  background: magenta;
}
#voting-comp li.voted img {
  display: none;
}

#controls {
  height: 0px;
  padding: 0;
  text-align: center;
}
#controls img {
  position: fixed;
  z-index: 999999;
  left: 50%;
  top: 5px;
  margin: 0 0 0 -72px;
}

.remove-if-iframe {
  display: none;
}
.remove-if-iframe.display-block {
  display: block;
}

#player-controller {
  background: #111;
  position: fixed;
  bottom: 0;
  z-index: 99999;
  min-height: 2.7em;
  width: 100%;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  *zoom: 1;
  padding-bottom: 0;
}
#player-controller:before, #player-controller:after {
  content: " ";
  display: table;
}
#player-controller:after {
  clear: both;
}
#player-controller .right {
  float: left!important;
  color: 212121;
  border-left: 1px #202020 solid;
    position: relative;
    left: 653px;
    bottom: 175px;
    overflow: overlay;
}
#player-controller .right li.copy {
  border-right: 0;
  display: none;
}
@media only screen and (min-width: 50em) {
  #player-controller .right li.copy {
    display: block;
  }
}
#player-controller .right li.copy span {
  font-size: 0.8em;
  font-weight: bold;
  margin: 0.88em;
    display: none;
}
#player-controller .left {
  float: left;
}
#player-controller .left .custom-embed-info {
  display: none;
  color: #CCCCCC;
  text-transform: uppercase;
  position: absolute;
  right: 15em;
  top: 0.95em;
  font-weight: bold;
  font-size: 0.75em;
}
#player-controller ul {
  display: block;
}
#player-controller ul li {
  float: left;
  border-right: 1px #202020 solid;
  display: block;
}
#player-controller ul li.remove-if-iframe {
  display: none;
}
#player-controller ul li.remove-if-iframe.display-block {
  display: block;
}
#player-controller ul li a {
  padding: 0.7em 0.8em;
  display: block;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.1s;
  -o-transition-duration: 0.1s;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -moz-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}
#player-controller ul li a span {
  color: #CCCCCC;
  display: block;
  font-size: 1.2em;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}
#player-controller ul li a:hover, #player-controller ul li a.voted {
  background: magenta;
}
#player-controller ul li a:hover span, #player-controller ul li a.voted span {
  color: #000;
}
#player-controller ul li a.dubup:hover, #player-controller ul li a.dubup.voted {
  background: cyan;
}
#player-controller ul li a.playbtn {
  position: relative;
}
#player-controller ul li a.playbtn:hover {
  background-color: magenta;
}
#player-controller ul li a.playbtn .queue-info {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: magenta;
  color: #000;
  font-weight: bold;
  font-size: 0.75em;
  padding: 0.1em 0.25em;
  text-align: center;
}
#player-controller ul li a.playbtn .queue-info.queue-active {
  display: block;
}
#player-controller ul li a.dubup, #player-controller ul li a.dubdown {
  cursor: pointer;
}
#player-controller ul li a#maindubtotal {
  text-align: center;
  font-weight: bold;
  color: #CCCCCC;
  padding: 0.7em 1em;
}
#player-controller ul li a#maindubtotal span {
  display: inline;
}
#player-controller ul li a#maindubtotal:hover {
  background: none;
}
#player-controller ul li.noanim a {
  -moz-transition-property: none;
  -o-transition-property: none;
  -webkit-transition-property: none;
  transition-property: none;
  -moz-transition-duration: 0;
  -o-transition-duration: 0;
  -webkit-transition-duration: 0;
  transition-duration: 0;
}
#player-controller ul li.noanim a span {
  -moz-transition-property: none;
  -o-transition-property: none;
  -webkit-transition-property: none;
  transition-property: none;
  -moz-transition-duration: 0;
  -o-transition-duration: 0;
  -webkit-transition-duration: 0;
  transition-duration: 0;
  -moz-transition-delay: 0;
  -o-transition-delay: 0;
  -webkit-transition-delay: 0;
  transition-delay: 0;
}
#player-controller ul li.add-to-playlist span:before {
  font-size: 0.75em;
  font-family: 'IcoMoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e60f";
}
#player-controller ul li.add-to-playlist.added {
  background: magenta;
}
#player-controller ul li.add-to-playlist.added span:before {
  color: #000;
  content: "\e610";
}
#player-controller ul li.volume {
  width: 7em;
  padding: 0 0.9em 0 0.8em;
  height: 2.6em;
  display: none;
}
@media only screen and (min-width: 31.25em) {
  #player-controller ul li.volume {
    display: block;
  }
}
@media only screen and (max-width: 31.25em) {
  #player-controller ul li.volume {
    display: none !important;
  }
}
#player-controller ul li.infoContainer {
  border-right: 0;
  padding: 0.7em 1.2em;
  position: relative;
  overflow: hidden;
  display: none;
}
@media only screen and (min-width: 71.875em) {
  #player-controller ul li.infoContainer {
    display: block;
  }
}
@media only screen and (min-width: 71.875em) {
  #player-controller ul li.infoContainer.display-block {
    display: block;
  }
}
#player-controller ul li.infoContainer .currentTime {
  right: 1em;
  position: absolute;
  font-size: 0.8em;
  top: 0.8em;
  color: #666;
  z-index: 10;
}
#player-controller ul li.infoContainer .currentSong {
  z-index: 10;
  position: relative;
  font-size: 0.85em;
  font-weight: bold;
}
#player-controller ul li.infoContainer .progressBg {
  z-index: 5;
  position: absolute;
  bottom: 0;
  height: 5px;
  left: 0;
  background: #ffe;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=75);
  opacity: 1;
}
#player-controller ul li.imgEl {
  width: 2.7em;
  height: 2.7em;
  overflow: hidden;
}
@media only screen and (max-width: 50em) {
  #player-controller ul li.imgEl {
    display: none !important;
  }
}
#player-controller ul li.imgEl img {
  width: 100%;
}

/* ============================================================ */
.playerDubContainer {
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 35px;
}

.player .volume-container {
  float: right;
  position: relative;
  width: 120px;
  margin-top: 3px;
  margin-right: 10px;
  z-index: 10;
}
.player .playerImage {
  position: absolute;
  z-index: 8;
  top: 0;
  left: 0;
  width: 100%;
  height: 360px;
  overflow: hidden;
}
.player .playerImage img {
  width: 100%;
}
.player .volume-control {
  border: 1px solid #777;
  width: 70px;
  position: absolute;
  height: 5px;
  background: #000;
  left: 20px;
  margin: 4px 0 0 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
}
.player .tooltip {
  position: absolute;
  display: block;
  top: -25px;
  width: 35px;
  height: 20px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border: 1px #333 solid;
  background: #ff00ff;
}
.player .volume {
  content: "";
  display: inline-block;
  width: 25px;
  height: 25px;
  right: -5px;
  background: url("../images/volume.png") no-repeat 0 -50px;
  position: absolute;
  margin-top: -5px;
}
.player .ui-slider-handle {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: magenta;
  position: absolute;
  z-index: 2;
  width: 1em;
  height: 1em;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  top: -0.4em;
  margin-left: -0.4em;
  border: 0;
}
.player .ui-slider-range {
  background: #ff00ff;
  position: absolute;
  border: 0;
  top: 0;
  height: 100%;
}
.player .loading, .player .buffering {
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  z-index: 9;
  background: #ff00ff;
  margin-top: -30px;
  margin-left: -70px;
  padding: 20px 30px;
}
.player .replay, .player .error {
  background: #ff00ff;
  width: 140px;
  text-align: center;
  text-transform: uppercase;
  z-index: 999;
  font-weight: 900;
  padding: 1em 0 0.8em 0;
  position: absolute;
  color: #fff;
  top: 50%;
  left: 50%;
  margin: -30px 0 0 -70px;
  cursor: pointer;
}
.player .error {
  width: 260px;
  padding: 15px 20px 0 20px;
  height: 70px;
  margin-left: -150px;
}
.player .replay > span {
  content: "";
  width: 44px;
  height: 44px;
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -22px;
  transition: transform 1s;
  -webkit-transition: -webkit-transform 1s;
  -moz-transition: -moz-transform 1s;
}
.player .replay:hover > span {
  transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
}
.player .controlContainer {
  width: 100%;
  position: absolute;
  bottom: 17px !important;
  right: 0;
  z-index: 9;
  padding-top: 10px;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
.player .controlContainer:after {
  position: absolute;
  height: 60px;
  width: 100%;
  background: #000;
  top: 0;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  left: 0;
  content: "";
  z-index: 5;
}
.player .controlContainer .buttons {
  float: left;
  width: 1em;
  height: 1em;
  margin: 0 1.5em 0 0.5em;
  z-index: 10;
  position: relative;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
}
.player .controlContainer .buttons a {
  display: block;
}
.player .controlContainer .buttons a span {
  font-size: 1.4em;
  color: #fff;
}
.player .controlContainer .progressContainer {
  float: left;
  width: 63%;
  height: 6px;
  background: #000;
  margin: 7px 0 0 0;
  cursor: pointer;
  position: relative;
  z-index: 10;
  -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
  -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
.player .controlContainer .progressContainer .progress, .player .controlContainer .progressContainer .loaded {
  height: 6px;
  width: 0px;
  background: #ff00ff;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  -moz-border-radius: 0 0.25em 0.25em 0;
  -webkit-border-radius: 0;
  border-radius: 0 0.25em 0.25em 0;
}
.player .controlContainer .progressContainer .loaded {
  zoom: 1;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=30);
  opacity: 0.3;
  z-index: 2;
}

#main_player {
  position: relative;
  width: 100%;
  padding: 0.4em;
}
@media only screen and (min-width: 71.875em) {
  #main_player:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #212121;
    z-index: 10;
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
    opacity: .4;
  }
}
#main_player .player_sharing {
  background: #111;
  left: 0;
  bottom: 0;
  position: relative;
  z-index: 999;
  *zoom: 1;
}
#main_player .player_sharing:before, #main_player .player_sharing:after {
  content: " ";
  display: table;
}
#main_player .player_sharing:after {
  clear: both;
}
#main_player .player_sharing span {
  font-size: 1.2em;
  display: block;
  float: left;
  margin: 0 0.2em;
  padding: 0.75em;
  cursor: pointer;
}
#main_player .player_sharing span:hover {
  color: magenta;
}
#main_player .player_container {
  display: block;
  padding: 0.75em;
  height: 10em;
  position: relative;
  background: #000;
  z-index: 11;
}
@media only screen and (min-width: 31.25em) {
  #main_player .player_container {
    height: 18em;
  }
}
@media only screen and (min-width: 37.5em) {
  #main_player .player_container {
    height: 25.45em;
  }
}
#main_player .player_container:hover .videoquality-el.show,
#main_player .player_container:hover .refresh-el.show {
  display: block;
}
#main_player .player_container #custom_iframe_embed {
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
}
#main_player .player_container #custom_iframe_embed_error {
  text-align: center;
  padding: 0 1em;
  text-transform: uppercase;
  top: 50%;
  font-weight: bold;
  position: absolute;
  width: 100%;
  left: 0;
  margin-top: -1em;
  font-size: 1.2em;
  display: none;
}
#main_player .player_container #custom_iframe_overlay {
  width: 100%;
  height: 100%;
  background: none;
  top: auto;
  left: 0;
  bottom: 4em;
  position: absolute;
  z-index: 9999999;
}
#main_player .player_container .playerElement {
  position: relative;
  width: 100%;
  height: 100%;
}
#main_player .player_container .placeholder {
  height: 10em;
  display: none;
  cursor: pointer;
}
#main_player .player_container .placeholder h5 {
  margin: 2.5em 0 0 0;
  padding: 0 2em;
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
}
@media only screen and (min-width: 31.25em) {
  #main_player .player_container .placeholder h5 {
    margin: 6em 0 0 0;
  }
}
@media only screen and (min-width: 37.5em) {
  #main_player .player_container .placeholder h5 {
    margin: 9em 0 0 0;
  }
}
#main_player .player_container .placeholder h5 span {
  position: relative;
  color: magenta;
  padding-right: 1em;
}
#main_player .player_container .placeholder h5 span i {
  display: block;
  position: absolute;
  top: 0.1em;
  right: 0.3em;
}
#main_player .player_container .loading {
  display: none;
  text-transform: uppercase;
  left: 50%;
  width: 10em;
  margin-left: -5em;
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
#main_player .player_container .skip-el {
  cursor: pointer;
  background: magenta;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
  opacity: 0.4;
  display: none;
  right: 0;
  left: auto;
  top: 0;
  margin: 0;
}
#main_player .player_container .videoquality-el {
  background: cyan;
  left: 0;
  bottom: 0;
  top: auto;
  margin: 0;
  cursor: pointer;
}
#main_player .player_container .refresh-el {
  background: cyan;
  left: 0;
  top: 0;
  margin: 0;
  cursor: pointer;
}
#main_player .player_container .error-el {
  top: 50%;
  margin-top: -2em;
  background: magenta;
  width: 16em;
  margin-left: -8em;
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}

#volume-div {
  width: 100%;
  height: 0.2em;
  margin: 1.2em 0.2em 1em 0;
  background: #1e1e22;
  border: 1px #1e1e22 solid;
  display: block;
  cursor: pointer;
  -moz-border-radius: 0.313em;
  -webkit-border-radius: 0.313em;
  border-radius: 0.313em;
  position: relative;
}
#volume-div .ui-slider-handle {
  -moz-border-radius: 0.6em;
  -webkit-border-radius: 0.6em;
  border-radius: 0.6em;
  background: #ffe;
  border: 0;
  padding: 0;
  height: 1.2em;
  width: 1.2em;
  top: -0.5em;
  margin-left: -0.5em;
  cursor: pointer;
  display: block;
  position: absolute;
  -moz-box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
}
#volume-div .ui-slider-range-min {
  background: #ff00ff;
}

/* End Player Styling */
/* Begin Playlist Styling */
#browser {
  width: 100%;
  height: 85%;
  bottom: -1.875em;
  bottom: -150%;
  left: 0;
  margin: 0;
  display: block;
  z-index: 9999;
  position: fixed;
  -moz-transition-property: bottom;
  -o-transition-property: bottom;
  -webkit-transition-property: bottom;
  transition-property: bottom;
  -moz-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  background: none;
}
#browser .ui-state-highlight {
  height: 5.5em;
  width: 100%;
  background: #333;
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}
#browser.animate {
  bottom: 2em;
}
#browser span.preview {
  cursor: pointer;
}
#browser span.title {
  color: cyan;
  font-family: "bebas-neue", Arial, Helvetica, sans-serif;
  display: block;
  width: auto;
  font-size: 1.2em;
  margin: 0 0 0.2em 0;
}
#browser span.song-title {
  width: 250px;
  height: 30px;
  overflow: hidden;
  font-size: 18px;
}
#browser span.next-inline {
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin: 0 10px 0 0;
}
#browser.help .content-videos .img_bg_trans {
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}
#browser .create-playlist {
  position: relative;
}
#browser .create-playlist input {
  background: none;
  height: 2.5em;
  width: 100%;
  border: 1px #202020 solid;
  color: #CCCCCC;
  padding: 0 2.5em 0 0.5em;
}
#browser .create-playlist span {
  position: absolute;
  right: 0;
  padding: 0.4em;
  text-align: center;
  color: #000;
  background: magenta;
}
#browser ul.playlist-style {
  width: 100%;
  padding-bottom: 10px;
  overflow: hidden;
  max-height: 21em;
  position: relative;
}
#browser ul.playlist-style li {
  font-family: "proxima-nova", sans-serif;
  text-transform: uppercase;
  color: white;
  font-size: 0.75em;
  padding: 0.5em;
  cursor: pointer;
  position: relative;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
  border-left: 1px solid #000;
  background: #333;
  font-weight: bold;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  margin: 0.3em 0 0 0;
}
#browser ul.playlist-style li.my_tracks {
  border-bottom: 1px solid #000;
}
#browser ul.playlist-style li:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=90);
  opacity: 0.9;
}
#browser ul.playlist-style li:hover .add_to_queue,
#browser ul.playlist-style li:hover .delete {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
  opacity: 0.5;
}
#browser ul.playlist-style li p {
  font-family: "proxima-nova", sans-serif;
  font-size: 0.65em;
  font-style: italic;
  color: #5a5b5c;
  margin: 0;
}
#browser ul.playlist-style li .delete,
#browser ul.playlist-style li .add_to_queue {
  font-size: 0.75em;
  color: #CCCCCC;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
}
#browser ul.playlist-style li .delete {
  position: absolute;
  cursor: pointer;
  top: 2.5em;
  right: 0.5em;
  padding: 0;
}
#browser ul.playlist-style li .add_to_queue {
  position: absolute;
  cursor: pointer;
  right: 0.5em;
  top: 0.8em;
  padding: 0;
}
#browser ul.playlist-style li .playlist-selected {
  background: url(../images/button_arrow.png) no-repeat;
  width: 69px;
  height: 69px;
  left: -52px;
  top: 0px;
  position: absolute;
  z-index: 99;
}
#browser .loading {
  left: 50%;
  margin-left: -20px;
  top: 0;
  text-transform: uppercase;
  background: magenta;
  color: #000;
  padding: 5px 15px;
  font-size: 12px;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  font-weight: bold;
}
#browser .nano {
  float: left;
  width: 100%;
  overflow: hidden;
  height: 100%;
}
@media only screen and (min-width: 71.875em) {
  #browser .nano {
    width: 56em;
  }
}
#browser .content-videos {
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 100%;
}
#browser .content-videos ul.browserPlaylistItems > li {
  position: relative;
  padding: 0.5em;
  font-size: 1.125em;
  margin: 0;
  border-bottom: 1px #202020 solid;
  list-style: none;
  background: #000;
  display: block;
  width: 100%;
  overflow: visible;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  *zoom: 1;
}
#browser .content-videos ul.browserPlaylistItems > li:before, #browser .content-videos ul.browserPlaylistItems > li:after {
  content: " ";
  display: table;
}
#browser .content-videos ul.browserPlaylistItems > li:after {
  clear: both;
}
#browser .content-videos ul.browserPlaylistItems > li:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}
#browser .content-videos ul.browserPlaylistItems > li:hover #addToPlaylistFloatContainer,
#browser .content-videos ul.browserPlaylistItems > li:hover .actions {
  display: block;
}
#browser .content-videos ul.browserPlaylistItems > li .display-error,
#browser .content-videos ul.browserPlaylistItems > li .display-success {
  display: block;
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: red;
  z-index: 999;
  color: white;
  font-weight: bold;
  font-size: 0.6em;
  text-transform: uppercase;
  padding: 0.5em 1em;
}
#browser .content-videos ul.browserPlaylistItems > li .display-success {
  background: cyan;
  color: #000;
}
#browser .content-videos ul.browserPlaylistItems > li.removed {
  background: #8B0000;
}
#browser .content-videos ul.browserPlaylistItems > li.removed .add_to_queue {
  display: none;
}
#browser .content-videos ul.browserPlaylistItems > li.removed span.removed_info {
  position: absolute;
  font-size: 14px;
  left: 0;
  bottom: -1px;
  display: block;
  z-index: 99;
  text-transform: uppercase;
  font-weight: bold;
  background: #000;
  padding: 5px;
}
#browser .content-videos ul.browserPlaylistItems > li.removed .preview {
  display: none;
}
#browser .content-videos ul.browserPlaylistItems > li.playlist-item {
  display: none;
}
#browser .content-videos ul.browserPlaylistItems > li.playlist-item .add_to_playlist {
  display: none;
}
#browser .content-videos ul.browserPlaylistItems > li.queue-item {
  display: none;
}
#browser .content-videos ul.browserPlaylistItems > li.queue-item .add_to_queue {
  display: none;
}
#browser .content-videos ul.browserPlaylistItems > li.history-item .remove_icon, #browser .content-videos ul.browserPlaylistItems > li.search-item .remove_icon {
  display: none;
}
#browser .content-videos ul.browserPlaylistItems > li.history-item {
  display: none;
}
@media only screen and (min-width: 71.875em) {
  #browser .content-videos ul.browserPlaylistItems > li #addToPlaylistFloatContainer,
  #browser .content-videos ul.browserPlaylistItems > li .actions {
    display: none;
  }
}
#browser .content-videos ul.browserPlaylistItems > li .progress {
  position: absolute;
  width: 100%;
  height: 3px;
  top: 0;
  left: 0;
  background: #000;
}
#browser .content-videos ul.browserPlaylistItems > li .progress .bg_current {
  background: magenta;
  display: block;
  height: 3px;
}
#browser .content-videos ul.browserPlaylistItems > li input.track_name_input {
  font-size: 14px;
  width: 80%;
  margin: 0;
  font-family: "proxima-nova", sans-serif;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  background: none;
  border: 1px #7D7D7D solid;
  color: #fff;
}
#browser .content-videos ul.browserPlaylistItems > li span.timeDisplay {
  position: absolute;
  bottom: auto;
  top: 0;
  left: 0;
  padding: 0.125em 0.3em;
  color: white;
  font-weight: bold;
  background: magenta;
  font-size: 0.65em;
}
@media only screen and (min-width: 71.875em) {
  #browser .content-videos ul.browserPlaylistItems > li span.timeDisplay {
    bottom: 0;
    top: auto;
  }
}
#browser .content-videos ul.browserPlaylistItems > li figure {
  width: 4em;
  height: 3em;
  display: block;
  overflow: hidden;
  margin: 0 1em 0 0;
}
@media only screen and (min-width: 37.5em) {
  #browser .content-videos ul.browserPlaylistItems > li figure {
    float: left;
  }
}
@media only screen and (min-width: 71.875em) {
  #browser .content-videos ul.browserPlaylistItems > li figure {
    width: 5.188em;
    height: 3.7em;
  }
}
#browser .content-videos ul.browserPlaylistItems > li figure img {
  width: 100%;
}
#browser .content-videos ul.browserPlaylistItems > li .actions {
  position: absolute;
  right: 1em;
  top: 1em;
}
#browser .content-videos ul.browserPlaylistItems > li .actions a {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
  opacity: 0.5;
  float: left;
  text-align: center;
  color: #CCCCCC;
  font-size: 0.5em;
  text-transform: uppercase;
  margin-left: 1em;
  position: relative;
}
#browser .content-videos ul.browserPlaylistItems > li .actions a span {
  display: block;
  font-size: 3em;
  margin-bottom: 0.1em;
}
@media only screen and (min-width: 71.875em) {
  #browser .content-videos ul.browserPlaylistItems > li .actions a span {
    font-size: 4em;
  }
}
#browser .content-videos ul.browserPlaylistItems > li .actions a .spinner {
  position: absolute;
  top: 1em;
  left: 0;
  width: 100%;
  display: none;
}
#browser .content-videos ul.browserPlaylistItems > li .actions a .spinner > div {
  width: 1em;
  height: 1em;
  margin: 0 0.3em;
  background: magenta;
}
#browser .content-videos ul.browserPlaylistItems > li .actions a.loading-action span:before {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
}
#browser .content-videos ul.browserPlaylistItems > li .actions a.loading-action .spinner {
  display: block;
}
#browser .content-videos ul.browserPlaylistItems > li .content {
  position: absolute;
  height: inherit;
  width: inherit;
  z-index: 9;
}
#browser .content-videos ul.browserPlaylistItems > li .img_bg_trans {
  -moz-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  margin-top: 5px;
  float: right;
  margin-right: 10px;
}
#browser .content-videos ul.browserPlaylistItems > li .description {
  font-family: "proxima-nova", sans-serif;
  margin-top: 0.5em;
}
@media only screen and (min-width: 71.875em) {
  #browser .content-videos ul.browserPlaylistItems > li .description {
    width: 33em;
    float: left;
    margin-top: 0.8em;
  }
}
#browser .content-videos ul.browserPlaylistItems > li .description h2 {
  margin: 0;
  font-size: 1em;
}
#browser .content-videos ul.browserPlaylistItems > li .description p {
  font-size: 12px;
  color: cyan;
  font-weight: bold;
}
#browser .content-videos ul.browserPlaylistItems > li .description p span {
  color: magenta;
  display: inline-block;
  margin: 0;
}
#browser .content-videos ul.browserPlaylistItems > li .description p span.preview {
  cursor: pointer;
}
#browser .content-videos ul.browserPlaylistItems > li .description p span.playedby, #browser .content-videos ul.browserPlaylistItems > li .description p span.dubs-display {
  margin-left: 0.3em;
  color: #fff;
  font-weight: normal;
}
#browser .content-videos ul.browserPlaylistItems > li .description p span.playedby b, #browser .content-videos ul.browserPlaylistItems > li .description p span.dubs-display b {
  font-weight: bold;
}
#browser .content-videos ul.browserPlaylistItems > li .description p span.playedby:before, #browser .content-videos ul.browserPlaylistItems > li .description p span.dubs-display:before {
  content: " - ";
}
#browser .content-videos ul.browserPlaylistItems > li .descriptionTracks {
  width: 55%;
}
#browser .result-videos {
  color: #fff;
  vertical-align: top;
}
#browser .browser-content {
  z-index: 2;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 73.750em;
  background: url("../images/backgrounds/pattern-stripes.png") #333;
  border: none;
  position: relative;
}
@media only screen and (min-width: 71.875em) {
  #browser .browser-content {
    border: 2px cyan solid;
  }
}
#browser .browser-content-header {
  padding: 1em 1.5em 1em 1em;
  overflow: hidden;
  color: #00FFFF;
  font-family: "bebas-neue", Arial, Helvetica, sans-serif;
  background: #111;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
}
#browser .browser-content-header span.next-playlist {
  color: #fff;
  width: 500px;
  font-family: "futura-pt", sans-serif;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 0 0;
  height: 31px;
  overflow: hidden;
  padding: 5px 0 0 0;
}
#browser .browser-content-header .form {
  text-align: left;
  width: 100%;
}
#browser .browser-content-header .form a {
  margin: 0;
  float: left;
}
#browser .browser-content-header .form input[type=text] {
  margin: 0;
  padding: 0 1em;
  float: left;
  border: 0;
  outline: 1px #202020 solid;
  height: 2.65em;
  color: white;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  background: none;
  width: auto;
  width: 11em;
}
@media only screen and (min-width: 71.875em) {
  #browser .browser-content-header .form input[type=text] {
    width: 65.5em;
  }
}
#browser .browser-content-header .form a.br-btn {
  width: 2em;
  height: 2em;
  padding: 0.25em 0;
  display: block;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=30);
  opacity: 0.3;
  outline: 1px #202020 solid;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.1s;
  -o-transition-duration: 0.1s;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
#browser .browser-content-header .form a.br-btn span {
  color: #CCCCCC;
  font-size: 1.5em;
  display: block;
  text-align: center;
}
#browser .browser-content-header .form a.br-btn:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=60);
  opacity: 0.6;
}
#browser .browser-content-header .form a.dubtrack-btn {
  display: none;
}
#browser .browser-content-header .form a.active {
  outline-color: magenta;
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}
#browser .browser-content-header .form a.active:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}
#browser .browser-content-header .form a.search-btn {
  color: white;
  background: magenta;
  outline-color: magenta;
  padding: 0.4em 0.8em;
}
#browser .browser-content-header .form a.search-btn span {
  line-height: 1em;
  font-size: 0.8em;
}
#browser .browser-content-header .close {
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  margin: 0;
  display: block;
  color: cyan;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
  opacity: 0.5;
}
#browser .browser-content-header .close:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
  opacity: 0.8;
}
#browser .browser-content-header .close span {
  font-size: 3em;
}
#browser .sidebar {
  width: 17.5em;
  height: 100%;
  position: absolute;
  top: 0;
  background: #111;
  z-index: 9;
  right: -100%;
  padding: 5.063em 1em 1em 1em;
}
@media only screen and (min-width: 71.875em) {
  #browser .sidebar {
    right: 0;
  }
}
#browser .sidebar .nano {
  float: none;
  width: 100%;
}
#browser .browser-content-main {
  position: relative;
  width: 100%;
  height: 100%;
  clear: both;
  padding-top: 4.063em;
  padding-bottom: 0.5em;
}

#queue-next img {
  margin: 15px 0 15px 0;
}
#queue-next img img {
  width: 297px;
  margin: 0 0 0 -10px;
}

.rotating_votes {
  padding: 3px 0;
}
.rotating_votes .song_rating {
  /* The .clock div. Created dynamically by jQuery */
  background-color: #252525;
  height: 50px;
  width: 50px;
  position: relative;
  overflow: hidden;
  float: left;
}
.rotating_votes .song_rating .rotate {
  /* There are two .rotate divs - one for each half of the background */
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  left: 0;
}
.rotating_votes .song_rating .backg, .rotating_votes .song_rating .front {
  width: 25px;
  height: 50px;
  background-color: #252525;
  position: absolute;
  top: 0;
}
.rotating_votes .song_rating .backg.left {
  left: 0;
}
.rotating_votes .song_rating .backg.right_el {
  left: 24px;
}
.rotating_votes .song_rating .front.left_el {
  left: 0;
  z-index: 10;
}
.rotating_votes .song_rating .display {
  /* Holds the number of seconds, minutes or hours respectfully */
  position: absolute;
  width: 50px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  z-index: 20;
  color: #F5F5F5;
  font-size: 12px;
  text-align: center;
  top: 18px;
  left: 0;
}
.rotating_votes .rotate.right_el {
  z-index: 11;
}
.rotating_votes .orange .backg.left_el {
  background: url(../images/bg_orange.png) no-repeat left top;
}
.rotating_votes .orange .backg.right_el {
  background: url(../images/bg_orange.png) no-repeat right top;
}
.rotating_votes .blue .backg.left_el {
  background: url(../images/bg_blue.png) no-repeat left top;
}
.rotating_votes .blue .backg.right_el {
  background: url(../images/bg_blue.png) no-repeat right top;
}
.rotating_votes .green .backg.left_el {
  background: url(../images/bg_green.png) no-repeat left top;
}
.rotating_votes .green .backg.right_el {
  background: url(../images/bg_green.png) no-repeat right top;
}

.playerPreview {
  position: absolute;
  top: 20%;
  background: #000;
  z-index: 99999;
  width: 20em;
  margin-left: -10em;
  min-height: 16.250em;
  padding: 1.5em;
  left: 50%;
}
@media only screen and (min-width: 43.75em) {
  .playerPreview {
    width: 38.750em;
    margin-left: -19.375em;
  }
}
.playerPreview:before {
  width: 100%;
  height: 100%;
  -moz-border-radius: 0.188em;
  -webkit-border-radius: 0.188em;
  border-radius: 0.188em;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
  opacity: 0.5;
  background: #000;
  border: 8px solid #000;
  content: " ";
  position: absolute;
  left: -8px;
  top: -8px;
}
.playerPreview .wall-post-list {
  height: auto !important;
  min-height: 0 !important;
}
.playerPreview .playerDubContainer {
  background: #000;
}
.playerPreview .close {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 99;
  width: 37px;
  height: 37px;
  background: #000;
  padding: 7px;
  cursor: pointer;
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}
.playerPreview .close img {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=20);
  opacity: 0.2;
}
.playerPreview .close img:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
  opacity: 0.5;
}

/* PLAYLIST =================================================== */
#addToPlaylistFloatContainer {
  background: #111;
  border: 1px #202020 solid;
  width: 15em;
  color: white;
  position: absolute;
  z-index: 9999;
  display: block;
}
#addToPlaylistFloatContainer.playerBottomFixed {
  position: fixed;
}
#addToPlaylistFloatContainer ul.playlist-list-action {
  max-height: 10.8em;
  overflow: hidden;
  position: relative;
}
#addToPlaylistFloatContainer ul.playlist-list-action > li {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.65em;
  display: block;
  cursor: pointer;
  width: 100%;
  background: #20252a;
  border-bottom: 1px #202020 solid;
  padding: 0.5em 0.7em;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
}
#addToPlaylistFloatContainer ul.playlist-list-action > li:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}
#addToPlaylistFloatContainer .create-playlist-input {
  position: relative;
}
#addToPlaylistFloatContainer .create-playlist-input input {
  background: none;
  height: 2.5em;
  width: 100%;
  border: 0;
  border-bottom: 1px #202020 solid;
  color: #CCCCCC;
  padding: 0 2.5em 0 0.5em;
}
#addToPlaylistFloatContainer .create-playlist-input span {
  position: absolute;
  right: 0;
  padding: 0.4em;
  text-align: center;
  color: #000;
  background: magenta;
}

#playlist-queue {
  display: none;
  position: fixed;
  z-index: 98;
  left: 0px;
  top: 38px;
  width: 300px;
  padding: 20px 0;
  background: #000;
  height: 100%;
}
#playlist-queue a.hide {
  cursor: pointer;
  z-index: 999;
  position: absolute;
  top: 5px;
  right: 5px;
  color: #fff;
}
#playlist-queue li {
  border-bottom: 1px solid #222;
  padding: 20px 15px;
}
#playlist-queue li h4 {
  font-weight: bold;
}
#playlist-queue li a {
  cursor: pointer;
  font-weight: bold;
  color: #fff;
}
#playlist-queue li a:hover {
  text-decoration: underline;
}
#playlist-queue li b {
  font-weight: bold;
}
#playlist-queue li img {
  width: 60px;
  float: left;
  margin-right: 10px;
}

/* ============================================================ */
#results_video_api {
  padding: 0;
  position: relative;
}
#results_video_api a.tt-wrapper i {
  font-style: italic;
  text-transform: none;
}
#results_video_api a.tt-wrapper span {
  left: inherit !important;
  right: 10px !important;
  z-index: 999;
  padding: 5px;
  text-transform: none;
  top: 70px !important;
}
#results_video_api a.tt-wrapper:hover span {
  top: 30px !important;
}
#results_video_api a.tt-wrapper:hover span:after {
  margin-left: 20px;
}
#results_video_api a.tt-wrapper.playlist_type, #results_video_api a.tt-wrapper.upload_btn {
  float: right;
  color: #CCCCCC;
  text-transform: uppercase;
  display: inline-block;
  vertical-align: middle;
  font-weight: bold;
  font-size: 0.85em;
  padding: 0.2em 1em;
  border: 1px #202020 solid;
  margin-top: 0.1em;
  min-width: auto;
  display: none;
}
@media only screen and (min-width: 71.875em) {
  #results_video_api a.tt-wrapper.playlist_type, #results_video_api a.tt-wrapper.upload_btn {
    display: block;
  }
}
#results_video_api a.tt-wrapper.playlist_type.playlist_type_private, #results_video_api a.tt-wrapper.upload_btn.playlist_type_private {
  border: #800000 1px solid;
  color: #fff;
  background: #bf0000;
}
#results_video_api .playlist_info {
  padding: 0.4em 1em;
  background: #000;
  top: 0;
}
#results_video_api .playlist_info .playlist_filter {
  font-size: 0.75em;
  font-style: italic;
  padding: 0.2em 0.5em;
  width: 20em;
  height: auto;
  margin-bottom: 0.5em;
  margin-top: 0.2em;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  background: none;
  color: #CCCCCC;
  border: 1px #202020 solid;
}

#dropbox span.message {
  display: block;
  background: #000;
  text-align: center;
  padding: 30px 20px;
  text-transform: uppercase;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
  opacity: 0.8;
  font-weight: bold;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.1s;
  -o-transition-duration: 0.1s;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
#dropbox span.dragOver {
  background: magenta;
  color: #000;
}
#dropbox li:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
}
#dropbox li.uploading {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=60);
  opacity: 0.6;
}
#dropbox li.uploading:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=60);
  opacity: 0.6;
}
#dropbox li.done {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=90);
  opacity: 0.9;
}
#dropbox li.done .dt-status {
  background: cyan !important;
  color: #000;
}
#dropbox li.done:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=90);
  opacity: 0.9;
}
#dropbox li.error {
  background: #8B0000;
}
#dropbox li.error .dt-status {
  background: #000;
}
#dropbox li.error .progress {
  display: none;
}
#dropbox li .dt-status {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px 10px;
  background: magenta;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}

/* End Playlist Styling */
/* Begin Plugins Styling */
.ps-container .ps-scrollbar-x-rail {
  position: absolute;
  /* please don't change 'position' */
  bottom: 3px;
  /* there must be 'bottom' for ps-scrollbar-x-rail */
  height: 8px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  -moz-transition: background-color 0.2s linear, opacity 0.2s linear;
  -o-transition: background-color 0.2s linear, opacity 0.2s linear;
  -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;
  transition: background-color 0.2s linear, opacity 0.2s linear;
}
.ps-container:hover .ps-scrollbar-x-rail, .ps-container.hover .ps-scrollbar-x-rail {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=60);
  opacity: 0.6;
}
.ps-container .ps-scrollbar-x-rail:hover, .ps-container .ps-scrollbar-x-rail.hover {
  background-color: #000;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=60);
  opacity: 0.6;
}
.ps-container .ps-scrollbar-x-rail.in-scrolling {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=90);
  opacity: 0.9;
}
.ps-container .ps-scrollbar-y-rail {
  position: absolute;
  /* please don't change 'position' */
  right: 3px;
  /* there must be 'right' for ps-scrollbar-y-rail */
  width: 8px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  -moz-transition: background-color 0.2s linear, opacity 0.2s linear;
  -o-transition: background-color 0.2s linear, opacity 0.2s linear;
  -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;
  transition: background-color 0.2s linear, opacity 0.2s linear;
  z-index: 99999;
}
.ps-container:hover .ps-scrollbar-y-rail, .ps-container.hover .ps-scrollbar-y-rail {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=60);
  opacity: 0.6;
}
.ps-container .ps-scrollbar-y-rail:hover, .ps-container .ps-scrollbar-y-rail.hover {
  background-color: #000;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=90);
  opacity: 0.9;
}
.ps-container .ps-scrollbar-y-rail.in-scrolling {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=90);
  opacity: 0.9;
}
.ps-container .ps-scrollbar-x {
  position: absolute;
  /* please don't change 'position' */
  bottom: 0;
  /* there must be 'bottom' for ps-scrollbar-x */
  height: 8px;
  background-color: #333;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -moz-transition: background-color 0.2s linear;
  -o-transition: background-color 0.2s linear;
  -webkit-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
}
.ps-container.ie6 .ps-scrollbar-x {
  font-size: 0;
  /* fixed scrollbar height in xp sp3 ie6 */
}
.ps-container .ps-scrollbar-x-rail:hover .ps-scrollbar-x, .ps-container .ps-scrollbar-x-rail.hover .ps-scrollbar-x {
  background-color: #333;
}
.ps-container .ps-scrollbar-y {
  position: absolute;
  /* please don't change 'position' */
  right: 0;
  /* there must be 'right' for ps-scrollbar-y */
  width: 8px;
  background-color: #333;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -moz-transition: background-color 0.2s linear;
  -o-transition: background-color 0.2s linear;
  -webkit-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
}
.ps-container.ie .ps-scrollbar-y {
  font-size: 0;
  /* fixed scrollbar height in xp sp3 ie6 */
}
.ps-container .ps-scrollbar-y-rail:hover .ps-scrollbar-y, .ps-container .ps-scrollbar-y-rail.hover .ps-scrollbar-y {
  background-color: #333;
}

/* End Plugins Styling */
/* Begin Room Styling */
/* CREATE ROOM ================================================ */
#create_room .message {
  /*display:none*/
}

#roomFormUpdate {
  position: absolute;
  z-index: 999999;
  top: 10em;
  left: 50%;
  width: 20em;
  margin-left: -10em;
  background: #000;
  border: 2px solid magenta;
}
#roomFormUpdate .closebtn {
  position: absolute;
  top: 0.2em;
  right: 0.5em;
  font-weight: bold;
  font-size: 0.75em;
  cursor: pointer;
  color: #666;
}
#roomFormUpdate .modal-header {
  background: #111;
  padding: 0.5em 1em;
}
#roomFormUpdate .modal-header h3 {
  margin: 0;
  font-size: 0.85em;
}
#roomFormUpdate #iframe-embed-preview h3 {
  text-align: center;
  font-size: 0.95em;
}
#roomFormUpdate .mid {
  padding: 0 1em 1em 1em;
}
#roomFormUpdate .mid label {
  display: none;
}
#roomFormUpdate .mid label.display-block {
  display: block;
  color: #666;
  font-size: 0.75em;
}
#roomFormUpdate .mid #progress .bar {
  height: 0.2em;
  background: magenta;
}
#roomFormUpdate .mid .help-block {
  margin: 1em 0 0 0;
  color: #666;
  font-size: 0.75em;
}
#roomFormUpdate .mid #fileupload {
  font-size: 0.75em;
}
#roomFormUpdate .mid input,
#roomFormUpdate .mid textarea,
#roomFormUpdate .mid select {
  display: block;
  border: 1px #202020 solid;
  background: none;
  padding: 0.5em 1em;
  width: 100%;
  color: #CCCCCC;
  margin: 0 0 0.5em 0;
}
#roomFormUpdate .mid select {
  padding: 1em;
  display: block;
  font-size: 0.75em;
  height: 2em;
  width: 100%;
}
#roomFormUpdate .modal-footer {
  border-top: 1px #202020 solid;
  padding: 0.5em 1em;
  *zoom: 1;
}
#roomFormUpdate .modal-footer:before, #roomFormUpdate .modal-footer:after {
  content: " ";
  display: table;
}
#roomFormUpdate .modal-footer:after {
  clear: both;
}
#roomFormUpdate .modal-footer button {
  font-size: 0.75em;
  margin-left: 0.5em;
  float: right;
}

/* ============================================================ */
button.create {
  float: right;
  margin-right: 50px;
  font-size: 12px;
}

#room_info {
  vertical-align: top;
}
#room_info a.right {
  margin: 10px 10px 0 0;
}
#room_info a.lobby {
  color: #fff;
  font-size: 21px;
}
#room_info a.lobby:hover {
  color: #fff;
}
#room_info span {
  color: #00FFFF;
  font-size: 0.85em;
  display: block;
  font-family: "futura-pt", sans-serif;
}
#room_info span.no-style {
  font: inherit;
  font-size: inherit;
  display: inline;
  color: inherit;
  cursor: pointer;
}
#room_info span.full {
  display: block;
  width: 284px;
  overflow: hidden;
  height: 29px;
}
#room_info div.lobby {
  float: right;
  width: auto;
  text-align: right;
}
#room_info .lobby a {
  display: inline-block;
  margin: 0 0 0 7px;
  vertical-align: top !important;
}
#room_info .lobby img {
  vertical-align: middle;
}
#room_info .full {
  display: block;
  margin: 0 0 0 0;
  color: #fff;
}
#room_info .info {
  font-size: 24px;
  display: inline-block;
}
#room_info .djinfo {
  line-height: 20px;
  margin: 10px 0 30px 0;
}
#room_info .view_queue {
  display: none;
  position: absolute;
  top: inherit;
  left: inherit;
  margin: 53px 0 0 5px;
}
#room_info .view_queue a {
  background: #222;
  color: #f7f7f7;
  font-family: "bebas-neue", Arial, Helvetica, sans-serif !important;
  padding: 5px 10px;
}
#room_info .volume {
  display: inline-block;
  margin: 5px 0 0 0;
}
#room_info .volume a.full {
  background: url(../images/volume_icon_slider.png) no-repeat 0 center;
  width: 21px;
  height: 15px;
  display: inline-block;
  margin: 0 0 0 20px;
  cursor: pointer;
}
#room_info .volume a.half {
  background-image: url(../images/icon-low-volume-1.png);
}
#room_info .volume a.mute {
  background-image: url(../images/icon-mute-1.png);
}
#room_info ul.icons {
  display: inline-block;
  width: 170px;
  margin: 0px 0 0 0;
  vertical-align: top;
}
#room_info ul.icons li {
  padding: 5px 0 0 25px;
  display: inline-block;
  background: no-repeat 0 center;
  cursor: pointer;
}
#room_info ul.icons li.infoicon {
  background-image: url("../images/icon-info.png");
}
#room_info ul.icons li.users {
  background-image: url("../images/icon-users.png");
}
#room_info ul.icons li.history {
  background-image: url("../images/icon_history.png");
  margin: 0 0 5px 0;
}
#room_info ul.icons li.playlists {
  background-image: url("../images/icon_playlists.png");
  padding-top: 5px;
  margin-left: 5px;
}
#room_info ul.icons li.browser {
  width: 160px;
  font-size: 20px;
  color: #fff;
  background: url(../images/icon_addsongstoplaylist.png) no-repeat 0 center;
  height: 30px;
  padding: 10px 0 0 35px;
}
#room_info ul.voting {
  position: absolute;
  bottom: 50px;
  right: 45px;
  font-family: "proxima-nova", sans-serif;
  font-size: 30px;
  font-weight: bold;
  width: 79px;
  text-align: center;
}
#room_info ul.voting li {
  display: block;
}
#room_info ul.voting li span.grey {
  display: inline;
  color: #ccc;
}
#room_info ul.voting li.middle-border {
  line-height: 49px;
  -moz-border-radius: 0.625em;
  -webkit-border-radius: 0.625em;
  border-radius: 0.625em;
  zoom: 1;
  border: 3px solid #fff;
  height: 40px;
  width: 73px;
  padding: 0 0 5px 0;
  color: #fff;
  -moz-box-shadow: 0px 0px 0.625em 0px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 0px 0px 0.625em 0px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 0px 0.625em 0px rgba(0, 0, 0, 0.7);
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
}
#room_info ul.voting li.up {
  background: url(../images/upvote_unpress.png) no-repeat center top;
}
#room_info ul.voting li.up:hover {
  background-image: url(../images/upvote_hover.png);
  color: cyan;
}
#room_info ul.voting li.up span {
  display: none;
}
#room_info ul.voting li.down {
  background: url(../images/downvote_unpress.png) no-repeat center bottom;
  padding: 6px 0 0 0;
  height: 48px;
}
#room_info ul.voting li.down:hover {
  background-image: url(../images/downvote_hover.png);
  color: magenta;
}
#room_info ul.voting li.down span {
  display: none;
}
#room_info ul.voting li.up.voted {
  background-image: url(../images/upvote_onpress.png);
  color: #000;
}
#room_info ul.voting li.down.voted {
  background-image: url(../images/downvote_onpress.png);
  color: #000;
}
#room_info .v-icon {
  font-size: 16px;
  height: 44px;
  width: 73px;
  padding: 10px 0 0 0;
  cursor: pointer;
  margin: 0 auto;
  color: #ccc;
}
#room_info .browser-div {
  margin: 0px 0 0 -5px;
  font-size: 30px;
  color: #fff;
  background: url(../images/play_button.png) no-repeat 0 0;
  height: 39px;
  padding: 10px 0 0 30px;
  cursor: pointer;
}
#room_info .browser-div:hover {
  color: magenta;
  background-image: url(../images/favorite_button_hover.png);
}
#room_info .browser-div:hover a {
  color: magenta;
}
#room_info .browser-div a {
  color: #fff;
}
#room_info .browser-div p {
  display: inline-block;
  padding: 10px 0 0 0;
}
#room_info .add_to_fav {
  margin: 0px 0 0 -5px;
  cursor: pointer;
  background: url(../images/favorite_button.png) no-repeat 0 0;
  height: 30px;
  padding: 10px 0 0 30px;
}
#room_info .add_to_fav:hover {
  color: magenta;
  background-image: url(../images/play_button_hover.png);
}
#room_info .add_to_fav:hover a {
  color: magenta;
}
#room_info .add_to_fav a {
  color: #fff;
}
#room_info .next_song_panel span {
  display: inline;
  font-size: 18px;
}
#room_info .time {
  display: inline-block;
  text-align: right;
  font-size: 34px;
  color: #fff;
  max-width: 100px;
  overflow: hidden;
}
#room_info .time span {
  font-size: 12px;
  margin: 0 0 0 0;
}
#room_info .time span.no-style {
  font: inherit;
  font-size: inherit;
  display: inline;
  color: inherit;
}

#roomInfoMainBox {
  position: absolute;
  width: 400px;
  top: -400px;
  max-height: 420px;
  overflow: hidden;
  left: 157px;
  padding: 20px;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  font-size: 0.85em;
  z-index: 999;
}
#roomInfoMainBox #roomInfoBox {
  position: relative;
  padding: 20px 20px 20px 20px;
  background: #101010;
}
#roomInfoMainBox.active {
  height: auto;
  top: 24px;
}
#roomInfoMainBox b {
  display: block;
  margin: 15px 0 5px 0;
}
#roomInfoMainBox a.edit {
  float: right;
  position: absolute;
  bottom: 5px;
  right: 20px;
}
#roomInfoMainBox a.close {
  position: absolute;
  top: 20px;
  right: 5px;
  font-size: 10px;
  color: #fff;
  text-shadow: none;
}

#song-info-title {
  min-width: 284px !important;
  position: relative;
  display: block;
  width: 284px;
  overflow: hidden;
  height: 29px;
}
#song-info-title span {
  font-size: 24px !important;
  color: #fff !important;
  font-family: Arial, Helvetica, sans-serif !important;
  width: auto;
  overflow: visible !important;
}

#dj-name {
  color: #fff !important;
  font-size: 18px !important;
  width: 90px;
  overflow: hidden;
}

/* ROOM LIST ================================================== */
#container-room-list {
  padding: 1em 0 3em 0;
  max-width: 78em;
  margin: 0 auto;
  *zoom: 1;
  /*border-top:2px solid #5a5e65;
  border-bottom:2px solid #5a5e65; */
}
#container-room-list:before, #container-room-list:after {
  content: " ";
  display: table;
}
#container-room-list:after {
  clear: both;
}
#container-room-list .room-item {
  position: relative;
  padding: 0;
  background: #000;
  cursor: pointer;
  width: 100%;
  border-bottom: 1px #333 solid;
  margin-bottom: 0.3em;
}
@media only screen and (min-width: 37.5em) {
  #container-room-list .room-item {
    -moz-border-radius: 0.625em;
    -webkit-border-radius: 0.625em;
    border-radius: 0.625em;
    width: 17.5em;
    float: left;
    margin: 1em;
    border-bottom: 0;
    margin-bottom: 0;
  }
}
@media only screen and (min-width: 37.5em) {
  #container-room-list .room-item.active-room, #container-room-list .room-item.userRoom {
    outline: 1px solid magenta;
  }
}
@media only screen and (min-width: 37.5em) {
  #container-room-list .room-item:hover a.join {
    display: block;
  }
}
#container-room-list .room-item a.join {
  display: none;
  font-family: "proxima-nova", sans-serif;
  font-size: 1.5em;
  color: white;
  padding: 1.5em 0;
  position: absolute;
  left: 0;
  width: 100%;
  top: 3em;
  margin: 0;
  text-align: center;
  z-index: 9;
  display: none;
}
#container-room-list .room-item a.join span {
  display: block;
  position: relative;
  z-index: 20;
  color: #fff;
  line-height: 1em;
}
#container-room-list .room-item a.join span:after {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 0 0.8em;
  font-size: 0.8em;
  font-family: 'IcoMoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e600";
}
#container-room-list .room-item a.join:before {
  width: 100%;
  background: #000;
  height: 100%;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8;
  background: #000;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=60);
  opacity: 0.6;
}
#container-room-list .room-item .roomImage {
  overflow: hidden;
  min-height: 10.375em;
  -moz-border-radius-topleft: 0.625em;
  -webkit-border-top-left-radius: 0.625em;
  border-top-left-radius: 0.625em;
  -moz-border-radius-topright: 0.625em;
  -webkit-border-top-right-radius: 0.625em;
  border-top-right-radius: 0.625em;
  display: none;
}
@media only screen and (min-width: 37.5em) {
  #container-room-list .room-item .roomImage {
    display: block;
  }
}
#container-room-list .room-item .roomImage img {
  width: 100%;
}
#container-room-list .room-item .description {
  margin: 0;
  padding: 1em 3em 1em 1em;
  font-weight: bold;
}
@media only screen and (min-width: 37.5em) {
  #container-room-list .room-item .description {
    margin: 1em 0;
    padding: 0 1em;
    font-weight: normal;
  }
}
#container-room-list .room-item .description span {
  display: block;
  line-height: 1.4em;
  white-space: nowrap;
}
#container-room-list .room-item .description span.current-song {
  font-size: 0.75em;
  color: #5a5b5c;
  font-style: italic;
  overflow: hidden;
  white-space: nowrap;
}
#container-room-list .room-item .user-count {
  position: absolute;
  padding: 0.5em;
  right: 0;
  top: 1.3em;
  font-size: 1.5em;
  font-weight: bold;
  margin: -1em 0.5em 0 0;
}
@media only screen and (min-width: 37.5em) {
  #container-room-list .room-item .user-count {
    top: 0;
    right: auto;
    left: 0;
    margin: 0;
    background: magenta;
    color: #000;
    font-size: 1em;
    font-weight: normal;
  }
}
#container-room-list .room-item .user-info {
  display: none;
  bottom: 1em;
  padding: 0.3em 1em;
  right: 1em;
  line-height: 1em;
  font-size: 0.8em;
  background: #333;
  border-top: 1px #333 solid;
  *zoom: 1;
}
#container-room-list .room-item .user-info:before, #container-room-list .room-item .user-info:after {
  content: " ";
  display: table;
}
#container-room-list .room-item .user-info:after {
  clear: both;
}
@media only screen and (min-width: 37.5em) {
  #container-room-list .room-item .user-info {
    padding: 1em;
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
    opacity: 0.7;
    -moz-border-radius-bottomleft: 0.625em;
    -webkit-border-bottom-left-radius: 0.625em;
    border-bottom-left-radius: 0.625em;
    -moz-border-radius-bottomright: 0.625em;
    -webkit-border-bottom-right-radius: 0.625em;
    border-bottom-right-radius: 0.625em;
  }
}
#container-room-list .room-item .user-info figure {
  margin: 0 1.2em 0 0;
  float: left;
  width: 2.5em;
  height: 2.5em;
  overflow: hidden;
  -moz-border-radius: 2.5em;
  -webkit-border-radius: 2.5em;
  border-radius: 2.5em;
}
@media only screen and (min-width: 37.5em) {
  #container-room-list .room-item .user-info figure {
    margin: 0 0.7em 0 0;
  }
}
#container-room-list .room-item .user-info figure img {
  width: 100%;
}
#container-room-list .room-item .user-info .room-user {
  margin: 0.7em 0 0 0;
  float: left;
  max-width: 16em;
  overflow: hidden;
  white-space: nowrap;
}
#container-room-list .room-item .user-info .room-user a {
  color: white;
  font-weight: bold;
}

#rooms-list {
  padding: 0 20px;
  width: 100%;
  margin: 0 0 20px 0;
  height: 660px;
  min-height: 660px;
}
#rooms-list li {
  font-family: "futura-pt", sans-serif;
  width: 280px;
  padding: 0 0 30px 0;
  line-height: 20px;
  position: relative;
  cursor: pointer;
  background: url(../images/blackopacity_roomlist.png) repeat;
  -moz-border-radius: 0.625em;
  -webkit-border-radius: 0.625em;
  border-radius: 0.625em;
  margin: 5px 10px 5px 0;
  float: left;
}
#rooms-list li:nth-child(odd) .corner {
  /*background:url(../images/bg_corner.png) no-repeat;
  width:24px;
  height:24px;
  position:absolute;
  top:0;
  left:0*/
}
#rooms-list li:hover .join {
  display: block;
}
#rooms-list li:hover .friends, #rooms-list li:hover .hosted {
  /*display:none;*/
}
#rooms-list li.activeRoom {
  outline: 1px solid magenta;
}
#rooms-list li .image {
  margin-bottom: 10px;
}
#rooms-list li .image img {
  width: 280px;
  height: 166px;
}
#rooms-list li .list {
  color: #000;
  background: cyan;
  display: block;
  text-align: right;
  padding: 5px 7px;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
}
#rooms-list li .list span {
  display: block;
  font-size: 12px;
  color: #000;
}
#rooms-list li .description {
  display: inline-block;
  margin: 0 0 0 20px;
  vertical-align: top;
  text-align: left;
}
#rooms-list li .description .name {
  font-size: 18px;
  color: #fff;
  display: block;
}
#rooms-list li .description .slash {
  display: inline;
  color: #797979;
}
#rooms-list li .description .song_dis {
  width: 100%;
  display: block;
  overflow: hidden;
  height: 20px;
  font-size: 14px;
  color: #505050;
}
#rooms-list li .hosted {
  z-index: 8;
  bottom: 5px;
  right: 5px;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  position: absolute;
  line-height: 14px;
}
#rooms-list li .hosted b {
  color: #fff;
}
#rooms-list li .hosted span {
  display: inline-block;
  vertical-align: top;
  font-style: normal !important;
  color: #fff;
}
#rooms-list li .friends {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #fff;
  font-size: 14px;
}
#rooms-list li .friends span {
  display: inline-block;
  margin-left: 10px;
}
#rooms-list li .join {
  display: none;
  font-family: "proxima-nova", sans-serif;
  font-size: 24px;
  color: #fff;
  padding: 25px 0;
  position: absolute;
  left: 0;
  width: 100%;
  top: 62px;
  margin: 0 -200px 0 0;
  z-index: 9;
}
#rooms-list li .join span {
  position: relative;
  z-index: 20;
  color: #fff;
  margin-left: 95px;
}
#rooms-list li .join:after {
  background: url(../images/button_joinroom_arrow.png) right center no-repeat;
  right: 70px;
  top: 22px;
  content: "";
  width: 17px;
  height: 26px;
  position: absolute;
  z-index: 10;
}
#rooms-list li .join:before {
  width: 100%;
  background: #000;
  height: 100%;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=60);
  opacity: 0.6;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8;
}
#rooms-list li.by_user {
  border: 2px solid #999;
}
#rooms-list .mCSB_scrollTools {
  margin: 0 0px 0 0;
}

/* ============================================================ */
#main-room {
  font-family: "proxima-nova", sans-serif;
  font-size: 1.125em;
  padding: 0;
  display: block;
  height: 100%;
  margin: 2em auto;
  width: 100%;
  max-width: 68em;
  position: relative;
  overflow: hidden;
  *zoom: 1;
  margin-top: 3em;
}
#main-room:before, #main-room:after {
  content: " ";
  display: table;
}
#main-room:after {
  clear: both;
}
@media only screen and (min-width: 71.875em) {
  #main-room {
    margin-top: 2em;
  }
}
@media only screen and (max-width: 71.875em) {
  #main-room.chat .left_section, #main-room.users .left_section {
    position: absolute;
    left: -200%;
  }
  #main-room.chat #chat, #main-room.users #chat {
    display: block;
  }
  #main-room.users #chat {
    display: none;
  }
  #main-room.users #main_avatar_room {
    display: block;
  }
}
#main-room #canvas_cont {
  width: 100%;
  height: 100%;
}
#main-room .right_section {
  overflow: hidden;
}
@media only screen and (min-width: 71.875em) {
  #main-room .right_section {
    right: 43%;
    float: right;
    width: 35%;
    position: fixed;
  }
}
@media only screen and (max-width: 71.875em) {
  #main-room .right_section {
    width: 100% !important;
  }
}
#main-room .left_section {
  position: relative;
  background: #000;
  width: 100%;
}
@media only screen and (min-width: 71.875em) {
  #main-room .left_section {
    width: 60%;
    float: left;
  }
}
@media only screen and (min-width: 71.875em) {
  #main-room.display-users-rooms #main_avatar_room {
    left: 0;
  }
  #main-room.display-users-rooms #main_avatar_room .avatar_tools a.loadRoomAva span {
    left: 0;
  }
}
#main-room #mobile-room-menu {
  width: 100%;
  background: #111;
  position: fixed;
  left: 0;
  top: 2.6em;
  z-index: 99999;
  margin: 0;
  padding: 0;
  display: block;
}
@media only screen and (min-width: 71.875em) {
  #main-room #mobile-room-menu {
    display: none;
  }
}
#main-room #mobile-room-menu a {
  width: 33%;
  padding: 1em 0;
  font-size: 0.75em;
  color: #666;
  display: block;
  float: left;
  text-align: center;
  border-right: 1px #202020 solid;
  position: relative;
}
#main-room #mobile-room-menu a.active {
  color: #CCCCCC;
}
#main-room #mobile-room-menu a:last-child {
  border-right: 0;
}
#main-room #mobile-room-menu a span.info-counter {
  position: absolute;
  right: 0.5em;
  top: 50%;
  margin: -1.6em 0 0 0;
  background: magenta;
  color: #000;
  text-align: center;
  padding: 0.5em;
  font-weight: bold;
  font-size: 0.75em;
}

#main_avatar_room {
  margin: 0;
  width: 100%;
  z-index: 11;
  background: #111;
  display: none;
}
@media only screen and (min-width: 71.875em) {
  #main_avatar_room {
    -moz-transition: left 0.1s ease-in;
    -o-transition: left 0.1s ease-in;
    -webkit-transition: left 0.1s ease-in;
    transition: left 0.1s ease-in;
    position: absolute;
    top: 0;
    display: block;
    left: 100%;
  }
}
#main_avatar_room #avatar {
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
}
#main_avatar_room #avatar .loadingAva {
  position: absolute;
  z-index: 999;
  background: magenta;
  top: 3.1em;
  left: 50%;
  margin-left: -7em;
  width: 14em;
  font-size: 0.75em;
  padding: 0.5em 0;
  color: #000;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  display: none;
}
#main_avatar_room #avatar .room_count {
  font-family: "futura-pt", sans-serif;
  color: #fff;
  margin: 0 0 10px 0;
  vertical-align: top;
  height: 50px;
  line-height: 24px;
  width: 65px;
  padding: 15px 0 0 0;
  font-size: 24px;
  color: #fff;
  text-align: center;
  border: 2px #808080 solid;
  overflow: hidden;
}
#main_avatar_room #avatar .room_count span {
  display: block;
  font-size: 14px;
}
#main_avatar_room #avatar .room_count span.small-inline {
  font-size: 14px;
  display: inline;
}
#main_avatar_room #avatar .room_count span.large {
  font-size: 33px;
}
#main_avatar_room .avatar_tools {
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
  border-bottom: 1px #202020 solid;
  z-index: 999;
}
#main_avatar_room .avatar_tools .input-room-users-search {
  position: absolute;
  bottom: -2.75em;
  right: 0;
  width: 100%;
  padding: 0.35em 0.5em;
  background: #000;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
  opacity: 0.8;
}
#main_avatar_room .avatar_tools .input-room-users-search i {
  position: absolute;
  top: 0.75em;
  left: 0.85em;
}
#main_avatar_room .avatar_tools .input-room-users-search input {
  border: 1px #202020 solid;
  background: none;
  color: #CCCCCC;
  width: 100%;
  margin: 0;
  padding: 0.5em 0.5em 0.5em 3em;
  min-height: 1.5em;
  outline: 0;
  -moz-border-radius: 0.1875em;
  -webkit-border-radius: 0.1875em;
  border-radius: 0.1875em;
}
#main_avatar_room .avatar_tools a {
  width: 100%;
  display: block;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  padding: 0.5em 4em;
  font-weight: bold;
  background: #000;
  position: relative;
}
#main_avatar_room .avatar_tools a.loadRoomAva {
  display: none;
}
@media only screen and (min-width: 71.875em) {
  #main_avatar_room .avatar_tools a.loadRoomAva {
    display: block;
  }
}
#main_avatar_room .avatar_tools a.loadRoomAva i {
  font-style: normal;
  font-size: 0.7em;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
  opacity: 0.5;
}
#main_avatar_room .avatar_tools a.loadRoomAva span {
  cursor: pointer;
  background: magenta;
  color: #000;
  padding: 0.5em 0.6em 0.5em 0.5em;
  display: block;
  position: absolute;
  height: 100%;
  left: -7em;
  top: 0;
  font-size: 0.75em;
  line-height: 1.9em;
  font-weight: bold;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
  opacity: 0.4;
  -moz-transition: left 0.15s ease-in 0.1s;
  -o-transition: left 0.15s ease-in 0.1s;
  -webkit-transition: left 0.15s ease-in;
  -webkit-transition-delay: 0.1s;
  transition: left 0.15s ease-in 0.1s;
}
#main_avatar_room .avatar_tools a.loadRoomAva span:before {
  font-family: 'IcoMoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e61c";
  font-size: 1em;
  margin-right: 0.5em;
  vertical-align: middle;
}
#main_avatar_room #main-user-list-room {
  margin: 3em 0 0 0;
  position: relative;
  overflow: hidden;
}
@media only screen and (min-width: 71.875em) {
  #main_avatar_room #main-user-list-room {
    margin: 5em 0 0 0;
  }
}

#avatar_feature {
  *zoom: 1;
  margin: 0;
  padding: 0;
  position: relative;
  border-bottom: 1px solid magenta;
}
#avatar_feature:before, #avatar_feature:after {
  content: " ";
  display: table;
}
#avatar_feature:after {
  clear: both;
}
#avatar_feature .room-feautre-title {
  background: magenta;
  color: #000;
  padding: 0.5em 1em;
  font-weight: bold;
  font-size: 0.8em;
  text-transform: uppercase;
  position: relative;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
  opacity: 0.4;
}
#avatar_feature .room-feautre-title button.view-users {
  display: block;
  position: absolute;
  right: 1em;
  top: 0.5em;
  font-size: 0.8em;
}
#avatar_feature ul {
  margin: 0;
  padding: 0;
}
#avatar_feature ul li {
  width: 4.07em;
  float: left;
}

/* End Room Styling */
/* Begin User Styling */
#private-messages {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
#private-messages.view-message-details .main-message-list {
  left: -100%;
}
#private-messages.view-message-details .message-details {
  left: 0;
}
#private-messages .loading {
  font-size: 0.75em;
  text-transform: uppercase;
  top: 4em;
}
#private-messages .user_selected_items .result-item,
#private-messages .search-results .search-results-users .result-item {
  *zoom: 1;
  margin: 0.7em 0;
  cursor: pointer;
}
#private-messages .user_selected_items .result-item:before, #private-messages .user_selected_items .result-item:after,
#private-messages .search-results .search-results-users .result-item:before,
#private-messages .search-results .search-results-users .result-item:after {
  content: " ";
  display: table;
}
#private-messages .user_selected_items .result-item:after,
#private-messages .search-results .search-results-users .result-item:after {
  clear: both;
}
#private-messages .user_selected_items .result-item img,
#private-messages .search-results .search-results-users .result-item img {
  width: 1.7em;
  height: 1.7em;
  float: left;
}
#private-messages .user_selected_items .result-item span,
#private-messages .search-results .search-results-users .result-item span {
  margin-left: 1em;
  font-size: 0.85em;
}
#private-messages .user_selected_items .result-item span b,
#private-messages .search-results .search-results-users .result-item span b {
  color: magenta;
}
#private-messages .private-message-details-info,
#private-messages .private-message-info {
  padding: 0 2.5em;
  position: absolute;
  width: 100%;
  left: 0;
  top: 5em;
  text-align: center;
  color: #333;
  display: none;
}
#private-messages .main-message-list,
#private-messages .message-details {
  position: absolute;
  background: #111;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  -moz-transition: left 0.25s;
  -o-transition: left 0.25s;
  -webkit-transition: left 0.25s;
  transition: left 0.25s;
}
#private-messages .main-message-list input,
#private-messages .message-details input {
  border: 1px #202020 solid;
  background: none;
  display: block;
  width: 100%;
  background: none;
  height: 2.6em;
  padding: 0 3em 0 1em;
  color: #CCCCCC;
}
#private-messages .main-message-list .message-header,
#private-messages .message-details .message-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5em 1em;
  border-bottom: 1px #202020 solid;
  z-index: 99;
  background: #111;
}
#private-messages .main-message-list .message-header a,
#private-messages .message-details .message-header a {
  color: magenta;
  font-size: 0.75em;
  font-weight: bold;
  text-transform: uppercase;
}
#private-messages .main-message-list .message-header input,
#private-messages .message-details .message-header input {
  padding: 0 2.8em 0 1em;
}
#private-messages .main-message-list .message-header .icon-search,
#private-messages .main-message-list .message-header .icon-plus-alt,
#private-messages .message-details .message-header .icon-search,
#private-messages .message-details .message-header .icon-plus-alt {
  position: absolute;
  left: 1.5em;
  top: 0.85em;
}
#private-messages .main-message-list .message-header .icon-plus-alt,
#private-messages .message-details .message-header .icon-plus-alt {
  left: auto;
  right: 1.5em;
  cursor: pointer;
}
#private-messages .main-message-list .message-list-wrapper,
#private-messages .message-details .message-list-wrapper {
  padding: 3em 0 0 0;
  position: relative;
  height: 100%;
}
#private-messages .main-message-list .message-list-wrapper .message-list-wrapper-inner,
#private-messages .message-details .message-list-wrapper .message-list-wrapper-inner {
  position: relative;
  height: 100%;
  overflow: hidden;
}
#private-messages .main-message-list ul.message-list,
#private-messages .message-details ul.message-list {
  padding: 0;
}
#private-messages .main-message-list ul.message-list li.message-item,
#private-messages .message-details ul.message-list li.message-item {
  padding: 1em;
  border-bottom: 1px #202020 solid;
  position: relative;
  cursor: pointer;
  min-height: 4.7em;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
  opacity: 0.8;
  -moz-transition: opacity 0.1s;
  -o-transition: opacity 0.1s;
  -webkit-transition: opacity 0.1s;
  transition: opacity 0.1s;
}
#private-messages .main-message-list ul.message-list li.message-item:hover,
#private-messages .message-details ul.message-list li.message-item:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}
#private-messages .main-message-list ul.message-list li.message-item:hover .message-time,
#private-messages .message-details ul.message-list li.message-item:hover .message-time {
  display: block;
}
#private-messages .main-message-list ul.message-list li.message-item.new-message:before,
#private-messages .message-details ul.message-list li.message-item.new-message:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background: magenta;
}
#private-messages .main-message-list ul.message-list li.message-item .media,
#private-messages .message-details ul.message-list li.message-item .media {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  overflow: hidden;
}
#private-messages .main-message-list ul.message-list li.message-item .media img,
#private-messages .message-details ul.message-list li.message-item .media img {
  width: 100%;
}
#private-messages .main-message-list ul.message-list li.message-item .message-content h3,
#private-messages .message-details ul.message-list li.message-item .message-content h3 {
  margin: 0.25em 0;
  padding: 0;
  font-size: 0.95em;
  font-weight: bold;
  color: magenta;
  overflow: hidden;
}
#private-messages .main-message-list ul.message-list li.message-item .message-content p,
#private-messages .message-details ul.message-list li.message-item .message-content p {
  font-size: 0.85em;
  text-align: left;
  margin: 0;
  padding: 0;
  color: #999;
}
#private-messages .main-message-list ul.message-list li.message-item .message-content img,
#private-messages .message-details ul.message-list li.message-item .message-content img {
  width: 100%;
}
#private-messages .main-message-list ul.message-list li.message-item .message-content .username-handle,
#private-messages .message-details ul.message-list li.message-item .message-content .username-handle {
  color: cyan;
  font-weight: bold;
}
#private-messages .main-message-list ul.message-list li.message-item .message-time,
#private-messages .message-details ul.message-list li.message-item .message-time {
  position: absolute;
  right: 1em;
  top: 0.1em;
  color: #666;
  font-size: 0.75em;
}
#private-messages .main-message-list ul.message-list li.message-item .message-content {
  overflow: hidden;
}
#private-messages .main-message-list ul.message-list li.message-item .message-content p {
  white-space: nowrap;
}
#private-messages .main-message-list ul.message-list li.message-item .image-container {
  *zoom: 1;
  width: 3em;
  height: 3em;
  overflow: hidden;
  float: left;
  margin-right: 1em;
  margin-bottom: 0.5em;
}
#private-messages .main-message-list ul.message-list li.message-item .image-container:before, #private-messages .main-message-list ul.message-list li.message-item .image-container:after {
  content: " ";
  display: table;
}
#private-messages .main-message-list ul.message-list li.message-item .image-container:after {
  clear: both;
}
#private-messages .main-message-list ul.message-list li.message-item .image-container .media {
  display: block;
  width: 1.5em;
  height: 1.5em;
  float: left;
}
#private-messages .main-message-list ul.message-list li.message-item.display-2-users .media {
  width: 3em;
  height: 3em;
}
#private-messages .main-message-list ul.message-list li.message-item.display-3-users .media:nth-of-type(2) {
  margin-left: 1.5em;
}
#private-messages .main-message-list ul.message-list li.message-item.display-4-users .media:nth-of-type(1) {
  margin-left: 0.75em;
}
#private-messages .message-details {
  left: 100%;
}
#private-messages .message-details .message-list-wrapper {
  padding: 3em 0 4.5em 0;
}
#private-messages .message-details ul.message-list li.message-item {
  padding-bottom: 1.5em;
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
  min-height: 4.5em;
}
#private-messages .message-details ul.message-list li.message-item:last-of-type {
  border-bottom: 0;
}
#private-messages .message-details ul.message-list li.message-item .message-content {
  line-height: 1em;
  padding-left: 0;
}
#private-messages .message-details ul.message-list li.message-item .message-content h3 {
  margin: 0;
  padding: 0;
  display: inline;
  font-size: 0.85em;
  color: cyan;
}
#private-messages .message-details ul.message-list li.message-item .message-content p {
  font-size: 0.85em;
  display: inline;
}
#private-messages .message-details ul.message-list li.message-item .media {
  width: 2em;
  height: 2em;
  position: relative;
  float: left;
  margin-right: 1em;
  margin-bottom: 0.5em;
}
#private-messages .message-details ul.message-list li.message-item .message-time {
  display: none;
  right: auto;
  left: 1.8em;
  top: auto;
  font-size: 0.65em;
  bottom: 0.1em;
}
#private-messages .message-details .input-container {
  position: absolute;
  border-top: 1px #202020 solid;
  padding: 1em;
  width: 100%;
  bottom: 0;
  left: 0;
}

#notifications_list .info_rel {
  position: absolute;
  right: 5px;
  bottom: 5px;
  z-index: 20;
}
#notifications_list .info_rel img {
  width: 30px;
}
#notifications_list .info_rel.wall {
  bottom: 30px;
}

#notifications_button {
  display: none;
  position: absolute;
  z-index: 99;
  top: 0;
  padding: 10px 25px;
  right: 40px;
  background: url(../images/bg-dark-trans.png) repeat;
}
#notifications_button a {
  color: #999;
}
#notifications_button a span {
  color: cyan;
}

#profileMainSection {
  height: 100%;
  position: relative;
  margin: 3em auto 0 auto;
  *zoom: 1;
  width: 100%;
  padding: 1em;
}
#profileMainSection:before, #profileMainSection:after {
  content: " ";
  display: table;
}
#profileMainSection:after {
  clear: both;
}
@media only screen and (min-width: 68.75em) {
  #profileMainSection {
    padding: 0 21.875em 0 0;
    width: 68em;
    margin: 4em auto 0 auto;
  }
}
#profileMainSection .comingsoon {
  padding: 1em;
  text-transform: uppercase;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  text-align: center;
}
#profileMainSection .profileView {
  display: block;
  padding: 0;
  margin: 0;
  -moz-border-radius: 0.313em;
  -webkit-border-radius: 0.313em;
  border-radius: 0.313em;
  position: relative;
  z-index: 10;
  height: 100%;
  background: #000;
  *zoom: 1;
}
#profileMainSection .profileView:before, #profileMainSection .profileView:after {
  content: " ";
  display: table;
}
#profileMainSection .profileView:after {
  clear: both;
}
@media only screen and (min-width: 68.75em) {
  #profileMainSection .profileView {
    margin: 0 0 0 1.875em;
  }
}
#profileMainSection .profileView .infoProfile {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  background: #1A1A1A;
  padding: 0;
  z-index: 10;
  height: 2.813em;
  *zoom: 1;
}
#profileMainSection .profileView .infoProfile:before, #profileMainSection .profileView .infoProfile:after {
  content: " ";
  display: table;
}
#profileMainSection .profileView .infoProfile:after {
  clear: both;
}
#profileMainSection .profileView .infoProfile h2 {
  font-size: 1em;
  font-weight: 700;
  float: left;
  max-width: 10em;
  margin: 0 0 0 7em;
  position: relative;
  min-width: 10em;
}
@media only screen and (min-width: 37.5em) {
  #profileMainSection .profileView .infoProfile h2 {
    font-size: 1.5em;
    margin: 0 0 0 8em;
  }
}
#profileMainSection .profileView .infoProfile h2.edit_username span.usernameContainer {
  visibility: hidden;
}
#profileMainSection .profileView .infoProfile h2.edit_username input {
  display: block;
}
#profileMainSection .profileView .infoProfile h2.edit_username span.editUsername {
  display: none;
}
#profileMainSection .profileView .infoProfile h2.edit_username span.saveUsername {
  display: block;
}
#profileMainSection .profileView .infoProfile h2 span.editUsername,
#profileMainSection .profileView .infoProfile h2 span.saveUsername {
  position: absolute;
  color: #000;
  padding: 0.3em;
  top: 0;
  right: -1em;
  z-index: 99999;
  background: magenta;
  font-size: 0.5em;
  cursor: pointer;
}
#profileMainSection .profileView .infoProfile h2 span.saveUsername {
  display: none;
  top: 0.6em;
  right: 0;
}
#profileMainSection .profileView .infoProfile h2 input {
  position: absolute;
  top: 0.4em;
  left: 0;
  width: 100%;
  z-index: 9999;
  display: none;
  padding-right: 3em;
}
#profileMainSection .profileView .infoProfile h2 .check_username_info {
  position: absolute;
  top: -2em;
  background: #111;
  padding: 0.5em 1em;
  font-size: 0.5em;
  font-weight: bold;
  display: none;
}
#profileMainSection .profileView .infoProfile h2 .check_username_info.error {
  color: red;
}
#profileMainSection .profileView .infoProfile h2 span.usernameContainer {
  overflow: hidden;
  display: block;
  margin: 0.75em 0 0 0;
}
@media only screen and (min-width: 37.5em) {
  #profileMainSection .profileView .infoProfile h2 span.usernameContainer {
    margin: 0.45em 0 0 0;
  }
}
#profileMainSection .profileView .infoProfile button.message {
  float: right;
  margin: 1em 1em 0 0.125em;
  font-size: 0.75em;
}
#profileMainSection .profileView .infoProfile button.message.unfollow {
  background: red;
  color: #000;
  display: none;
}
#profileMainSection .profileView .infoProfile ul {
  margin-left: 0.75em;
  float: left;
  border-left: 1px solid #000;
  *zoom: 1;
}
#profileMainSection .profileView .infoProfile ul:before, #profileMainSection .profileView .infoProfile ul:after {
  content: " ";
  display: table;
}
#profileMainSection .profileView .infoProfile ul:after {
  clear: both;
}
#profileMainSection .profileView .infoProfile ul li {
  display: block;
  float: left;
  padding: 0.9em 0 0.063em 0;
  border-right: 1px solid #000;
  height: 2.8em;
  width: 2.8em;
  text-align: center;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
  opacity: 0.5;
}
#profileMainSection .profileView .infoProfile ul li.last {
  border-right: 0;
}
#profileMainSection .profileView .infoProfile ul li a span {
  display: block;
  font-size: 1em;
  text-transform: uppercase;
  color: #CCCCCC;
}
#profileMainSection .profileView .header {
  *zoom: 1;
}
#profileMainSection .profileView .header:before, #profileMainSection .profileView .header:after {
  content: " ";
  display: table;
}
#profileMainSection .profileView .header:after {
  clear: both;
}
#profileMainSection .profileView .header .pictureContainer {
  margin: -1.875em 0 0 1.250em;
  display: inline-block;
  -moz-border-radius: 0.125em;
  -webkit-border-radius: 0.125em;
  border-radius: 0.125em;
  z-index: 20;
  position: relative;
}
#profileMainSection .profileView .header .pictureContainer a.updatePictureGif {
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  padding: 0.3em;
  text-align: center;
  background: magenta;
  color: #000;
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  line-height: 1.1em;
  margin-top: 65%;
}
@media only screen and (min-width: 37.5em) {
  #profileMainSection .profileView .header .pictureContainer a.updatePictureGif {
    margin-top: 0;
  }
}
#profileMainSection .profileView .header .pictureContainer img {
  width: 5em;
  background: #000;
  border: 0.4em solid magenta;
}
@media only screen and (min-width: 37.5em) {
  #profileMainSection .profileView .header .pictureContainer img {
    width: 9.375em;
  }
}
#profileMainSection .profileView .header .pictureContainer span {
  display: block;
  text-align: left;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  margin: 1em 0 0 0.65em;
  padding-left: 1.250em;
}
#profileMainSection .profileView .header .descriptionProfile {
  display: inline-block;
  width: 75%;
  color: #fff;
  margin-top: 45px;
}
#profileMainSection .profileView .header .descriptionProfile h2 {
  margin: 20px 0 0 30px;
  font-size: 24px;
  font-weight: 700;
  margin-top: 65px;
}
#profileMainSection .profileView .header .descriptionProfile h2 span {
  display: inline-block;
  font-size: 12px;
  margin: 8px 0px 0 5px;
  color: #333;
}
#profileMainSection .profileView .header .descriptionProfile h2 span i {
  background-color: #333;
  height: 6px;
  -moz-border-radius: 0.188em;
  -webkit-border-radius: 0.188em;
  border-radius: 0.188em;
  width: 6px;
  display: inline-block;
  vertical-align: top;
  margin: 5px 4px 0 0;
}
#profileMainSection .profileView .header .descriptionProfile h2 span b {
  display: inline-block;
}
#profileMainSection .profileView .header .descriptionProfile h2 span.online {
  color: cyan;
}
#profileMainSection .profileView .header .descriptionProfile h2 span.online i {
  background: cyan;
}
#profileMainSection .profileView .header .descriptionProfile .content_bio {
  margin: 20px 0 0 30px;
  position: relative;
}
#profileMainSection .profileView .header .descriptionProfile .content_bio a.readmore {
  position: absolute;
  right: 0;
  bottom: -10px;
}
#profileMainSection .profileView .contentMainProfile {
  position: relative;
  margin: 30px 0 0 0;
  width: 100%;
  overflow: hidden;
  *zoom: 1;
}
#profileMainSection .profileView .contentMainProfile:before, #profileMainSection .profileView .contentMainProfile:after {
  content: " ";
  display: table;
}
#profileMainSection .profileView .contentMainProfile:after {
  clear: both;
}
#profileMainSection .profileView .contentMainProfile .tabLoading {
  position: absolute;
  left: 50%;
  top: 0;
  top: 2.438em;
  width: 9.375em;
  margin-left: -4.688em;
  background: magenta;
  color: #000;
  font-weight: bold;
  text-align: center;
  padding: 0.5em 0;
  z-index: 99;
  text-transform: uppercase;
  display: none;
}
#profileMainSection .profileView .contentMainProfile ul.menu {
  width: 100%;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  *zoom: 1;
}
#profileMainSection .profileView .contentMainProfile ul.menu:before, #profileMainSection .profileView .contentMainProfile ul.menu:after {
  content: " ";
  display: table;
}
#profileMainSection .profileView .contentMainProfile ul.menu:after {
  clear: both;
}
#profileMainSection .profileView .contentMainProfile ul.menu li {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
  opacity: 0.5;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  display: block;
  float: left;
  width: 33.33%;
  text-align: center;
  padding: 0.65em 0;
  cursor: pointer;
  margin: 0;
  overflow: hidden;
  color: white;
  font-size: 0.85em;
  font-weight: bold;
}
#profileMainSection .profileView .contentMainProfile ul.menu li.active, #profileMainSection .profileView .contentMainProfile ul.menu li:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}
#profileMainSection .profileView .contentMainProfile span.progress {
  width: 33.33%;
  position: absolute;
  height: 0.188em;
  content: "";
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  background: magenta;
  top: 2.188em;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
#profileMainSection .profileView .contentMainProfile .contentTab {
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  display: none;
}
#profileMainSection .profileView .contentMainProfile .contentTab.active {
  display: block;
  position: relative;
  top: 0;
  background: #101010;
  padding: 10px 0 20px 0;
}
#profileMainSection .sidebarProfile {
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  -moz-box-shadow: inset 0.313em 0px 0.313em -0.063em rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0.313em 0px 0.313em -0.063em rgba(0, 0, 0, 0.2);
  box-shadow: inset 0.313em 0px 0.313em -0.063em rgba(0, 0, 0, 0.2);
  background: #313131;
  z-index: 20;
}

#feedContent > .wall-post-list {
  width: 620px;
  margin: 40px auto;
  display: block;
}
#feedContent .dub_list li.loadMoreComments:hover {
  color: #fff;
}
#feedContent a.loadMoreWallPosts {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: block;
  font-weight: bold;
  padding: 5px 0;
  text-align: center;
  background: magenta;
  color: #000;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.1s;
  -o-transition-duration: 0.1s;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
#feedContent a.loadMoreWallPosts:hover {
  background: #000;
  color: #fff;
}

#followersEl {
  padding: 0;
  margin: 0;
  width: 100%;
  overflow: hidden;
}
#followersEl .followingContainer {
  width: 200%;
  clear: both;
  position: relative;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
#followersEl span {
  display: block;
  float: left;
  width: 50%;
  text-align: center;
  padding: 1.2em 0 1em 0;
  text-transform: uppercase;
  margin: 0;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
  opacity: 0.4;
  font-weight: 600;
  font-size: 0.75em;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  cursor: pointer;
}
#followersEl span:hover, #followersEl span.active {
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}
#followersEl .avatarList {
  padding: 0;
  width: 50%;
  display: block;
  margin: 0;
  list-style: none;
  float: left;
  *zoom: 1;
}
#followersEl .avatarList:before, #followersEl .avatarList:after {
  content: " ";
  display: table;
}
#followersEl .avatarList:after {
  clear: both;
}
#followersEl .avatarList.avatarFollowing {
  float: right;
}
#followersEl .avatarList li {
  float: left;
  width: 3.5em;
  height: 3.5em;
  overflow: hidden;
}
#followersEl .avatarList li img {
  width: 100%;
}

#profileSidebar {
  z-index: 99;
  overflow-y: scroll;
  width: 100%;
  overflow-x: hidden;
  right: 0;
  top: 0;
  background: #000;
}
@media only screen and (min-width: 68.75em) {
  #profileSidebar {
    position: absolute;
    height: 100%;
    width: 21em;
  }
}

#playlistContent ul {
  width: 100%;
}
#playlistContent ul li {
  position: relative;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.1s;
  -o-transition-duration: 0.1s;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  display: block;
  padding: 27px 5px 7px 5px;
  margin: 0 20px;
  cursor: pointer;
  font-size: 14px;
  border-bottom: 1px dashed #333;
}
#playlistContent ul li:hover {
  background: #101010;
}
#playlistContent ul li span.totalTunes {
  background: magenta;
  color: #000;
  font-weight: bold;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 3px 7px;
  font-size: 12px;
}

#user_popover {
  position: fixed;
  z-index: 9999999;
  background: #111;
  border: 1px solid magenta;
  display: none;
  min-width: 19em;
}
#user_popover .usercontent {
  cursor: pointer;
  *zoom: 1;
  padding: 1em;
}
#user_popover .usercontent:before, #user_popover .usercontent:after {
  content: " ";
  display: table;
}
#user_popover .usercontent:after {
  clear: both;
}
#user_popover .usercontent header {
  float: left;
  margin: 0 0 0 1em;
}
#user_popover .usercontent header h3 {
  margin: 0;
}
#user_popover .usercontent header a {
  color: #666;
  margin: 0.5em 0 0 0;
  display: block;
}
#user_popover .usercontent figure {
  width: 3em;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  overflow: hidden;
  float: left;
}
#user_popover .usercontent figure img {
  width: 100%;
}
#user_popover .actions {
  clear: both;
  *zoom: 1;
  margin: 0.5em 0 0 0;
}
#user_popover .actions:before, #user_popover .actions:after {
  content: " ";
  display: table;
}
#user_popover .actions:after {
  clear: both;
}
#user_popover .actions a {
  float: left;
  width: 15%;
  display: block;
  text-align: center;
  outline: 1px solid #111;
  padding: 0.5em 0;
  font-weight: bold;
  color: #000;
  background: magenta;
}
#user_popover .actions a.unmute, #user_popover .actions a.mute {
  width: 22%;
}
#user_popover .actions a.unsetmod, #user_popover .actions a.setmod {
  width: 33%;
}

#activeRoom a {
  color: #000;
  font-weight: bold;
  background: cyan;
  padding: 10px 15px;
  color: #000;
  display: block;
}
#activeRoom a:hover {
  color: #000;
}

#userNotifications li {
  padding: 10px;
  overflow: hidden;
  display: block;
  border-bottom: 1px #1C1C1C solid;
  position: relative;
}
#userNotifications li .image {
  float: left;
  width: 30px;
  overflow: hidden;
}
#userNotifications li .image img {
  width: 30px;
}
#userNotifications li .yt_img {
  display: none;
}
#userNotifications li .yt_img img {
  width: 50px;
}
#userNotifications li .contentText {
  float: right;
  width: 260px;
  margin: 3px 0 0 0;
}
#userNotifications li .contentText span.timeago {
  position: absolute;
  z-index: 9;
  bottom: 5px;
  right: 10px;
  color: #333;
}

.wall-post-list li {
  position: relative;
  clear: both;
  font-family: "proxima-nova", sans-serif !important;
  font-size: 0.75em !important;
  color: #000;
  margin: 0 0 5px 0;
}
.wall-post-list li:hover {
  background: none !important;
}
.wall-post-list li.replyEl .comment_content {
  padding: 2px 10px 2px 0;
}
.wall-post-list li.replyEl .comment_content .bg_comment {
  margin-top: 2px;
}
.wall-post-list li ul {
  margin: 5px 0 0 70px;
}
.wall-post-list li ul li .comment_content {
  width: 470px;
  background: #C5C5C5;
}
.wall-post-list li ul li .comment_content textarea {
  width: 375px;
}
.wall-post-list li ul li .comment_content .bg_comment {
  background-image: url(../images/bg_comment_darker.png);
}
.wall-post-list li ul li .links {
  right: 5px;
}
.wall-post-list li h2 {
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 5px 10px;
  margin: 5px 0;
  font-weight: 700;
  background: #333;
  margin: 0;
}
.wall-post-list li .links-top-commments {
  bottom: 5px;
  position: absolute;
  right: 5px;
}
.wall-post-list li .links-top-commments a {
  color: #0085ea;
}
.wall-post-list li .reply_a {
  bottom: 5px;
  right: 5px;
  position: absolute;
}
.wall-post-list li .reply_a a {
  color: cyan;
}
.wall-post-list li .timestamp {
  display: inline-block;
  color: #666;
}
.wall-post-list li .image {
  width: 50px;
  height: 50px;
  overflow: hidden;
  display: inline-block;
  margin-right: 20px;
  vertical-align: top;
}
.wall-post-list li .image img {
  width: 50px;
  vertical-align: middle;
  margin: 0;
}
.wall-post-list li .message {
  display: inline-block;
  vertical-align: top;
  max-width: 480px;
  margin-left: 15px;
}
.wall-post-list li .links {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 12px;
}
.wall-post-list li .links a {
  color: #0085ea;
}
.wall-post-list li .comment_content {
  background: #e5e5e5;
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding: 5px;
  width: 540px;
  padding: 30px 10px 30px 0;
}
.wall-post-list li .comment_content a .submit {
  color: white;
  vertical-align: top;
  border: 1px solid #bfbfbf;
  padding: 3px 7px;
  display: inline-block;
  width: auto;
  margin: 0px 0px 0px 10px;
  font-family: "futura-pt", sans-serif;
  font-size: 0.85em;
  background: #808080;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
}
.wall-post-list li .comment_content button {
  float: right;
  margin-top: 2px;
}
.wall-post-list li .comment_content textarea {
  width: 430px;
  height: 20px;
  border: 1px #ccc solid;
  font-family: "proxima-nova", sans-serif !important;
  font-size: 0.75em !important;
}
.wall-post-list li .bg_comment {
  background: url(../images/bg_comment.png) no-repeat;
  width: 26px;
  height: 24px;
  position: absolute;
  margin: -6px 0 0 -15px;
}
.wall-post-list li .dubs {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 24px;
  text-align: right;
  -moz-box-shadow: inset 0 0.125em 0.625em -0.063em rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: inset 0 0.125em 0.625em -0.063em rgba(0, 0, 0, 0.7);
  box-shadow: inset 0 0.125em 0.625em -0.063em rgba(0, 0, 0, 0.7);
  background: #333;
  font-size: 12px;
}
.wall-post-list li .dubs span.dubs_main {
  display: inline-block;
  text-align: center;
  color: #fff;
  padding: 5px;
  font-weight: 700;
  -moz-transition-duration: 0.1s;
  -o-transition-duration: 0.1s;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -moz-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
  min-width: 14px;
}
.wall-post-list li .dubs a {
  color: #fff;
  display: inline-block;
  -moz-transition-duration: 0.1s;
  -o-transition-duration: 0.1s;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -moz-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}
.wall-post-list li .dubs a.updub, .wall-post-list li .dubs a.downdub {
  padding: 5px;
}
.wall-post-list li .dubs a.updub span, .wall-post-list li .dubs a.downdub span {
  display: block;
  text-indent: 9999px;
  position: relative;
  overflow: hidden;
  background: url(../images/player_controls_main.png) -51px 0;
  width: 14px;
  height: 13px;
  -moz-transition-property: all;
  -o-transition-property: all;
  -webkit-transition-property: all;
  transition-property: all;
  -moz-transition-duration: 0.1s;
  -o-transition-duration: 0.1s;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -moz-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  -moz-transition-delay: 0.2s;
  -o-transition-delay: 0.2s;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
.wall-post-list li .dubs a.downdub span {
  background-position: -63px -28px;
  margin: 1px 0 0 0;
}
.wall-post-list li .dubs a.downdub:hover {
  background: magenta;
}
.wall-post-list li .dubs a.downdub:hover span {
  background-position: -63px -14px;
}
.wall-post-list li .dubs a.updub:hover {
  background: cyan;
}
.wall-post-list li .dubs a.updub:hover span {
  background-position: -51px -14px;
}
.wall-post-list li .dubs .right {
  float: right;
}
.wall-post-list li .dubs .left {
  float: left;
  padding: 6px 10px;
}

ul.wall_comments li a.remove {
  color: #999 !important;
  right: 30px;
  color: #0085ea;
}

#create-wall-post {
  width: auto;
  margin: 0 0 15px 55px;
}
#create-wall-post a.submit {
  color: white;
  border: 1px solid #bfbfbf;
  padding: 3px 7px;
  width: auto;
  margin: 0px 0px 10px 10px;
  vertical-align: top;
  display: inline-block;
  font-family: "futura-pt", sans-serif;
  font-size: 0.85em;
  background: #808080;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
}
#create-wall-post textarea {
  padding: 10px;
  margin: 0 0 0 20px;
  width: 380px;
  height: 20px;
  border: 0;
  font-family: "proxima-nova", sans-serif !important;
  font-size: 0.75em !important;
}
#create-wall-post textarea:focus {
  outline: none;
  border: none;
}

#user_thumb {
  float: right;
  border-left: 1px #333 solid;
}
#user_thumb li {
  display: inline-block;
  cursor: pointer;
  padding: 7px 10px;
  border-right: 1px #333 solid;
  vertical-align: middle;
  height: 24px;
}
#user_thumb li:hover {
  background: #333;
}
#user_thumb li div.image {
  width: 24px;
  max-height: 24px;
  margin-right: 8px;
  overflow: hidden;
  vertical-align: middle;
  display: inline-block;
}
#user_thumb li div.image img {
  height: 24px;
}
#user_thumb li p {
  vertical-align: middle;
  display: inline-block;
}
#user_thumb li div.padding {
  padding: 5px 0 0 0;
}
#user_thumb li div.messages {
  background: url(../images/messages_24.png) no-repeat 0 5px;
  height: 18px;
  padding-top: 6px;
  width: 20px;
  position: relative;
}
#user_thumb li div.not_world {
  background: url(../images/icon_notification_white.png) no-repeat center 5px;
  height: 18px;
  padding-top: 6px;
  width: 20px;
  position: relative;
}
#user_thumb li .notifications {
  display: none;
  background: red;
  zoom: 1;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  color: #fff;
  -moz-border-radius: 0.125em;
  -webkit-border-radius: 0.125em;
  border-radius: 0.125em;
  font-size: 10px;
  position: absolute;
  top: 0;
  right: 0;
  margin: -3px -3px 0 0;
}
#user_thumb li div.friends {
  background: url(../images/firends_24.png) no-repeat 0 5px;
  height: 18px;
  padding-top: 6px;
  width: 20px;
  position: relative;
}

#avatar-window-screen {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 888;
  zoom: 1;
  /*background:url('../images/bg_darktrans.png');*/
  top: 0;
  left: 0;
  display: none;
}
#avatar-window-screen .avatar-close {
  background: #000;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  width: 100%;
  height: 100%;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
}

#avatar-window {
  z-index: 888;
  position: fixed;
  width: 680px;
  min-height: 100px;
  max-height: 80%;
  bottom: -100%;
  left: 50%;
  margin: 0 0 0 -310px;
  border: 5px solid #000;
  overflow: hidden;
}
#avatar-window img.avatar-close {
  display: none;
}
#avatar-window a.back {
  border-bottom: 0;
  color: black;
  background: cyan;
  display: inline-block;
  padding: 5px 8px;
}
#avatar-window #create-wall-post {
  margin-left: 0 !important;
  margin-top: 15px;
}
#avatar-window .content-main {
  background: #fff;
}
#avatar-window .mod-menu {
  background: url(../images/074-List-Icon.png) no-repeat;
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  z-index: 99;
  right: 30px;
  top: 10px;
}
#avatar-window .mod-menu ul {
  position: absolute;
  z-index: 99;
  width: 150px;
  left: 0px;
  display: none;
  top: 0px;
  margin: 0px 0 0 -135px;
  background: #000;
  border: 1px solid #333;
  color: #fff;
}
#avatar-window .mod-menu ul li {
  cursor: pointer;
  margin: 0;
  display: block;
  padding: 2px 5px !important;
}
#avatar-window .mod-menu ul li input {
  display: inline-block;
  width: 25px;
  padding: 0;
  border: 0px;
}
#avatar-window .mod-menu ul li:hover {
  background: #FFFF00;
  color: #333;
}
#avatar-window .mod-menu ul li.div {
  border-top: 1px solid #333;
}
#avatar-window .mod-menu ul li.div:hover {
  background: none;
}
#avatar-window .user_info {
  display: inline-block;
  vertical-align: top;
  font-family: "proxima-nova", sans-serif;
  color: #fff;
  background: #000;
  font-size: 0.85em;
  width: 100%;
  border-bottom: 1px #303030 solid;
}
#avatar-window .user_info h3 {
  font-family: "proxima-nova", sans-serif;
  font-size: 22px;
  color: black;
  cursor: pointer;
  color: #fff;
  margin: 10px 0 5px 0;
  display: inline-block;
  width: 310px;
  overflow: hidden;
}
#avatar-window .user_info h3 a {
  font-size: 14px;
  color: #1f79a7;
  vertical-align: baseline;
}
#avatar-window .user_info textarea {
  padding: 2px !important;
  background: none !important;
  margin: 0 0 15px 0 !important;
  float: left;
  height: 20px;
  border: 1px solid #ccc !important;
}
#avatar-window .user_info button.submit {
  margin-left: 15px;
}
#avatar-window .user_info ul li {
  display: inline-block;
  cursor: pointer;
  width: 19px;
  height: 19px;
  color: black;
  font-family: "futura-pt", sans-serif;
  font-size: 22px;
}
#avatar-window .user_info ul li span {
  display: block;
  font-size: 12px;
}
#avatar-window .user_info ul li.follow {
  background: url(../images/follow_icon.png) no-repeat;
  cursor: pointer;
}
#avatar-window .user_info ul li.follow:hover {
  background-image: url(../images/icon_addfriend_hover.png);
}
#avatar-window .user_info ul li.message {
  background: url(../images/message_icon.png) no-repeat;
  cursor: pointer;
}
#avatar-window .user_info ul li.message:hover {
  background-image: url(../images/icon_message_hover.png);
}
#avatar-window .user_info ul li.unfollow {
  background: url(../images/icon_removefriend.png) no-repeat;
  cursor: pointer;
}
#avatar-window .user_info ul li.unfollow:hover {
  background-image: url(../images/icon_removefriend_hover.png);
}
#avatar-window .user_info ul.details {
  display: inline-block;
}
#avatar-window .user_info ul.right li {
  background: none;
  padding: 8px 10px 3px 10px;
  color: #000;
  font-size: 24px;
  height: 60px;
  line-height: 20px;
  width: auto;
  border-left: 1px #303030 solid;
  background: cyan;
}
#avatar-window .user_info ul.right li span {
  font-size: 10px;
  margin-left: 10px;
  display: inline-block;
}
#avatar-window .user_info ul.right li.followerWall {
  background: magenta;
}
#avatar-window .user_info ul#follows li {
  cursor: pointer;
}
#avatar-window .user_info ul#follows h2 {
  display: inline-block;
  color: black;
  font-size: 14px;
  width: 300px;
}
#avatar-window .user_info ul#follows a.following {
  color: black;
  background: #ccc;
  display: inline-block;
  padding: 5px 8px;
}
#avatar-window .user_info ul#follows a.not {
  background: cyan;
}
#avatar-window .image {
  height: 90px;
  padding: 0 20px 0 0;
  background: #000;
  margin: 0;
  display: inline-block;
  width: 80px;
  overflow: hidden;
  vertical-align: top;
  float: left;
}
#avatar-window .messages {
  margin: 20px 30px;
  min-height: 0 !important;
}
#avatar-window .messages .image {
  display: inline-block;
  width: 80px;
  overflow: hidden;
  margin: 0 20px 0 0;
  vertical-align: top;
  padding: 0;
  float: none;
  background: none;
}
#avatar-window .messages a.write_comment {
  color: #999;
  display: block;
  width: 300px;
  border: 1px solid #c7c7c7;
  padding: 5px;
  margin: 5px 0 5px 60px;
}
#avatar-window .messages li {
  position: relative;
  padding: 2px 0;
  font-family: "futura-pt", sans-serif;
  font-size: 0.85em;
}
#avatar-window .messages li .image {
  width: 50px;
  height: 50px;
  overflow: hidden;
  display: inline-block;
  margin-right: 20px;
  vertical-align: top;
}
#avatar-window .messages li .image img {
  width: 50px;
  vertical-align: middle;
  margin: 0 0 0 0;
}
#avatar-window .messages li.playlist_icon {
  width: 165px;
  cursor: pointer;
  display: inline-block;
  color: #999;
  padding: 10px;
  border: 1px solid #BFBFBF;
  margin: 5px;
}
#avatar-window .messages li.playlist_icon h2 {
  margin: 0;
  display: block;
  font-weight: bold;
  font-size: 16px;
  color: #333;
}
#avatar-window p.message {
  color: black;
  margin: 10px 0 0 0;
}
#avatar-window .mCSB_dragger_bar {
  background-color: #333;
}

.links a,
.links-top-commments a {
  color: #999;
}

#popup_profile {
  width: 300px;
  background: #fff;
  padding: 15px;
}
#popup_profile legend {
  text-align: left;
  display: block;
  color: #f24437;
}
#popup_profile .div {
  text-align: center;
  width: 100%;
}
#popup_profile a.red {
  -moz-box-shadow: inset 0px 1px 0px 0px #f5978e;
  -webkit-box-shadow: inset 0px 1px 0px 0px #f5978e;
  box-shadow: inset 0px 1px 0px 0px #f5978e;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f24537), color-stop(1, #c62d1f));
  background: -moz-linear-gradient(center top, #f24537 5%, #c62d1f 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f24537', endColorstr='#c62d1f');
  background-color: #f24537;
  border: 1px solid #d02718;
  display: inline-block;
  color: #ffffff;
  font-family: "proxima-nova", sans-serif;
  font-size: 0.75em;
  font-weight: bold;
  padding: 6px 9px;
  text-decoration: none;
  text-shadow: 1px 1px 0px #810e05;
}
#popup_profile a.red:active {
  position: relative;
  top: 1px;
}
#popup_profile a.red:hover {
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #c62d1f), color-stop(1, #f24537));
  background: -moz-linear-gradient(center top, #c62d1f 5%, #f24537 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#c62d1f', endColorstr='#f24537');
  background-color: #c62d1f;
}
#popup_profile .buttons {
  clear: both;
  padding: 10px 0;
}
#popup_profile .image {
  float: left;
  margin: 0 10px 0 0;
}
#popup_profile fieldset {
  border: 1px solid #f24437;
  display: block;
  padding: 5px;
}
#popup_profile h2 {
  text-shadow: 1px 1px 0px #ffffff;
  font-weight: bold;
  font-size: 16px;
  color: #777777;
}

#user_info .follow_count {
  display: inline-block;
  text-align: center;
  width: 118px;
  border: 1px #ccc solid;
  border-bottom: 0px;
  font-size: 0.85em;
  font-family: "futura-pt", sans-serif;
}
#user_info .follow_count li {
  cursor: pointer;
  display: block;
  border-bottom: 1px #ccc solid;
  overflow: hidden;
  vertical-align: top;
  padding: 15px 0;
}
#user_info .follow_count li span {
  font-size: 14px;
}
#user_info .profile_actions {
  margin: 0 0 15px 0;
  display: inline-block;
  text-align: center;
  width: 120px;
}
#user_info .profile_actions li {
  font-size: 0.85em;
  font-family: "futura-pt", sans-serif;
  text-align: left;
  cursor: pointer;
  padding: 10px 0 10px 30px;
  background: url(../images/profile_follow.png) no-repeat 0 center;
}
#user_info .profile_actions li.message {
  background-image: url(../images/profile_message.png);
}
#user_info h2#username {
  font-size: 18px;
  font-family: "futura-pt", sans-serif;
}
#user_info ul.links {
  margin: 20px 0 0 0;
}
#user_info ul.links li a {
  color: #fff;
  font-family: "futura-pt", sans-serif;
  font-size: 0.85em;
  margin: 5px 0;
}

/* End User Styling */mages/profile_follow.png) no-repeat 0 center;
}
#user_info .profile_actions li.message {
  background-image: url(../images/profile_message.png);
}
#user_info h2#username {
  font-size: 18px;
  font-family: "futura-pt", sans-serif;
}
#user_info ul.links {
  margin: 20px 0 0 0;
}
#user_info ul.links li a {
  color: #fff;
  font-family: "futura-pt", sans-serif;
  font-size: 0.85em;
  margin: 5px 0;
}

/* End User Styling */
