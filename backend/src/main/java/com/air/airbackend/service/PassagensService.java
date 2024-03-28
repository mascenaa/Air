package com.air.airbackend.service;

import java.net.http.HttpClient;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.air.airbackend.model.Passagens;
import com.air.airbackend.repository.PassagensRepository;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class PassagensService {

     private WebClient webClient;

     public void MyService(WebClient.Builder webClientBuilder) {
          this.webClient = webClientBuilder.baseUrl("https://serpapi.com/").build();
     }

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

     public String searchPassagens(Passagens passagens) {
          // String uri = String.format(
          // "search.json?engine=google_flights&departure_id=%s&arrival_id=%s&gl=%s&hl=%s&currency=%s&outbound_date=%s&return_date=%s&api_key=%s",
          // passagens.getDepartureId(), passagens.getArrivalId(), passagens.getGl(),
          // passagens.getHl(),
          // passagens.getCurrency(), passagens.getOutboundDate(),
          // passagens.getReturnDate(), passagens.getApiKey()
          // )

          // webClient.get()
          // .uri("search.json?engine=google_flights&departure_id=???&arrival_id=???&gl=???&hl=???&currency=???&outbound_date=???&return_date=???&api_key=???")
          // .retrieve()
          // .bodyToMono(String.class)
          // .subscribe(data -> {
          // System.out.println(data);
          // });
          return "Passagens found !!";
     }
}