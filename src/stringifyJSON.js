// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var results;

  if (Array.isArray(obj)) {
    results = obj.reduce(function(res, elt) {
      return res.concat(stringifyJSON(elt));
    }, []);

    return "[" + results.join(',') + "]";
  }
  else if (obj === null) {
    return "null";
  }
  else if (typeof obj === 'object') {
    results = "{";

    // Object.keys(obj).reduce(function(res, key, i) {
    //   obj[key]
    // })

    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      results = results.concat('"' + key + '"', ":", stringifyJSON(obj[key]), ",");
    }

    if (results !== '{') {
      results = results.substring(0, results.length - 1);
    }

    return results + "}";
  }
  else if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  else {
    return String(obj);
  }
};
