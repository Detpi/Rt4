
package com.advs.WebApp;

import Model.Reservas;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
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
    public Optional <Reservas> getReservas(int id){
        return metodosCrud.getReservas(id);
    }
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

    public boolean deleteReservation(int reservationId) {
        Boolean aBoolean = getReservas(reservationId).map(reservation -> {
            metodosCrud.delete(reservation);
            return true;
        }).orElse(false);
        return aBoolean;
    } 
}
