import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useRef } from "react";

function Register() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [fullName, setFullName] = useState("");
const [gender, setGender] = useState("");
const [dateOfBirth, setDateOfBirth] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");


const dateRef=useRef()

  const body = { fullName, dateOfBirth, email, password, gender, phoneNumber };
 
  const handleRegister=()=>{
axios.post("http://localhost:5000/register",body)
.then((response) => {
    console.log(response);

  })
  .catch((err) => {
    console.log(err);
  });


  }

  return (


<>
<input
          placeholder="Full Name"
          className="RegInput1"
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />

        <input
          placeholder="date Of Birth"
          type="text"
          ref={dateRef}
          className="RegInput"
          onChange={(e) => {
            setDateOfBirth(e.target.value);
          }}
          onClick={()=>{
            dateRef.current.type="date"
          }}
        />

<select
 className="RegSelect1"
                name="gender"
                id="gender"
                onClick={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option selected disabled hidden>
                  Select Your Gender{" "}
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

        <input
          placeholder="phone Number"
          className="RegInput1"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />

        <input
          placeholder="Email"
          className="RegInput1"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type={"password"}
          placeholder="Password"
          className="RegInput1"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />



<button
          className="registerButton1"
          onClick={() => {
            handleRegister();
          }}
        >
          {" "}
          Register Now !
        </button></>

  )

}

export default Register