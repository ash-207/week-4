import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "test@gmail.com",
    password: "password",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  async function submitHandler() {
    try {
      const res = await fetch("http://localhost:4040/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const dataText = await res.text();
      console.log("res =", dataText);

      if (dataText === "Login successful") {
        navigate("/admin");
      } else {
        alert(dataText);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  return (
    <div>
      <h3>Login</h3>

      <input
        type="text"
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />

      <input
        type="password"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={submitHandler}>Login</button>
    </div>
  );
}

export default Login;
