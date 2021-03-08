/**
 * Extract image dimensions from the filename in the format
 * image_name_600x750_0.png
 */

 (function () {
  function fixDimensions(pic) {
    const sources = pic.querySelectorAll("source");
    const img = pic.getElementsByTagName("img")[0];
    const regex = /.+_([0-9]+)x([0-9]+)_.+/;
    if (img.className.split(" ").includes("no-dimensions")) {
      return;
    }

    for (let source of sources) {
      let mq = source.getAttribute("media");
      if (window.matchMedia(mq).matches || mq === null) {
        let w = source.getAttribute("width");
        let h = source.getAttribute("height");
        if (w && h) {
          return;
        }
        let url = source.getAttribute("srcset");
        url = url.split(",")[0].replace(/^\s+/, "");
        url = url.split(" ")[0];
        let matches = regex.exec(url);
        if (regex.test(url)) {
          w = matches[1];
          h = matches[2];
          source.setAttribute("width", w);
          source.setAttribute("height", h);
        }
        break;
      }
    }
  }
  function init() {
    var pictures = document.querySelectorAll("picture");
    for (let pic of pictures) {
      fixDimensions(pic);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
