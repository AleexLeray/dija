$(document).ready(function(){
    
   
    $('.container_info_article .facebook').click(function(event) {
        var $par = $(event.target).parent().children('span');
        var compteur = $par.text();
       
        if (compteur > 0) {
        	--compteur;
        $(event.target).parent().children('span').css("color", "black")
      	$(event.target).parent().children('i').css("color", "black")
        } else{
        	++compteur;
      	$(event.target).parent().children('span').css("color", "#3B5998")
      	$(event.target).parent().children('i').css("color", "#3B5998")
        }
        $par.text(compteur);
        return false;
    });

    $('.container_info_article .up').click(function(event) {
        var $par = $(event.target).parent().children('span');
        var compteur = $par.text();
        compteur++;
        $par.text(compteur);
        return false;
    });

    $('.container_info_article .down').click(function(event) {
        var $par = $(event.target).parent().children('span');
        var compteur = $par.text();
        compteur++;
        $par.text(compteur);
        return false;
    	});
    
    });

   