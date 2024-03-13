package com.air.airbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.air.airbackend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

     User findByEmailAndSenha(String email, String senha);
}
