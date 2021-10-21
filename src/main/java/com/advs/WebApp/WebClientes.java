
package com.advs.WebApp;

import Model.Clientes;
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
@RequestMapping("/api/Client/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class WebClientes {
    @Autowired
    private ServicesClientes servicios;
    @GetMapping("/all")
    public List<Clientes> getClientes(){
        return servicios.getAll();
    }
    @GetMapping("/{id}")
    public Optional<Clientes> getClientes(@PathVariable("id") int id) {
        return servicios.getClientes(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Clientes save(@RequestBody Clientes clientes) {
        return servicios.save(clientes);
    }
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Clientes update(@RequestBody Clientes client) {
        return servicios.update(client);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int clientId) {
        return servicios.deleteClient(clientId);
    }
}