package com.example.bankapplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

// The 'exclude' property turns off the default security lockdown so Postman can access your APIs
@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class BankapplicationApplication {

    public static void main(String[] args) {
        SpringApplication.run(BankapplicationApplication.class, args);
    }
}