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

var cssNode = document.createElement('link');
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = 'http://assets.cohitre.com/helvetireddit/css/helvetireddit.1.css';
cssNode.media = 'screen';
cssNode.title = 'dynamicLoadedSheet';
document.getElementsByTagName("head")[0].appendChild(cssNode);
