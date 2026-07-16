package com.example.bankapplication.Controller;

import com.example.bankapplication.dto.LoginRequest;

import com.example.bankapplication.Model.User;

import com.example.bankapplication.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/auth")

@CrossOrigin(origins = "*")

public class AuthController {

    @Autowired

    private UserRepository userRepository;



    @PostMapping("/register")

    public String register(@RequestBody User newUser) {

        if (userRepository.findByUsername(newUser.getUsername()) != null) {

            return "Username already exists!";

        }

        userRepository.save(newUser);

        return "User registered successfully!";

    }



    @PostMapping("/login")

    public String login(@RequestBody LoginRequest loginRequest) {

        User user = userRepository.findByUsername(loginRequest.getUsername());



        if (user == null) {

            return "User not found";

        }



        if (user.getPassword().equals(loginRequest.getPassword())) {

            return "Login Successful";

        } else {

            return "Invalid Password";

        }

    }

}