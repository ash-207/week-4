package com.example.myapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.myapp.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

    
} 