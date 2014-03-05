$( document ).ready(function() {

	if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        || navigator.userAgent.match(/Opera Mini/i)
        || navigator.userAgent.match(/IEMobile/i)
        ) {/*es un móvil*/}
        else{
		    //tolltip init
		    $("#tooltip1").tooltip({title: 'Who?'});
		    $("#tooltip2").tooltip({title: 'Skills'});
		    $("#tooltip3").tooltip({title: 'Work'});
		    $("#tooltip4").tooltip({title: 'Proyects'});
		    $("#tooltip5").tooltip({title: 'Social'});
		    $("#tooltip6").tooltip({title: 'Contact'});
		}

});


