import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import "./Login.css";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const body = { email, password };

    const handleLogin=()=>{
        axios
        .post("http://localhost:5000/login/", body)
        .then((response) => {
         console.log(response)
        })
  
        .catch((err) => {
          console.log(err);
          setError(err.response.data.message);
        })
       
    
    }

  return (

    <>
     {/* <p> Email</p> */}
     <input
              className="emailInput1"
              placeholder=" Email "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {/* <p> Password</p> */}
            <input
              type={"password"}
              className="emailInput1"
              placeholder=" Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button onClick={()=>{handleLogin()}}> Sign in</button>
    
    </>
  )
}

export default Login