import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [l, setL] = useState({
    email: "",
    password: "",
  });

  const api = "http://localhost:4040/api/login";
  const navigate = useNavigate();

  async function submitHandler() {
    if (!l.email || !l.password) {
      alert("Email and password required ❌");
      return;
    }

    console.log("Login request:", l);

    try {
      const res = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(l),
      });

      const data = await res.json();
      console.log("API response:", data);

      if (!res.ok) {
        alert(data.message || "Invalid credentials ❌");
        return;
      }

      // ✅ STORE JWT TOKEN CORRECTLY
      localStorage.setItem("token", data.token);

      alert("Login success ✅");
      navigate("/admin");

    } catch (err) {
      console.error("Login error:", err);
      alert("Server not reachable ❌");
    }
  }

  return (
    <div>
      <h3>Login</h3>

      <input
        type="email"
        placeholder="email"
        value={l.email}
        onChange={(e) => setL({ ...l, email: e.target.value })}
      />
      <br />

      <input
        type="password"
        placeholder="password"
        value={l.password}
        onChange={(e) => setL({ ...l, password: e.target.value })}
      />
      <br /><br />

      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default Login;
