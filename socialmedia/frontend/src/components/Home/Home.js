import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";




function Home() {

const [posts, setPosts] = useState([])

const getAllPosts=()=>{
    axios
    .get("http://localhost:5000/posts?userId=1")
    .then((result) => {
    //   console.log(result);
      console.log(result.data.result[0].posts);
      setPosts(result.data.result[0].posts)
    })
    .catch((err) => {
      console.log(err);
    });
}

useEffect(() => {
  getAllPosts()

}, [])


  return (
    <>
    <h1> Posts</h1>
    {posts&&posts.map((elem,i)=>{

      return (<> 
      <h4> {elem}</h4>
      
      </> )
    })}
    </>
  )
}

export default Home