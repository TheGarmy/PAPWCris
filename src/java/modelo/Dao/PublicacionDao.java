/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo.Dao;

import com.mysql.jdbc.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;
import modelo.Beans.PublicacionVo;
import modelo.Conexion;

/**
 *
 * @author garmy
 */
public class PublicacionDao {
    
    public static boolean guardarPublicacion(PublicacionVo publicacion){
        boolean agregado = false;
        
        try {
            Conexion c = new Conexion();
            Connection con = c.getConexion();
            if(con != null){
                Statement st;
                st = con.createStatement();
                st.executeUpdate("call sp_agregarVideo('" 
                        + publicacion.getFechaPublicacion() + "', '" 
                        + publicacion.getTituloPublicacion()+ "', '" 
                        + publicacion.getVideoPublicacion() + "', '" 
                        + publicacion.getIdUsuarioFP() + "')");

                agregado = true;
                st.close();
            }
            c.cerrarConexion(); 
        } catch (SQLException e) {
            agregado = false;
            e.printStackTrace();
        }
        return agregado;
    }
    
}
