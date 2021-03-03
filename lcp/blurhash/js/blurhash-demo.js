/***
 * Blurhash image replacement demo
 **/

// Prevent lazy load images from loading immediately
window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.init = false;

function blurImage(img) {

  let timer = +new Date();
  const hash = img.dataset.blurhash;
  const w = img.getAttribute("width");
  const h = img.getAttribute("height");
  const aspect_ratio = h / w;
  img.src = BlurHash.toDataURL(hash, 64, Math.round(64 * aspect_ratio));
  console.log("Added hash to ", img, "in", (+new Date())-timer, "ms");
}

function blurPicture(pic) {
  const sources = pic.querySelectorAll("source[data-blurhash]");
  const img = pic.getElementsByTagName("img")[0];

  for (let source of sources) {
    let mq = source.getAttribute("media");
    if (window.matchMedia(mq).matches || mq === null) {
      let w = source.getAttribute("width");
      let h = source.getAttribute("height");
      let bh = source.dataset.blurhash;
      img.width = w;
      img.height = h;
      img.src = BlurHash.toDataURL(bh, 32, 32);

      // document.getElementById("img1-src").innerHTML = source.getAttribute("data-device");
      // document.getElementById("img1-mq").innerHTML = mq || "null (match everything)";
      // document.getElementById("img1-w").innerHTML = w;
      // document.getElementById("img1-h").innerHTML = h;
      // document.write("<link preload");
      break;
    }
  }
}

function init() {
  var images = document.querySelectorAll("img[data-blurhash]");
  for (let img of images) {
    blurImage(img);
  }

  var pictures = document.querySelectorAll("picture");
  for (let pic of pictures) {
    blurPicture(pic);
  }

  // const pic = document.getElementById("img1-pic");
  // const sources = pic.getElementsByTagName("source");
  // const img = document.getElementById("img1-img");

  // for (let i = 0; i < sources.length; i++) {
  //   let mq = sources[i].getAttribute("media");
  //   if (window.matchMedia(mq).matches || mq === null) {
  //     let w = sources[i].getAttribute("width");
  //     let h = sources[i].getAttribute("height");
  //     let bh = sources[i].dataset.blurhash;
  //     img.width = w;
  //     img.height = h;
  //     img.src = BlurHash.toDataURL(bh, 32, 32);

  //     document.getElementById("img1-src").innerHTML = sources[i].getAttribute("data-device");
  //     document.getElementById("img1-mq").innerHTML = mq || "null (match everything)";
  //     document.getElementById("img1-w").innerHTML = w;
  //     document.getElementById("img1-h").innerHTML = h;
  //     document.write("<link preload");
  //     break;
  //   }
  // }

  setTimeout(() => {
    window.lazySizes.init();
  }, 2000);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
}
else {
  init();
}
