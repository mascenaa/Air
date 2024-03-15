package com.air.airbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.air.airbackend.model.Passagens;
import com.air.airbackend.repository.PassagensRepository;

@Service
public class PassagensService {

     @Autowired
     private PassagensRepository passagensRepository;

     public List<Passagens> getPassagens() {
          return passagensRepository.findAll();
     }

     public Passagens getPassagensById(Long id) {
          return passagensRepository.findById(id).orElse(null);
     }

     public Passagens savePassagens(Passagens passagens) {
          return passagensRepository.save(passagens);
     }

     public String deletePassagens(Long id) {
          passagensRepository.deleteById(id);
          return "Passagens removed !! " + id;
     }

}