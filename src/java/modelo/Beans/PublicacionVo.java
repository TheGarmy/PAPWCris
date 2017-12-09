/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo.Beans;

/**
 *
 * @author garmy
 */
public class PublicacionVo {
    private int idPublicacion;
    private String fechaPublicacion;
    private String tituloPublicacion;
    private String videoPublicacion;
    private String descripcionPublicacion;
    private int reproduccionPublicacion;
    private int idUsuarioFP;

    public PublicacionVo(String fechaPublicacion, String tituloPublicacion, String videoPublicacion, int idUsuarioFP) {
        this.fechaPublicacion = fechaPublicacion;
        this.tituloPublicacion = tituloPublicacion;
        this.videoPublicacion = videoPublicacion;
        this.idUsuarioFP = idUsuarioFP;
    }
    
    

    public int getIdPublicacion() {
        return idPublicacion;
    }

    public void setIdPublicacion(int idPublicacion) {
        this.idPublicacion = idPublicacion;
    }

    public String getFechaPublicacion() {
        return fechaPublicacion;
    }

    public void setFechaPublicacion(String fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    }

    public String getTituloPublicacion() {
        return tituloPublicacion;
    }

    public void setTituloPublicacion(String tituloPublicacion) {
        this.tituloPublicacion = tituloPublicacion;
    }

    public String getVideoPublicacion() {
        return videoPublicacion;
    }

    public void setVideoPublicacion(String videoPublicacion) {
        this.videoPublicacion = videoPublicacion;
    }

    public String getDescripcionPublicacion() {
        return descripcionPublicacion;
    }

    public void setDescripcionPublicacion(String descripcionPublicacion) {
        this.descripcionPublicacion = descripcionPublicacion;
    }

    public int getReproduccionPublicacion() {
        return reproduccionPublicacion;
    }

    public void setReproduccionPublicacion(int reproduccionPublicacion) {
        this.reproduccionPublicacion = reproduccionPublicacion;
    }

    public int getIdUsuarioFP() {
        return idUsuarioFP;
    }

    public void setIdUsuarioFP(int idUsuarioFP) {
        this.idUsuarioFP = idUsuarioFP;
    }
    
    
}
