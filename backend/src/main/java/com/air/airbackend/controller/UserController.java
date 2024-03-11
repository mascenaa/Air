package com.air.airbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
     public List<User> getUser() {
          if (userService.getUsers().isEmpty()) {
               logger.info("Não há usuários cadastrados!");
          }
          return userService.getUsers();
     }

     @PostMapping
     public String addUser(@RequestBody User user) {

          /*
           * Exemplo de requisição POST para adicionar um usuário:
           * "email": "joao@mascenaa.com",
           * "nome": "João Mascena",
           * "passagens_favoritas": [],
           * "senha": "*************"
           */

          logger.info("Nome: {}", user.getNome());
          logger.info("Email: {}", user.getEmail());
          logger.info("Senha: {}", user.getSenha());
          userService.saveUser(user);

          return "Usuário cadastrado com sucesso!";
     }

}
