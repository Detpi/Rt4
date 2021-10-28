
package com.advs.WebApp;

import Model.Mensajes;
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
@RequestMapping("/api/Message/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class WebMsg {
    @Autowired
    private ServicesMsg servicios;
    @GetMapping("/all")
    public List<Mensajes> getMensajes(){
        return servicios.getAll();
    }
    @GetMapping("/{id}")
    public Optional<Mensajes> getMensajes(@PathVariable("id") int id) {
        return servicios.getMensajes(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Mensajes save(@RequestBody Mensajes mensajes) {
        return servicios.save(mensajes);
    }
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Mensajes update(@RequestBody Mensajes message) {
        return servicios.update(message);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int messageId) {
        return servicios.deleteMessage(messageId);
    }
}