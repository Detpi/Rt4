
package com.advs.WebApp;

import Model.Categorias;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author David Vargas
 */
@Service
public class ServicesCtgr {
    @Autowired
    private RepositoryCtgr metodosCrud;
    
    public List<Categorias> getAll(){
        return metodosCrud.getAll();
    }
    public Optional <Categorias> getCategorias(int id){
        return metodosCrud.getCategorias(id);
    }
    public Categorias save(Categorias categorias){
        if(categorias.getId()==null){
            return metodosCrud.save(categorias);
        }else{
            Optional <Categorias> evt=metodosCrud.getCategorias(categorias.getId());
            if(evt.isEmpty()){
                return metodosCrud.save(categorias);
            }else{
                return categorias;
            }
        }
        
    }    
     public Categorias update(Categorias categoria){
        if(categoria.getId()!=null){
            Optional<Categorias>g=metodosCrud.getCategorias(categoria.getId());
            if(!g.isEmpty()){
                if(categoria.getDescription()!=null){
                    g.get().setDescription(categoria.getDescription());
                }
                if(categoria.getName()!=null){
                    g.get().setName(categoria.getName());
                }
                return metodosCrud.save(g.get());
            }
        }
        return categoria;
    }
    public boolean deletecategoria(int categoriaId){
        Boolean d=getCategorias(categoriaId).map(categoria -> {
            metodosCrud.delete(categoria);
            return true;
        }).orElse(false);
        return d;
    }
}
