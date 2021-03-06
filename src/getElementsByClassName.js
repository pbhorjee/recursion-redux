// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node, results) {
  var node = node || document.body;
  var results = results || [];

  if (node.classList && node.classList.length && node.classList.contains(className)) {
    results.push(node);
  }

  for (var i=0; i<node.childNodes.length; i++) {
    getElementsByClassName(className, node.childNodes[i], results)
  }

  return results;
};
