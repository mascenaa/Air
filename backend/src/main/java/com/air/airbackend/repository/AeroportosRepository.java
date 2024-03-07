package com.air.airbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.air.airbackend.model.Aeroportos;

@Repository
public interface AeroportosRepository extends JpaRepository<Aeroportos, Long> {
}
