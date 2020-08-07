loader = function (source, sourcemap) {

  if (source.indexOf("old-content") >= 0) {
    console.log("old-content found in: " + this.resourcePath);
  }


  var newSource = source.replace("old-content", "new-content");


  if (newSource.indexOf("new-content") >= 0) {
    console.log("new-content replaced in: " + this.resourcePath);
  }

  if (this.callback) {
    this.callback(null, newSource, sourcemap);
  } else {
    return newSource;
  }
};

module.exports = loader;
