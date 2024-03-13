package com.air.airbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.air.airbackend.model.User;
import com.air.airbackend.repository.UserRepository;

@Service
public class UserService {

     @Autowired
     private UserRepository userRepository;

     public List<User> getUsers() {
          return userRepository.findAll();
     }

     public User getUserById(Long id) {
          return userRepository.findById(id).orElse(null);
     }

     public User saveUser(User user) {
          return userRepository.save(user);
     }

     public String deleteUser(Long id) {
          userRepository.deleteById(id);
          return "User removed !! " + id;
     }

     public User updateUser(User user) {
          User existingUser = userRepository.findById(user.getId()).orElse(null);
          existingUser.setNome(user.getNome());
          existingUser.setSenha(user.getSenha());
          return userRepository.save(existingUser);
     }

     public User updatePassagensFavoritas(User user) {
          User existingUser = userRepository.findById(user.getId()).orElse(null);
          existingUser.setPassagensFavoritas(user.getPassagensFavoritas());
          return userRepository.save(existingUser);
     }

     public User authUser(String email, String senha) {
          return userRepository.findByEmailAndSenha(email, senha);
     }

}
