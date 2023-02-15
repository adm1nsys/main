  $(document).ready(function() {
  
  setTimeout(function(){
    $('body').addClass('loaded');
    $('h1').css('color','#222222');
    // var audio = new Audio(); 
    // Создаём новый элемент Audio
  // audio.src = 'LoadSound.mp3'; 
  // Указываем путь к звуку
  // audio.autoplay = true; 
  // Автоматически запускаем
    document.getElementById("body1").style.cursor = "auto";
    document.getElementById("2pg").style.display = "flex";
var audio = new Audio();
audio.preload = 'auto';
audio.src = 'LoadSound.mp3';
audio.play();
 }, 16000);
  
});
