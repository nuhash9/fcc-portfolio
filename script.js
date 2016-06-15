$(function(){
  $('nav ul li a').bind('click', function(){
    $(this).parent().addClass('active').siblings().removeClass('active');
  });
  smoothScroll(500);
  //$('#content').scrollspy({target: '#nav' });
});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}
