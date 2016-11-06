/* This is where my Js goes*/

/*jquery here */

$(document).ready(function(){
	$('#fullpage').fullpage();

	$('#fullpage').removeAttr('style').attr('style', 'height: 100%; position: relative; transform: translate3d(0px, 0px, 0px)');
	$('.section').removeAttr('style');
	$('.fp-tableCell').removeAttr('style');
	$('.fp-section').removeAttr('style');
	$('.fp-completley').removeAttr('style');

	$(window).resize(function(){
		$('#fullpage').removeAttr('style').attr('style', 'height: 100%; position: relative; transform: translate3d(0px, 0px, 0px)');
		$('.section').removeAttr('style');
		$('fp-tableCell').removeAttr('style');
		$('.fp-section').removeAttr('style');
		$('.fp-completley').removeAttr('style');
	});
}); //////////////////////////////////////////////////////end document ready...
