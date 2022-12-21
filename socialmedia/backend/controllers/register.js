const pool = require("../models/db");
const bcrypt = require("bcrypt");

const register= async (req,res)=>{
    const {email, password, fullName, dateOfBirth, gender,phoneNumber} = req.body

    const hashedPassword = await bcrypt.hash(password,10)
    const values = [
    email.toLowerCase(),
    hashedPassword,
    fullName,
    dateOfBirth,
    gender,
    phoneNumber
    ]

    const query = "INSERT INTO users (email,password,fullName,dateOfBirth,gender,phoneNumber) VALUES($1,$2,$3,$4,$5,$6)"

pool.query(query,values)
.then((result)=>{
    res.status(200).json({
        success : true,
        message : "Account Created Successfully"
    })
})
.catch((err)=>{
    res.status(409).json({
        success: false,
        massage: "The email already exists",
        err,
    })
})
}



module.exports = {register}
