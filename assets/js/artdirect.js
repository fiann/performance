/**
 * Polyfill for replacing img height and width from picture sources
 */

(function () {
  function fixPicture(pic) {
    const sources = pic.querySelectorAll("source");
    const img = pic.getElementsByTagName("img")[0];
    if (img.className.split(" ").includes("no-artdirect")) {
      return;
    }

    for (let source of sources) {
      let mq = source.getAttribute("media");
      if (window.matchMedia(mq).matches || mq === null) {
        let w = source.getAttribute("width");
        let h = source.getAttribute("height");
        if (w && h) {
          img.width = w;
          img.height = h;
        }
        break;
      }
    }
  }
  function init() {
    var pictures = document.querySelectorAll("picture");
    for (let pic of pictures) {
      fixPicture(pic);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
