$(document).ready(function () {
	var bottom = $(document).height() - $(window).height() - $(window).scrollTop();
    var verybottom = $(document).height() - $(window).height();
    $('.prog').width( 100 - ( bottom / verybottom )*100+ '%');
    if((100 - ( bottom / verybottom )*100) >= 92){
    	$('.scroller').html('<center><a href="#top"><div class="scroll" title="Contacts"><i class="fas fa-chevron-up" style="font-size: 25px"></i></div></a></center>');
    	$('.scroll').css('margin-top', $(window).height()-50+'px');
    }else{
    	$('.scroller').html('<center><a href="#contacts"><div class="scroll" title="Contacts"><i class="fas fa-address-card" style="font-size: 25px"></i></div></a></center>');
    	$('.scroll').css('margin-top', $(window).height()-50+'px');
    }
});

$(document).on('scroll', function(){
    var bottom = $(document).height() - $(window).height() - $(window).scrollTop();
    var verybottom = $(document).height() - $(window).height();
    $('.prog').width( 100 - ( bottom / verybottom )*100+ '%');
    if((100 - ( bottom / verybottom )*100) >= 80){
    	$('.scroller').html('<center><a href="#top"><div class="scroll" title="Contacts"><i class="fas fa-chevron-up" style="font-size: 25px"></i></div></a></center>');
    	$('.scroll').css('margin-top', $(window).height()-50+'px');
    }else{
    	$('.scroller').html('<center><a href="#contacts"><div class="scroll" title="Contacts"><i class="fas fa-address-card" style="font-size: 25px"></i></div></a></center>');
    	$('.scroll').css('margin-top', $(window).height()-50+'px');
    }
});

function closeMe(){
	$('.menuBack').fadeOut(500);
}

function showMenu() {
	$('.menuBack').fadeIn(500);
}

const iam = [
        "a React.js developer",
	"a geek coder",
	"a fullstack developer",
	"a NodeJS backend developer",
	"a JavaScript lover",
	"a C# developer",
];

var currentArr = iam[0].split('');

var indexLetter = 0, indexString = 0;

setInterval(function() {

	$('#who').html('');

	var intervalLetter = setInterval( function(){
		$('#who').append(iam[indexString].split('')[indexLetter]);	
		indexLetter++;
		if(indexLetter == iam[indexString].split('').length){ indexLetter = 0; clearInterval(intervalLetter); }
	}, 1000 / iam[indexString].split('').length);

	indexString++;
	if(indexString == iam.length){ indexString = 0 }

}, 2500);

$(window).on('mousemove', function (event) {

	if($(window).scrollTop() < 600){
	    var x_cord = event.pageX / $(window).width();
	    var y_cord = event.pageY / $(window).height();

		$('.txt').css('-webkit-transform', 'perspective(' + $('.txt').width() + 'px) rotateY(' + (x_cord-0.5)*15 + 'deg) rotateX(' + (0.5 - y_cord)*15 + 'deg)');
		$('.whoami').css('margin', ''+y_cord*100+'px '+ x_cord*100+'px');
	}
});

function lisaLook(event){
	var div_pos = $('.myImage').offset();
	var x_cord = (event.pageX - div_pos.left) / $('.myImage').width();
	var y_cord = (event.pageY - div_pos.top) / $('.myImage').height();
	
	$('.myImage').css('-webkit-transform', 'perspective(' + $('.myImage').width() + 'px) rotateY(' + (x_cord-0.5)*10 + 'deg) rotateX(' + (0.5 - y_cord)*10 + 'deg)');
}

$(window).on('resize', function () {
	$('.scroll').css('margin-top', $(window).height()-50+'px');
});

setInterval(function () {
	$('.mainCont').css('margin-top', $(window).height() > 500 ? $(window).height()-500 : 100+'px');
	$('.myImage').css('height', $('.myImage').width());
	$('.scroll').css('margin-top', $(window).height()-50+'px');
});

const bd = new Date(1998, 07, 20);
const now = new Date();

var ages = now.getFullYear() - bd.getFullYear();

setTimeout(function () {
	$(".age").html( ages + ' years');
}, 100);

