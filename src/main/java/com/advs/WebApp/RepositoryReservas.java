
package com.advs.WebApp;

import Model.Reservas;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author David Vargas
 */
@Repository
public class RepositoryReservas {
    @Autowired
    private InterfaceReservas crud;
    
    public List<Reservas> getAll(){
        return (List<Reservas>) crud.findAll();
    }
    public Optional <Reservas> getReservas(int id){
        return crud.findById(id);
    }
    public Reservas save(Reservas reservas){
        return crud.save(reservas);
    }
        public void delete(Reservas reservas){
        crud.delete(reservas);
        }
}
