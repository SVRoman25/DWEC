package com.jacaranda.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jacaranda.entity.Cliente;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, String>{
	
	public Cliente findClienteByDni(String dni);
	
	public Cliente save(Cliente cliente);
	
	public List<Cliente>findByNombre(String nombre);
	
	
}
