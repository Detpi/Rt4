/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.advs.WebApp;

import Model.Clientes;

/**
 *
 * @author TATIANA
 */
public class ContadorClientes {
    
     private Long total;
     private Clientes clientes;

    public ContadorClientes(Long total, Clientes clientes) {
        this.total = total;
        this.clientes = clientes;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    public Clientes getClientes() {
        return clientes;
    }

    public void setClientes(Clientes clientes) {
        this.clientes = clientes;
    }
     
}
