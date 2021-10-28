
package com.advs.WebApp;

import Model.Reservas;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author David Vargas
 */
public interface InterfaceReservas extends CrudRepository<Reservas,Integer>{
    
}
