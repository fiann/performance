"use strict";

function getImageName(imgId) {
  let url = document.getElementById(imgId).currentSrc;
  let parts = url.split("/");
  return parts[parts.length - 1];
}

function getImageWeight(imgId) {
  let url = document.getElementById(imgId).currentSrc;
  let timing = window.performance.getEntriesByName(url)[0];
  if (! timing) {
    return "(error)";
  }
  else {
    let kb = Math.round(timing.encodedBodySize / 1024);
    return `${kb} KB`;
  }
}

function renderSpec() {
  document.getElementById("spec-dpr").innerHTML = `@${window.devicePixelRatio} resolution`;
  document.getElementById("spec-dpr2").innerHTML = `@${window.devicePixelRatio} resolution`;
  document.getElementById("spec-vw").innerHTML = `${document.body.scrollWidth} px`;
  document.getElementById("spec-phys").innerHTML = `${document.body.scrollWidth * window.devicePixelRatio} pixels`;
  // fixed size images
  document.getElementById("fix-3-src").innerHTML = getImageName("fix-3-img");
  document.getElementById("fix-3-kb").innerHTML = getImageWeight("fix-3-img");
  document.getElementById("fix-2-src").innerHTML = getImageName("fix-2-img");
  document.getElementById("fix-2-kb").innerHTML = getImageWeight("fix-2-img");
  document.getElementById("fix-1-src").innerHTML = getImageName("fix-1-img");
  document.getElementById("fix-1-kb").innerHTML = getImageWeight("fix-1-img");
  // full width banners
  document.getElementById("fw-5-src").innerHTML = getImageName("fw-5-img");
  document.getElementById("fw-5-kb").innerHTML = getImageWeight("fw-5-img");
  document.getElementById("fw-4-src").innerHTML = getImageName("fw-4-img");
  document.getElementById("fw-4-kb").innerHTML = getImageWeight("fw-4-img");
  document.getElementById("fw-3-src").innerHTML = getImageName("fw-3-img");
  document.getElementById("fw-3-kb").innerHTML = getImageWeight("fw-3-img");
  document.getElementById("fw-2-src").innerHTML = getImageName("fw-2-img");
  document.getElementById("fw-2-kb").innerHTML = getImageWeight("fw-2-img");
  document.getElementById("fw-1-src").innerHTML = getImageName("fw-1-img");
  document.getElementById("fw-1-kb").innerHTML = getImageWeight("fw-1-img");
  // art direction images
  document.getElementById("ad-1-src").innerHTML = getImageName("ad-1-img");
  document.getElementById("ad-1-kb").innerHTML = getImageWeight("ad-1-img");
  document.getElementById("ad-2-src").innerHTML = getImageName("ad-2-img");
  document.getElementById("ad-2-kb").innerHTML = getImageWeight("ad-2-img");
}

window.addEventListener("scroll", renderSpec, { passive: true });
window.addEventListener("resize", renderSpec);
window.addEventListener("load", renderSpec);

