/*

NOTAS

1. Cuando el usuario da clic en el botón "Ocultar", desea que desaparezca el párrafo superior.
2. Para lograrlo, tenemos que asociar la función al evento "click" del botón. Y a su vez utilizamos la función "hide" de jQuery.
3. El evento del clic se lo queremos asociar al botón "Ocultar", con ID "hideButton", por lo tanto nuestro primer selector sería $("#hideButton").
4. La accion de desaparecer la queremos efectuar sobre el párrafo superior, el cual tiene el ID "disclaimer", por lo tanto nuestro segundo selector sería $("#disclaimer").

*/

 
$(document).ready(function() {

//<a href="index.jsp" style = "text-decoration: none;"></a>

 $('#logo').on('click',function(){
	window.location.href='../index.jsp';
    });

	$('.signin2').qtip({
		style: {
			classes: 'qtipClass',
			width: 130,
			height: 40
		}
	});



	$.notify("Termina de editar tu perfil", "warn",
		{
			position:"top right",
			showDuration: 200

		}
	);
	

//$('#iconP').one('hover', function(){
	var mostrar = true;

if (mostrar == true) {
	 
	var nombre = $('#nombre-admin').val();

	$.notify('Bienvenido ' + nombre, "success",
		{
			position:"top right"

		}
	);

	}
//});


	//var nombre = "Garmy";

	


	
}); // DOCUMENT READY NO BORRAR

function comoSeLlame(){
	alert("función reutilizable");
} 
