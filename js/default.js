$( document ).ready(function() {
    
    //cambio el color del paginador
    $(".onepage-pagination li a").addClass("white");
    $(".onepage-pagination li a" + "[data-index='1']").addClass("whiteSelect");

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
    
    //inserto el mail en la web
    mailOfuscator();
});

//Añade el correo en la página sin mostrarlo
function mailOfuscator()
{
    { coded = "FUbqhXOJUbqh@j5qEB.IU5"
      key = "c86JsHpwtbgN4Z9Y2WdS7VICovDnla0Gjmk3Ti1eXyfrLxURuhBqKMF5QPzEAO"
      shift=coded.length
      link=""
      for (i=0; i<coded.length; i++) {
        if (key.indexOf(coded.charAt(i))==-1) {
          ltr = coded.charAt(i)
          link += (ltr)
        }
        else {     
          ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
          link += (key.charAt(ltr))
        }
      }
    $('#mreciber').append("<a href='mailto:"+link+"'>"+link+"</a>")
    }
}