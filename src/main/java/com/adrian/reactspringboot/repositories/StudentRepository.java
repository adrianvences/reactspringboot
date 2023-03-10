package com.adrian.reactspringboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.adrian.reactspringboot.models.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {
  
}
