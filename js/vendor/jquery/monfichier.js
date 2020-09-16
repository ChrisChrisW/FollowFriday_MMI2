
$(document).ready(function() {



  	$(".navbar-toggler").click( function() {
  	     if($('.icone_menu').attr('src')=='images/svg/MenuMenu.svg') {
  				 $('.icone_menu').attr('src','images/svg/NavigationMenu.svg');
  			 }
  	     else if($('.icone_menu').attr('src')=='images/svg/icone_menu.svg'){
  				 $('.icone_menu').attr('src','images/svg/MenuMenu.svg');
  			 };
  		 	 });


    $('.navbar-toggler').mouseover( function() {
  	   	if($('.icone_menu').attr('src')=='images/svg/NavigationMenu.svg') {
  				 $('.icone_menu').attr('src','images/svg/icone_menu.svg'); //close
  	    };
  			});


    $(".navbar-toggler").mouseout( function() {
  	    if($('.icone_menu').attr('src')=='images/svg/icone_menu.svg'){ //close
  	     	$('.icone_menu').attr('src','images/svg/NavigationMenu.svg');
  	    };

  			});





	//Modalité
	$('.mention_legales').click(function(){
		$('.modalite').css({"display" : "inherit"});
	});

	$('.button_fermer_modal').click(function(){
		$('.modalite').css({"display" : "none"});
	});

});
