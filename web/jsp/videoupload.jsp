<%-- 
    Document   : videopreview
    Created on : Dec 6, 2017, 6:44:15 PM
    Author     : cristina
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" type="text/css" href="../css/desing.css">
        
        <title>ART3TUBE</title>
        
    </head>
    <body>
        <%!
            String nombre;
            String idUsuario;
        %>
        <%

            if (request.getSession() != null) {
                HttpSession sesion = request.getSession();
                nombre = (String) sesion.getAttribute("nombre");
                idUsuario = sesion.getAttribute("idUsuario").toString();
            } else {
                response.sendRedirect("jsp/iniciarSesion.jsp");
            }


        %>
<!-- Barra de navegación -->
	<div class = "navigator">
		<div class="navcontent" >
			<input type="button"class="exit2" id = "iconP" name="logo" readonly>
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

</br>
</br>

<div class = "container">     

    </br>
        </br>
           <h1>¡Sube un video!</h1>
 
  <form method="post" action="/arTube/CSubirArchivo" enctype="multipart/form-data">
     
      <input type="file" id="subirvideo" name="file" placeholder="Seleccionar video">
           </br>    </br>
           </br>
           <input type="text" id="titlevideo2" name="TitulodelVideo" placeholder="Titulo del Video">
     </br>    </br>   
     <div id="video">
           <img src="../img/1.jpg" width="700px" height="420px"> 
           </div>
           <br> 
      <input type="text" id="titlevideo3" name="DescripciondelVideo" placeholder="Descripcion del Video">
      <br> <br> <br> 
       <input type="submit" class="ido" name="send" value="Enviar datos" />
        
  </form>  
    <br>
    <br>
    <br>    
    
    
    <br>
    <br>
    <br>
    
</div>

 <script language="javascript" type="text/javascript" src="../js/jquery-3.2.1.min.js"></script>
 <script language="javascript" type="text/javascript" src="../js/jquery.qtip.min.js"></script>
 <link rel="stylesheet" type="text/css" href="../js/jquery.qtip.min.css">
 <script language="javascript" type="text/javascript" src="../js/scripts.js"></script>
 <script language="javascript" type="text/javascript" src="../js/notify.js"></script>
 
 
    </body>
</html>
