$(document).ready(function(){
	/*------------------------------------------------------------------------------------*/
    /*--Navigation Starts--*/
    /*------------------------------------------------------------------------------------*/
	//Navigation toggle
	var closebtn = $(".closebtn");
	var overlay = $('.overlay');
	var icon = $('.js--nav-icon i');
    var body = $('#container');
	$('.js--nav-icon').click(function(){
		var nav = $('#navigation-list');		
		// nav.slideToggle(400);
		// overlay.slideToggle(400);
		if(icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
			overlay.css("height","100%");
            body.addClass('stop-scrolling');
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
			overlay.css("height","0%");
			icon.css("position","relative");
            body.removeClass('stop-scrolling');
		}

	});
	$('.overlay-content a').click(function(event){
		overlay.css("height","0%");
		icon.addClass('ion-navicon-round');
		icon.removeClass('ion-close-round');
        body.removeClass('stop-scrolling');
	})
	// var closeNav =() => {overlay.css("height","0%");}
	
	   closebtn.click(function(event){
		event.preventDefault();
		overlay.css("height","0%");
		
	});

    $('.education__icon').click(function(event){
   	   event.preventDefault();
   	   $(this).parent().next().slideToggle(200);
   	   if($(this).children().hasClass('ion-plus-round')){
   	   	$(this).children().addClass('ion-minus-round');
   	   	$(this).children().removeClass('ion-plus-round');

   	   } else {
   	   	$(this).children().addClass('ion-plus-round');
   	   	$(this).children().removeClass('ion-minus-round');
   	   }
   	   
    });
    /*------------------------------------------------------------------------------------*/
    /*--Navigation Ends--*/
    /*------------------------------------------------------------------------------------*/


     /*------------------------------------------------------------------------------------*/
    /*--Scrolling Starts--*/
    /*------------------------------------------------------------------------------------*/
    var sections =['header','about','education','works','contact'];
    function scrollToSection(source,destination){
        $(source).click(function(event){
            event.preventDefault();
            $('html,body').animate({scrollTop:$(destination).offset().top},600);
        });
    }
    sections.forEach(element => scrollToSection(`.js--scroll-to-${element}`,`.js--section-${element}`));

    //Smooth scroll for all anchor tags
    $('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 800, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });
	/*------------------------------------------------------------------------------------*/
    /*--Scrolling Ends--*/
    /*------------------------------------------------------------------------------------*/

    /*------------------------------------------------------------------------------------*/
    /*--Fixed Button Starts--*/
    /*------------------------------------------------------------------------------------*/
     $('.js--section-about').waypoint(function(direction){
     	if(direction == "down"){
         $('.fixed-btn').addClass('fadeIn');
          $('.fixed-btn').css("display","inline-block");
     	} else {
          $('.fixed-btn').removeClass('fadeIn');
          $('.fixed-btn').addClass('animate__animated animate__fadeOut');
     	}
     },{
     	offset:"300px"
     });
    /*------------------------------------------------------------------------------------*/
    /*--Fixed Button Ends--*/
    /*------------------------------------------------------------------------------------*/

    /*------------------------------------------------------------------------------------*/
    /*--Animation Starts--*/
    /*------------------------------------------------------------------------------------*/
    function scrollAnimation(destination,targetClass,offset = "500px"){
        $(`.js--animation-${destination}`).waypoint(function(direction){
            $(`.js--animation-${destination}`).addClass(`animate__animated animate__${targetClass}`);
        },
        {
            offset:`${offset}`
        });
    }
    for(let i =1 ;i < 9; i++){
        if(i === 6) {
          scrollAnimation(i,"fadeInUp","300px");
        } else if( i === 7) {
          scrollAnimation(i,"slideInLeft");
        } else if( i === 8) {
          scrollAnimation(i,"slideInRight");
        }else{
          scrollAnimation(i,"fadeInUp");
        }       
    }

    $('.header__profile-background').addClass("animate__animated animate__flipInX animate__delay-2s");
    /*------------------------------------------------------------------------------------*/
    /*--Animation Ends--*/
    /*------------------------------------------------------------------------------------*/

    /*------------------------------------------------------------------------------------*/
    /*--Page Scroll Indicator Starts--*/
    /*------------------------------------------------------------------------------------*/
     $(window).scroll(moveScrollIndicator);
     const maxHeight = window.document.body.scrollHeight - window.innerHeight;
     function moveScrollIndicator(e){
        const widthValueInPercentage = ((window.scrollY) / maxHeight)*100;
        $('.progress-line').css('width',`${widthValueInPercentage}%`);
     }
    /*------------------------------------------------------------------------------------*/
    /*--Page Scroll Indicator Ends--*/
    /*------------------------------------------------------------------------------------*/
    

});