package com.air.airbackend.model;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;

     private String nome;
     @Column(unique = true)
     private String email;

     private String senha;
     private UUID[] passagensFavoritas;
     private Integer pontos;

     public User() {
     }

     public User(String nome, String email, String senha, Integer pontos) {
          this.nome = nome;
          this.email = email;
          this.senha = hashSenha(senha);
          this.passagensFavoritas = new UUID[0];
          this.pontos = pontos;
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

     public String getEmail() {
          return email;
     }

     public void setEmail(String email) {
          this.email = email;
     }

     public String getSenha() {
          return senha;
     }

     public void setSenha(String senha) {
          this.senha = hashSenha(senha);
     }

     public UUID[] getPassagensFavoritas() {
          return passagensFavoritas;
     }

     public void setPassagensFavoritas(UUID[] passagensFavoritas) {
          this.passagensFavoritas = passagensFavoritas;
     }

     public void addPassagemFavorita(UUID passagem) {
          List<UUID> list = new ArrayList<UUID>();
          for (UUID p : this.passagensFavoritas) {
               list.add(p);
          }
          list.add(passagem);
          this.passagensFavoritas = list.toArray(new UUID[0]);
     }

     public void removePassagemFavorita(UUID passagem) {
          List<UUID> list = new ArrayList<UUID>();
          for (UUID p : this.passagensFavoritas) {
               if (!p.equals(passagem)) {
                    list.add(p);
               }
          }
          this.passagensFavoritas = list.toArray(new UUID[0]);
     }

     public Integer getPontos() {
          return pontos;
     }

     public void setPontos(Integer pontos) {
          this.pontos = pontos;
     }

     private String hashSenha(String senha) {
          try {
               MessageDigest md = MessageDigest.getInstance("SHA-256");
               byte[] hash = md.digest(senha.getBytes());
               StringBuilder sb = new StringBuilder();
               for (byte b : hash) {
                    sb.append(String.format("%02x", b));
               }
               return sb.toString();
          } catch (NoSuchAlgorithmException e) {
               e.printStackTrace();
               return senha;
          }
     }

     public boolean findByEmailAndSenha(String email, String senha) {
          if (this.email.equals(email) && this.senha.equals(hashSenha(senha))) {
               return true;
          }

          return false;
     }
}
