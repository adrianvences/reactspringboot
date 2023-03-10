package com.adrian.reactspringboot.services;

import java.util.List;

import com.adrian.reactspringboot.models.Student;

public interface StudentService {
  public Student saveStudent(Student student);
  public List<Student> getAllStudents(); 
}
