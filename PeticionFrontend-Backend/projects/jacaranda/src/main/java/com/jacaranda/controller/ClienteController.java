package com.jacaranda.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jacaranda.entity.Cliente;

import com.jacaranda.repo.ClienteRepository;

@CrossOrigin(origins = "*")
@RequestMapping("/apiController")
@RestController
public class ClienteController {

	@Autowired
	private ClienteRepository clienteRepository;
	

	
	@PostMapping("/cliente")
	public ResponseEntity<?> añadirCliente(@RequestBody Cliente cli) {
		
		if(clienteRepository.findClienteByDni(cli.getDni())!=null) {
	
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El cliente ya existe");
		}else {
			
			clienteRepository.save(cli);
			return ResponseEntity.status(HttpStatus.CREATED).body("El cliente ha sido creado");

		}
	}
	
	@GetMapping("/cliente/{dni}")
	public ResponseEntity<?> getCliente(@PathVariable String dni) {
		
		if(clienteRepository.findClienteByDni(dni)==null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El cliente no existe");

		}else {
			return ResponseEntity.status(HttpStatus.OK).body(clienteRepository.findClienteByDni(dni));
		}
	}
}
