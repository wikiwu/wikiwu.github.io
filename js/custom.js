

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });


  /*-------------------------------------------------------------------------------
    back-to-top-button
  -------------------------------------------------------------------------------*/

	var amountScrolled = 500;
	var amountScrolledNav = 25;

	$(document).scroll(function() {
    if ( $(document).scrollTop() > amountScrolled ) {
      console.log($(document).scrollTop())
      $('.wcwu-page button.back-to-top').addClass('show');
    } else {
      $('.wcwu-page button.back-to-top').removeClass('show');
    }
	});

	$('.wcwu-page button.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });