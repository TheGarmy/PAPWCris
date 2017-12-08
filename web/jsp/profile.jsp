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
	<!-- Contenedor principal -->
 <div class = "container"> 

<!-- Imagen de usuario -->
        <span class="photo-user" >
        <img src="../img/wall.png" class="fondo" id ="photoback" height="80" width="80">	
        </span>

        <span id="carga-picuser2">
        <input type="file" name="file-7[]" id="file-72" class="inputfile2 inputfile-62" data-multiple-caption="{count} files selected" multiple />
	<label class ="archivo" id= "archivo2" for="file-7"><span></span><strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"></svg>Selecciona un archivo</strong></label>
        </span>        

</br>

        <span>   
         <img src="../img/pencil.png" class="pencil" id ="editado" title="Edita tu informacion" height="30" width="30">  &nbsp;
        <input type="button" class="ido" id="save-change" name="confirmed" value="GUARDAR CAMBIOS" readonly> 
        </span>

        <div id="edita">Edita tu perfil</div>
<!--     
   -->
   </br>
        </br>
	</br>
	</br>
        </br>
	</br>
	</br>
        </br>
	        
        <div class="userinfo">
            <img id ="photoUS" class="userpic" alt ="PP" src="../img/user.png" width="50" height="50">	
 	<div class="movetext"><input class="username" type="textbox" name="Username" placeholder="Tu nombre aqui" readonly></div>
        </div> 
                </br>
        </br>

<span id="carga-picuser">
        <input type="file" name="file-7[]" id="file-7" class="inputfile inputfile-6" data-multiple-caption="{count} files selected" multiple />
	<label id= "archivo" for="file-7"><span></span><strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"></svg>Selecciona un archivo</strong></label>
</span>
 	<!-- Saltos-->
	</br>
	</br>	

        
       
	
   <div class="process">
           <span class="infotitle"> INFORMACIÓN PERSONAL </span>
            
           <div class ="movprocess">	
                    	</br>	
                        <span class="largetext"> Nombre de Usuario </span>
			<input type="textbox" id="infobox2" class="infobox2" name="email" placeholder="Ej. art3tube@xxx">
			</br>
			</br>
                        
			<span class="sizetext">Contraseña</span>	
			<input type="password" id="infobox3"  class="infobox2" name="pass" placeholder="Minimo 8 caracteres">
			<div class = "eyepass"> <img src="../img/eye.png"  width="30px" height="30px"> </div>
			</br>
			</br>	

			<span class="sizetext">Direccion</span>
			<input type="textbox" id="infobox4" class="infobox2" name="email" placeholder="Ej. Wolfstreet 478">
			</br>
			</br>
		
		<!-- Saltos-->
			</br>
			</br>

			
           </br></br></br> 
           </div>
          </div>

<!-- Saltos-->
	</br>
	</br>
	</br>
        </br>
	</br>
	</br>
        </br>
	</br>
	</br>
        </br>
	</br>
	</br>
        </br>
	</br>
	</br>
        </br>
	</br>
        </br>
	</br>
	</br>
        </br>
	
</div>

<!-- Saltos-->
 <script language="javascript" type="text/javascript" src="../js/jquery-3.2.1.min.js"></script>
 <script language="javascript" type="text/javascript" src="../js/scripts.js"></script>
 <script src="../js/custom-file-input.js"></script>
 <script language="javascript" type="text/javascript" src="../js/jquery.qtip.min.js"></script>
 <script language="javascript" type="text/javascript" src="../js/notify.js"></script>
 
    </body>
</html>
