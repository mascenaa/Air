package com.air.airbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.air.airbackend.model.Aeroportos;
import com.air.airbackend.repository.AeroportosRepository;

@Service
public class AeroportosService {

     @Autowired
     private AeroportosRepository aeroportosRepository;

     public List<Aeroportos> getAeroportos() {
          return aeroportosRepository.findAll();
     }

     public List<Aeroportos> getAeroportosByIata(String codigoIata) {
          return aeroportosRepository.findByCodigoIata(codigoIata);
     }

     public List<Aeroportos> getAeroportosBySearch(String search) {
          return aeroportosRepository.findByNomeContaining(search);
     }

     public Aeroportos getAeroportosById(Long id) {
          return aeroportosRepository.findById(id).orElse(null);
     }

     public Aeroportos saveAeroportos(Aeroportos aeroportos) {
          return aeroportosRepository.save(aeroportos);
     }

     public String deleteAeroportos(Long id) {
          aeroportosRepository.deleteById(id);
          return "Aeroportos removed !! " + id;
     }

     public Aeroportos updateAeroportos(Aeroportos aeroportos) {
          Aeroportos existingAeroportos = aeroportosRepository.findById(aeroportos.getId()).orElse(null);
          existingAeroportos.setNome(aeroportos.getNome());
          existingAeroportos.setCidade(aeroportos.getCidade());
          existingAeroportos.setPais(aeroportos.getPais());
          return aeroportosRepository.save(existingAeroportos);
     }

}
