// const element = document.querySelector('.note');

// window.addEventListener('scroll', function() {
//   const scrollY = window.scrollY;
//   element.style.backgroundPositionY = `${scrollY}px`;
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const element = document.querySelector('.note');
//   const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

//   window.addEventListener('scroll', function() {
//     const scrollY = window.scrollY;
//     const translateY = scrollY / scrollHeight * 100;
//     element.style.transform = `translateY(${translateY}%)`;
//   });
// });



  "use strict";

const dynamicIsland = document.getElementById("d_island");
const dynamicToggle = document.getElementById("dot1");

dynamicIsland.onclick = () => {
    dynamicIsland.classList.toggle('active');
    dynamicToggle.classList.toggle('active1');
}

function myFunction1() {
    var x = document.getElementById("cursor1");
  if (x.style.opacity === "1") {
    x.style.cursor = "crosshair";
    document.getElementById("cursor1").style.opacity = "0";
    document.getElementById("cursor2").style.cursor = "crosshair";
    document.getElementById("controls").style.cursor = "normal";
    document.getElementById("cursor3").style.cursor = "auto";
  } else {
    x.style.cursor = "crosshair";
    document.getElementById("cursor1").style.opacity = "0";
    document.getElementById("cursor2").style.cursor = "crosshair";
    document.getElementById("controls").style.cursor = "normal";
    document.getElementById("cursor3").style.cursor = "auto";
  }
}

function myFunction2() {
    var x = document.getElementById("cursor1");
  if (x.style.opacity === "0") {
    x.style.opacity = "1";
    x.style.cursor = "none";
    document.getElementById("cursor1").style.cursor = "none";
    document.getElementById("cursor2").style.cursor = "none";
    document.getElementById("cursor3").style.cursor = "none";
  } else {
    x.style.opacity = "1";
    x.style.cursor = "none";
    document.getElementById("cursor1").style.cursor = "none";
    document.getElementById("cursor2").style.cursor = "none";
    document.getElementById("cursor3").style.cursor = "none";
  }
}

function bigImg(x) {
  document.getElementById("dot1").style.transform = "translateX(-30px)";
    document.getElementById("dot1").style.boxShadow = "0px 0px 0px black";
  document.getElementById("dot1").style.transition = "1s";
}

function normalImg(x) {
    document.getElementById("dot1").style.transform = "translateX(0px)";
  document.getElementById("dot1").style.boxShadow = "0px 0px 10px black";
    document.getElementById("dot1").style.transition = "0.8s";
}

function bigImg2(x) {
  document.getElementById("dot2").style.transition = "0.25s";
  document.getElementById("dot2").style.opacity = "0.5";
}

function normalImg2(x) {
    document.getElementById("dot2").style.transition = "0.25s";
    document.getElementById("dot2").style.opacity = "1";
}

function bigImg3(x) {
  if (document.getElementById("cursor1").style.opacity === "1") {
    x.style.cursor = "none";
    document.getElementById("cursor1").style.opacity = "1";
    document.getElementById("cursor2").style.cursor = "none";
    document.getElementById("slides").style.cursor = "none";
    document.getElementById("cursor3").style.cursor = "none";
    console.log("1");
  } else {
    x.style.cursor = "crosshair";
    document.getElementById("cursor1").style.opacity = "0";
    document.getElementById("cursor2").style.cursor = "crosshair";
    document.getElementById("slides").style.cursor = "crosshair";
    document.getElementById("controls").style.cursor = "normal";
    document.getElementById("cursor5").style.cursor = "normal";
    document.getElementById("cursor3").style.cursor = "auto";
    console.log("2");
  }
}

function normalImg3(x) {
  if (document.getElementById("cursor1").style.opacity === "1") {
    x.style.cursor = "none";
    document.getElementById("cursor1").style.opacity = "1";
    document.getElementById("cursor2").style.cursor = "none";
    document.getElementById("slides").style.cursor = "none";
    document.getElementById("cursor3").style.cursor = "none";
    console.log("3");
  } else {
    x.style.cursor = "crosshair";
    document.getElementById("cursor1").style.opacity = "0";
    document.getElementById("cursor2").style.cursor = "crosshair";
    document.getElementById("slides").style.cursor = "crosshair";
    document.getElementById("controls").style.cursor = "normal";
    document.getElementById("cursor5").style.cursor = "normal";
    document.getElementById("cursor3").style.cursor = "auto";
    console.log("4");
  }
}



function bigImg4(x) {
    if (document.getElementById("cursor1").style.opacity === "1") {
    x.style.cursor = "none";
    document.getElementById("cursor1").style.opacity = "1";
    document.getElementById("cursor2").style.cursor = "none";
    document.getElementById("slides").style.cursor = "none";
    document.getElementById("cursor3").style.cursor = "none";
    console.log("5");
  } else {
    x.style.cursor = "auto";
    document.getElementById("cursor1").style.opacity = "0";
    document.getElementById("cursor2").style.cursor = "normal";
    document.getElementById("slides").style.cursor = "normal";
    document.getElementById("controls").style.cursor = "normal";
    document.getElementById("cursor5").style.cursor = "normal";
    document.getElementById("cursor3").style.cursor = "normal";
    console.log("6");
  }

}

function normalImg4(x) {
    if (document.getElementById("cursor1").style.opacity === "1") {
    x.style.cursor = "none";
    document.getElementById("cursor1").style.opacity = "1";
    document.getElementById("cursor2").style.cursor = "none";
    document.getElementById("slides").style.cursor = "none";
    document.getElementById("cursor3").style.cursor = "none";
    console.log("7");
  } else {
    x.style.cursor = "auto";
    document.getElementById("cursor1").style.opacity = "0";
    document.getElementById("cursor2").style.cursor = "normal";
    document.getElementById("slides").style.cursor = "normal";
    document.getElementById("controls").style.cursor = "normal";
    document.getElementById("cursor5").style.cursor = "normal";
    document.getElementById("cursor3").style.cursor = "normal";
    console.log("8");
  }
}
function myFunction3() {
    var x = document.getElementById("m1");
    var lElements = x.getElementsByTagName("div");
    var animationDuration = "2.5s";
    if (x.classList.contains("show")) {
        document.getElementById("m1").style.transition = "3s";
        document.getElementById("m1").style.transform = "translateX(-100vh)";
        document.getElementById("dot2").style.animation = "flicker0 0s infinite alternate";
        for (var i = 0; i < lElements.length; i++) {
            lElements[i].style.transition = animationDuration;
            lElements[i].style.marginRight = "-100px";
            lElements[i].style.opacity = "0";
        }
    } else {
        document.getElementById("m1").style.transition = "2s";
        document.getElementById("m1").style.transform = "translateX(0vh)";
        document.getElementById("dot2").style.animation = "flicker 8s infinite alternate";
        for (var i = 0; i < lElements.length; i++) {
            lElements[i].style.transition = animationDuration;
            lElements[i].style.marginRight = (20 + 100 * i) + "px";
            lElements[i].style.opacity = "1";
        }
    }
    x.classList.toggle("show");
}

function myFunction4() {
    var x = document.getElementById("dot2");
  if (dynamicIsland.classList.toggle('active')) {
    document.getElementById("dot1").style.opacity = "0";
  } else {
    document.getElementById("dot1").style.opacity = "1";
  }
}







