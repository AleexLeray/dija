$(document).ready(function(){
var modal = $('#myModal');
var image = $('#image');
var description = $('#description');
var titre = $('#titre');
var tab = [];

  $('.img_article').click(function(e){
    target = $(this);
     modal.css("display" , "block");
     image.attr("src", target.attr("image"));
     description.text(target.attr("description"));
     titre.text(target.attr("titre"));
  });

  $('span').click(function(){
     modal.css("display" , "none");
  });
console.log(tab);

   $( "form" ).submit(function(event) {
    event.preventDefault();
      $('#answer').val(function( i, val ){
        tab.push(val.toUpperCase());
        console.log(tab);
      });
      for (var i = 0; i < tab.length; i++) {
       $('#answer').val(tab[i]);
      }
     });
     $('.btn_send').click(function(){
      $.each(tab, function(i){
      var div = $('<div/>')
      .addClass('mesCommentaire')
      .addClass('fa fa-user fa-2x')
      .text(tab[i])
      .appendTo('.reponse_commentaire');
       $('#answer').val(tab[i]);
          console.log(tab);
      tab = [];
      });

});
});
