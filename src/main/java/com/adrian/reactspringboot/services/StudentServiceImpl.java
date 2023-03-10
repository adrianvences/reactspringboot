package com.adrian.reactspringboot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adrian.reactspringboot.models.Student;
import com.adrian.reactspringboot.repositories.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

  @Autowired
  private StudentRepository studentRepository;

  @Override
  public Student saveStudent(Student student) {
    return studentRepository.save(student);
  }
  
  @Override
  public List<Student> getAllStudents() {
    return studentRepository.findAll();
  }

}
