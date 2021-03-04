/**
 * Demo features for the picture-tag.html page
 */

const pic = document.getElementById("img2");
const sources = pic.getElementsByTagName("source");

for (let i = 0; i < sources.length; i++) {
  let mq = sources[i].getAttribute("media");
  if (window.matchMedia(mq).matches || mq === null) {
    let w = sources[i].getAttribute("width");
    let h = sources[i].getAttribute("height");
    document.getElementById("img2-device").innerHTML = sources[i].getAttribute("data-device");
    document.getElementById("img2-mq").innerHTML = mq || "null (match everything)";
    document.getElementById("img2-w").innerHTML = w;
    document.getElementById("img2-h").innerHTML = h;
    break;
  }
}
