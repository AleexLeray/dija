$(document).ready(function() {
  console.log(window.pageYOffset);
  function scrollDown (){
  if (window.pageYOffset >= 570) {
    $(".menu_left").css({"position": "fixed", 'top' : "0", 'left' : "40px", "margin-left": "-50px"});
    $('.container_middle').css('margin-left', '330px');
  }
  else {
    $(".menu_left").css("position", "relative");
    $('.container_middle').css('margin-left', '110px');
  }
  }
  window.addEventListener("scroll", scrollDown);
});
