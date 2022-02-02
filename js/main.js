


var btn=document.getElementById('btn');

btn.onclick=function(){
	// var text=document.querySelector('.text');

		// text.classList.add('green');
	//var img=document.querySelector('.advantage').style.marginLeft="200px";

}

$(function () {
	
	
	$(window).scroll(function() {
	    $('#learn .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.advantages').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("flipInX");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.ticket').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__slideInDown");
	        }
	    });
	});
})