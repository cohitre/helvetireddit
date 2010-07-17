// ==UserScript==
// @name        Helvetireddit
// @description Helvetireader style for Reddit that also removes a lot of features so you probably won't like it!
// @include     http://*.reddit.com/*
// @include     http://reddit.com/*
// @author      Helvetireddit by Jon Hicks (http://www.hicksdesign.co.uk) with favicon override by MkFly
// ==/UserScript==

/*
var favvy = document.createElement('link');
favvy.setAttribute('type', 'image/x-icon');
favvy.setAttribute('rel', 'shortcut icon');
favvy.setAttribute('href', 'http://localhost:8000/favicon.png');
var head = document.getElementsByTagName('head')[0];
head.appendChild(favvy);
*/

var cssNode = document.createElement('link');
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = 'http://localhost:8000/css/helvetireddit.1.css';
cssNode.media = 'screen';
cssNode.title = 'dynamicLoadedSheet';
document.getElementsByTagName("head")[0].appendChild(cssNode);
