
package com.advs.WebApp;

import Model.Reservas;
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
@RequestMapping("/api/Reservation/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class WebReservas {
    @Autowired
    private ServicesReservas servicios;
    @GetMapping("/all")
    public List<Reservas> getReservas(){
        return servicios.getAll();
    }
    @GetMapping("/{id}")
    public Optional<Reservas> getReservas(@PathVariable("id") int id) {
        return servicios.getReservas(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservas save(@RequestBody Reservas reservas) {
        return servicios.save(reservas);
    }
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservas update(@RequestBody Reservas reservation) {
        return servicios.update(reservation);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int reservationId) {
        return servicios.deleteReservation(reservationId);
    }
}