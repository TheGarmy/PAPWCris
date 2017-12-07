<%-- 
    Document   : videopreview
    Created on : Dec 6, 2017, 6:44:15 PM
    Author     : cristina
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        
        <%!
            String pat = "";
        %>
        <%
            if(request.getAttribute("urlVideo") != null){
                pat = (String) request.getAttribute("urlVideo");
                 response.sendRedirect("jsp/videopreview.jsp");
            }
           
        %>
        
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" type="text/css" href="../css/desing.css">
        
        <title>ART3TUBE</title>
        
    </head>
    <body>      
        <div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=272761536580172';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

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

</br>
</br>

<div class = "container">     
</br>
</br>
    
        <input type="text" id="titlevideo" name="TitulodelVideo" value="Titulo del Video" readonly>
        <br>
        
    <div id="video">
        <video width="700px" height="420px" controls>
            <source src=<%=pat%> type="video/mp4">
            Your browser does not support HTML5 video.
        </video>
    </div>

        <span id="vistas">Vistas
         <input type="text" id="views" name="visitasdelvideo" value="500" readonly>   
        </span>
        
        <span id="barritainfo">
            <img src="../img/like.png" id="viewfav" width="20px" height="20px"> 
            <input type="text" id="viewfav2" name="favsdelvideo" value="5" readonly>
            &nbsp;
            <img src="../img/manita.png" id="viewlike2"  width="20px" height="20px">
            <input type="text" id="viewlike" name="likesdelvideo" value="100" readonly>
    
        </span>
        
    <br>
        <input type="text" id="autorvideo" name="AutordelVideo" value="Autor del Video" readonly>
        <span>
        <input type="button" id="follow" name="seguir" value="SEGUIR" readonly>
        <span id="seguirts"></span>
        </span>
       
    <br>
    <br>
    <br>    
    
    <form>
       
        <div id="movcoment2">
        <input type="button" id="coment2" name="comentar" value="COMENTAR" readonly>
        </div>

        <div id="boxi">
        <input type="textbox" id="coment" name="boxcom" placeholder="Escribe un comentario">
        </div>
        
        <br>
        <br>
        <br>
       
        <div id="coment-section">
       <label>COMENTARIOS</label>
       <span id="move-li"> 
        <ul id= "lista">	
            
            </ul>
           <span>   
       </div>
  <!-- <div class="fb-comments" data-href="http://localhost:8080/arTube/jsp/videopreview.jsp" data-numposts="5"></div>-->     
    </form>
    
    
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
