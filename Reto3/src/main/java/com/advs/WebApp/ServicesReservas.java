
package com.advs.WebApp;

import Model.Reservas;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.core.CrudMethods;
import org.springframework.stereotype.Service;

/**
 *
 * @author David Vargas
 */
@Service
public class ServicesReservas {
    @Autowired
    private RepositoryReservas metodosCrud;
    
    public List<Reservas> getAll(){
        return metodosCrud.getAll();
    }
    /**
     * metodo para obtener dato de la tabla reservaciones por Id
     * @param id
     * @return Optional de clase Reservacion
     */
    public Optional <Reservas> getReservas(int id){
        return metodosCrud.getReservas(id);
    }
    /**
     * metodo para registrar valores en la tabla reservaciones
     * @param reservas
     * @return valor de calse Reservacion
     */
    public Reservas save(Reservas reservas){
        if(reservas.getIdReservation()==null){
            return metodosCrud.save(reservas);
        }else{
            Optional <Reservas> evt=metodosCrud.getReservas(reservas.getIdReservation());
            if(evt.isEmpty()){
                return metodosCrud.save(reservas);
            }else{
                return reservas;
            }
        }
        
    }    
    /**
     * metodo para actualizar un dato de la tabla Reservaciones
     * @param reservation
     * @return valor de calse Reservacion
     */
   public Reservas update(Reservas reservation){
        if(reservation.getIdReservation()!=null){
            Optional<Reservas> e= metodosCrud.getReservas(reservation.getIdReservation());
            if(!e.isEmpty()){

                if(reservation.getStartDate()!=null){
                    e.get().setStartDate(reservation.getStartDate());
                }
                if(reservation.getDevolutionDate()!=null){
                    e.get().setDevolutionDate(reservation.getDevolutionDate());
                }
                if(reservation.getStatus()!=null){
                    e.get().setStatus(reservation.getStatus());
                }
                metodosCrud.save(e.get());
                return e.get();
            }else{
                return reservation;
            }
        }else{
            return reservation;
        }
    }
   /**
     * metodo para borrar un dato de la tabla Reservaciones por Id
     * @param reservationId
     * @return boolean
     */

    public boolean deleteReservation(int reservationId) {
        Boolean aBoolean = getReservas(reservationId).map(reservation -> {
            metodosCrud.delete(reservation);
            return true;
        }).orElse(false);
        return aBoolean;
    } 
    public StatusReservas getRepStatusRes(){
        List<Reservas>completed = metodosCrud.ReservationStatus("completed");
        List<Reservas>cancelled = metodosCrud.ReservationStatus("cancelled");        
        return new StatusReservas(completed.size(),cancelled.size());
    }
    
    public List<Reservas> reporteTiempoServicio (String datoA, String datoB){
        SimpleDateFormat parser = new SimpleDateFormat ("yyyy-MM-dd");
        
        Date datoUno = new Date();
        Date datoDos = new Date();
        
        try{
             datoUno = parser.parse(datoA);
             datoDos = parser.parse(datoB);
        }catch(ParseException evt){
            evt.printStackTrace();
        }if(datoUno.before(datoDos)){
            return metodosCrud.ReservacionTiempoRepositorio(datoUno, datoDos);
        }else{
            return new ArrayList<>();
        } 
    }
    
    public List<ContadorClientes> reporteClientesServicio(){
            return metodosCrud.getClientesRepositorio();
        }
}
