package com.advs.WebApp;

import Model.Motos;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author David Vargas
 */
@Service
public class ServicesMotos {
    
    @Autowired
    private RepositoryMotos metodosCrud;
    
    public List<Motos> getAll(){
        return metodosCrud.getAll();
    }
    public Optional <Motos> getMotos(int id){
        return metodosCrud.getMotos(id);
    }
    public Motos save(Motos motos){
        if(motos.getId()==null){
            return metodosCrud.save(motos);
        }else{
            Optional <Motos> evt=metodosCrud.getMotos(motos.getId());
            if(evt.isEmpty()){
                return metodosCrud.save(motos);
            }else{
                return motos;
            }
        }
        
    }
    public Motos update(Motos motos){
        if(motos.getId()!=null){
            Optional<Motos> e=metodosCrud.getMotos(motos.getId());
            if(!e.isEmpty()){
                if(motos.getName()!=null){
                    e.get().setName(motos.getName());
                }
                if(motos.getBrand()!=null){
                    e.get().setBrand(motos.getBrand());
                }
                if(motos.getYear()!=null){
                    e.get().setYear(motos.getYear());
                }
                if(motos.getDescription()!=null){
                    e.get().setDescription(motos.getDescription());
                }
                if(motos.getCategory()!=null){
                    e.get().setCategory(motos.getCategory());
                }
                metodosCrud.save(e.get());
                return e.get();
            }else{
                return motos;
            }
        }else{
            return motos;
        }
    }


    public boolean deleteMotos(int motosId) {
        Boolean aBoolean = getMotos(motosId).map(motos -> {
            metodosCrud.delete(motos);
            return true;
        }).orElse(false);
        return aBoolean;
    }
}
