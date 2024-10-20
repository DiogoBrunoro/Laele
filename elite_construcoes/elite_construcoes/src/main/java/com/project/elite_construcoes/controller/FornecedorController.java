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

import com.project.elite_construcoes.DAO.IFornecedor;
import com.project.elite_construcoes.model.Fornecedor;

@RestController
@CrossOrigin("*")
@RequestMapping("/fornecedores")
public class FornecedorController {

@Autowired
private IFornecedor dao;

@GetMapping
public List<Fornecedor> listaFornecedores () {
    return (List<Fornecedor>) dao.findAll();
}

@PostMapping
public ResponseEntity<Fornecedor> criarFornecedor(@RequestBody Fornecedor fornecedor) {
    try {
        Fornecedor fornecedorNovo = dao.save(fornecedor);
        return ResponseEntity.ok(fornecedorNovo); 
    } catch (Exception e) {
        // Log do erro para rastreamento
        System.err.println("Erro ao criar fornecedor: " + e.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                             .body(null); // Retorna um erro 500
    }
}

@PutMapping
public Fornecedor editarFornecedor(@RequestBody Fornecedor fornecedor){
    Fornecedor fornecedorNovo = dao.save(fornecedor);
    return fornecedorNovo;
}

@DeleteMapping("/{id}")
public Optional<Fornecedor> excluirFornecedor (@PathVariable Integer id){
    Optional<Fornecedor> fornecedor = dao.findById(id);
    dao.deleteById(id);
    return fornecedor;
}

}
