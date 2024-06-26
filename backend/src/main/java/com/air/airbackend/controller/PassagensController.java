package com.air.airbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.air.airbackend.model.Passagens;
import com.air.airbackend.service.PassagensService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/passagens")
public class PassagensController {

     @Autowired
     private PassagensService passagensService;

     @GetMapping
     public List<Passagens> getPassagens() {
          return passagensService.getPassagens();
     }

     @GetMapping("/{id}")
     public Passagens getPassagensById(Long id) {
          return passagensService.getPassagensById(id);
     }

     @PostMapping
     public Passagens savePassagens(@RequestBody Passagens passagens) {
          return passagensService.savePassagens(passagens);
     }

     // EU tenho uma Api que retorna uma lista de passagens baseado no body do post
     @PostMapping("/search")
     public String searchPassagens(@RequestBody Passagens passagens) {
          return passagensService.searchPassagens(passagens);
     }
}
