//<![CDATA[
// var contentContainer = document.querySelectorAll(".post-body")[0].id = "toc-container";
var contentContainer = document.querySelectorAll(".post-body")[0];
const dataTracking = contentContainer.setAttribute("data-tracking-container", "true");
var headings = contentContainer.querySelectorAll("h1,h2,h3");
var showtoc = contentContainer.querySelectorAll(".post-body h1,.post-body h2,.post-body h3");
if (headings.length > 3) {
for (i = 0; i <= showtoc.length - 1; i++) {
var tocauto = showtoc[i];
tocauto.insertAdjacentHTML('beforebegin','<div class="toc-auto"><input id="toc-sh" type="checkbox"><label class="toc-title" for="toc-sh">Daftar Isi</label><div class="toc" id="toc"></div></div>');
tocatr = document.querySelectorAll(".toc-auto")[0];
tocatr.setAttribute('data-tracking-container', 'true');
var toptoc = document.querySelectorAll(".toc-auto");
[].filter.call(toptoc, function(tocselection) {
return ![].some.call(tocselection.attributes, function(attr) {
return /^data-tracking-container/i.test(attr.name);
});
}).forEach(function(tocselection) {
tocselection.parentNode.removeChild(tocselection);
});};}
class TableOfContents {
constructor({ from, to }) {
this.fromElement = from;
this.toElement = to;
// Get all the ordered headings.
this.headingElements = this.fromElement.querySelectorAll("h1, h2, h3");
this.tocElement = document.createElement("div");
}
getMostImportantHeadingLevel() {
let mostImportantHeadingLevel = 6;
for (let i = 0; i < this.headingElements.length; i++) {let headingLevel = TableOfContents.getHeadingLevel(this.headingElements[i]);
mostImportantHeadingLevel = (headingLevel < mostImportantHeadingLevel) ?
headingLevel : mostImportantHeadingLevel;
}
return mostImportantHeadingLevel;
}
static generateId(headingElement) {
return headingElement.textContent.toLowerCase().replace(/ /g,"_").replace(/\//g,"_").replace(/&lt;/g,"").replace(/&gt;/g,"").replace(/&amp;/g,"").replace(/&amp;nbsp;/g,"").replace(/&nbsp;/g,"").replace(/\xA0/g,"").replace(/[\n\r\f]+/g, "").replace(/[.,\#!$%\^&\*;:{}=\-@`~()<>?"'“+”]/g,"");
}
static getHeadingLevel(headingElement) {
switch (headingElement.tagName.toLowerCase()) {
case "h1": return 1;
case "h2": return 2;
case "h3": return 3;
default: return 1;
}
}
generateToc() {
let currentLevel = this.getMostImportantHeadingLevel() - 1,
currentElement = this.tocElement;
for (let i = 0; i < this.headingElements.length; i++) {
let headingElement = this.headingElements[i],
headingLevel = TableOfContents.getHeadingLevel(headingElement),
headingLevelDifference = headingLevel - currentLevel,
linkElement = document.createElement("a");
if (!headingElement.id) {
headingElement.id = TableOfContents.generateId(headingElement);
}
linkElement.href = `#${headingElement.id}`;
linkElement.textContent = headingElement.textContent;
if (headingLevelDifference > 0) {
for (let j = 0; j < headingLevelDifference; j++) {
let listElement = document.createElement("ul"),
listItemElement = document.createElement("li");
listElement.appendChild(listItemElement);
currentElement.appendChild(listElement);
currentElement = listItemElement;
}
currentElement.appendChild(linkElement);
} else {
for (let j = 0; j < -headingLevelDifference; j++) {
currentElement = currentElement.parentNode.parentNode;
}
let listItemElement = document.createElement("li");
listItemElement.appendChild(linkElement);
currentElement.parentNode.appendChild(listItemElement);
currentElement = listItemElement;
}
currentLevel = headingLevel;
}
this.toElement.appendChild(this.tocElement.firstChild);
}
}
document.addEventListener("DOMContentLoaded", () =>
new TableOfContents({
from: document.querySelector(".post-body"),
to: document.querySelector(".toc")
}).generateToc()
);
//]]>