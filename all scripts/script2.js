"use strict";

const dynamicIsland = document.getElementById("d_island");

dynamicIsland.onclick = () => {
    dynamicIsland.classList.toggle('active');
}

function myFunction2() {
    var x = document.getElementById("cursor1");
  if (x.style.opacity === "0") {
    x.style.opacity = "1";
    x.style.cursor = "none";
    document.getElementById("cursor0").style.cursor = "none";
  } else {
    x.style.opacity = "1";
    x.style.cursor = "none";
    document.getElementById("cursor0").style.cursor = "none";
  }
}

function myFunction1() {
    var x = document.getElementById("cursor0");
  if (x.style.cursor === "none") {
    x.style.cursor = "auto";
    document.getElementById("cursor1").style.opacity = "0";
  } else {
    x.style.cursor = "auto";
    document.getElementById("cursor1").style.opacity = "0";
  }
}

