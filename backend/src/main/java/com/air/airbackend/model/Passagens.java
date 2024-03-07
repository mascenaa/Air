package com.air.airbackend.model;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "scrapping_passagens")
public class Passagens {
     @Id
     private UUID uuid;
     private String companhiaAerea;
     private String hrIda;
     private String hrChegada;
     private Integer nrParadas;
     private String hrsParada;
     private String tempoVoo;
     private Double valor;
     private String aeroSaida;
     private String aeroDestino;
     private String classe;
     private Integer nrPessoas;
     private String tipoPessoas;
     private Boolean idaVolta;

     public Passagens() {
     }

     public Passagens(Builder builder) {
          this.uuid = UUID.randomUUID();
          this.companhiaAerea = builder.companhiaAerea;
          this.hrIda = builder.hrIda;
          this.hrChegada = builder.hrChegada;
          this.nrParadas = builder.nrParadas;
          this.hrsParada = builder.hrsParada;
          this.tempoVoo = builder.tempoVoo;
          this.valor = builder.valor;
          this.aeroSaida = builder.aeroSaida;
          this.aeroDestino = builder.aeroDestino;
          this.classe = builder.classe;
          this.nrPessoas = builder.nrPessoas;
          this.tipoPessoas = builder.tipoPessoas;
          this.idaVolta = builder.idaVolta;
     }

     public UUID getUuid() {
          return uuid;
     }

     public static class Builder {
          private String companhiaAerea;
          private String hrIda;
          private String hrChegada;
          private Integer nrParadas;
          private String hrsParada;
          private String tempoVoo;
          private Double valor;
          private String aeroSaida;
          private String aeroDestino;
          private String classe;
          private Integer nrPessoas;
          private String tipoPessoas;
          private Boolean idaVolta;

          public Passagens build() {
               return new Passagens(this);
          }
     }

     public void setUuid(UUID uuid) {
          this.uuid = uuid;
     }

     public String getCompanhiaAerea() {
          return companhiaAerea;
     }

     public void setCompanhiaAerea(String companhiaAerea) {
          this.companhiaAerea = companhiaAerea;
     }

     public String getHrIda() {
          return hrIda;
     }

     public void setHrIda(String hrIda) {
          this.hrIda = hrIda;
     }

     public String getHrChegada() {
          return hrChegada;
     }

     public void setHrChegada(String hrChegada) {
          this.hrChegada = hrChegada;
     }

     public Integer getNrParadas() {
          return nrParadas;
     }

     public void setNrParadas(Integer nrParadas) {
          this.nrParadas = nrParadas;
     }

     public String getHrsParada() {
          return hrsParada;
     }

     public void setHrsParada(String hrsParada) {
          this.hrsParada = hrsParada;
     }

     public String getTempoVoo() {
          return tempoVoo;
     }

     public void setTempoVoo(String tempoVoo) {
          this.tempoVoo = tempoVoo;
     }

     public Double getValor() {
          return valor;
     }

     public void setValor(Double valor) {
          this.valor = valor;
     }

     public String getAeroSaida() {
          return aeroSaida;
     }

     public void setAeroSaida(String aeroSaida) {
          this.aeroSaida = aeroSaida;
     }

     public String getAeroDestino() {
          return aeroDestino;
     }

     public void setAeroDestino(String aeroDestino) {
          this.aeroDestino = aeroDestino;
     }

     public String getClasse() {
          return classe;
     }

     public void setClasse(String classe) {
          this.classe = classe;
     }

     public Integer getNrPessoas() {
          return nrPessoas;
     }

     public void setNrPessoas(Integer nrPessoas) {
          this.nrPessoas = nrPessoas;
     }

     public String getTipoPessoas() {
          return tipoPessoas;
     }

     public void setTipoPessoas(String tipoPessoas) {
          this.tipoPessoas = tipoPessoas;
     }

     public Boolean getIdaVolta() {
          return idaVolta;
     }

     public void setIdaVolta(Boolean idaVolta) {
          this.idaVolta = idaVolta;
     }

}
