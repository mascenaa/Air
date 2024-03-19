package com.air.airbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "aeroportos")
public class Aeroportos {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;

     private String nome;
     private String cidade;
     private String pais;
     private String codigoIata;

     public Aeroportos() {
     }

     public Aeroportos(Long id, String nome, String cidade, String pais, String codigoIata) {
          this.id = id;
          this.nome = nome;
          this.cidade = cidade;
          this.pais = pais;
          this.codigoIata = codigoIata;
     }

     public Long getId() {
          return id;
     }

     public void setId(Long id) {
          this.id = id;
     }

     public String getNome() {
          return nome;
     }

     public void setNome(String nome) {
          this.nome = nome;
     }

     public String getCidade() {
          return cidade;
     }

     public void setCidade(String cidade) {
          this.cidade = cidade;
     }

     public String getPais() {
          return pais;
     }

     public void setPais(String pais) {
          this.pais = pais;
     }

     public String getCodigoIata() {
          return codigoIata;
     }

     public void setCodigoIata(String codigoIata) {
          this.codigoIata = codigoIata;
     }

}
