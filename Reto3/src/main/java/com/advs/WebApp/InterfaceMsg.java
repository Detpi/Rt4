
package com.advs.WebApp;

import Model.Mensajes;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author David Vargas
 */
public interface InterfaceMsg extends CrudRepository<Mensajes,Integer>{
    
}
