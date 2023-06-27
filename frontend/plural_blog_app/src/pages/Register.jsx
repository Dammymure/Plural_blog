import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  });

  const [err, setError] = useState(null)

const navigate = useNavigate()

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/api/auth/register", inputs )
      navigate("/login")
      
    }catch(err){
      setError(err.res.data.msg);
      console.log(err);
    }
  }

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
        name="username"
          required
          text="text"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          name="email"
          required
          text="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
        name="password"
          required
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account?
          <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
