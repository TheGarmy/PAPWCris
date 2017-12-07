/*

NOTAS

1. Cuando el usuario da clic en el botón "Ocultar", desea que desaparezca el párrafo superior.
2. Para lograrlo, tenemos que asociar la función al evento "click" del botón. Y a su vez utilizamos la función "hide" de jQuery.
3. El evento del clic se lo queremos asociar al botón "Ocultar", con ID "hideButton", por lo tanto nuestro primer selector sería $("#hideButton").
4. La accion de desaparecer la queremos efectuar sobre el párrafo superior, el cual tiene el ID "disclaimer", por lo tanto nuestro segundo selector sería $("#disclaimer").

*/

 
$(document).ready(function() {

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
    });
});

$("#icono4").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace(".png", "b.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("b.png", ".png");
    });
});

$("#icono5").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace(".png", "b.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("b.png", ".png");
    });
});

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


$('#eyepass').mouseup(function() {
	$('#infobox2').attr('type', 'password');
	$('#infobox3').attr('type', 'password');
});


$('#eyepass').mousedown(function() {
	$('#infobox2').attr('type', 'text');
	$('#infobox3').attr('type', 'text');
});

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

$('.signin2').qtip({
		style: {
			classes: 'qtipClass',
			width: 90,
			height: 50

		}
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


$('#coment2').on('click', function(){
	var score = $("#coment").val();

		$("#coment-section").append( "<br>" + "<li id='cadacomentario' >" + score + "</li>" + "<br>");	
});

$('#cadacomentario').live(function(){

	$('#cadacomentario').css('list-style-type', 'none');
	$('#cadacomentario').css('background-color', 'black');
});


/*	
	$('.cantidadPagoLarge').qtip({
		style: {
			classes: 'qtipClass',
			width: 130,
			height: 80
		}
	});
	
	$('#qtipMain').qtip({
    style: {
		classes: 'qtipClass',
        width: 130, // Overrides width set by CSS (but no max-width!)
        height: 80 // Overrides height set by CSS (but no max-height!)
		
    }
	
	
	})
	
		$('#qtipMain2').qtip({
    style: {
		classes: 'qtipClass',
        width: 130, // Overrides width set by CSS (but no max-width!)
        height: 30 // Overrides height set by CSS (but no max-height!)
		
    }
	
	
	})
	
	
    $("#siguiente").click(function () {
		if(name==3){}else{name++;}
		
		if(name == 1){
			var x = document.getElementById('1').value;
			if (x == null || x == "" ) {
				$("#1").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
				name--;
				return false;
			}
			else
			{
				$("#1").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
			var x = document.getElementById('2').value;
			if (x == null || x == "" ) {
			$("#2").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#2").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
			
			/*var x = document.getElementById('3').value;
			if (x == null || x == "" ) {
			$("#3").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#3").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
			*/ /*
		} else if (name == 2){
			var x = document.getElementById('4').value;
			if (x == null || x == "" ) {
			$("#4").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#4").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
			var x = document.getElementById('5').value;
			if (x == null || x == "" ) {
			$("#5").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#5").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
			var x = document.getElementById('6').value;
			if (x == null || x == "" ) {
			$("#6").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#6").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
			var x = document.getElementById('7').value;
			if (x == null || x == "" ) {
			$("#7").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#7").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
		} else if(name==3){
			var x = document.getElementById('8').value;
			if (x == null || x == "" ) {
			$("#8").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#8").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
			var x = document.getElementById('9').value;
			if (x == null || x == "" ) {
			$("#9").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#9").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
			var x = document.getElementById('10').value;
			if (x == null || x == "" ) {
			$("#10").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#10").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
			var x = document.getElementById('11').value;
			if (x == null || x == "" ) {
			$("#11").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#11").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
			var x = document.getElementById('12').value;
			if (x == null || x == "" ) {
			$("#12").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#12").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
			var x = document.getElementById('13').value;
			if (x == null || x == "" ) {
			$("#13").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#13").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
			var x = document.getElementById('14').value;
			if (x == null || x == "" ) {
			$("#14").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#14").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
			var x = document.getElementById('15').value;
			if (x == null || x == "" ) {
			$("#15").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#15").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
			var x = document.getElementById('16').value;
			if (x == null || x == "" ) {
			$("#16").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#16").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
			var x = document.getElementById('17').value;
			if (x == null || x == "" ) {
			$("#17").animate({ borderTopColor: '#FE2E2E', borderLeftColor: '#FE2E2E', borderRightColor: '#FE2E2E', borderBottomColor: '#FE2E2E' }, 'fast');
			name--;
			return false;
			}
			else
			{
				$("#17").animate({ borderTopColor: '#01DF01', borderLeftColor: '#01DF01', borderRightColor: '#01DF01', borderBottomColor: '#01DF01' }, 'fast');
			}
		}
			
		if (cambio.innerHTML == "Localidad en el Arbol"){cambio.innerHTML = "Nuevo Socio";}
		else if (cambio.innerHTML == "Nuevo Socio"){cambio.innerHTML = "Datos de Contacto";}
		
		if (cambioBlack.innerHTML == "Posicionamiento de tu arbol"){cambioBlack.innerHTML = "Datos Personales";}
		else if (cambioBlack.innerHTML == "Datos Personales"){cambioBlack.innerHTML = "Datos Contacto";}
		
		if (cambioBlack2.innerHTML == "Paso 1 de 3"){cambioBlack2.innerHTML = "Paso 2 de 3";}
		else if (cambioBlack2.innerHTML == "Paso 2 de 3"){cambioBlack2.innerHTML = "Paso 3 de 3";}
		
        if (name==1){
			$("#form1").hide();
			$("#arbol").hide();

			$("#form2").show();
			$(".tituloImage").attr("src","images/personaIcon.png");
		}
			
		if (name==2){
			$("#form2").hide();
			$("#form3").show();
			$(".tituloImage").attr("src","images/googleIcon.png");
		}
    });
	
	$("#anterior").click(function () {
		if (name==0){}else{name--;}
        if (name==0){
			$("#form1").show();
			$("#arbol").show();

			$("#form2").hide();
			$(".tituloImage").attr("src","images/arbolIcono.png");
		}
			
		if (name==1){
			$("#form2").show();
			$("#form3").hide();
			$(".tituloImage").attr("src","images/personaIcon.png");
		}
    });
	
	    $("#cancelar").click(function () {
			name=0;
			$("#form1").show();
			$("#arbol").show();

			$("#form2").hide();
			$("#form3").hide();

			$(".tituloImage").attr("src","images/arbolIcono.png");

    }); */
	
}); // DOCUMENT READY NO BORRAR

function comoSeLlame(){
	alert("función reutilizable");
} 
