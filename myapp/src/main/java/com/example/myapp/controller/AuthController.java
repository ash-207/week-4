package com.example.myapp.controller;

import java.lang.runtime.ObjectMethods;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.dto.LoginRequest;
import com.example.myapp.dto.SignupRequest;
import com.example.myapp.model.User;
import com.example.myapp.repo.UserRepository;
import com.example.myapp.security.JwtService;
@CrossOrigin(origins = "*")
@RestController
public class AuthController {

    private final UserRepository db;

    // Constructor injection
    public AuthController(UserRepository db) {
        this.db = db;
    }

    @Autowired
    JwtService jwt;

    @PostMapping("/signup")
    public String signUp(@RequestBody SignupRequest sd) {
        System.out.println("\n\t signup DATA : " + sd.toString());
        return "signup success -> {\n\t name: " + sd.getName() +
               "\n\t email: " + sd.getEmail() + "\n}";
    }
   @PostMapping("/login")
public ResponseEntity<Map<String, String>> login(
        @RequestBody LoginRequest data) {

    Map<String, String> res = new HashMap<>();

    // ✅ Check user exists
    Optional<User> optionalUser = db.findByEmail(data.getEmail());

    if (optionalUser.isEmpty()) {
        res.put("message", "User not found");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(res);
    }

    User user = optionalUser.get();

    // ❌ Plain-text (for learning only)
    if (!user.getPassword().equals(data.getPassword())) {
        res.put("message", "Invalid password");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(res);
    }

    // ✅ Generate JWT
    String token = jwt.generateToken(user.getEmail());

    res.put("token", token);
    res.put("message", "Login success");

    return ResponseEntity.ok(res);
}

}
