
package com.advs.WebApp;

import Model.Categorias;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author David Vargas
 */
@RestController
@RequestMapping("/api/Category/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class WebCategoria {
    @Autowired
    private ServicesCtgr servicios;
    @GetMapping("/all")
    public List<Categorias> getCategorias(){
        return servicios.getAll();
    }
    @GetMapping("/{id}")
    public Optional<Categorias> getCategorias(@PathVariable("id") int id) {
        return servicios.getCategorias(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Categorias save(@RequestBody Categorias categorias) {
        return servicios.save(categorias);
    }
 @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Categorias update(@RequestBody Categorias categoria) {
        return servicios.update(categoria);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int categoriaId) {
        return servicios.deletecategoria(categoriaId);
    }
    
}