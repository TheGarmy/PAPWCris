package controlador;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;
import modelo.Beans.PublicacionVo;
import modelo.Dao.PublicacionDao;

/**
 *
 * @author garmy
 */
@MultipartConfig(fileSizeThreshold=1024*1024*10,    // 10 MB 
                 maxFileSize=1024*1024*50,          // 50 MB
                 maxRequestSize=1024*1024*100)      // 100 MB
public class CSubirArchivo extends HttpServlet {
    
    // nombre de carpeta donde se va a guardar 
    private static final String SAVE_DIR = "uploadFiles";
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        RequestDispatcher rd = null;
       
        // path absoluto de la aplicacion
        String appPath = request.getServletContext().getRealPath("");
        //path con el nombre de la carpeta
        String savePath = appPath + File.separator + SAVE_DIR;

        // crea la carpeta si no existe
        File fileSaveDir = new File(savePath);
        if (!fileSaveDir.exists()) {
            fileSaveDir.mkdir();
        }

        Part filePart = request.getPart("file");
        String fileName = extractFileName(filePart);
        // refines the fileName in case it is an absolute path
        fileName = new File(fileName).getName();
        filePart.write(savePath + File.separator + fileName);

        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd HH-mm-ss");
        System.out.print(sdf.format(date));
        String fecha  = sdf.format(date);
        String urlVideo = ".." + File.separator +  File.separator + "uploadFiles" + File.separator + File.separator + fileName;
        String titulo = request.getParameter("TitulodelVideo");
        Integer usuarioP = (Integer)request.getSession().getAttribute("idUsuario");
     
        PublicacionVo miPublicacion =  new PublicacionVo(fecha,titulo,urlVideo,usuarioP );
        boolean guardo = PublicacionDao.guardarPublicacion(miPublicacion);
        if (guardo) {
            request.setAttribute("confirmacion", "subido");
            request.setAttribute("urlVideo", miPublicacion.getVideoPublicacion());
            request.setAttribute("titulo", miPublicacion.getTituloPublicacion());
            rd=request.getRequestDispatcher("/jsp/videopreview.jsp");
        } else {
            rd=request.getRequestDispatcher("nocreado.jsp");
        }
        rd.forward(request, response);
    }
    
    /**
     * Extracts file name from HTTP header content-disposition
     */
    private String extractFileName(Part part) {
        String contentDisp = part.getHeader("content-disposition");
        String[] items = contentDisp.split(";");
        for (String s : items) {
            if (s.trim().startsWith("filename")) {
                return s.substring(s.indexOf("=") + 2, s.length() - 1);
            }
        }
        return "";

    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
