package com.example.myapp.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Service
public class JwtService {

    private static final String SECRET =
            "0x/fMYXheFVGzffOZeQp+nD1qOK/XHkeO1fFIrm+NKI";

    private final SecretKey secretKey =
            Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8));

    // 🔐 TOKEN VALID FOR 30 SECONDS
    public String generateToken(String username) {
       
    }

    public boolean validateToken(String token) {
        
    }

    public String extractUsername(String token) {
        
    }
}
