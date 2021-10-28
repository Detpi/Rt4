
package com.advs.WebApp;

import Model.Clientes;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author David Vargas
 */
public interface InterfaceClientes extends CrudRepository<Clientes,Integer>{
    
}
