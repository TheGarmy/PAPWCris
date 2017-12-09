<%-- 
    Document   : indexlogged
    Created on : 3/11/2017, 02:30:02 AM
    Author     : garmy
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page session="true"%>
<%!
    String nombre;
    String idUsuario;
%>
<%
    HttpSession sesion = request.getSession();
    nombre = (String)sesion.getAttribute("nombre");
    idUsuario = sesion.getAttribute("idUsuario").toString();
    
    
%>
<html>
<head>
	<title>ART3TUBE</title>

	<!-- Librerias -->

	<link rel="stylesheet" type="text/css" href="../css/desing.css">

</head>
<body>
     <input type="text" id="nombre-admin" value = "<%=nombre%>" </input>
    
<!-- Barra de navegacion -->
	<div class = "navigator">
		<div class="navcontent" >
			<input type="button" class="exit2" id = "iconP" name="logo" readonly>
			<div class = "navcontent2"> 
			<input type="textbox" class = "searchs" name="Busqueda" placeholder= "Buscar">
		<span class ="magnifying">
			<input type="button" class = "glass" name="lupa">
		</span>
				<span class="person">
                                    <img src="../img/subir.png" id="upload" width="20px" height="25px"> 
			<input class="signin2"  id="usernoti" type="button" name="iconLog" readonly>
			<input class="signin3" title="Tienes una nueva notificacion" type="button" name="iconLog" readonly>
				</span>
			</div>
		</div>
	</div>

<!-- Saltos-->
</br>
</br>
</br>

<!-- Contenedor principal -->
 <div class = "container"> 

<!-- Saltos-->
</br>

 	<div class= "subtitleT"> 
 		<input type="textbox" class="titles" name="Titulo" value="Los mas populares" readonly>
 	
<!-- Saltos-->
</br>
</br>

<!-- Videos-->
 	<span class= "preview">
 		<img src="../img/1.jpg" width="200px" height="120px"> 

 	<span class= "preview">
 		<img src="../img/4.jpg" width="200px" height="120px">
 	</span>

 	<span class= "preview">
 		<img src="../img/1.jpg" width="200px" height="120px">
 	</span>

 	<span class= "preview">
 		<img src="../img/3.jpg" width="200px" height="120px">
 	</span>

<!-- Titulos de los videos-->
	<div class= "subtitlescontainer"> 
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Como renderear en Maya" readonly> 
		</span>
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Scripts UE4" readonly> 
		</span>
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Maya vs 3D Max" readonly> 
		</span>
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Como renderear" readonly> 
		</span>

		<!-- Saltos-->
		</br>

<!-- Autores-->
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="GarmyNeitor" readonly> 
		</span>
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="Jesus777" readonly> 
		</span>
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="HolaSoyYaare" readonly> 
		</span>
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="ProfedePapw" readonly> 
		</span>

	</div>
	
<!-- Saltos-->
</br>
</br>
</br>

	<!-- Videos segunda linea -->
	<span class= "preview">
 		<img src="../img/3.jpg" width="200px" height="120px">
 	</span>

 	<span class= "preview">
 		<img src="../img/2.jpg" width="200px" height="120px">
 	</span>

 	<span class= "preview">
 		<img src="../img/4.jpg" width="200px" height="120px">
 	</span>

 	<span class= "preview">
 		<img src="../img/1.jpg" width="200px" height="120px">
 	</span>

 	
<!-- Titulos de los videos segunda linea-->
	<div class= "subtitlescontainer"> 
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Musica para programar" readonly> 
		</span>
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Unity Tutorial 1" readonly> 
		</span>
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Tips para Blender" readonly> 
		</span>
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Como renderear como pro" readonly> 
		</span>

		<!-- Saltos-->
		</br>

<!-- Autores de la segunda linea-->
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="GarmyNeitor" readonly> 
		</span>
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="Jesus777" readonly> 
		</span>
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="HolaSoyYaare" readonly> 
		</span>
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="ProfedePapw" readonly> 
		</span>

	</div>
	
<!-- Saltos-->
</br>
</br>


<!-- ------------------Separador------------------ -->


<!-- Etiqueta de secciones 2 -->
 	<div class= "subtitleT"> 
 		<input type="textbox" class="titles" name="Titulo" value="Talvez te interese" readonly>
 	
<!-- Saltos-->
</br>
</br>

<!-- Videos 2-->
 	<span class= "preview">
 		<img src="../img/1.jpg" width="200px" height="120px"> 

 	<span class= "preview">
 		<img src="../img/4.jpg" width="200px" height="120px">
 	</span>

 	<span class= "preview">
 		<img src="../img/2.jpg" width="200px" height="120px">
 	</span>

 	<span class= "preview">
 		<img src="../img/3.jpg" width="200px" height="120px">
 	</span>

<!-- Titulos de los videos 2-->
	<div class= "subtitlescontainer"> 
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Como renderear en Maya" readonly> 
		</span>
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Scripts UE4" readonly> 
		</span>
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Maya vs 3D Max" readonly> 
		</span>
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Como renderear" readonly> 
		</span>

		<!-- Saltos-->
		</br>

<!-- Autores 2-->
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="GarmyNeitor" readonly> 
		</span>
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="Jesus777" readonly> 
		</span>
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="HolaSoyYaare" readonly> 
		</span>
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="ProfedePapw" readonly> 
		</span>

	</div>
	
<!-- Saltos-->
</br>
</br>
</br>

	<!-- Videos segunda linea 2 -->
	<span class= "preview">
 		<img src="../img/3.jpg" width="200px" height="120px">
 	</span>

 	<span class= "preview">
 		<img src="../img/1.jpg" width="200px" height="120px">
 	</span>

 	<span class= "preview">
 		<img src="../img/4.jpg" width="200px" height="120px">
 	</span>

 	<span class= "preview">
 		<img src="../img/3.jpg" width="200px" height="120px">
 	</span>

 	
<!-- Titulos de los videos segunda linea 2 -->
	<div class= "subtitlescontainer"> 
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Musica para programar" readonly> 
		</span>
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Unity Tutorial 1" readonly> 
		</span>
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Tips para Blender" readonly> 
		</span>
		<span class = "subtitles"> 
			<input type="textbox" class = "fontsubtitle" name="videotitle" value="Como renderear como pro" readonly> 
		</span>

		<!-- Saltos-->
		</br>

<!-- Autores de la segunda linea2 -->
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="GarmyNeitor" readonly> 
		</span>
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="Jesus777" readonly> 
		</span>
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="HolaSoyYaare" readonly> 
		</span>
		<span class = "subtitles2"> 
			<input type="textbox" class = "fontsubtitle2" name="videotitle" value="ProfedePapw" readonly> 
		</span>

	</div>

	</div>
 </div>

 <script language="javascript" type="text/javascript" src="../js/jquery-3.2.1.min.js"></script>
 <script language="javascript" type="text/javascript" src="../js/jquery.qtip.min.js"></script>
 <link rel="stylesheet" type="text/css" href="../js/jquery.qtip.min.css">
 <script language="javascript" type="text/javascript" src="../js/scripts.js"></script>
 <script language="javascript" type="text/javascript" src="../js/scripts2.js"></script>
 <script language="javascript" type="text/javascript" src="../js/notify.js"></script>
 
</body>
</html>