package com.air.airbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.air.airbackend.model.Passagens;

@EnableJpaRepositories
@Repository
public interface PassagensRepository extends JpaRepository<Passagens, Long> {
}
