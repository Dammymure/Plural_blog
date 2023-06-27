import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();



  // console.log(currentUser);
  const { login } = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await login(inputs);
    console.log(response);
    if (response.msg === "Invalid credentials") {
      console.log("Invalid credentials");
    } else {
      navigate("/");
    }
  } catch (err) {
    setError(err.response.data);
  }
      // try {
      //   await login(inputs);
      //   console.log(currentUser);
      //   if (currentUser.msg === "You have successfully logged IN") {
      //     navigate("/");
      //   } else {
      //     alert("invalid login details");
      //   }
        
      //   // login(inputs)
      //   // console.log(login(inputs));
      // } catch (err) {
      //   setError(err.res.data.msg);
      // }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          text="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        {err && <p>{err}</p>}
        <span>
          Don't have an account?
          <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
