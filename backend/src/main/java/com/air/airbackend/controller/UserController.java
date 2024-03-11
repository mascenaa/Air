package com.air.airbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.air.airbackend.model.User;
import com.air.airbackend.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

     @Autowired
     private UserService userService;
     private static final Logger logger = LoggerFactory.getLogger(UserController.class);

     @GetMapping
     public ResponseEntity<List<User>> getUser() {
          List<User> users = userService.getUsers();
          if (users.isEmpty()) {
               logger.info("Não há usuários cadastrados!");
               return ResponseEntity.noContent().build();
          }
          return ResponseEntity.ok(users);
     }

     @GetMapping("/{id}")
     public ResponseEntity<User> getUserById(@PathVariable Long id) {
          User user = userService.getUserById(id);
          if (user == null) {
               logger.info("Usuário não encontrado!");
               return ResponseEntity.notFound().build();
          }
          return ResponseEntity.ok(user);
     }

     @PostMapping
     public String addUser(@RequestBody User user) {
          logger.info("Nome: {}", user.getNome());
          logger.info("Email: {}", user.getEmail());
          logger.info("Senha: {}", user.getSenha());
          userService.saveUser(user);

          return "Usuário cadastrado com sucesso!";
     }

     @PutMapping("/password/{id}")
     public ResponseEntity<User> updateUserPassword(@PathVariable Long id, @RequestBody User user) {
          User userToUpdate = userService.getUserById(id);
          if (userToUpdate == null) {
               logger.info("Usuário não encontrado!");
               return ResponseEntity.notFound().build();
          }
          userToUpdate.setSenha(user.getSenha());
          userService.saveUser(userToUpdate);
          return ResponseEntity.ok(userToUpdate);

     }

}
