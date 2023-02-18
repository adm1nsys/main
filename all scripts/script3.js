  $(document).ready(function() {
  
  setTimeout(function(){
    $('body').addClass('loaded');
    $('h1').css('color','#222222');
    document.getElementById("body1").style.cursor = "auto";
    document.getElementById("2pg").style.display = "flex";

// playVideo() {
//     const media = this.videoplayer.nativeElement;
//     media.muted = true; // without this line it's not working although I have "muted" in HTML
//     media.play();
// };


    var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "LoadSound.mp3"
    audio.play()



// audioElement.play();


// var x = document.getElementById("myAudio").autoplay;


    // var x = document.getElementById("myAudio").autoplay;
  // document.getElementById("demo").innerHTML = x;

// var source = "LoadSound.mp3"
// var audio = document.createElement("audio");
// audio.load()
// audio.addEventListener("load", function() {
//   audio.play();
// }, true);
// audio.src = source;

 //     var source = "LoadSound.mp3"
 // var audio = document.createElement("audio");
 // //
 // audio.autoplay = true;
 // //
 // audio.load()
 // audio.addEventListener("load", function() { 
 //     audio.play(); 
 // }, true);
 // audio.src = source;




//var source = "LoadSound.mp3";
//var audio = new Audio(); // use the constructor in JavaScript, just easier that way
//audio.addEventListener("load", function() {
//  audio.play();
//}, true);
//audio.src = source;
//audio.autoplay = true; // add this










    // $scope.sound = function () {
    //     if ($scope.totalQueueList) {
    //         var audio = new Audio();
    //         audio.src = 'LoadSound.mp3';
    //         // when the sound has been loaded, execute your code
    //         audio.oncanplaythrough = (event) => {
    //             var playedPromise = audio.play();
    //             if (playedPromise) {
    //                 playedPromise.catch((e) => {
    //                     console.log(e)
    //                     if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
    //                         console.log(e.name);
    //                     }
    //                 }).then(() => {

    //                 });
    //             }
    //         }
    //     }
    // }
 }, 16000);
  
});
