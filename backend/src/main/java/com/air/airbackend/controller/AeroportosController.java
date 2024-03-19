package com.air.airbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.air.airbackend.model.Aeroportos;
import com.air.airbackend.service.AeroportosService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/aeroportos")
public class AeroportosController {

     @Autowired
     private AeroportosService AeroportosService;

     @GetMapping
     public ResponseEntity<List<Aeroportos>> getAeroportos() {
          List<Aeroportos> aeroportos = AeroportosService.getAeroportos();
          return ResponseEntity.ok(aeroportos);
     }

     @GetMapping("/id/{id}")
     public ResponseEntity<Aeroportos> getAeroportosById(@PathVariable Long id) {
          Aeroportos aeroporto = AeroportosService.getAeroportosById(id);
          return ResponseEntity.ok(aeroporto);
     }

     @GetMapping("/iata/{iata}")
     public ResponseEntity<List<Aeroportos>> getAeroportosBy(@PathVariable String iata) {
          if (iata.length() != 3)
               throw new IllegalArgumentException("IATA deve ter 3 caracteres");
          if (AeroportosService.getAeroportosByIata(iata.toUpperCase()).isEmpty())
               return ResponseEntity.noContent().build();

          List<Aeroportos> aeroportos = AeroportosService.getAeroportosByIata(iata.toUpperCase());
          return ResponseEntity.ok(aeroportos);
     }

     @GetMapping("/search/{search}")
     public ResponseEntity<List<Aeroportos>> getAeroportosBySearch(@PathVariable String search) {
          List<Aeroportos> aeroportos = AeroportosService.getAeroportosBySearch(search.toUpperCase());
          return ResponseEntity.ok(aeroportos);
     }

}
