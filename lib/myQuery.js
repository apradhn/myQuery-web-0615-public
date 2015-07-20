

function Library(elString){
  var selectedEl = this.getElement(elString);
  // we use [0] because we want the selected items to be somewhat 
  // difficult to access so that users of our library do not use it against our intentions
  // 0 has no special meaning; it is just a property
  // we could have used anything like selectEl or selectedElephant
  this[0] = selectedEl;
}

/* where your prototypical methods go... */

Library.prototype.getElement = function(string) {
  var collection = [];
  var className = string.slice(1);
  var id = string.slice(1);

  collection = document.getElementsByTagName(string);

  if (!collection.length) collection = document.getElementsByClassName(className);

  if (!collection.length) collection = document.getElementById(id);

  return collection;
};


Library.prototype.css = function(property, value) {
  var collection = this[0];
  var node;

  for (var i = 0; i < collection.length; i++) {
    node = collection[i];
    node.style[property] = value;
  };

}

Library.prototype.remove = function() {
 var collection = this[0];
 var node;
 var parentNode;

 while (collection.length) {
   for (var i = 0; i < collection.length; i++) {
     node = collection[i];
     node.remove();
   };  
 }
}

Library.prototype.append = function(html) {
  var collection = this[0];
  var element;

  for (var i = 0; i < collection.length; i++) {
    element = collection[i]

    element.lastChild.outerHTML = html;
  };

  return collection;

}

var myQuery = function(elString) {
  return new Library(elString);
}

function keep(array, fn) {
  var keeps = [];
  var obj;
  var tag;


  return keeps;

}