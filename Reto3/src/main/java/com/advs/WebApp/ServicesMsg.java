
package com.advs.WebApp;

import Model.Mensajes;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author David Vargas
 */
@Service
public class ServicesMsg {
    @Autowired
    private RepositoryMsg metodosCrud;
    
    public List<Mensajes> getAll(){
        return metodosCrud.getAll();
    }
    public Optional <Mensajes> getMensajes(int id){
        return metodosCrud.getMensajes(id);
    }
    public Mensajes save(Mensajes mensajes){
        if(mensajes.getIdMessage()==null){
            return metodosCrud.save(mensajes);
        }else{
            Optional <Mensajes> evt=metodosCrud.getMensajes(mensajes.getIdMessage());
            if(evt.isEmpty()){
                return metodosCrud.save(mensajes);
            }else{
                return mensajes;
            }
        }
        
    }    
  public Mensajes update(Mensajes message){
        if(message.getIdMessage()!=null){
            Optional<Mensajes> e= metodosCrud.getMensajes(message.getIdMessage());
            if(!e.isEmpty()){
                if(message.getMessageText()!=null){
                    e.get().setMessageText(message.getMessageText());
                }
                metodosCrud.save(e.get());
                return e.get();
            }else{
                return message;
            }
        }else{
            return message;
        }
    }

    public boolean deleteMessage(int messageId) {
        Boolean aBoolean = getMensajes(messageId).map(message -> {
            metodosCrud.delete(message);
            return true;
        }).orElse(false);
        return aBoolean;
    }  
}
