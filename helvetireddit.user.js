// ==UserScript==
// @name        helvetireddit
// @namespace   cohitre.com
// @description Helvetireader inspired style for Reddit.
// @include     https://*.reddit.com*
// @include     https://reddit.com*
// @include     http://*.reddit.com*
// @include     http://reddit.com*
// @author      helvetireddit by cohitre. Inspired by Helvetireader by Jon Hicks (http://www.hicksdesign.co.uk).
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
