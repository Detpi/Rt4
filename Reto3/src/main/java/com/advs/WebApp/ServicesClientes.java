package com.advs.WebApp;

import Model.Clientes;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author David Vargas
 */
@Service
public class ServicesClientes {
    
    @Autowired
    private RepositoryClientes metodosCrud;
    
    public List<Clientes> getAll(){
        return metodosCrud.getAll();
    }
    public Optional <Clientes> getClientes(int id){
        return metodosCrud.getClientes(id);
    }
    public Clientes save(Clientes clientes){
        if(clientes.getIdClient()==null){
            return metodosCrud.save(clientes);
        }else{
            Optional <Clientes> evt=metodosCrud.getClientes(clientes.getIdClient());
            if(evt.isEmpty()){
                return metodosCrud.save(clientes);
            }else{
                return clientes;
            }
        }
        
    }
   public Clientes update(Clientes client){
        if(client.getIdClient()!=null){
            Optional<Clientes> e= metodosCrud.getClientes(client.getIdClient());
            if(!e.isEmpty()){
                if(client.getName()!=null){
                    e.get().setName(client.getName());
                }
                if(client.getAge()!=null){
                    e.get().setAge(client.getAge());
                }
                if(client.getPassword()!=null){
                    e.get().setPassword(client.getPassword());
                }
                metodosCrud.save(e.get());
                return e.get();
            }else{
                return client;
            }
        }else{
            return client;
        }
    }

    public boolean deleteClient(int clientId) {
        Boolean aBoolean = getClientes(clientId).map(client -> {
            metodosCrud.delete(client);
            return true;
        }).orElse(false);
        return aBoolean;
    } 
}
