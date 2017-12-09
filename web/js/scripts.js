/*

NOTAS

1. Cuando el usuario da clic en el botón "Ocultar", desea que desaparezca el párrafo superior.
2. Para lograrlo, tenemos que asociar la función al evento "click" del botón. Y a su vez utilizamos la función "hide" de jQuery.
3. El evento del clic se lo queremos asociar al botón "Ocultar", con ID "hideButton", por lo tanto nuestro primer selector sería $("#hideButton").
4. La accion de desaparecer la queremos efectuar sobre el párrafo superior, el cual tiene el ID "disclaimer", por lo tanto nuestro segundo selector sería $("#disclaimer").

*/

 
$(document).ready(function() {

	//----
	$('#save-change').hide();
	$('.movprocess').show();
	$('#carga-picuser').hide();
	$('#carga-picuser2').hide();
	$('#file-7').hide();
	$('#file-72').hide();
	$('#nombre-admin').hide();

/*	
	$(".regular").slick({
        dots: false,
        infinite: false,
		arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });});


	$("#icono2").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace(".png", "b.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("b.png", ".png");
    });
});
	$("#icono3").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace(".png", "b.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("b.png", ".png");
    });});
$("#icono4").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace(".png", "b.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("b.png", ".png");
    });});
$("#icono5").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace(".png", "b.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("b.png", ".png");
    });});
$("#icono6").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace(".png", "b.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("b.png", ".png");
    });
});

<a href="index.jsp" style = "text-decoration: none;"></a>



$('.signin2').qtip({
		style: {
			classes: 'qtipClass',
			width: 130,
			height: 40
		}
	});

$('.signin2').hover(function() {
	$('.signin2').notify("Tienes una notificacion", "warn",
			{
				globalPosition: "top left",
				showDuration: 10
			}
		);
});

*/




 $('#logo').on('click',function(){
	window.location.href='../index.jsp';
    });

$('#ido').on('click', function() {
	if ( $('#infobox').val() == '' && $('#infobox2').val() == '' ) { 
		alert("Datos incorrectos o incompletos");
	 // $('#infobox').css({ 'background-color': 'rgb(1,0,1)' });	
	} else 
		if ( $('#infobox2').val() == '' ) {
			alert("Datos incorrectos o incompletos");
		} else {
			if ( $('#infobox').val() == '' ) {
			alert("Datos incorrectos o incompletos");
			}
		}

});

//---------------------------------


$('#eyepass').mouseup(function() {
	$('#infobox2').attr('type', 'password');
	$('#infobox3').attr('type', 'password');
});


$('#eyepass').mousedown(function() {
	$('#infobox2').attr('type', 'text');
	$('#infobox3').attr('type', 'text');
});


//---------------------------------

$('#ido2').on('click', function() {
	if ( $('#infoboxr').val() == '' && $('#infoboxr2').val() == '' && $('#infobox2').val() == '' && $('#infoboxr3').val() == '' ) { 
		alert("Datos incorrectos o incompletos");
	 // $('#infobox').css({ 'background-color': 'rgb(1,0,1)' });	
	} else 
		if ( $('#infoboxr').val() == '' ) {
			alert("Datos incorrectos o incompletos");
		} else {
			if ( $('#infoboxr2').val() == '' ) {
			alert("Datos incorrectos o incompletos");
			} else {
				if ( $('#infobox2').val() == '' ) {
					alert("Datos incorrectos o incompletos");
				}  else {
					if ( $('#infobox3').val() == '' ) {
					alert("Datos incorrectos o incompletos");
				}
			
				}

			}
		}  
		
	
});

$('.signin3').qtip({
		style: {
			classes: 'qtipClass',
			width: 90,
			height: 50

		}
	});

$('.exit2').on('click', function(){
	window.location.href='../jsp/indexlogged.jsp';
});

$('.signin2').on('click', function(){
	window.location.href='../index.jsp';
});

$('.signin3').on('click', function(){
	window.location.href='profile.jsp';
});

$('#upload').on('click', function(){
	window.location.href='videoupload.jsp';
});

$('#video').on('click', function(){
	window.location.href='videopreview.jsp';
});


	
var cambio2 = true;
var siono = true;
var cambio3 = true ;

$('#viewfav').on('click', function(){  

	if (cambio3 ==true) {  
			    $('#viewfav').attr('src','../img/like2.png');	
			    siono = false;

		$('#viewfav').notify("Agregado a favoritos", "sucess",
			{
				showDuration: 100

			}
		);
		cambio3 = false;
	} else {
		  $('#viewfav').attr('src','../img/like.png');	
					    siono = false;

				$('#viewfav').notify("Removido de favoritos", "war",
					{
						showDuration: 100

					}
				);	
				siono = true;		
	}

});
	
$('#viewfav').hover(function(){    
if (siono == true) {
	    if( cambio2 == true){ 
		    $('#viewfav').attr('src','../img/like2.png');
		    cambio2 = false;
		} else {
			 $('#viewfav').attr('src','../img/like.png');
		    cambio2 = true;
		}
	}
});

//------

var cambio4 = true;
var siono2 = true;
var cambio5 = true ;

$('#viewlike2').on('click', function(){  

	if (cambio5 ==true) {  
			    $('#viewlike2').attr('src','../img/manita3.png');	
			    siono2 = false;
				cambio5 = false;
	} else {
				siono2 = true;		
	}

});
	
$('#viewlike2').hover(function(){    
if (siono2 == true) {
	    if( cambio4 == true){ 
		    $('#viewlike2').attr('src','../img/manita3.png');
		    cambio4 = false;
		} else {
			 $('#viewlike2').attr('src','../img/manita.png');
		    cambio4 = true;
		}
	}
});

//------

var cambio7 = true;
var siono4 = true;
var cambio8 = true ;

$('#follow').on('click', function(){  

	if (cambio8 ==true) {  
			  $('#follow').css('background-color','black');
				$('#follow').prop('value', 'SEGUIDO');
			    siono4 = false;
				cambio8 = false;
	} else {
			$('#follow').prop('value', 'SEGUIR');
				siono4 = true;		
	}

});
	

$('#follow').hover(function(){    
if (siono4 == true) {
	    if( cambio7 == true){ 
		    $('#follow').css('background-color','black');
		    cambio7 = false;
		} else {
			 $('#follow').css('background-color','');
		    cambio7 = true;
		}
	}
});
//------

var cambioPen = true;
var siono5 = true;
var cambioPen2 = true ;

$('#editado').on('click', function(){  

	if (cambioPen2 ==true) {  
			 $('#editado').attr('src','../img/pencil2.png');
			 
			 $('#infobox2').prop('disabled', false);
			 $('#infobox2').css('background-color','white');
			 
			 $('#infobox3').prop('disabled', false);
			 $('#infobox3').css('background-color','white');
			 
			 $('#infobox4').prop('disabled', false);
			 $('#infobox4').css('background-color','white');

			 $('#change-username').prop('readonly', false);
			 $('#change-username').css('border-width','5px');
			 $('#change-username').css('border-color','black');	 

			    siono5 = false;
				cambioPen2 = false;
				$('#carga-picuser').show();
				$('#carga-picuser2').show();
				$('#save-change').show();
				$('#edita').hide();
	} else {
		 $('#editado').attr('src','../img/pencil.png');
			$('#editado').prop('value', 'SEGUIR');
			$('#infobox2').prop('disabled', true);
			$('#infobox2').css('background-color','lightgray');
			
			$('#infobox3').prop('disabled', true);
			$('#infobox3').css('background-color','lightgray');
			
			$('#infobox4').prop('disabled', true);
			$('#infobox4').css('background-color','lightgray');

			$('#change-username').prop('readonly', true);
			$('#change-username').css('border-width','0');
			$('#change-username').css('border-color','');	

				siono5 = true;	
				$('#carga-picuser').hide();
				$('#carga-picuser2').hide();
				$('#save-change').hide();
				$('#edita').show();
				cambioPen2 = true;	
	}

});
	

$('#editado').hover(function(){    
if (siono5 == true) {
	    if( cambioPen == true){ 
		   $('#editado').attr('src','../img/pencil2.png');
		    cambioPen = false;
		} else {
			 $('#editado').attr('src','../img/pencil.png');
		    cambioPen = true;
		}
	}
});
//-----------------

$('#coment2').on('click', function(){
	var score = $("#coment").val();

		$("#coment-section").append( "<br>" + "<li id='cadacomentario' >" + score + "</li>" + "<br>");	
});


$('#cadacomentario').live(function(){

	$('#cadacomentario').css('list-style-type', 'none');
	$('#cadacomentario').css('background-color', 'black');
});


function mostrarImagen(input) {
	 if (input.files && input.files[0]) {
	  var reader = new FileReader();
	  reader.onload = function (e) {
	   $('#photoUS').attr('src', e.target.result);
	  }
	  reader.readAsDataURL(input.files[0]);
	 }
}
 
$(".file-7").change(function(){
 mostrarImagen(this);
});

	
		
}); // DOCUMENT READY NO BORRAR

function comoSeLlame(){
	alert("función reutilizable");
} 
