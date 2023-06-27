import { createContext } from "react"
import axios from "axios"
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {
 const [currentUser, setCurrentUser] = useState(
  JSON.parse(localStorage.getItem("blogUser")) || null
 );


 const login = async (inputs) => {
  const res = await axios.post("http://localhost:8800/api/auth/login", inputs);
  setCurrentUser(res.data);
 }


 const logout = async (inputs) => {
  await axios.post("http://localhost:8800/api/auth/logout")
  setCurrentUser(null)
 }

 useEffect(() => {
  localStorage.setItem("blogUser", JSON.stringify(currentUser))
 }, [currentUser])

 return <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>
}