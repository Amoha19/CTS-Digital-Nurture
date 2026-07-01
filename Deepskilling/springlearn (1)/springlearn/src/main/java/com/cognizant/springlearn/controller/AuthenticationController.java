package com.cognizant.springlearn.controller;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {

        LOGGER.info("Start authenticate()");
        LOGGER.debug("Authorization Header: {}", authHeader);

        String user = getUser(authHeader);
        String token = generateJwt(user);

        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        LOGGER.info("End authenticate()");
        return response;
    }

    // Extract username from Basic Auth header
    private String getUser(String authHeader) {

        LOGGER.info("Start getUser()");

        // Remove "Basic " prefix
        String base64Credentials = authHeader.substring("Basic ".length());

        // Decode Base64
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(decodedBytes);

        LOGGER.debug("Decoded credentials: {}", credentials);

        // Extract username before ":"
        String user = credentials.substring(0, credentials.indexOf(":"));

        LOGGER.info("End getUser()");
        return user;
    }

    // Generate JWT token
    private String generateJwt(String user) {

        LOGGER.info("Start generateJwt()");

        JwtBuilder builder = Jwts.builder();

        builder.setSubject(user); // username
        builder.setIssuedAt(new Date()); // current time
        builder.setExpiration(new Date(System.currentTimeMillis() + 1200000)); // 20 mins

        builder.signWith(SignatureAlgorithm.HS256, "secretkey");

        String token = builder.compact();

        LOGGER.debug("Generated JWT: {}", token);
        LOGGER.info("End generateJwt()");

        return token;
    }
}