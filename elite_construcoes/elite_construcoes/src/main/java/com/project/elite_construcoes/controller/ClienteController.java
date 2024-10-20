package com.project.elite_construcoes.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.elite_construcoes.DAO.ICliente;
import com.project.elite_construcoes.model.Cliente;
    
@RestController
@CrossOrigin("*")
@RequestMapping("/clientes")
public class ClienteController{
    
@Autowired
private ICliente dao;

@GetMapping
public List<Cliente> listaClientes () {
    return (List<Cliente>) dao.findAll();
 }

@PostMapping
public ResponseEntity<Cliente> criarCliente(@RequestBody Cliente cliente) {
    try {
        Cliente clienteNovo = dao.save(cliente);
        return ResponseEntity.ok(clienteNovo); // Retorna o cliente criado
    } catch (Exception e) {
        // Log do erro para rastreamento
        System.err.println("Erro ao criar cliente: " + e.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                             .body(null); // Retorna um erro 500
    }
}

@PutMapping
public Cliente editarCliente(@RequestBody Cliente cliente){
    Cliente clienteNovo = dao.save(cliente);
    return clienteNovo;
}

@DeleteMapping("/{id}")
public Optional<Cliente> excluirCliente (@PathVariable Integer id){
    Optional<Cliente> cliente = dao.findById(id);
    dao.deleteById(id);
    return cliente;
}
}
