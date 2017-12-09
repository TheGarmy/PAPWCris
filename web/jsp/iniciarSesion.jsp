<%-- 
    Document   : iniciarSesion
    Created on : 4/11/2017, 11:43:07 AM
    Author     : garmy
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page session="true"%>
<!DOCTYPE html>
<html>
<head>
	<title>ART3TUBE</title>
	<meta charset="UTF-8">
	<!-- Librerias -->

	<link rel="stylesheet" type="text/css" href="../css/designr.css">
        
   </head>
<body>
    <%!
        String texto = "";
    %>
    <%

        if(request.getAttribute("rellenado") != null){
            if((String)request.getAttribute("rellenado") == "falso"){
                texto = (String)request.getAttribute("comentario");
                response.sendRedirect("jsp/iniciarSesion.jsp");
            }else{
                if("falso" == (String)request.getAttribute("encontrado")){
                    texto = (String)request.getAttribute("comentario");
                    response.sendRedirect("jsp/iniciarSesion.jsp");
                }else{
                    HttpSession sesion = request.getSession();
                    int nivel = 0;
                    if (request.getAttribute("nivel") != null) {
                        nivel = (Integer) request.getAttribute("nivel");
                        if (nivel == 1) {
                            sesion.setAttribute("nombre", request.getAttribute("nombre"));
                            sesion.setAttribute("nivel", nivel);
                            sesion.setAttribute("idUsuario", request.getAttribute("idUsuario"));
                            response.sendRedirect("jsp/indexAdmin.jsp");
                        } else {
                            sesion.setAttribute("nombre", request.getAttribute("nombre"));
                            sesion.setAttribute("nivel", nivel);
                            sesion.setAttribute("idUsuario", request.getAttribute("idUsuario"));
                            response.sendRedirect("jsp/indexlogged.jsp");
                        }
                    
                    }
                }               
            }
        }
    %>

<div id="logo">
  <input class="logo" id="logo" type="button" name="logo" readonly>
</div>
	<!-- Contenedor principal -->
 <div class = "container"> 

	<!-- Saltos-->
	</br>
        
        <h2>¡Inicia sesión!</h2>
       
        <!-- Saltos-->
	</br>	
        <form action="/arTube/clogin.do" id="forminicio" method="post">
            <div class="process">
                <span> Correo electrónico </span>
                </br>	
                <input type="textbox" class="infobox" id="infobox" name="email" placeholder="Ej. art3tube@xxx">
                </br>
                </br>

                <span> Contraseña </span>
                </br>	
                <input type="password" class="infobox" id="infobox2" name="pass" placeholder="Minimo 8 caracteres">
                <input type="button" class = "eyepass" id="eyepass" name="eye" readonly>        
                
                <span class="promo"> <a href="register.jsp" style = "text-decoration: none;">¿No tienes cuenta? Regístrate aquí.</a></span>

                <!-- Saltos-->
                </br>
                </br>

                <input type="submit" class="ido" id="ido" name="confirmado" value="ACEPTAR" readonly>
        </br>
	</br>
	</br>

            </div>
            
        </form>
</div>
            <script language="javascript" type="text/javascript" src="../js/jquery-3.2.1.min.js"></script>
            <script language="javascript" type="text/javascript" src="../js/scripts.js"></script>
</body>
</html>
