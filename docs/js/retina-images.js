"use strict";

function getImageName(imgId) {
  let url = document.getElementById(imgId).currentSrc;
  let parts = url.split("/");
  return parts[parts.length - 1];
}

function renderSpec() {
  document.getElementById("spec-dpr").innerHTML = `@${window.devicePixelRatio} resolution`;
  document.getElementById("spec-vw").innerHTML = `${document.body.scrollWidth} px`;
  document.getElementById("fix-3-src").innerHTML = getImageName("fix-3-img");
  document.getElementById("fix-2-src").innerHTML = getImageName("fix-2-img");
  document.getElementById("fix-1-src").innerHTML = getImageName("fix-1-img");
  document.getElementById("fw-5-src").innerHTML = getImageName("fw-5-img");
  document.getElementById("fw-4-src").innerHTML = getImageName("fw-4-img");
  document.getElementById("fw-3-src").innerHTML = getImageName("fw-3-img");
  document.getElementById("fw-2-src").innerHTML = getImageName("fw-2-img");
  document.getElementById("fw-1-src").innerHTML = getImageName("fw-1-img");
}

window.addEventListener("scroll", renderSpec, { passive: true });
window.addEventListener("resize", renderSpec);
window.addEventListener("load", renderSpec);

