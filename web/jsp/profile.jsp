<%-- 
    Document   : profile
    Created on : Dec 7, 2017, 4:47:05 AM
    Author     : cristina
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>ART3TUBE</title>
        <link rel="stylesheet" type="text/css" href="../css/designp.css">
    </head>
    <body>
        
<!-- Barra de navegación -->
	<div class = "navigator">
		<div class="navcontent" >
			<input type="button" class = "iconP" name="logo" readonly>
			<div class = "navcontent2"> 
			<input type="textbox" class = "searchs" name="Busqueda" placeholder= "Buscar">
		<span class ="magnifying">
			<input type="button" class = "glass" name="lupa">
		</span>
				<span class="person">
                                  <img src="../img/subir.png" id="upload" width="20px" height="25px"> 
			<input class="signin2" title="Tienes una nueva notificacion" id="usernoti" type="button" name="iconLog" readonly>
			<input class="signin3" type="button" name="iconLog" readonly>
				</span>
			</div>
		</div>
	</div>

<!-- Saltos-->
</br>	
</br>

	<!-- Contenedor principal -->
 <div class = "container"> 

	<!-- Imagen de usuario -->
	<img src="../img/1.jpg" class="fondo" id ="photoback" height="80" width="80">	

<div class="userinfo">
	<img src="../img/user.png" class="userpic" id ="photoUS" height="80" width="80">	
 	<div class="movetext"><input class="username" type="textbox" name="Username" placeholder="Tu nombre aqui" readonly></div>
</div>
 	<!-- Saltos-->
	</br>
	</br>	

	<div class="process">
			<span> Información personal </span>
			</br>	
			</br>	

			<span class="largetext"> Nombre de Usuario </span>
			<input type="textbox" class="infobox2" name="email" placeholder="Ej. art3tube@xxx">
			</br>
			</br>
			
			<span class="sizetext">Contraseña</span>	
			<input type="password" class="infobox2" name="pass" placeholder="Minimo 8 caracteres">
			<img src="../img/eye.png" class = "eyepass" width="30px" height="20px">
			</br>
			</br>	

			<span> </span>
			<input type="textbox" class="infobox" name="email" placeholder="Ej. art3tube@xxx">
			</br>
			</br>
			
		<!-- 
			<span class="promo">¿No tienes cuenta? Registrate aqui</span>	

			-->
		
		<!-- Saltos-->
			</br>
			</br>

			<input type="button" class="ido" name="confirmed" value="GUARDAR CAMBIOS" readonly>
	</div>

<!-- Saltos-->
	</br>
	</br>
	</br>

</div>

<!-- Saltos-->
		<img src="../img/logo2.png" class="logopic" id ="photologo" height="80" width="80">	
 
<!-- Saltos-->
	</br>
	</br>

 <script language="javascript" type="text/javascript" src="../js/jquery-3.2.1.min.js"></script>
 <script language="javascript" type="text/javascript" src="../js/scripts.js"></script>
 <script language="javascript" type="text/javascript" src="../js/jquery.qtip.min.js"></script>
 <script language="javascript" type="text/javascript" src="../js/notify.js"></script>
 
    </body>
</html>
